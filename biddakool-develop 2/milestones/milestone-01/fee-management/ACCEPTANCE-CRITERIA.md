# Student Fees, Dues & Cash Collection — Acceptance Criteria

**Module:** `fee-management`  |  **Requirement namespace:** `M1-FEE_MANAGEMENT`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M1-FEE_MANAGEMENT-AC-001 | Authorized InstitutionAdmin can complete: institution fee types, fee groups and class/program-specific schedules. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-FEE_MANAGEMENT-AC-002 | Authorized InstitutionAdmin can complete: assign one-time, monthly, term or credit-based charges. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-FEE_MANAGEMENT-AC-003 | Authorized InstitutionAdmin can complete: generate student invoices and maintain outstanding dues. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-FEE_MANAGEMENT-AC-004 | Authorized InstitutionAdmin can complete: cash/manual payment recording with unique receipt numbers. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-FEE_MANAGEMENT-AC-005 | Authorized InstitutionAdmin can complete: partial payments, fee waivers and discount approval. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-FEE_MANAGEMENT-AC-006 | Authorized InstitutionAdmin can complete: student and guardian fee history, receipts and unpaid balance views. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-FEE_MANAGEMENT-AC-007 | Authorized InstitutionAdmin can complete: cashier shift/day collection report and fee-category breakdown. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-FEE_MANAGEMENT-AC-008 | Authorized InstitutionAdmin can complete: preserve payment allocation and refund history; no destructive editing. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M1-FEE_MANAGEMENT-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: InstitutionAdmin, Accountant, Cashier, Student, Guardian.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
