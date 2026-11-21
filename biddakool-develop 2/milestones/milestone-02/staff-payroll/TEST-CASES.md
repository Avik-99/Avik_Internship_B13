# Payroll, Deductions & Provident Fund — Test Cases

**Module:** `staff-payroll`  |  **Requirement namespace:** `M2-STAFF_PAYROLL`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M2-STAFF_PAYROLL-TC-001 | Compensation policies, salary structures and payment cycles | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-STAFF_PAYROLL-TC-002 | Attendance-based deductions using policy version | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-STAFF_PAYROLL-TC-003 | Manual adjustments, deduction waivers and approvals | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-STAFF_PAYROLL-TC-004 | Monthly salary generation and payroll approval/lock | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-STAFF_PAYROLL-TC-005 | Downloadable employee payslips and payroll reports | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-STAFF_PAYROLL-TC-006 | Provident fund contribution and balance records | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-STAFF_PAYROLL-TC-007 | Accounting integration for salary expenses and liabilities | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-STAFF_PAYROLL-TC-008 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M2-STAFF_PAYROLL-TC-009 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M2-STAFF_PAYROLL-TC-010 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
