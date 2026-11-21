# Faculty & Staff Recruitment — Developer Task Backlog

**Module:** `staff-recruitment`  |  **Requirement namespace:** `M2-STAFF_RECRUITMENT`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/StaffRecruitment` and `apps/web/src/features/staff-recruitment`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M2-STAFF_RECRUITMENT-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M2-STAFF_RECRUITMENT-T-002 | Domain and EF Core | Implement JobOpening, JobApplicant, JobApplication, HiringStage plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M2-STAFF_RECRUITMENT-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M2-STAFF_RECRUITMENT-T-004 | Create teaching and non-teaching vacancies and public application windows | Backend API + frontend journey for: Create teaching and non-teaching vacancies and public application windows | Reviewed behavior, access checks and automated tests for create teaching and non-teaching vacancies and public application windows |
| M2-STAFF_RECRUITMENT-T-005 | Job applicant profile, documents and online submission | Backend API + frontend journey for: Job applicant profile, documents and online submission | Reviewed behavior, access checks and automated tests for job applicant profile, documents and online submission |
| M2-STAFF_RECRUITMENT-T-006 | Recruitment application fee and verification | Backend API + frontend journey for: Recruitment application fee and verification | Reviewed behavior, access checks and automated tests for recruitment application fee and verification |
| M2-STAFF_RECRUITMENT-T-007 | Print submitted application and recruitment admit card | Backend API + frontend journey for: Print submitted application and recruitment admit card | Reviewed behavior, access checks and automated tests for print submitted application and recruitment admit card |
| M2-STAFF_RECRUITMENT-T-008 | Shortlisting, interview stages and offer tracking | Backend API + frontend journey for: Shortlisting, interview stages and offer tracking | Reviewed behavior, access checks and automated tests for shortlisting, interview stages and offer tracking |
| M2-STAFF_RECRUITMENT-T-009 | Convert accepted applicant into M1 staff member | Backend API + frontend journey for: Convert accepted applicant into M1 staff member | Reviewed behavior, access checks and automated tests for convert accepted applicant into m1 staff member |
| M2-STAFF_RECRUITMENT-T-010 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M2-STAFF_RECRUITMENT-T-011 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
