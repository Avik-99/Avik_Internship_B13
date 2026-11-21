# Lesson Plans, Diaries & Student Progress — Test Cases

**Module:** `lesson-plans`  |  **Requirement namespace:** `M2-LESSON_PLANS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M2-LESSON_PLANS-TC-001 | Teacher-created subject/course lesson plans by academic term | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-LESSON_PLANS-TC-002 | Per-day class diary and homework tasks | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-LESSON_PLANS-TC-003 | Individual student daily lesson evaluation and comments | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-LESSON_PLANS-TC-004 | Monthly subject-wise progress summaries | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-LESSON_PLANS-TC-005 | Student/guardian access to published diaries and evaluations | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-LESSON_PLANS-TC-006 | Teacher workload views and learning progress export | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-LESSON_PLANS-TC-007 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M2-LESSON_PLANS-TC-008 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M2-LESSON_PLANS-TC-009 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
