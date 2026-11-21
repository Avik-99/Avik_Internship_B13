# Accounting & General Ledger — Developer Task Backlog

**Module:** `accounting-ledger`  |  **Requirement namespace:** `M2-ACCOUNTING_LEDGER`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/AccountingLedger` and `apps/web/src/features/accounting-ledger`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M2-ACCOUNTING_LEDGER-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M2-ACCOUNTING_LEDGER-T-002 | Domain and EF Core | Implement Account, FiscalPeriod, JournalEntry, JournalLine plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M2-ACCOUNTING_LEDGER-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M2-ACCOUNTING_LEDGER-T-004 | Chart of accounts and configurable fiscal years | Backend API + frontend journey for: Chart of accounts and configurable fiscal years | Reviewed behavior, access checks and automated tests for chart of accounts and configurable fiscal years |
| M2-ACCOUNTING_LEDGER-T-005 | Manual income and expense vouchers with review/approval | Backend API + frontend journey for: Manual income and expense vouchers with review/approval | Reviewed behavior, access checks and automated tests for manual income and expense vouchers with review/approval |
| M2-ACCOUNTING_LEDGER-T-006 | Ledger posting journal and reversals (not destructive delete) | Backend API + frontend journey for: Ledger posting journal and reversals (not destructive delete) | Reviewed behavior, access checks and automated tests for ledger posting journal and reversals (not destructive delete) |
| M2-ACCOUNTING_LEDGER-T-007 | Receipt/voucher daily topsheets and register | Backend API + frontend journey for: Receipt/voucher daily topsheets and register | Reviewed behavior, access checks and automated tests for receipt/voucher daily topsheets and register |
| M2-ACCOUNTING_LEDGER-T-008 | Income/expense statements and general ledger (detail/summary) | Backend API + frontend journey for: Income/expense statements and general ledger (detail/summary) | Reviewed behavior, access checks and automated tests for income/expense statements and general ledger (detail/summary) |
| M2-ACCOUNTING_LEDGER-T-009 | Billing and invoice attachment references | Backend API + frontend journey for: Billing and invoice attachment references | Reviewed behavior, access checks and automated tests for billing and invoice attachment references |
| M2-ACCOUNTING_LEDGER-T-010 | Post fee payments, waivers, refunds and donations via explicitly versioned integration events | Backend API + frontend journey for: Post fee payments, waivers, refunds and donations via explicitly versioned integration events | Reviewed behavior, access checks and automated tests for post fee payments, waivers, refunds and donations via explicitly versioned integration events |
| M2-ACCOUNTING_LEDGER-T-011 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M2-ACCOUNTING_LEDGER-T-012 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
