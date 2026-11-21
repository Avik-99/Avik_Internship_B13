# Donations & Donor Pledges — Test Cases

**Module:** `donations`  |  **Requirement namespace:** `M3-DONATIONS`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M3-DONATIONS-TC-001 | Donor profile and communication consent | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-DONATIONS-TC-002 | Monthly/annual pledge schedules and expected dues | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-DONATIONS-TC-003 | Record one-time or recurring donation receipts | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-DONATIONS-TC-004 | Donor receipts and acknowledgments | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-DONATIONS-TC-005 | Donation due reminders through Messaging | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-DONATIONS-TC-006 | Accounting income integration and pledge status reports | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-DONATIONS-TC-007 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M3-DONATIONS-TC-008 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M3-DONATIONS-TC-009 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
