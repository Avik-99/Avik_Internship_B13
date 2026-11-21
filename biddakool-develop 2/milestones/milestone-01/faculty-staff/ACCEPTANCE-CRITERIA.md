# Faculty, Teacher & Staff Directory — Acceptance Criteria

**Module:** `faculty-staff`  |  **Requirement namespace:** `M1-FACULTY_STAFF`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M1-FACULTY_STAFF-AC-001 | Authorized InstitutionAdmin can complete: register teacher, faculty, employee and non-teaching staff profiles. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-FACULTY_STAFF-AC-002 | Authorized InstitutionAdmin can complete: employment designation, department, active status and employment dates. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-FACULTY_STAFF-AC-003 | Authorized InstitutionAdmin can complete: teacher subject and course-offering assignments. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-FACULTY_STAFF-AC-004 | Authorized InstitutionAdmin can complete: class teacher, adviser or academic supervisor assignments. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-FACULTY_STAFF-AC-005 | Authorized InstitutionAdmin can complete: profile view, search, filtering and downloadable staff profile. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-FACULTY_STAFF-AC-006 | Authorized InstitutionAdmin can complete: separate teaching duties from payroll and compensation data. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M1-FACULTY_STAFF-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: InstitutionAdmin, HRManager, AcademicOfficer, Teacher.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
