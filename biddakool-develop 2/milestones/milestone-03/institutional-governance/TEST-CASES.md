# Governance, Committees & Audit — Test Cases

**Module:** `institutional-governance`  |  **Requirement namespace:** `M3-INSTITUTIONAL_GOVERNANCE`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M3-INSTITUTIONAL_GOVERNANCE-TC-001 | Committee roles, terms, agenda and meeting minutes | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-INSTITUTIONAL_GOVERNANCE-TC-002 | Approval chains for major academic and financial decisions | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-INSTITUTIONAL_GOVERNANCE-TC-003 | Policy approval and review versions | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-INSTITUTIONAL_GOVERNANCE-TC-004 | Audit log search, filters and privileged access reviews | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-INSTITUTIONAL_GOVERNANCE-TC-005 | Role delegation and temporary permissions | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-INSTITUTIONAL_GOVERNANCE-TC-006 | Retention and export controls for institution records | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-INSTITUTIONAL_GOVERNANCE-TC-007 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M3-INSTITUTIONAL_GOVERNANCE-TC-008 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M3-INSTITUTIONAL_GOVERNANCE-TC-009 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
