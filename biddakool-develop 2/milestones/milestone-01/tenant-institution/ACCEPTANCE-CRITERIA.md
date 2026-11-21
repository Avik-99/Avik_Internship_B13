# Tenant & Institution Configuration — Acceptance Criteria

**Module:** `tenant-institution`  |  **Requirement namespace:** `M1-TENANT_INSTITUTION`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M1-TENANT_INSTITUTION-AC-001 | Authorized PlatformAdmin can complete: tenant provisioning and isolated institution settings. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-TENANT_INSTITUTION-AC-002 | Authorized PlatformAdmin can complete: institution type: school, college, university, medical college, madrasa or training center. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-TENANT_INSTITUTION-AC-003 | Authorized PlatformAdmin can complete: contact information, address, logos, letterhead, timezone, bangla/english locale and public profile. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-TENANT_INSTITUTION-AC-004 | Authorized PlatformAdmin can complete: campus records, shifts, working weekdays, holiday calendar and academic date formats. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-TENANT_INSTITUTION-AC-005 | Authorized PlatformAdmin can complete: per-tenant module enablement and configurable policies. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-TENANT_INSTITUTION-AC-006 | Authorized PlatformAdmin can complete: institution dashboard with tenant-level counts and quick links. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M1-TENANT_INSTITUTION-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: PlatformAdmin, InstitutionAdmin.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
