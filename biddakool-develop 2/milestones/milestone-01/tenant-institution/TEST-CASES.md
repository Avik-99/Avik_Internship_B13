# Tenant & Institution Configuration — Test Cases

**Module:** `tenant-institution`  |  **Requirement namespace:** `M1-TENANT_INSTITUTION`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M1-TENANT_INSTITUTION-TC-001 | Tenant provisioning and isolated institution settings | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-TENANT_INSTITUTION-TC-002 | Institution type: school, college, university, medical college, madrasa or training center | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-TENANT_INSTITUTION-TC-003 | Contact information, address, logos, letterhead, timezone, Bangla/English locale and public profile | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-TENANT_INSTITUTION-TC-004 | Campus records, shifts, working weekdays, holiday calendar and academic date formats | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-TENANT_INSTITUTION-TC-005 | Per-tenant module enablement and configurable policies | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-TENANT_INSTITUTION-TC-006 | Institution dashboard with tenant-level counts and quick links | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-TENANT_INSTITUTION-TC-007 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M1-TENANT_INSTITUTION-TC-008 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M1-TENANT_INSTITUTION-TC-009 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
