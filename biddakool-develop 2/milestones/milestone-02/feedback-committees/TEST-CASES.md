# Feedback & Basic Committee Administration — Test Cases

**Module:** `feedback-committees`  |  **Requirement namespace:** `M2-FEEDBACK_COMMITTEES`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M2-FEEDBACK_COMMITTEES-TC-001 | Guardian suggestions, feedback and complaint submission | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-FEEDBACK_COMMITTEES-TC-002 | Categorization, ownership and response history | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-FEEDBACK_COMMITTEES-TC-003 | Private vs published responses and closure status | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-FEEDBACK_COMMITTEES-TC-004 | Administrative committee creation, dates and member roster | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-FEEDBACK_COMMITTEES-TC-005 | Committee membership history and read permissions | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-FEEDBACK_COMMITTEES-TC-006 | Response time and unresolved issue reports | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-FEEDBACK_COMMITTEES-TC-007 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M2-FEEDBACK_COMMITTEES-TC-008 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M2-FEEDBACK_COMMITTEES-TC-009 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
