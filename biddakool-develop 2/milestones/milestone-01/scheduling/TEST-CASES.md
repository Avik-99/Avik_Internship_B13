# Class, Teacher & Examination Timetables — Test Cases

**Module:** `scheduling`  |  **Requirement namespace:** `M1-SCHEDULING`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M1-SCHEDULING-TC-001 | Weekly schedules with period times, weekdays and academic terms | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-SCHEDULING-TC-002 | Class/section schedule views and cross-class overview | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-SCHEDULING-TC-003 | Faculty/teacher personal and weekly combined timetables | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-SCHEDULING-TC-004 | Classroom or room assignment | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-SCHEDULING-TC-005 | Time-slot conflict detection for teacher, room and student group | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-SCHEDULING-TC-006 | Basic examination timetable with start/end time | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-SCHEDULING-TC-007 | Publish routines to student, guardian and teacher panels | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-SCHEDULING-TC-008 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M1-SCHEDULING-TC-009 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M1-SCHEDULING-TC-010 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
