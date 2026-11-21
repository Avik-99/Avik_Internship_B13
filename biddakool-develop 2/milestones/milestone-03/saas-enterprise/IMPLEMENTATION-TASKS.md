# SaaS Commercial Operations & Enterprise Extensions — Developer Task Backlog

**Module:** `saas-enterprise`  |  **Requirement namespace:** `M3-SAAS_ENTERPRISE`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/SaasEnterprise` and `apps/web/src/features/saas-enterprise`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M3-SAAS_ENTERPRISE-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M3-SAAS_ENTERPRISE-T-002 | Domain and EF Core | Implement SaaSPlan, Subscription, Entitlement, UsageCounter plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M3-SAAS_ENTERPRISE-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M3-SAAS_ENTERPRISE-T-004 | Subscription plans, feature entitlements and usage limit enforcement | Backend API + frontend journey for: Subscription plans, feature entitlements and usage limit enforcement | Reviewed behavior, access checks and automated tests for subscription plans, feature entitlements and usage limit enforcement |
| M3-SAAS_ENTERPRISE-T-005 | Trial, activation, renewal and plan change workflows | Backend API + frontend journey for: Trial, activation, renewal and plan change workflows | Reviewed behavior, access checks and automated tests for trial, activation, renewal and plan change workflows |
| M3-SAAS_ENTERPRISE-T-006 | Institution self-service branding and optional custom domains | Backend API + frontend journey for: Institution self-service branding and optional custom domains | Reviewed behavior, access checks and automated tests for institution self-service branding and optional custom domains |
| M3-SAAS_ENTERPRISE-T-007 | Central platform support tools with audited break-glass access | Backend API + frontend journey for: Central platform support tools with audited break-glass access | Reviewed behavior, access checks and automated tests for central platform support tools with audited break-glass access |
| M3-SAAS_ENTERPRISE-T-008 | Tenant-scoped backups, export and disaster recovery procedures | Backend API + frontend journey for: Tenant-scoped backups, export and disaster recovery procedures | Reviewed behavior, access checks and automated tests for tenant-scoped backups, export and disaster recovery procedures |
| M3-SAAS_ENTERPRISE-T-009 | Advanced campus hierarchy, delegated regional admin and consolidated reporting | Backend API + frontend journey for: Advanced campus hierarchy, delegated regional admin and consolidated reporting | Reviewed behavior, access checks and automated tests for advanced campus hierarchy, delegated regional admin and consolidated reporting |
| M3-SAAS_ENTERPRISE-T-010 | External API keys, integration registry and rate limits | Backend API + frontend journey for: External API keys, integration registry and rate limits | Reviewed behavior, access checks and automated tests for external api keys, integration registry and rate limits |
| M3-SAAS_ENTERPRISE-T-011 | Automated provisioning/deprovisioning and compliant tenant data export | Backend API + frontend journey for: Automated provisioning/deprovisioning and compliant tenant data export | Reviewed behavior, access checks and automated tests for automated provisioning/deprovisioning and compliant tenant data export |
| M3-SAAS_ENTERPRISE-T-012 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M3-SAAS_ENTERPRISE-T-013 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
