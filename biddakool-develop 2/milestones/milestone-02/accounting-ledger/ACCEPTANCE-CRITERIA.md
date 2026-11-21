# Accounting & General Ledger — Acceptance Criteria

**Module:** `accounting-ledger`  |  **Requirement namespace:** `M2-ACCOUNTING_LEDGER`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M2-ACCOUNTING_LEDGER-AC-001 | Authorized Accountant can complete: chart of accounts and configurable fiscal years. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ACCOUNTING_LEDGER-AC-002 | Authorized Accountant can complete: manual income and expense vouchers with review/approval. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ACCOUNTING_LEDGER-AC-003 | Authorized Accountant can complete: ledger posting journal and reversals (not destructive delete). | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ACCOUNTING_LEDGER-AC-004 | Authorized Accountant can complete: receipt/voucher daily topsheets and register. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ACCOUNTING_LEDGER-AC-005 | Authorized Accountant can complete: income/expense statements and general ledger (detail/summary). | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ACCOUNTING_LEDGER-AC-006 | Authorized Accountant can complete: billing and invoice attachment references. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ACCOUNTING_LEDGER-AC-007 | Authorized Accountant can complete: post fee payments, waivers, refunds and donations via explicitly versioned integration events. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M2-ACCOUNTING_LEDGER-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: Accountant, FinanceManager, InstitutionAdmin.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
