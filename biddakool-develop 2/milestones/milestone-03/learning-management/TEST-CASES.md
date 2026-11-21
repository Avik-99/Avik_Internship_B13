# Online Courses, Assignments & Quizzes — Test Cases

**Module:** `learning-management`  |  **Requirement namespace:** `M3-LEARNING_MANAGEMENT`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M3-LEARNING_MANAGEMENT-TC-001 | Google Classroom-like online course workspace | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-LEARNING_MANAGEMENT-TC-002 | Learning materials, attachments, class notes and published syllabus | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-LEARNING_MANAGEMENT-TC-003 | Assignments, submission windows and uploads | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-LEARNING_MANAGEMENT-TC-004 | Teacher reviews of submitted files and online marking | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-LEARNING_MANAGEMENT-TC-005 | MCQ quiz bank, attempts, scoring and time limits | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-LEARNING_MANAGEMENT-TC-006 | Student course activity and progress dashboards | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-LEARNING_MANAGEMENT-TC-007 | Optional sync of graded assessment outcomes into the Results module | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-LEARNING_MANAGEMENT-TC-008 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M3-LEARNING_MANAGEMENT-TC-009 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M3-LEARNING_MANAGEMENT-TC-010 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
