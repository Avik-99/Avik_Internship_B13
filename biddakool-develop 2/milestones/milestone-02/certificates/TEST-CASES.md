# Certificates & Enhanced ID Card Designer — Test Cases

**Module:** `certificates`  |  **Requirement namespace:** `M2-CERTIFICATES`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M2-CERTIFICATES-TC-001 | Issue character/testimonial, transfer and other school certificates | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-CERTIFICATES-TC-002 | Configurable certificate numbering and verification links | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-CERTIFICATES-TC-003 | ID front/back template designer with portrait/landscape layouts | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-CERTIFICATES-TC-004 | Separate teacher, staff, student and campus templates | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-CERTIFICATES-TC-005 | Merge authorized dynamic profile fields and headmaster signature | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-CERTIFICATES-TC-006 | Bulk print and PDF export with issuance audit | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-CERTIFICATES-TC-007 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M2-CERTIFICATES-TC-008 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M2-CERTIFICATES-TC-009 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
