# DDD, Clean Architecture, CQRS & Transactions

## Slice naming (example)

`Attendance/Application/Commands/FinalizeAttendance/FinalizeAttendanceCommand.cs` + Validator + Handler + Response. Queries organized similarly. Domain aggregate has `Finalize()` behavior; persistence adapter owns repository; API mapping converts Problem Details.

## Guidelines

- Domain objects protect invariants; reject impossible states in methods, not only input validators.
- Application handlers enforce authorization, invoke aggregate and transaction, write outbox and return result.
- Keep one owning aggregate transaction boundary; use sagas/process managers for cross-module multi-step work.
- Avoid a generic repository per table: repository interfaces for aggregates only, projections for queries.
- UoW is an EF DbContext transaction boundary within a module; do not simulate distributed transactions with a single DbContext across modules.
- Dependency injection only through module `AddModule()` registrar and host composition.

## Events

Local domain event can be sync; cross-module integration event has versioned named contract and gets published only after commit. Consumers must be idempotent and resilient to reordering/retry; compensate when necessary.

## Failure behavior

Use explicit Result/ProblemDetails; map validation errors, concurrency failures and permission failures consistently. Never swallow exceptions, and never return a successful mark/receipt before the transaction is committed.

Use the [attendance slice](guides/ATTENDANCE-VERTICAL-SLICE.md) for command and query placement, transaction boundaries, idempotency and concurrent writers.
