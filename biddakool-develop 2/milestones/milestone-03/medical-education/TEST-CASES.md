# Medical College Academic Operations — Test Cases

**Module:** `medical-education`  |  **Requirement namespace:** `M3-MEDICAL_EDUCATION`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M3-MEDICAL_EDUCATION-TC-001 | Lecture, tutorial, ward and clinical group teaching sessions | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-MEDICAL_EDUCATION-TC-002 | Full-batch, group/ward and subject-specific attendance reporting | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-MEDICAL_EDUCATION-TC-003 | Configurable attendance warnings including the example 75% rule | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-MEDICAL_EDUCATION-TC-004 | Multi-stage leave recommendation/forwarding/approval in medical programs | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-MEDICAL_EDUCATION-TC-005 | Item, card and term exam marking with rank/fail highlighting | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-MEDICAL_EDUCATION-TC-006 | Professional exam eligibility report with reasons from attendance and results | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-MEDICAL_EDUCATION-TC-007 | Student medical academic dashboard with threshold warnings | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-MEDICAL_EDUCATION-TC-008 | Anonymous student-to-teacher evaluation and aggregate summaries | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-MEDICAL_EDUCATION-TC-009 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M3-MEDICAL_EDUCATION-TC-010 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M3-MEDICAL_EDUCATION-TC-011 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
