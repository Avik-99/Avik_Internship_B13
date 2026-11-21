# Students, Guardians & Enrollment — Test Cases

**Module:** `student-lifecycle`  |  **Requirement namespace:** `M1-STUDENT_LIFECYCLE`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M1-STUDENT_LIFECYCLE-TC-001 | Admin-driven student enrollment with admission number and contact details | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-STUDENT_LIFECYCLE-TC-002 | Student profile including photo, emergency contact, academic history and documents | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-STUDENT_LIFECYCLE-TC-003 | One or more guardians linked to a student with verified relationship and portal access | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-STUDENT_LIFECYCLE-TC-004 | Program/cohort/class/section placement and academic session enrollment | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-STUDENT_LIFECYCLE-TC-005 | University/medical course-offering registration and enrollment history | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-STUDENT_LIFECYCLE-TC-006 | Promotion, transfer, graduation, withdrawal and re-admission status transitions | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-STUDENT_LIFECYCLE-TC-007 | Class roll number uniqueness within active placement scope | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-STUDENT_LIFECYCLE-TC-008 | Tenant-specific student ID card and downloadable profile information | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-STUDENT_LIFECYCLE-TC-009 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M1-STUDENT_LIFECYCLE-TC-010 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M1-STUDENT_LIFECYCLE-TC-011 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
