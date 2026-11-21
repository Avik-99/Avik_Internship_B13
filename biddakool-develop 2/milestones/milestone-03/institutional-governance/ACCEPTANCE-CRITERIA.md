# Governance, Committees & Audit — Acceptance Criteria

**Module:** `institutional-governance`  |  **Requirement namespace:** `M3-INSTITUTIONAL_GOVERNANCE`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M3-INSTITUTIONAL_GOVERNANCE-AC-001 | Authorized InstitutionAdmin can complete: committee roles, terms, agenda and meeting minutes. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-INSTITUTIONAL_GOVERNANCE-AC-002 | Authorized InstitutionAdmin can complete: approval chains for major academic and financial decisions. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-INSTITUTIONAL_GOVERNANCE-AC-003 | Authorized InstitutionAdmin can complete: policy approval and review versions. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-INSTITUTIONAL_GOVERNANCE-AC-004 | Authorized InstitutionAdmin can complete: audit log search, filters and privileged access reviews. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-INSTITUTIONAL_GOVERNANCE-AC-005 | Authorized InstitutionAdmin can complete: role delegation and temporary permissions. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-INSTITUTIONAL_GOVERNANCE-AC-006 | Authorized InstitutionAdmin can complete: retention and export controls for institution records. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M3-INSTITUTIONAL_GOVERNANCE-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: InstitutionAdmin, CommitteeMember, Auditor.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
