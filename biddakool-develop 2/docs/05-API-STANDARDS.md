# API Contracts & Versioning

## Conventions

Base `/api/v1`; resource-based routes; DTOs isolated from EF entities; OpenAPI is the reviewed system contract. Pagination, filtering and sorting must be consistent across modules.

- HTTP GET never mutates state; POST creates/actions; PUT replaces explicit resource shape; PATCH for controlled partial updates.
- Use `application/problem+json` per RFC 9457 for validation and errors with stable `type/code` fields.
- Correlation IDs in logs and response metadata; avoid writing PII in logs.
- Financial and batch endpoints support idempotency keys; race conditions return 409 or domain conflict.
- Security scheme: Bearer access token or secure session in Next.js BFF; do not put access tokens into URL/query.
- Tenant context validated from membership, not solely from path/headers.

## Contract governance

Any change to route, request, response, enum meaning or error code requires updated OpenAPI, generated TS client, contract tests, changelog and consumer review. Breaking changes use new version or compatibility window.

## Sample domain mutation

```http
POST /api/v1/attendance/sessions/{sessionId}/finalize
Authorization: Bearer <token>
Idempotency-Key: <uuid>
Content-Type: application/json

{ "expectedVersion": 3 }
```

Response must include authorized status with correlationId. Server verifies assigned teacher, tenant, session state and concurrency; duplicate safe retry replays equivalent result.

For request mapping and replay semantics, see the [attendance HTTP example](guides/ATTENDANCE-VERTICAL-SLICE.md). Publish the agreed request and response schemas before generating the TypeScript client. Use the authenticated scope for actor and tenant fields.

## Mapping the attendance contract

Define the editable request separately from the domain entity. ASP.NET Core binds the session ID from the route. The client supplies its observed version and a key for a single logical action.

```csharp
public sealed record FinalizeAttendanceRequest(int ExpectedVersion);
public sealed record FinalizeAttendanceCommand(
    Guid SessionId, int ExpectedVersion, IdempotencyKey Key);
```

Construct the command explicitly in the [endpoint example](guides/ATTENDANCE-VERTICAL-SLICE.md). Resolve the actor and selected membership server-side. A submitted JSON field named tenantId, status or version must never set tenant ownership, finalized state or the next stored version. Any future Mapster profile should map only editable input and should have a test proving extra fields cannot affect the aggregate.

A read operation authorizes the student relationship before projecting rows in the owning module. Example projection for dated entries feeding a student summary:

```csharp
var scope = await access.RequireStudentSummaryAsync(studentId, ct);
var entries = await db.AttendanceRecords.AsNoTracking()
    .Where(r => r.TenantId == scope.TenantId && r.InstitutionId == scope.InstitutionId
             && r.StudentId == studentId && r.Date >= from && r.Date <= through)
    .OrderBy(r => r.Date).ThenBy(r => r.Id)
    .Select(r => new AttendanceEntryDto(r.Date, r.Status))
    .Skip(offset).Take(pageSize).ToListAsync(ct);
```

Validate the date interval and pagination limits before executing the query. Calculate summary totals over the entire authorized interval when the contract includes totals. Keep persistence entities and guardian relationship details out of the response.
