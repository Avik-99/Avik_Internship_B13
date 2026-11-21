# Tenant & Institution Configuration — Developer Task Backlog

**Module:** `tenant-institution`  |  **Requirement namespace:** `M1-TENANT_INSTITUTION`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/TenantInstitution` and `apps/web/src/features/tenant-institution`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M1-TENANT_INSTITUTION-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M1-TENANT_INSTITUTION-T-002 | Domain and EF Core | Implement Tenant, Institution, Campus, InstitutionSettings plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M1-TENANT_INSTITUTION-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M1-TENANT_INSTITUTION-T-004 | Tenant provisioning and isolated institution settings | Backend API + frontend journey for: Tenant provisioning and isolated institution settings | Reviewed behavior, access checks and automated tests for tenant provisioning and isolated institution settings |
| M1-TENANT_INSTITUTION-T-005 | Institution type: school, college, university, medical college, madrasa or training center | Backend API + frontend journey for: Institution type: school, college, university, medical college, madrasa or training center | Reviewed behavior, access checks and automated tests for institution type: school, college, university, medical college, madrasa or training center |
| M1-TENANT_INSTITUTION-T-006 | Contact information, address, logos, letterhead, timezone, Bangla/English locale and public profile | Backend API + frontend journey for: Contact information, address, logos, letterhead, timezone, Bangla/English locale and public profile | Reviewed behavior, access checks and automated tests for contact information, address, logos, letterhead, timezone, bangla/english locale and public profile |
| M1-TENANT_INSTITUTION-T-007 | Campus records, shifts, working weekdays, holiday calendar and academic date formats | Backend API + frontend journey for: Campus records, shifts, working weekdays, holiday calendar and academic date formats | Reviewed behavior, access checks and automated tests for campus records, shifts, working weekdays, holiday calendar and academic date formats |
| M1-TENANT_INSTITUTION-T-008 | Per-tenant module enablement and configurable policies | Backend API + frontend journey for: Per-tenant module enablement and configurable policies | Reviewed behavior, access checks and automated tests for per-tenant module enablement and configurable policies |
| M1-TENANT_INSTITUTION-T-009 | Institution dashboard with tenant-level counts and quick links | Backend API + frontend journey for: Institution dashboard with tenant-level counts and quick links | Reviewed behavior, access checks and automated tests for institution dashboard with tenant-level counts and quick links |
| M1-TENANT_INSTITUTION-T-010 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M1-TENANT_INSTITUTION-T-011 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
