# Online Application & Admission — Test Cases

**Module:** `online-admissions`  |  **Requirement namespace:** `M2-ONLINE_ADMISSIONS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M2-ONLINE_ADMISSIONS-TC-001 | Public admission campaigns, eligibility criteria and available seats | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ONLINE_ADMISSIONS-TC-002 | Configurable application forms and applicant document uploads | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ONLINE_ADMISSIONS-TC-003 | Application submission with reference number and downloadable filled form | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ONLINE_ADMISSIONS-TC-004 | Application fee charge/payment state | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ONLINE_ADMISSIONS-TC-005 | Application review, status changes and admissions selection | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ONLINE_ADMISSIONS-TC-006 | Admit card after verified payment when admission exam is enabled | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ONLINE_ADMISSIONS-TC-007 | Offer, accept, enroll and reject transitions with audit | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-ONLINE_ADMISSIONS-TC-008 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M2-ONLINE_ADMISSIONS-TC-009 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M2-ONLINE_ADMISSIONS-TC-010 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
