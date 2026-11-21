# Student Fees, Dues & Cash Collection — Developer Task Backlog

**Module:** `fee-management`  |  **Requirement namespace:** `M1-FEE_MANAGEMENT`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/FeeManagement` and `apps/web/src/features/fee-management`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M1-FEE_MANAGEMENT-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M1-FEE_MANAGEMENT-T-002 | Domain and EF Core | Implement FeeType, FeeSchedule, StudentCharge, FeeInvoice plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M1-FEE_MANAGEMENT-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M1-FEE_MANAGEMENT-T-004 | Institution fee types, fee groups and class/program-specific schedules | Backend API + frontend journey for: Institution fee types, fee groups and class/program-specific schedules | Reviewed behavior, access checks and automated tests for institution fee types, fee groups and class/program-specific schedules |
| M1-FEE_MANAGEMENT-T-005 | Assign one-time, monthly, term or credit-based charges | Backend API + frontend journey for: Assign one-time, monthly, term or credit-based charges | Reviewed behavior, access checks and automated tests for assign one-time, monthly, term or credit-based charges |
| M1-FEE_MANAGEMENT-T-006 | Generate student invoices and maintain outstanding dues | Backend API + frontend journey for: Generate student invoices and maintain outstanding dues | Reviewed behavior, access checks and automated tests for generate student invoices and maintain outstanding dues |
| M1-FEE_MANAGEMENT-T-007 | Cash/manual payment recording with unique receipt numbers | Backend API + frontend journey for: Cash/manual payment recording with unique receipt numbers | Reviewed behavior, access checks and automated tests for cash/manual payment recording with unique receipt numbers |
| M1-FEE_MANAGEMENT-T-008 | Partial payments, fee waivers and discount approval | Backend API + frontend journey for: Partial payments, fee waivers and discount approval | Reviewed behavior, access checks and automated tests for partial payments, fee waivers and discount approval |
| M1-FEE_MANAGEMENT-T-009 | Student and guardian fee history, receipts and unpaid balance views | Backend API + frontend journey for: Student and guardian fee history, receipts and unpaid balance views | Reviewed behavior, access checks and automated tests for student and guardian fee history, receipts and unpaid balance views |
| M1-FEE_MANAGEMENT-T-010 | Cashier shift/day collection report and fee-category breakdown | Backend API + frontend journey for: Cashier shift/day collection report and fee-category breakdown | Reviewed behavior, access checks and automated tests for cashier shift/day collection report and fee-category breakdown |
| M1-FEE_MANAGEMENT-T-011 | Preserve payment allocation and refund history; no destructive editing | Backend API + frontend journey for: Preserve payment allocation and refund history; no destructive editing | Reviewed behavior, access checks and automated tests for preserve payment allocation and refund history; no destructive editing |
| M1-FEE_MANAGEMENT-T-012 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M1-FEE_MANAGEMENT-T-013 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
