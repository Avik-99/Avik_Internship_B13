# Identity & Access Control — Test Cases

**Module:** `foundation-identity`  |  **Requirement namespace:** `M1-FOUNDATION_IDENTITY`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M1-FOUNDATION_IDENTITY-TC-001 | Tenant-scoped login, logout, invitation and password recovery | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-FOUNDATION_IDENTITY-TC-002 | Separate platform-level and institution-level access; membership selection for a multi-institution user | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-FOUNDATION_IDENTITY-TC-003 | Institution-configurable roles with explicit permissions for each action | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-FOUNDATION_IDENTITY-TC-004 | Faculty, accountant, student, guardian and admin login identities | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-FOUNDATION_IDENTITY-TC-005 | Audit privileged actions; suspend accounts and revoke active sessions | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-FOUNDATION_IDENTITY-TC-006 | Secure file/document download authorization for results, identity cards and receipts | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-FOUNDATION_IDENTITY-TC-007 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M1-FOUNDATION_IDENTITY-TC-008 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M1-FOUNDATION_IDENTITY-TC-009 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.

## Cross-membership regression

Give one global user a teacher membership in tenant A and a guardian membership in tenant B. Verify the institution list, switch contexts and assert different permissions. Revoke B while the session is active and retry a previously successful read. B must deny access, while authorized A operations still succeed. Capture both HTTP outcomes and audit scope.
