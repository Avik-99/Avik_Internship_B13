# Student & Staff Attendance — Developer Task Backlog

**Module:** `attendance`  |  **Requirement namespace:** `M1-ATTENDANCE`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/Attendance` and `apps/web/src/features/attendance`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M1-ATTENDANCE-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M1-ATTENDANCE-T-002 | Domain and EF Core | Implement AttendanceSession, StudentAttendanceRecord, StaffAttendanceRecord, AttendanceAdjustment plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M1-ATTENDANCE-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M1-ATTENDANCE-T-004 | Record present/absent/late/excused status for an offering/class session | Backend API + frontend journey for: Record present/absent/late/excused status for an offering/class session | Reviewed behavior, access checks and automated tests for record present/absent/late/excused status for an offering/class session |
| M1-ATTENDANCE-T-005 | Bulk class roll-call with draft/save/finalize states | Backend API + frontend journey for: Bulk class roll-call with draft/save/finalize states | Reviewed behavior, access checks and automated tests for bulk class roll-call with draft/save/finalize states |
| M1-ATTENDANCE-T-006 | Staff attendance entry independent of student session attendance | Backend API + frontend journey for: Staff attendance entry independent of student session attendance | Reviewed behavior, access checks and automated tests for staff attendance entry independent of student session attendance |
| M1-ATTENDANCE-T-007 | Attendance corrections requiring permission and reason | Backend API + frontend journey for: Attendance corrections requiring permission and reason | Reviewed behavior, access checks and automated tests for attendance corrections requiring permission and reason |
| M1-ATTENDANCE-T-008 | Daily, monthly, student, teacher, campus and course reports | Backend API + frontend journey for: Daily, monthly, student, teacher, campus and course reports | Reviewed behavior, access checks and automated tests for daily, monthly, student, teacher, campus and course reports |
| M1-ATTENDANCE-T-009 | Guardians view linked students’ attendance and summary | Backend API + frontend journey for: Guardians view linked students’ attendance and summary | Reviewed behavior, access checks and automated tests for guardians view linked students’ attendance and summary |
| M1-ATTENDANCE-T-010 | Attendance percentages computed using configurable session eligibility | Backend API + frontend journey for: Attendance percentages computed using configurable session eligibility | Reviewed behavior, access checks and automated tests for attendance percentages computed using configurable session eligibility |
| M1-ATTENDANCE-T-011 | Expose attendance reporting data for future payroll and medical eligibility | Backend API + frontend journey for: Expose attendance reporting data for future payroll and medical eligibility | Reviewed behavior, access checks and automated tests for expose attendance reporting data for future payroll and medical eligibility |
| M1-ATTENDANCE-T-012 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M1-ATTENDANCE-T-013 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
