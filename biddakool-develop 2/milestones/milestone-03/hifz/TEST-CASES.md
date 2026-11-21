# Hifz Department & Assessment — Test Cases

**Module:** `hifz`  |  **Requirement namespace:** `M3-HIFZ`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M3-HIFZ-TC-001 | Hifz department/group creation and group teacher assignment | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-HIFZ-TC-002 | Student group membership, list, filters and search | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-HIFZ-TC-003 | Monthly memorization progress and lesson observations | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-HIFZ-TC-004 | Hifz-specific examination categories, marks and outcomes | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-HIFZ-TC-005 | Hifz tabulation, merit lists and specialized report formats | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-HIFZ-TC-006 | Allow Hifz-specific workflows without introducing school-only constraints elsewhere | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-HIFZ-TC-007 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M3-HIFZ-TC-008 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M3-HIFZ-TC-009 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
