# Students, Guardians & Enrollment — Acceptance Criteria

**Module:** `student-lifecycle`  |  **Requirement namespace:** `M1-STUDENT_LIFECYCLE`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M1-STUDENT_LIFECYCLE-AC-001 | Authorized InstitutionAdmin can complete: admin-driven student enrollment with admission number and contact details. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-STUDENT_LIFECYCLE-AC-002 | Authorized InstitutionAdmin can complete: student profile including photo, emergency contact, academic history and documents. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-STUDENT_LIFECYCLE-AC-003 | Authorized InstitutionAdmin can complete: one or more guardians linked to a student with verified relationship and portal access. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-STUDENT_LIFECYCLE-AC-004 | Authorized InstitutionAdmin can complete: program/cohort/class/section placement and academic session enrollment. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-STUDENT_LIFECYCLE-AC-005 | Authorized InstitutionAdmin can complete: university/medical course-offering registration and enrollment history. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-STUDENT_LIFECYCLE-AC-006 | Authorized InstitutionAdmin can complete: promotion, transfer, graduation, withdrawal and re-admission status transitions. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-STUDENT_LIFECYCLE-AC-007 | Authorized InstitutionAdmin can complete: class roll number uniqueness within active placement scope. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-STUDENT_LIFECYCLE-AC-008 | Authorized InstitutionAdmin can complete: tenant-specific student id card and downloadable profile information. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M1-STUDENT_LIFECYCLE-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: InstitutionAdmin, AdmissionOfficer, AcademicOfficer, Student, Guardian.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
