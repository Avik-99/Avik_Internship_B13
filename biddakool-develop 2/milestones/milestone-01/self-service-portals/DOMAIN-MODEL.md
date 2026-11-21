# Student, Guardian, Teacher & Admin Portals — Domain Model

**Module:** `self-service-portals`  |  **Requirement namespace:** `M1-SELF_SERVICE_PORTALS`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

## Bounded context

Next.js web experiences over public contracts of domain modules; no duplicated portal databases.

## Candidate aggregates / entities

| Concept | Suggested category | Baseline fields (not final DDL) |
| --- | --- | --- |
| DashboardPreference | Candidate aggregate root | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| UserNotificationPreference | Candidate aggregate root | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |

## Domain invariants

- Portals never bypass module API boundaries or access another module’s EF DbContext.
- A guardian’s child switching must revalidate the relation on each request.
- Dashboard counts are tenant-scoped; data freshness must be indicated if derived asynchronously.

## Command/query separation

- Domain methods express allowed transitions; application commands orchestrate authorization, validation and transactions.
- Queries project directly to DTOs and do not mutate domain state.
- Aggregate references across modules use opaque identifiers and published contracts.
- Avoid generic repository abstractions that obscure domain invariants; use aggregate-specific repositories when useful.

## Versioned integration messages

- No outbound business event is currently mandatory.

## Model review checklist

- Identify exact aggregate boundaries and consistency requirements in an ADR before merging initial migrations.
- Confirm the entity-to-tenant relationship and any institution/campus/program scoping.
- Clarify lifecycle, soft-delete rules and historical retention; no destructive edits to published/financial records.
