# Student, Guardian, Teacher & Admin Portals — Developer Task Backlog

**Module:** `self-service-portals`  |  **Requirement namespace:** `M1-SELF_SERVICE_PORTALS`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/SelfServicePortals` and `apps/web/src/features/self-service-portals`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M1-SELF_SERVICE_PORTALS-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M1-SELF_SERVICE_PORTALS-T-002 | Domain and EF Core | Implement DashboardPreference, UserNotificationPreference plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M1-SELF_SERVICE_PORTALS-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M1-SELF_SERVICE_PORTALS-T-004 | Admin home with student/staff, fees, dues, attendance and exam summaries | Backend API + frontend journey for: Admin home with student/staff, fees, dues, attendance and exam summaries | Reviewed behavior, access checks and automated tests for admin home with student/staff, fees, dues, attendance and exam summaries |
| M1-SELF_SERVICE_PORTALS-T-005 | Teacher portal for assigned students, attendance, marks, schedules and notices | Backend API + frontend journey for: Teacher portal for assigned students, attendance, marks, schedules and notices | Reviewed behavior, access checks and automated tests for teacher portal for assigned students, attendance, marks, schedules and notices |
| M1-SELF_SERVICE_PORTALS-T-006 | Student portal for profile, current courses, attendance, results, fees and notices | Backend API + frontend journey for: Student portal for profile, current courses, attendance, results, fees and notices | Reviewed behavior, access checks and automated tests for student portal for profile, current courses, attendance, results, fees and notices |
| M1-SELF_SERVICE_PORTALS-T-007 | Guardian portal with linked-child switcher and access to authorized child records | Backend API + frontend journey for: Guardian portal with linked-child switcher and access to authorized child records | Reviewed behavior, access checks and automated tests for guardian portal with linked-child switcher and access to authorized child records |
| M1-SELF_SERVICE_PORTALS-T-008 | Accountant workspace for collections, receipts and dues | Backend API + frontend journey for: Accountant workspace for collections, receipts and dues | Reviewed behavior, access checks and automated tests for accountant workspace for collections, receipts and dues |
| M1-SELF_SERVICE_PORTALS-T-009 | Role-aware navigation and responsive Bangla/English UX | Backend API + frontend journey for: Role-aware navigation and responsive Bangla/English UX | Reviewed behavior, access checks and automated tests for role-aware navigation and responsive bangla/english ux |
| M1-SELF_SERVICE_PORTALS-T-010 | Download protected receipts, profile pages and result reports | Backend API + frontend journey for: Download protected receipts, profile pages and result reports | Reviewed behavior, access checks and automated tests for download protected receipts, profile pages and result reports |
| M1-SELF_SERVICE_PORTALS-T-011 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M1-SELF_SERVICE_PORTALS-T-012 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
