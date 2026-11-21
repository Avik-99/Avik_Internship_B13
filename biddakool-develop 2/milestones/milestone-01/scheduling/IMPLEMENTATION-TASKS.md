# Class, Teacher & Examination Timetables — Developer Task Backlog

**Module:** `scheduling`  |  **Requirement namespace:** `M1-SCHEDULING`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/Scheduling` and `apps/web/src/features/scheduling`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M1-SCHEDULING-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M1-SCHEDULING-T-002 | Domain and EF Core | Implement TimeSlot, TeachingSchedule, ScheduleMeeting, Room plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M1-SCHEDULING-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M1-SCHEDULING-T-004 | Weekly schedules with period times, weekdays and academic terms | Backend API + frontend journey for: Weekly schedules with period times, weekdays and academic terms | Reviewed behavior, access checks and automated tests for weekly schedules with period times, weekdays and academic terms |
| M1-SCHEDULING-T-005 | Class/section schedule views and cross-class overview | Backend API + frontend journey for: Class/section schedule views and cross-class overview | Reviewed behavior, access checks and automated tests for class/section schedule views and cross-class overview |
| M1-SCHEDULING-T-006 | Faculty/teacher personal and weekly combined timetables | Backend API + frontend journey for: Faculty/teacher personal and weekly combined timetables | Reviewed behavior, access checks and automated tests for faculty/teacher personal and weekly combined timetables |
| M1-SCHEDULING-T-007 | Classroom or room assignment | Backend API + frontend journey for: Classroom or room assignment | Reviewed behavior, access checks and automated tests for classroom or room assignment |
| M1-SCHEDULING-T-008 | Time-slot conflict detection for teacher, room and student group | Backend API + frontend journey for: Time-slot conflict detection for teacher, room and student group | Reviewed behavior, access checks and automated tests for time-slot conflict detection for teacher, room and student group |
| M1-SCHEDULING-T-009 | Basic examination timetable with start/end time | Backend API + frontend journey for: Basic examination timetable with start/end time | Reviewed behavior, access checks and automated tests for basic examination timetable with start/end time |
| M1-SCHEDULING-T-010 | Publish routines to student, guardian and teacher panels | Backend API + frontend journey for: Publish routines to student, guardian and teacher panels | Reviewed behavior, access checks and automated tests for publish routines to student, guardian and teacher panels |
| M1-SCHEDULING-T-011 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M1-SCHEDULING-T-012 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
