# Library & Lending — Test Cases

**Module:** `library`  |  **Requirement namespace:** `M3-LIBRARY`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M3-LIBRARY-TC-001 | Catalog books, magazines, CDs and other library assets | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-LIBRARY-TC-002 | Multiple physical copies and searchable catalogue | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-LIBRARY-TC-003 | Borrow and return transactions for authorized members | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-LIBRARY-TC-004 | Loan due dates, reservation and overdue list | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-LIBRARY-TC-005 | Lost/damaged copy adjustments and reports | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-LIBRARY-TC-006 | Optional automated library fines invoiced to M1 fees | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-LIBRARY-TC-007 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M3-LIBRARY-TC-008 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M3-LIBRARY-TC-009 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
