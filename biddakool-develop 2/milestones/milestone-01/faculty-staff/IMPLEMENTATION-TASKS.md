# Faculty, Teacher & Staff Directory — Developer Task Backlog

**Module:** `faculty-staff`  |  **Requirement namespace:** `M1-FACULTY_STAFF`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/FacultyStaff` and `apps/web/src/features/faculty-staff`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M1-FACULTY_STAFF-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M1-FACULTY_STAFF-T-002 | Domain and EF Core | Implement StaffMember, StaffEmployment, Designation, DepartmentAssignment plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M1-FACULTY_STAFF-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M1-FACULTY_STAFF-T-004 | Register teacher, faculty, employee and non-teaching staff profiles | Backend API + frontend journey for: Register teacher, faculty, employee and non-teaching staff profiles | Reviewed behavior, access checks and automated tests for register teacher, faculty, employee and non-teaching staff profiles |
| M1-FACULTY_STAFF-T-005 | Employment designation, department, active status and employment dates | Backend API + frontend journey for: Employment designation, department, active status and employment dates | Reviewed behavior, access checks and automated tests for employment designation, department, active status and employment dates |
| M1-FACULTY_STAFF-T-006 | Teacher subject and course-offering assignments | Backend API + frontend journey for: Teacher subject and course-offering assignments | Reviewed behavior, access checks and automated tests for teacher subject and course-offering assignments |
| M1-FACULTY_STAFF-T-007 | Class teacher, adviser or academic supervisor assignments | Backend API + frontend journey for: Class teacher, adviser or academic supervisor assignments | Reviewed behavior, access checks and automated tests for class teacher, adviser or academic supervisor assignments |
| M1-FACULTY_STAFF-T-008 | Profile view, search, filtering and downloadable staff profile | Backend API + frontend journey for: Profile view, search, filtering and downloadable staff profile | Reviewed behavior, access checks and automated tests for profile view, search, filtering and downloadable staff profile |
| M1-FACULTY_STAFF-T-009 | Separate teaching duties from payroll and compensation data | Backend API + frontend journey for: Separate teaching duties from payroll and compensation data | Reviewed behavior, access checks and automated tests for separate teaching duties from payroll and compensation data |
| M1-FACULTY_STAFF-T-010 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M1-FACULTY_STAFF-T-011 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
