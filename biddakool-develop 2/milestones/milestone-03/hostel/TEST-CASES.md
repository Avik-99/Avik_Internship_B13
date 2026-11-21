# Hostel, Housing & Residence Fees — Test Cases

**Module:** `hostel`  |  **Requirement namespace:** `M3-HOSTEL`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M3-HOSTEL-TC-001 | Hostel/building/floor/room/bed catalogue and capacity | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-HOSTEL-TC-002 | Student room or bed assignment and release with occupancy history | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-HOSTEL-TC-003 | Hostel and meal charge configuration | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-HOSTEL-TC-004 | Automatic monthly room/meal charge generation | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-HOSTEL-TC-005 | Hostel due collection through the Fees module | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-HOSTEL-TC-006 | Occupancy, vacancy and hostel resident reports | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-HOSTEL-TC-007 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M3-HOSTEL-TC-008 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M3-HOSTEL-TC-009 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
