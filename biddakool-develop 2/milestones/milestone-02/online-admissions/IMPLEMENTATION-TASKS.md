# Online Application & Admission — Developer Task Backlog

**Module:** `online-admissions`  |  **Requirement namespace:** `M2-ONLINE_ADMISSIONS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/OnlineAdmissions` and `apps/web/src/features/online-admissions`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M2-ONLINE_ADMISSIONS-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M2-ONLINE_ADMISSIONS-T-002 | Domain and EF Core | Implement AdmissionCampaign, Applicant, AdmissionApplication, ApplicationDocument plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M2-ONLINE_ADMISSIONS-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M2-ONLINE_ADMISSIONS-T-004 | Public admission campaigns, eligibility criteria and available seats | Backend API + frontend journey for: Public admission campaigns, eligibility criteria and available seats | Reviewed behavior, access checks and automated tests for public admission campaigns, eligibility criteria and available seats |
| M2-ONLINE_ADMISSIONS-T-005 | Configurable application forms and applicant document uploads | Backend API + frontend journey for: Configurable application forms and applicant document uploads | Reviewed behavior, access checks and automated tests for configurable application forms and applicant document uploads |
| M2-ONLINE_ADMISSIONS-T-006 | Application submission with reference number and downloadable filled form | Backend API + frontend journey for: Application submission with reference number and downloadable filled form | Reviewed behavior, access checks and automated tests for application submission with reference number and downloadable filled form |
| M2-ONLINE_ADMISSIONS-T-007 | Application fee charge/payment state | Backend API + frontend journey for: Application fee charge/payment state | Reviewed behavior, access checks and automated tests for application fee charge/payment state |
| M2-ONLINE_ADMISSIONS-T-008 | Application review, status changes and admissions selection | Backend API + frontend journey for: Application review, status changes and admissions selection | Reviewed behavior, access checks and automated tests for application review, status changes and admissions selection |
| M2-ONLINE_ADMISSIONS-T-009 | Admit card after verified payment when admission exam is enabled | Backend API + frontend journey for: Admit card after verified payment when admission exam is enabled | Reviewed behavior, access checks and automated tests for admit card after verified payment when admission exam is enabled |
| M2-ONLINE_ADMISSIONS-T-010 | Offer, accept, enroll and reject transitions with audit | Backend API + frontend journey for: Offer, accept, enroll and reject transitions with audit | Reviewed behavior, access checks and automated tests for offer, accept, enroll and reject transitions with audit |
| M2-ONLINE_ADMISSIONS-T-011 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M2-ONLINE_ADMISSIONS-T-012 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
