# Online Payments & Reconciliation — Test Cases

**Module:** `online-fee-payments`  |  **Requirement namespace:** `M2-ONLINE_FEE_PAYMENTS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M2-ONLINE_FEE_PAYMENTS-TC-001 | Hosted checkout for guardian and student fee dues | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ONLINE_FEE_PAYMENTS-TC-002 | Payment provider configuration per institution with controlled secrets | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ONLINE_FEE_PAYMENTS-TC-003 | Payment initiation, redirect and server-side webhook validation | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ONLINE_FEE_PAYMENTS-TC-004 | Pending, authorized, captured, failed, refunded and reconciled states | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ONLINE_FEE_PAYMENTS-TC-005 | Payment idempotency and duplicate webhook handling | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ONLINE_FEE_PAYMENTS-TC-006 | Partial fee invoice allocations and receipt generation on final capture | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ONLINE_FEE_PAYMENTS-TC-007 | Cash vs online collection reporting and payout reconciliation | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ONLINE_FEE_PAYMENTS-TC-008 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M2-ONLINE_FEE_PAYMENTS-TC-009 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M2-ONLINE_FEE_PAYMENTS-TC-010 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
