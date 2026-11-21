# Lesson Plans, Diaries & Student Progress — Database Contract

**Module:** `lesson-plans`  |  **Requirement namespace:** `M2-LESSON_PLANS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

## Ownership

**PostgreSQL schema:** `lesson_plans` (proposed). EF Core DbContext and migrations owned by this module. Do not create cross-module EF navigation properties or foreign keys without an approved ADR.

## Proposed relational entities

| Entity | Minimum columns | Index review |
| --- | --- | --- |
| LessonPlan | id UUID PK; tenant_id UUID FK; created_at_utc TIMESTAMPTZ; updated_at_utc TIMESTAMPTZ; row_version/concurrency; business fields in approved migration | tenant_id + natural uniqueness scoped to business rule |
| LessonPlanItem | id UUID PK; tenant_id UUID FK; created_at_utc TIMESTAMPTZ; updated_at_utc TIMESTAMPTZ; row_version/concurrency; business fields in approved migration | tenant_id + natural uniqueness scoped to business rule |
| ClassDiary | id UUID PK; tenant_id UUID FK; created_at_utc TIMESTAMPTZ; updated_at_utc TIMESTAMPTZ; row_version/concurrency; business fields in approved migration | tenant_id + natural uniqueness scoped to business rule |
| DailyEvaluation | id UUID PK; tenant_id UUID FK; created_at_utc TIMESTAMPTZ; updated_at_utc TIMESTAMPTZ; row_version/concurrency; business fields in approved migration | tenant_id + natural uniqueness scoped to business rule |
| ProgressSummary | id UUID PK; tenant_id UUID FK; created_at_utc TIMESTAMPTZ; updated_at_utc TIMESTAMPTZ; row_version/concurrency; business fields in approved migration | tenant_id + natural uniqueness scoped to business rule |

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
