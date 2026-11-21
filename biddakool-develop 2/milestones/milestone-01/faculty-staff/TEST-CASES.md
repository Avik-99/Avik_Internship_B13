# Faculty, Teacher & Staff Directory — Test Cases

**Module:** `faculty-staff`  |  **Requirement namespace:** `M1-FACULTY_STAFF`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M1-FACULTY_STAFF-TC-001 | Register teacher, faculty, employee and non-teaching staff profiles | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-FACULTY_STAFF-TC-002 | Employment designation, department, active status and employment dates | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-FACULTY_STAFF-TC-003 | Teacher subject and course-offering assignments | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-FACULTY_STAFF-TC-004 | Class teacher, adviser or academic supervisor assignments | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-FACULTY_STAFF-TC-005 | Profile view, search, filtering and downloadable staff profile | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-FACULTY_STAFF-TC-006 | Separate teaching duties from payroll and compensation data | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-FACULTY_STAFF-TC-007 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M1-FACULTY_STAFF-TC-008 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M1-FACULTY_STAFF-TC-009 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
