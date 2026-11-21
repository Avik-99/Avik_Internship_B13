# Donations & Donor Pledges — Developer Task Backlog

**Module:** `donations`  |  **Requirement namespace:** `M3-DONATIONS`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/Donations` and `apps/web/src/features/donations`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M3-DONATIONS-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M3-DONATIONS-T-002 | Domain and EF Core | Implement Donor, DonationPledge, PledgeInstallment, DonationCollection plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M3-DONATIONS-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M3-DONATIONS-T-004 | Donor profile and communication consent | Backend API + frontend journey for: Donor profile and communication consent | Reviewed behavior, access checks and automated tests for donor profile and communication consent |
| M3-DONATIONS-T-005 | Monthly/annual pledge schedules and expected dues | Backend API + frontend journey for: Monthly/annual pledge schedules and expected dues | Reviewed behavior, access checks and automated tests for monthly/annual pledge schedules and expected dues |
| M3-DONATIONS-T-006 | Record one-time or recurring donation receipts | Backend API + frontend journey for: Record one-time or recurring donation receipts | Reviewed behavior, access checks and automated tests for record one-time or recurring donation receipts |
| M3-DONATIONS-T-007 | Donor receipts and acknowledgments | Backend API + frontend journey for: Donor receipts and acknowledgments | Reviewed behavior, access checks and automated tests for donor receipts and acknowledgments |
| M3-DONATIONS-T-008 | Donation due reminders through Messaging | Backend API + frontend journey for: Donation due reminders through Messaging | Reviewed behavior, access checks and automated tests for donation due reminders through messaging |
| M3-DONATIONS-T-009 | Accounting income integration and pledge status reports | Backend API + frontend journey for: Accounting income integration and pledge status reports | Reviewed behavior, access checks and automated tests for accounting income integration and pledge status reports |
| M3-DONATIONS-T-010 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M3-DONATIONS-T-011 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
