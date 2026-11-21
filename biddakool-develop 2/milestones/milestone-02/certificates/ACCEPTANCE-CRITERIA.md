# Certificates & Enhanced ID Card Designer — Acceptance Criteria

**Module:** `certificates`  |  **Requirement namespace:** `M2-CERTIFICATES`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M2-CERTIFICATES-AC-001 | Authorized InstitutionAdmin can complete: issue character/testimonial, transfer and other school certificates. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-CERTIFICATES-AC-002 | Authorized InstitutionAdmin can complete: configurable certificate numbering and verification links. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-CERTIFICATES-AC-003 | Authorized InstitutionAdmin can complete: id front/back template designer with portrait/landscape layouts. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-CERTIFICATES-AC-004 | Authorized InstitutionAdmin can complete: separate teacher, staff, student and campus templates. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-CERTIFICATES-AC-005 | Authorized InstitutionAdmin can complete: merge authorized dynamic profile fields and headmaster signature. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-CERTIFICATES-AC-006 | Authorized InstitutionAdmin can complete: bulk print and pdf export with issuance audit. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M2-CERTIFICATES-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: InstitutionAdmin, AcademicOfficer, Student, Staff.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
