# Examinations, Grades & Results — Test Cases

**Module:** `assessment-results`  |  **Requirement namespace:** `M1-ASSESSMENT_RESULTS`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M1-ASSESSMENT_RESULTS-TC-001 | Exam categories, assessments, exam components and subject/course mapping | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-ASSESSMENT_RESULTS-TC-002 | Full marks, minimum pass marks, grade boundaries and basic weighting | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-ASSESSMENT_RESULTS-TC-003 | Teacher-owned marks entry and approval workflow | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-ASSESSMENT_RESULTS-TC-004 | Grade, percentage, GPA/CGPA compatible calculation; configurable grading policy | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-ASSESSMENT_RESULTS-TC-005 | Provisional vs published results with authorized release | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-ASSESSMENT_RESULTS-TC-006 | Printable exam result sheet, subject performance and report cards | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-ASSESSMENT_RESULTS-TC-007 | Tabulation sheet, pass/fail and simple merit order when allowed | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-ASSESSMENT_RESULTS-TC-008 | Guardian/student visibility only after result publication | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-ASSESSMENT_RESULTS-TC-009 | Academic result snapshots for historical reproducibility | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-ASSESSMENT_RESULTS-TC-010 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M1-ASSESSMENT_RESULTS-TC-011 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M1-ASSESSMENT_RESULTS-TC-012 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
