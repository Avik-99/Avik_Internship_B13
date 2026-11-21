# Identity & Access Control — Acceptance Criteria

**Module:** `foundation-identity`  |  **Requirement namespace:** `M1-FOUNDATION_IDENTITY`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M1-FOUNDATION_IDENTITY-AC-001 | Authorized PlatformAdmin can complete: tenant-scoped login, logout, invitation and password recovery. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-FOUNDATION_IDENTITY-AC-002 | Authorized PlatformAdmin can complete: separate platform-level and institution-level access; membership selection for a multi-institution user. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-FOUNDATION_IDENTITY-AC-003 | Authorized PlatformAdmin can complete: institution-configurable roles with explicit permissions for each action. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-FOUNDATION_IDENTITY-AC-004 | Authorized PlatformAdmin can complete: faculty, accountant, student, guardian and admin login identities. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-FOUNDATION_IDENTITY-AC-005 | Authorized PlatformAdmin can complete: audit privileged actions; suspend accounts and revoke active sessions. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-FOUNDATION_IDENTITY-AC-006 | Authorized PlatformAdmin can complete: secure file/document download authorization for results, identity cards and receipts. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M1-FOUNDATION_IDENTITY-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: PlatformAdmin, InstitutionAdmin, Staff, Teacher, Student, Guardian.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
