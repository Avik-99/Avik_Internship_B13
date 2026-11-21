# Advanced Grading, Analysis & Report Cards — Test Cases

**Module:** `advanced-examinations`  |  **Requirement namespace:** `M2-ADVANCED_EXAMINATIONS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M2-ADVANCED_EXAMINATIONS-TC-001 | Weighted class tests, monthly tests, homework and continuous assessments | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ADVANCED_EXAMINATIONS-TC-002 | Aggregate semester, annual and cross-term results | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ADVANCED_EXAMINATIONS-TC-003 | Combine two or more subjects for pass/fail and GPA calculations | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ADVANCED_EXAMINATIONS-TC-004 | Optional/excluded subjects, grace marks and fail highlighting | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ADVANCED_EXAMINATIONS-TC-005 | Teacher evaluation notes and attendance on report card | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ADVANCED_EXAMINATIONS-TC-006 | Class/section merit rank, fail list and performance distribution | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ADVANCED_EXAMINATIONS-TC-007 | Custom report card templates, seals, logos and auto-signatures | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ADVANCED_EXAMINATIONS-TC-008 | Compact and detailed tabulations, teacher-wise and subject-wise analytics | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ADVANCED_EXAMINATIONS-TC-009 | School-specific and madrasa-specific layouts from brochure examples | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ADVANCED_EXAMINATIONS-TC-010 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M2-ADVANCED_EXAMINATIONS-TC-011 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M2-ADVANCED_EXAMINATIONS-TC-012 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
