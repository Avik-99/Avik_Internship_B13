# Student & Staff Attendance — Acceptance Criteria

**Module:** `attendance`  |  **Requirement namespace:** `M1-ATTENDANCE`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M1-ATTENDANCE-AC-001 | Authorized InstitutionAdmin can complete: record present/absent/late/excused status for an offering/class session. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-ATTENDANCE-AC-002 | Authorized InstitutionAdmin can complete: bulk class roll-call with draft/save/finalize states. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-ATTENDANCE-AC-003 | Authorized InstitutionAdmin can complete: staff attendance entry independent of student session attendance. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-ATTENDANCE-AC-004 | Authorized InstitutionAdmin can complete: attendance corrections requiring permission and reason. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-ATTENDANCE-AC-005 | Authorized InstitutionAdmin can complete: daily, monthly, student, teacher, campus and course reports. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-ATTENDANCE-AC-006 | Authorized InstitutionAdmin can complete: guardians view linked students’ attendance and summary. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-ATTENDANCE-AC-007 | Authorized InstitutionAdmin can complete: attendance percentages computed using configurable session eligibility. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-ATTENDANCE-AC-008 | Authorized InstitutionAdmin can complete: expose attendance reporting data for future payroll and medical eligibility. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M1-ATTENDANCE-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: InstitutionAdmin, AcademicOfficer, Teacher, HRManager, Guardian, Student.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
