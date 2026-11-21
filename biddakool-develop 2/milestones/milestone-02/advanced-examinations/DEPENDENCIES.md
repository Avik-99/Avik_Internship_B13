# Advanced Grading, Analysis & Report Cards — Dependencies & Interfaces

**Module:** `advanced-examinations`  |  **Requirement namespace:** `M2-ADVANCED_EXAMINATIONS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

## Upstream prerequisites

| Depends on | Owner | Milestone |
| --- | --- | --- |
| assessment-results | Examinations, Grades & Results | M1 |
| academic-registry | Academic Registry & Curriculum | M1 |
| attendance | Student & Staff Attendance | M1 |

## Integration contract

- Use an owning module’s application interface for commands that require an immediate business outcome.
- Prefer versioned events for cross-module reactions; consumer inbox must deduplicate by eventId.
- Use read model projections or dedicated authorized query interfaces for cross-module reporting.
- Never import another module’s Infrastructure project or EF Core DbContext.
- Stub or mock upstream published interfaces during independent feature development.

## Published events

- Event `Assessments.AdvancedResultPublished.v1`: outbox publication after local commit; `eventId`, `tenantId`, `occurredAtUtc`, `schemaVersion`, correlation and source entity ID required.

## Parallel work ownership

- **Module owner** owns `src/Modules/AdvancedExaminations`, `apps/web/src/features/advanced-examinations`, module tests and API contracts.
- **Platform/core concerns** (shared authentication, tenant middleware, observability and CI conventions) are owned within the single @biddakool-devs team.
- **Integration reviewer** signs off cross-module payload or behavior changes before contract merge.
- Avoid having two developers edit the same EF migrations, shared OpenAPI schema or common UI package without coordination.
