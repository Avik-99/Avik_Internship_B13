# Students, Guardians & Enrollment — Developer Task Backlog

**Module:** `student-lifecycle`  |  **Requirement namespace:** `M1-STUDENT_LIFECYCLE`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/StudentLifecycle` and `apps/web/src/features/student-lifecycle`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M1-STUDENT_LIFECYCLE-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M1-STUDENT_LIFECYCLE-T-002 | Domain and EF Core | Implement Student, GuardianLink, StudentAdmission, ProgramEnrollment plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M1-STUDENT_LIFECYCLE-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M1-STUDENT_LIFECYCLE-T-004 | Admin-driven student enrollment with admission number and contact details | Backend API + frontend journey for: Admin-driven student enrollment with admission number and contact details | Reviewed behavior, access checks and automated tests for admin-driven student enrollment with admission number and contact details |
| M1-STUDENT_LIFECYCLE-T-005 | Student profile including photo, emergency contact, academic history and documents | Backend API + frontend journey for: Student profile including photo, emergency contact, academic history and documents | Reviewed behavior, access checks and automated tests for student profile including photo, emergency contact, academic history and documents |
| M1-STUDENT_LIFECYCLE-T-006 | One or more guardians linked to a student with verified relationship and portal access | Backend API + frontend journey for: One or more guardians linked to a student with verified relationship and portal access | Reviewed behavior, access checks and automated tests for one or more guardians linked to a student with verified relationship and portal access |
| M1-STUDENT_LIFECYCLE-T-007 | Program/cohort/class/section placement and academic session enrollment | Backend API + frontend journey for: Program/cohort/class/section placement and academic session enrollment | Reviewed behavior, access checks and automated tests for program/cohort/class/section placement and academic session enrollment |
| M1-STUDENT_LIFECYCLE-T-008 | University/medical course-offering registration and enrollment history | Backend API + frontend journey for: University/medical course-offering registration and enrollment history | Reviewed behavior, access checks and automated tests for university/medical course-offering registration and enrollment history |
| M1-STUDENT_LIFECYCLE-T-009 | Promotion, transfer, graduation, withdrawal and re-admission status transitions | Backend API + frontend journey for: Promotion, transfer, graduation, withdrawal and re-admission status transitions | Reviewed behavior, access checks and automated tests for promotion, transfer, graduation, withdrawal and re-admission status transitions |
| M1-STUDENT_LIFECYCLE-T-010 | Class roll number uniqueness within active placement scope | Backend API + frontend journey for: Class roll number uniqueness within active placement scope | Reviewed behavior, access checks and automated tests for class roll number uniqueness within active placement scope |
| M1-STUDENT_LIFECYCLE-T-011 | Tenant-specific student ID card and downloadable profile information | Backend API + frontend journey for: Tenant-specific student ID card and downloadable profile information | Reviewed behavior, access checks and automated tests for tenant-specific student id card and downloadable profile information |
| M1-STUDENT_LIFECYCLE-T-012 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M1-STUDENT_LIFECYCLE-T-013 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
