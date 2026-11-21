# Payroll, Deductions & Provident Fund — Acceptance Criteria

**Module:** `staff-payroll`  |  **Requirement namespace:** `M2-STAFF_PAYROLL`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M2-STAFF_PAYROLL-AC-001 | Authorized HRManager can complete: compensation policies, salary structures and payment cycles. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-STAFF_PAYROLL-AC-002 | Authorized HRManager can complete: attendance-based deductions using policy version. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-STAFF_PAYROLL-AC-003 | Authorized HRManager can complete: manual adjustments, deduction waivers and approvals. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-STAFF_PAYROLL-AC-004 | Authorized HRManager can complete: monthly salary generation and payroll approval/lock. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-STAFF_PAYROLL-AC-005 | Authorized HRManager can complete: downloadable employee payslips and payroll reports. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-STAFF_PAYROLL-AC-006 | Authorized HRManager can complete: provident fund contribution and balance records. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-STAFF_PAYROLL-AC-007 | Authorized HRManager can complete: accounting integration for salary expenses and liabilities. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M2-STAFF_PAYROLL-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: HRManager, Accountant, Staff, Teacher.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
