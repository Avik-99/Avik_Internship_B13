# Lesson Plans, Diaries & Student Progress — Developer Task Backlog

**Module:** `lesson-plans`  |  **Requirement namespace:** `M2-LESSON_PLANS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/LessonPlans` and `apps/web/src/features/lesson-plans`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M2-LESSON_PLANS-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M2-LESSON_PLANS-T-002 | Domain and EF Core | Implement LessonPlan, LessonPlanItem, ClassDiary, DailyEvaluation plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M2-LESSON_PLANS-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M2-LESSON_PLANS-T-004 | Teacher-created subject/course lesson plans by academic term | Backend API + frontend journey for: Teacher-created subject/course lesson plans by academic term | Reviewed behavior, access checks and automated tests for teacher-created subject/course lesson plans by academic term |
| M2-LESSON_PLANS-T-005 | Per-day class diary and homework tasks | Backend API + frontend journey for: Per-day class diary and homework tasks | Reviewed behavior, access checks and automated tests for per-day class diary and homework tasks |
| M2-LESSON_PLANS-T-006 | Individual student daily lesson evaluation and comments | Backend API + frontend journey for: Individual student daily lesson evaluation and comments | Reviewed behavior, access checks and automated tests for individual student daily lesson evaluation and comments |
| M2-LESSON_PLANS-T-007 | Monthly subject-wise progress summaries | Backend API + frontend journey for: Monthly subject-wise progress summaries | Reviewed behavior, access checks and automated tests for monthly subject-wise progress summaries |
| M2-LESSON_PLANS-T-008 | Student/guardian access to published diaries and evaluations | Backend API + frontend journey for: Student/guardian access to published diaries and evaluations | Reviewed behavior, access checks and automated tests for student/guardian access to published diaries and evaluations |
| M2-LESSON_PLANS-T-009 | Teacher workload views and learning progress export | Backend API + frontend journey for: Teacher workload views and learning progress export | Reviewed behavior, access checks and automated tests for teacher workload views and learning progress export |
| M2-LESSON_PLANS-T-010 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M2-LESSON_PLANS-T-011 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

## Parallelization plan

1. **Contract owner:** Validate requirements, domain, endpoints and migration proposal; secure review sign-off.
2. **Backend developer(s):** Build aggregates, EF Core mappings, CQRS requests, permissions and events behind approved contract.
3. **Frontend developer(s):** Build Next.js screens against generated OpenAPI mock/typed client.
4. **QA developer:** Build acceptance, contract, tenant-isolation and negative-path tests independently.
5. **Integration developer:** Wire consumers after contract is stable and run docker-compose/E2E scenarios.

## Pull request merge policy

- PRs should be small and scoped to this module; one migration owner per module.
- A contract breaking change requires ADR + affected consumers approval before merge.
- No PR is done without an appropriate test, updated docs and reviewer.
