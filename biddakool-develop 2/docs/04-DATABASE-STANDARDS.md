# PostgreSQL + EF Core Database Standards

## Naming and ownership

- snake_case table/column/index names; dedicated module schema (example `attendance.student_attendance_records`).
- UUID IDs for domain entities, tenant_id and UTC audit timestamps. Prefer database clock for audit integrity.
- Each module controls its own DbContext and migrations; no cross-module DbContext imports or table mutation.
- Foreign references to external module are opaque IDs + application-layer validation; avoid cross-module FK cascade chains.

## Important types

- Money: `numeric(18,2)` or currency-specific scale after ADR, CurrencyCode separate, explicit rounding rules.
- Grades/marks: use numeric precision adequate for weighted calculations; snapshot policy, inputs and final result.
- Time instants: `timestamptz` UTC; academic local dates and times stored explicitly where appropriate.
- Stable identifiers: UUID. External admission/EIIN/registration IDs separate with explicit uniqueness scoping.

## Schema evolution

1. Schema/ERD review in module PR.
2. Additive migration first, dual-read/write where needed, backfill asynchronously, then cleanup in a later release.
3. No destructive production migration without backup, rollback/forward-fix and data retention approval.
4. Validate indexes on tenantId + date/term/status typical query filters.
5. Run migration on a production-like copy in CI/staging; monitor long-running DDL and locks.

## Shared operational tables

Outbox and inbox events (event IDs, payload version, tenantId, attempt counts), audits, idempotency keys, and feature flags are building block components. Keep platform-level infrastructure separate from domain-owned records.

The tenant column rule applies to tenant-owned data. Classify each platform-wide identity record explicitly in the [identity proposal](adr/ADR-013-IDENTITY-AND-TENANT-MEMBERSHIP.md).
