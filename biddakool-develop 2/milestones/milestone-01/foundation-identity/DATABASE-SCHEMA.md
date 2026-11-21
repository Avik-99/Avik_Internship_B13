# Identity & Access Control — Database Contract

**Module:** `foundation-identity`  |  **Requirement namespace:** `M1-FOUNDATION_IDENTITY`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

## Ownership

**PostgreSQL schema:** `foundation_identity` (proposed). EF Core DbContext and migrations owned by this module. Do not create cross-module EF navigation properties or foreign keys without an approved ADR.

## Proposed relational entities

| Entity | Minimum columns | Index review |
| --- | --- | --- |
| User | Global id UUID PK, provider/subject or reviewed local credential identifier, UTC audit fields and concurrency marker | Unique stable credential identity according to provider choice |
| TenantMembership | id, user_id, tenant_id, institution_id, status, version, UTC audit fields | Unique membership per user, tenant and institution |
| MembershipRole | tenant_id, membership_id, role_id | Composite tenant-aware references to membership and role, unique assignment |
| Role | id UUID PK; tenant_id UUID FK; created_at_utc TIMESTAMPTZ; updated_at_utc TIMESTAMPTZ; row_version/concurrency; business fields in approved migration | tenant_id + natural uniqueness scoped to business rule |
| Permission | id UUID PK; tenant_id UUID FK; created_at_utc TIMESTAMPTZ; updated_at_utc TIMESTAMPTZ; row_version/concurrency; business fields in approved migration | tenant_id + natural uniqueness scoped to business rule |
| RolePermission | id UUID PK; tenant_id UUID FK; created_at_utc TIMESTAMPTZ; updated_at_utc TIMESTAMPTZ; row_version/concurrency; business fields in approved migration | tenant_id + natural uniqueness scoped to business rule |
| AuthSession | id UUID PK; tenant_id UUID FK; created_at_utc TIMESTAMPTZ; updated_at_utc TIMESTAMPTZ; row_version/concurrency; business fields in approved migration | tenant_id + natural uniqueness scoped to business rule |
| SecurityAudit | id UUID PK; tenant_id UUID FK; created_at_utc TIMESTAMPTZ; updated_at_utc TIMESTAMPTZ; row_version/concurrency; business fields in approved migration | tenant_id + natural uniqueness scoped to business rule |

## Required database behavior

- Database constraints enforce tenant-scope uniqueness and referential validity of locally owned records.
- Add tenant-scoped composite indexes to common list and lookup patterns; assess execution plans.
- Use PostgreSQL `timestamptz` for instants; store academic local dates separately.
- Use `numeric` with explicit precision for money/marks and agreed rounding policy.
- Migrations are owned by the module's accountable owner within @biddakool-devs, are forward-compatible, and have a rollback/compensation plan.
- Outbox messages and idempotency records are written atomically with source changes.
- Use consistent `snake_case` database naming, UTC audit columns and stable opaque UUID identifiers.

## Data contract review before first migration

1. Confirm fields, nullable constraints, enum lookup strategy and lifecycle for each entity.
2. Approve unique keys (including academic term, offering and student context as needed).
3. Approve indexes, retention, privacy classification and PII encryption strategy.
4. Publish and review ERD before creating the first EF Core migration.

**These are candidate tables, not finalized SQL migrations.** The brochure does not define relational database schemas.

Review these proposed ownership rules with [ADR-013](../../../docs/adr/ADR-013-IDENTITY-AND-TENANT-MEMBERSHIP.md). Tenant-bound sessions in this table describe the selected operational context. Define pre-selection sign-in and recovery separately when choosing the credential provider.

### Identity migration acceptance

Under [ADR-008](../../../docs/adr/ADR-008-DATABASE-TENANCY.md) and [ADR-013](../../../docs/adr/ADR-013-IDENTITY-AND-TENANT-MEMBERSHIP.md), User has a global primary key. TenantMembership references that user and has uniqueness on (user_id, tenant_id, institution_id). Make (tenant_id, id) unique on TenantMembership and Role so MembershipRole can reference both parents through (tenant_id, membership_id) and (tenant_id, role_id). Enforce one assignment per (tenant_id, membership_id, role_id). Verify a cross-tenant assignment fails at the database even when both IDs exist. For tenant and institution identifiers owned by another module, FK labels in the candidate inventory express logical references; physical cross-module constraints require their own approval.
