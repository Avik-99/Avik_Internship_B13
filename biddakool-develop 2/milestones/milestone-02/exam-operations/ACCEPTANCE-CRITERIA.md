# Exam Admit Cards & Seat Plans — Acceptance Criteria

**Module:** `exam-operations`  |  **Requirement namespace:** `M2-EXAM_OPERATIONS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M2-EXAM_OPERATIONS-AC-001 | Authorized ExamController can complete: admit cards with photo, student identifiers, subjects, date/time and signature. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-EXAM_OPERATIONS-AC-002 | Authorized ExamController can complete: exam seat plan by room capacity and candidate eligibility. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-EXAM_OPERATIONS-AC-003 | Authorized ExamController can complete: seat cards with student photo, class/group, shift and roll. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-EXAM_OPERATIONS-AC-004 | Authorized ExamController can complete: room invigilator assignment and signature fields. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-EXAM_OPERATIONS-AC-005 | Authorized ExamController can complete: printable bulk pdf generation with preview and audit. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-EXAM_OPERATIONS-AC-006 | Authorized ExamController can complete: exam admission eligibility integration with institution policy. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M2-EXAM_OPERATIONS-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: ExamController, AcademicOfficer, Student.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
