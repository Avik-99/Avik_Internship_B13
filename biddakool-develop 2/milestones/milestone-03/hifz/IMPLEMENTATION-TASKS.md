# Hifz Department & Assessment — Developer Task Backlog

**Module:** `hifz`  |  **Requirement namespace:** `M3-HIFZ`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/Hifz` and `apps/web/src/features/hifz`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M3-HIFZ-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M3-HIFZ-T-002 | Domain and EF Core | Implement HifzDepartment, HifzGroup, HifzGroupMembership, HifzProgressRecord plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M3-HIFZ-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M3-HIFZ-T-004 | Hifz department/group creation and group teacher assignment | Backend API + frontend journey for: Hifz department/group creation and group teacher assignment | Reviewed behavior, access checks and automated tests for hifz department/group creation and group teacher assignment |
| M3-HIFZ-T-005 | Student group membership, list, filters and search | Backend API + frontend journey for: Student group membership, list, filters and search | Reviewed behavior, access checks and automated tests for student group membership, list, filters and search |
| M3-HIFZ-T-006 | Monthly memorization progress and lesson observations | Backend API + frontend journey for: Monthly memorization progress and lesson observations | Reviewed behavior, access checks and automated tests for monthly memorization progress and lesson observations |
| M3-HIFZ-T-007 | Hifz-specific examination categories, marks and outcomes | Backend API + frontend journey for: Hifz-specific examination categories, marks and outcomes | Reviewed behavior, access checks and automated tests for hifz-specific examination categories, marks and outcomes |
| M3-HIFZ-T-008 | Hifz tabulation, merit lists and specialized report formats | Backend API + frontend journey for: Hifz tabulation, merit lists and specialized report formats | Reviewed behavior, access checks and automated tests for hifz tabulation, merit lists and specialized report formats |
| M3-HIFZ-T-009 | Allow Hifz-specific workflows without introducing school-only constraints elsewhere | Backend API + frontend journey for: Allow Hifz-specific workflows without introducing school-only constraints elsewhere | Reviewed behavior, access checks and automated tests for allow hifz-specific workflows without introducing school-only constraints elsewhere |
| M3-HIFZ-T-010 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M3-HIFZ-T-011 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
