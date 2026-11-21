# SaaS Commercial Operations & Enterprise Extensions — Acceptance Criteria

**Module:** `saas-enterprise`  |  **Requirement namespace:** `M3-SAAS_ENTERPRISE`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M3-SAAS_ENTERPRISE-AC-001 | Authorized PlatformAdmin can complete: subscription plans, feature entitlements and usage limit enforcement. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-SAAS_ENTERPRISE-AC-002 | Authorized PlatformAdmin can complete: trial, activation, renewal and plan change workflows. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-SAAS_ENTERPRISE-AC-003 | Authorized PlatformAdmin can complete: institution self-service branding and optional custom domains. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-SAAS_ENTERPRISE-AC-004 | Authorized PlatformAdmin can complete: central platform support tools with audited break-glass access. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-SAAS_ENTERPRISE-AC-005 | Authorized PlatformAdmin can complete: tenant-scoped backups, export and disaster recovery procedures. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-SAAS_ENTERPRISE-AC-006 | Authorized PlatformAdmin can complete: advanced campus hierarchy, delegated regional admin and consolidated reporting. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-SAAS_ENTERPRISE-AC-007 | Authorized PlatformAdmin can complete: external api keys, integration registry and rate limits. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-SAAS_ENTERPRISE-AC-008 | Authorized PlatformAdmin can complete: automated provisioning/deprovisioning and compliant tenant data export. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M3-SAAS_ENTERPRISE-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: PlatformAdmin, InstitutionAdmin, SupportAgent.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
