# Online Application & Admission — Acceptance Criteria

**Module:** `online-admissions`  |  **Requirement namespace:** `M2-ONLINE_ADMISSIONS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M2-ONLINE_ADMISSIONS-AC-001 | Authorized Applicant can complete: public admission campaigns, eligibility criteria and available seats. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ONLINE_ADMISSIONS-AC-002 | Authorized Applicant can complete: configurable application forms and applicant document uploads. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ONLINE_ADMISSIONS-AC-003 | Authorized Applicant can complete: application submission with reference number and downloadable filled form. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ONLINE_ADMISSIONS-AC-004 | Authorized Applicant can complete: application fee charge/payment state. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ONLINE_ADMISSIONS-AC-005 | Authorized Applicant can complete: application review, status changes and admissions selection. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ONLINE_ADMISSIONS-AC-006 | Authorized Applicant can complete: admit card after verified payment when admission exam is enabled. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ONLINE_ADMISSIONS-AC-007 | Authorized Applicant can complete: offer, accept, enroll and reject transitions with audit. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M2-ONLINE_ADMISSIONS-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: Applicant, AdmissionOfficer, InstitutionAdmin.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
