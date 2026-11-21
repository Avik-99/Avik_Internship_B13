# Online Payments & Reconciliation — Developer Task Backlog

**Module:** `online-fee-payments`  |  **Requirement namespace:** `M2-ONLINE_FEE_PAYMENTS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/OnlineFeePayments` and `apps/web/src/features/online-fee-payments`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M2-ONLINE_FEE_PAYMENTS-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M2-ONLINE_FEE_PAYMENTS-T-002 | Domain and EF Core | Implement PaymentIntent, PaymentProviderConfig, PaymentCallback, PaymentSettlement plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M2-ONLINE_FEE_PAYMENTS-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M2-ONLINE_FEE_PAYMENTS-T-004 | Hosted checkout for guardian and student fee dues | Backend API + frontend journey for: Hosted checkout for guardian and student fee dues | Reviewed behavior, access checks and automated tests for hosted checkout for guardian and student fee dues |
| M2-ONLINE_FEE_PAYMENTS-T-005 | Payment provider configuration per institution with controlled secrets | Backend API + frontend journey for: Payment provider configuration per institution with controlled secrets | Reviewed behavior, access checks and automated tests for payment provider configuration per institution with controlled secrets |
| M2-ONLINE_FEE_PAYMENTS-T-006 | Payment initiation, redirect and server-side webhook validation | Backend API + frontend journey for: Payment initiation, redirect and server-side webhook validation | Reviewed behavior, access checks and automated tests for payment initiation, redirect and server-side webhook validation |
| M2-ONLINE_FEE_PAYMENTS-T-007 | Pending, authorized, captured, failed, refunded and reconciled states | Backend API + frontend journey for: Pending, authorized, captured, failed, refunded and reconciled states | Reviewed behavior, access checks and automated tests for pending, authorized, captured, failed, refunded and reconciled states |
| M2-ONLINE_FEE_PAYMENTS-T-008 | Payment idempotency and duplicate webhook handling | Backend API + frontend journey for: Payment idempotency and duplicate webhook handling | Reviewed behavior, access checks and automated tests for payment idempotency and duplicate webhook handling |
| M2-ONLINE_FEE_PAYMENTS-T-009 | Partial fee invoice allocations and receipt generation on final capture | Backend API + frontend journey for: Partial fee invoice allocations and receipt generation on final capture | Reviewed behavior, access checks and automated tests for partial fee invoice allocations and receipt generation on final capture |
| M2-ONLINE_FEE_PAYMENTS-T-010 | Cash vs online collection reporting and payout reconciliation | Backend API + frontend journey for: Cash vs online collection reporting and payout reconciliation | Reviewed behavior, access checks and automated tests for cash vs online collection reporting and payout reconciliation |
| M2-ONLINE_FEE_PAYMENTS-T-011 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M2-ONLINE_FEE_PAYMENTS-T-012 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
