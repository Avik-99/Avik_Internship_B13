# Class, Teacher & Examination Timetables — Acceptance Criteria

**Module:** `scheduling`  |  **Requirement namespace:** `M1-SCHEDULING`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M1-SCHEDULING-AC-001 | Authorized AcademicOfficer can complete: weekly schedules with period times, weekdays and academic terms. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-SCHEDULING-AC-002 | Authorized AcademicOfficer can complete: class/section schedule views and cross-class overview. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-SCHEDULING-AC-003 | Authorized AcademicOfficer can complete: faculty/teacher personal and weekly combined timetables. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-SCHEDULING-AC-004 | Authorized AcademicOfficer can complete: classroom or room assignment. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-SCHEDULING-AC-005 | Authorized AcademicOfficer can complete: time-slot conflict detection for teacher, room and student group. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-SCHEDULING-AC-006 | Authorized AcademicOfficer can complete: basic examination timetable with start/end time. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-SCHEDULING-AC-007 | Authorized AcademicOfficer can complete: publish routines to student, guardian and teacher panels. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M1-SCHEDULING-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: AcademicOfficer, Teacher, Student, Guardian.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
