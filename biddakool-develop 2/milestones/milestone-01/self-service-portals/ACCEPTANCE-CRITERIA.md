# Student, Guardian, Teacher & Admin Portals — Acceptance Criteria

**Module:** `self-service-portals`  |  **Requirement namespace:** `M1-SELF_SERVICE_PORTALS`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M1-SELF_SERVICE_PORTALS-AC-001 | Authorized InstitutionAdmin can complete: admin home with student/staff, fees, dues, attendance and exam summaries. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-SELF_SERVICE_PORTALS-AC-002 | Authorized InstitutionAdmin can complete: teacher portal for assigned students, attendance, marks, schedules and notices. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-SELF_SERVICE_PORTALS-AC-003 | Authorized InstitutionAdmin can complete: student portal for profile, current courses, attendance, results, fees and notices. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-SELF_SERVICE_PORTALS-AC-004 | Authorized InstitutionAdmin can complete: guardian portal with linked-child switcher and access to authorized child records. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-SELF_SERVICE_PORTALS-AC-005 | Authorized InstitutionAdmin can complete: accountant workspace for collections, receipts and dues. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-SELF_SERVICE_PORTALS-AC-006 | Authorized InstitutionAdmin can complete: role-aware navigation and responsive bangla/english ux. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-SELF_SERVICE_PORTALS-AC-007 | Authorized InstitutionAdmin can complete: download protected receipts, profile pages and result reports. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M1-SELF_SERVICE_PORTALS-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: InstitutionAdmin, AcademicOfficer, Accountant, Teacher, Student, Guardian.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
