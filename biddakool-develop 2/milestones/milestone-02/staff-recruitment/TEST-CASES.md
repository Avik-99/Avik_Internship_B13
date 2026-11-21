# Faculty & Staff Recruitment — Test Cases

**Module:** `staff-recruitment`  |  **Requirement namespace:** `M2-STAFF_RECRUITMENT`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M2-STAFF_RECRUITMENT-TC-001 | Create teaching and non-teaching vacancies and public application windows | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-STAFF_RECRUITMENT-TC-002 | Job applicant profile, documents and online submission | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-STAFF_RECRUITMENT-TC-003 | Recruitment application fee and verification | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-STAFF_RECRUITMENT-TC-004 | Print submitted application and recruitment admit card | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-STAFF_RECRUITMENT-TC-005 | Shortlisting, interview stages and offer tracking | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-STAFF_RECRUITMENT-TC-006 | Convert accepted applicant into M1 staff member | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-STAFF_RECRUITMENT-TC-007 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M2-STAFF_RECRUITMENT-TC-008 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M2-STAFF_RECRUITMENT-TC-009 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
