# Accounting & General Ledger — Test Cases

**Module:** `accounting-ledger`  |  **Requirement namespace:** `M2-ACCOUNTING_LEDGER`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M2-ACCOUNTING_LEDGER-TC-001 | Chart of accounts and configurable fiscal years | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ACCOUNTING_LEDGER-TC-002 | Manual income and expense vouchers with review/approval | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ACCOUNTING_LEDGER-TC-003 | Ledger posting journal and reversals (not destructive delete) | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ACCOUNTING_LEDGER-TC-004 | Receipt/voucher daily topsheets and register | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ACCOUNTING_LEDGER-TC-005 | Income/expense statements and general ledger (detail/summary) | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ACCOUNTING_LEDGER-TC-006 | Billing and invoice attachment references | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ACCOUNTING_LEDGER-TC-007 | Post fee payments, waivers, refunds and donations via explicitly versioned integration events | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ACCOUNTING_LEDGER-TC-008 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M2-ACCOUNTING_LEDGER-TC-009 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M2-ACCOUNTING_LEDGER-TC-010 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
