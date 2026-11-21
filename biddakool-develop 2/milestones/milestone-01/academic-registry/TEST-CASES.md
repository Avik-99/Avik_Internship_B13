# Academic Registry & Curriculum — Test Cases

**Module:** `academic-registry`  |  **Requirement namespace:** `M1-ACADEMIC_REGISTRY`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M1-ACADEMIC_REGISTRY-TC-001 | Academic years, sessions, terms/semesters and active term selection | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-ACADEMIC_REGISTRY-TC-002 | Departments, faculties, programs, batches, levels, groups and school class labels | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-ACADEMIC_REGISTRY-TC-003 | Course/subject catalog including codes, optional credits and pass criteria | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-ACADEMIC_REGISTRY-TC-004 | Course offerings / class sections scheduled in a term and assigned to teachers | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-ACADEMIC_REGISTRY-TC-005 | Curriculum and assessment policy versions per program | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-ACADEMIC_REGISTRY-TC-006 | Configurable GPA/grade scales and academic calendar rules | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-ACADEMIC_REGISTRY-TC-007 | Support subject combinations and optional courses without custom columns | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-ACADEMIC_REGISTRY-TC-008 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M1-ACADEMIC_REGISTRY-TC-009 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M1-ACADEMIC_REGISTRY-TC-010 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
