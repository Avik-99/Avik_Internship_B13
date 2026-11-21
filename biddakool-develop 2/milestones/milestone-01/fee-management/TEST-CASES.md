# Student Fees, Dues & Cash Collection — Test Cases

**Module:** `fee-management`  |  **Requirement namespace:** `M1-FEE_MANAGEMENT`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M1-FEE_MANAGEMENT-TC-001 | Institution fee types, fee groups and class/program-specific schedules | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-FEE_MANAGEMENT-TC-002 | Assign one-time, monthly, term or credit-based charges | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-FEE_MANAGEMENT-TC-003 | Generate student invoices and maintain outstanding dues | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-FEE_MANAGEMENT-TC-004 | Cash/manual payment recording with unique receipt numbers | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-FEE_MANAGEMENT-TC-005 | Partial payments, fee waivers and discount approval | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-FEE_MANAGEMENT-TC-006 | Student and guardian fee history, receipts and unpaid balance views | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-FEE_MANAGEMENT-TC-007 | Cashier shift/day collection report and fee-category breakdown | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-FEE_MANAGEMENT-TC-008 | Preserve payment allocation and refund history; no destructive editing | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-FEE_MANAGEMENT-TC-009 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M1-FEE_MANAGEMENT-TC-010 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M1-FEE_MANAGEMENT-TC-011 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
