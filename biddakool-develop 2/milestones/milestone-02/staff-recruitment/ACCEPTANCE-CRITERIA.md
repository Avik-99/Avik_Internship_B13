# Faculty & Staff Recruitment — Acceptance Criteria

**Module:** `staff-recruitment`  |  **Requirement namespace:** `M2-STAFF_RECRUITMENT`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M2-STAFF_RECRUITMENT-AC-001 | Authorized Applicant can complete: create teaching and non-teaching vacancies and public application windows. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-STAFF_RECRUITMENT-AC-002 | Authorized Applicant can complete: job applicant profile, documents and online submission. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-STAFF_RECRUITMENT-AC-003 | Authorized Applicant can complete: recruitment application fee and verification. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-STAFF_RECRUITMENT-AC-004 | Authorized Applicant can complete: print submitted application and recruitment admit card. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-STAFF_RECRUITMENT-AC-005 | Authorized Applicant can complete: shortlisting, interview stages and offer tracking. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-STAFF_RECRUITMENT-AC-006 | Authorized Applicant can complete: convert accepted applicant into m1 staff member. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M2-STAFF_RECRUITMENT-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: Applicant, HRManager, InstitutionAdmin.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
