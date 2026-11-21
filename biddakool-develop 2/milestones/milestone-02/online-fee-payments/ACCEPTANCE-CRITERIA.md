# Online Payments & Reconciliation — Acceptance Criteria

**Module:** `online-fee-payments`  |  **Requirement namespace:** `M2-ONLINE_FEE_PAYMENTS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M2-ONLINE_FEE_PAYMENTS-AC-001 | Authorized Accountant can complete: hosted checkout for guardian and student fee dues. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ONLINE_FEE_PAYMENTS-AC-002 | Authorized Accountant can complete: payment provider configuration per institution with controlled secrets. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ONLINE_FEE_PAYMENTS-AC-003 | Authorized Accountant can complete: payment initiation, redirect and server-side webhook validation. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ONLINE_FEE_PAYMENTS-AC-004 | Authorized Accountant can complete: pending, authorized, captured, failed, refunded and reconciled states. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ONLINE_FEE_PAYMENTS-AC-005 | Authorized Accountant can complete: payment idempotency and duplicate webhook handling. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ONLINE_FEE_PAYMENTS-AC-006 | Authorized Accountant can complete: partial fee invoice allocations and receipt generation on final capture. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ONLINE_FEE_PAYMENTS-AC-007 | Authorized Accountant can complete: cash vs online collection reporting and payout reconciliation. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M2-ONLINE_FEE_PAYMENTS-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: Accountant, Guardian, Student, InstitutionAdmin.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
