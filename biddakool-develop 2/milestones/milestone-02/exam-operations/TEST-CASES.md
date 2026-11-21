# Exam Admit Cards & Seat Plans — Test Cases

**Module:** `exam-operations`  |  **Requirement namespace:** `M2-EXAM_OPERATIONS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M2-EXAM_OPERATIONS-TC-001 | Admit cards with photo, student identifiers, subjects, date/time and signature | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-EXAM_OPERATIONS-TC-002 | Exam seat plan by room capacity and candidate eligibility | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-EXAM_OPERATIONS-TC-003 | Seat cards with student photo, class/group, shift and roll | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-EXAM_OPERATIONS-TC-004 | Room invigilator assignment and signature fields | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-EXAM_OPERATIONS-TC-005 | Printable bulk PDF generation with preview and audit | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-EXAM_OPERATIONS-TC-006 | Exam admission eligibility integration with institution policy | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-EXAM_OPERATIONS-TC-007 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M2-EXAM_OPERATIONS-TC-008 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M2-EXAM_OPERATIONS-TC-009 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
