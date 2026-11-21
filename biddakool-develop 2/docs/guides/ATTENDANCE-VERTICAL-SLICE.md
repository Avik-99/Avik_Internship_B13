# Attendance finalization from browser to commit

Worked design for M1-ATTENDANCE-API-003 and journey J03. Field names and error codes below are proposed contract details for module-owner review. See the [module contract](../../milestones/milestone-01/attendance/API-CONTRACT.md).

## Contract and UI

An assigned teacher finalizes a saved session at version 3. The typed client sends POST /api/v1/attendance/sessions/{sessionId}/finalize with body {"expectedVersion":3} and an Idempotency-Key generated once for that user action. The UI disables duplicate submission while pending and keeps the same key and payload after an ambiguous network failure. A success envelope contains data.id, data.status and data.version. The view refreshes after commit. A new conflicting edit prompts a reload. The mock dashboard can simulate the responses during development.

The endpoint maps the route ID and expected version explicitly into FinalizeAttendanceCommand. Actor, effective tenant, institution and assignment come from authenticated server context. Exclude these and generated IDs from writable mapping profiles. Use an explicit projection for GET /api/v1/attendance/students/{studentId}/summary and verify the requesting guardian's relationship before reading student data. Mediator and mapper libraries are optional implementation decisions.

## Handler and transaction

1. Resolve active membership, permission and assignment to this session in the selected institution. Apply this check to every attempt, including retries. A foreign session returns the same missing-resource response as an unknown ID.
2. Start the module transaction. Claim a unique idempotency record scoped by tenant, institution, actor, operation and key. Fingerprint the target and normalized body. On a duplicate, read the committed winner's record. Replay a matching authorized result before checking expectedVersion. Reject a changed target or body with a conflict.
3. Load the tenant-scoped aggregate. Validate the expected version, session state and roster rules. Invoke Finalize() and persist using a concurrency predicate. A stale write from another action produces a conflict. Roll back the claim on a failed write.
4. In the same transaction persist the new version, audit record, Attendance.SessionFinalized.v1 outbox entry and successful replay data. Return success only after commit. Concurrent duplicate claims wait for or retry against the winner; never translate a transient race into a second transition.
5. After commit dispatch the outbox entry. The consumer atomically writes its own projection and inbox receipt keyed by consumer and event ID. A crash between delivery and acknowledgement can redeliver the same event.

## Acceptance examples

| Given and action | HTTP outcome | Database or UI evidence |
| --- | --- | --- |
| Assigned teacher, open session v3, valid roster | 200 finalized v4 | One transition, one audit, one outbox entry |
| Commit succeeds, response is lost, same request retries | Equivalent 200 v4 | Counts stay at one |
| Same scoped key with changed payload | 409 key conflict | Original replay data intact |
| Two new keys race from v3 | One success and one 409 | Only one finalized version |
| Membership revoked before retry | Access denied | No replay payload disclosed |
| Teacher from a different tenant submits known ID | 404 | No mutation or event |
| Outbox insert fails before commit | Failed request | Session remains open and retry can succeed |
| Worker delivers the same event twice | Consumer acknowledges duplicate | One projection update |

Exercise the aggregate transition in a unit test, the HTTP outcomes and commit invariants with PostgreSQL Testcontainers, and the visible success/conflict states in Playwright. Test a guardian with two children under different access scopes using the summary endpoint. Preserve correlation across the request and event while omitting roster content from operational logs.

## Worked C# request path

These excerpts use a direct handler and an illustrative endpoint style. Cortex Mediator remains a proposed dispatch option. If selected, register the application handler through the module registrar and keep its transaction and authorization behavior identical.

```csharp
app.MapPost("/api/v1/attendance/sessions/{sessionId:guid}/finalize",
    async (Guid sessionId, FinalizeAttendanceRequest input, HttpContext http,
           FinalizeAttendanceHandler handler, CancellationToken ct) =>
    {
        var command = new FinalizeAttendanceCommand(sessionId, input.ExpectedVersion,
            IdempotencyKey.ParseSingle(http.Request.Headers["Idempotency-Key"]));
        var outcome = await handler.HandleAsync(command, ct);
        return Results.Ok(new { data = outcome, meta = new { correlationId = http.TraceIdentifier } });
    }).RequireAuthorization();
```

ParseSingle validates a single bounded key. Validate the expected version before dispatch. The host's Problem Details mapper translates typed validation, access and conflict errors to the outcomes in the acceptance table. The handler receives these ports by constructor injection:

```csharp
public async Task<FinalizedSession> HandleAsync(
    FinalizeAttendanceCommand cmd, CancellationToken ct)
{
    var scope = await access.RequireFinalizeAsync(cmd.SessionId, ct);
    await using var tx = await unitOfWork.BeginAsync(ct);
    var claim = await replay.ClaimAsync(scope, "attendance.finalize", cmd.Key,
        Fingerprint.Of(cmd.SessionId, cmd.ExpectedVersion), ct);
    if (claim.CompletedResult is { } prior)
    {
        await tx.CommitAsync(ct);
        return prior;
    }

    var session = await sessions.LoadForUpdateAsync(scope, cmd.SessionId, ct);
    session.FinalizeRoster(cmd.ExpectedVersion);
    var result = new FinalizedSession(session.Id, session.Status, session.Version);
    audit.StageFinalization(scope, session);
    outbox.StageSessionFinalized(scope, session);
    claim.Complete(result);
    await unitOfWork.SaveChangesAsync(ct);
    await tx.CommitAsync(ct);
    return result;
}
```

FinalizeRoster checks the original version, valid open state and roster invariants before advancing the version. Configure that version as an EF concurrency token. LoadForUpdateAsync restricts the write to the authorized institution and tenant. If a competing write wins, dispose the transaction and translate the concurrency exception into a conflict. ClaimAsync must enforce a database uniqueness constraint and compare the stored fingerprint before exposing CompletedResult. An implementation can claim via INSERT ... ON CONFLICT DO NOTHING and then read the winner in a subsequent statement under PostgreSQL Read Committed. Persist the claim on the same transaction and connection as the aggregate.

For a concrete retry test, complete version 3 using key K, discard the response, and submit the same request. Assert that the second response contains the original session ID and version 4. Query PostgreSQL for exactly one transition audit and outbox event. Repeat after revoking access and assert the API withholds the stored result.
