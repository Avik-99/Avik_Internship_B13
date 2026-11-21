# DevOps, Deployment & Operations

## Environments

Local (Docker Compose with PostgreSQL), CI ephemeral, shared integration, staging, production. Configuration comes from environment/secret management; no real keys committed.

GitFlow branch mapping: `develop` feeds CI and shared integration/staging; `release/*` hardens on staging against the release gates below; `vX.Y.Z` tags on `main` mark production deploys; `hotfix/*` branches fix production from `main`.

## Suggested initial deployment

One containerized ASP.NET Core API host, one Next.js application, managed PostgreSQL, object storage for documents, monitoring and background job/outbox worker. Scale horizontally after session, cache and outbox semantics are production-safe.

## Release gates

- Reproducible builds/lockfiles and image scanning.
- Apply EF Core migrations with ordering and backup/restore verified.
- Per-module health checks, structured trace IDs, logs redacting PII, metrics and alert thresholds.
- Zero-downtime compatibility for consumers of events/API.
- Verify tenant policies, RLS if enabled, and rollback plan.

## Data operations

Backup schedule, restore rehearsal, tenant export, retention/erasure policy, scheduled jobs, async report exports and upload scans. Recovery targets (RTO/RPO) require product/operations agreement; do not invent SLAs.

## Operational procedures to rehearse in staging

| Trigger and owner | Procedure | Recovery evidence |
| --- | --- | --- |
| Oldest undispatched event keeps aging — module operator | Group pending items by producer, version and last error. Check consumer availability. Fix the underlying contract or dependency and replay the original event ID in a fresh tenant scope. Retain failed items for review. | Backlog age drops and the consumer inbox and projection contain one applied result. |
| Migration blocks deployment — database owner | Pause rollout, inspect lock contention and the schema history for the affected module. Keep the compatible app version serving while evaluating forward repair. Rehearse the repair on a restored copy before applying it. | Both supported app versions can read the expanded schema and tenant fixtures pass. |
| Restore drill — operations owner | Restore backup and recovery logs into an isolated environment. Disable outbound deliveries, validate migrations and sample tenant boundaries, receipt totals and published result versions. Record achieved recovery point and elapsed time. | Reviewer signs off the reconciliation and compares achieved recovery against agreed targets. |

Carry correlation ID, module, operation, duration and outcome in structured request logs. An attendance correction also needs a protected audit entry with actor, institution, affected record, reason and version. Restrict audit access, and keep student details, tokens and request bodies out of routine logs. Decide provider, retention and alert thresholds with operations.

## Logging a request and auditing a correction

Configure the logging provider at the API host. Application and infrastructure code can depend on ILogger<T>. Serilog is a proposed host adapter. The deployment decision covers sinks, access, retention and failure handling. Emit a structured event after a successful commit, using the correlation scope established for the request:

```csharp
using var operation = logger.BeginScope(new Dictionary<string, object?>
{
    ["CorrelationId"] = correlationId,
    ["Module"] = "Attendance"
});
logger.LogInformation("Attendance finalization committed at version {Version}",
    committedVersion);
```

A replay can log that an earlier outcome was returned. Keep that distinct from a newly committed transition. Measure request failures and outbox lag using bounded operation and outcome labels. Avoid identifiers as metric labels.

For an authorized correction, stage a restricted audit record alongside the amended attendance entry. Capture effective tenant and institution, actor ID, affected record ID, previous and new revision, reason, timestamp and correlation ID. Commit both together. Log the operation and outcome separately. Keep the correction reason, names and attendance details in restricted records. In staging, force the audit write to fail and verify rollback, then inspect normal request logs for accidental disclosure.
