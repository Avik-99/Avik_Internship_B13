# Advanced Grading, Analysis & Report Cards — Acceptance Criteria

**Module:** `advanced-examinations`  |  **Requirement namespace:** `M2-ADVANCED_EXAMINATIONS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M2-ADVANCED_EXAMINATIONS-AC-001 | Authorized ExamController can complete: weighted class tests, monthly tests, homework and continuous assessments. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ADVANCED_EXAMINATIONS-AC-002 | Authorized ExamController can complete: aggregate semester, annual and cross-term results. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ADVANCED_EXAMINATIONS-AC-003 | Authorized ExamController can complete: combine two or more subjects for pass/fail and gpa calculations. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ADVANCED_EXAMINATIONS-AC-004 | Authorized ExamController can complete: optional/excluded subjects, grace marks and fail highlighting. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ADVANCED_EXAMINATIONS-AC-005 | Authorized ExamController can complete: teacher evaluation notes and attendance on report card. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ADVANCED_EXAMINATIONS-AC-006 | Authorized ExamController can complete: class/section merit rank, fail list and performance distribution. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ADVANCED_EXAMINATIONS-AC-007 | Authorized ExamController can complete: custom report card templates, seals, logos and auto-signatures. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ADVANCED_EXAMINATIONS-AC-008 | Authorized ExamController can complete: compact and detailed tabulations, teacher-wise and subject-wise analytics. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-ADVANCED_EXAMINATIONS-AC-009 | Authorized ExamController can complete: school-specific and madrasa-specific layouts from brochure examples. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M2-ADVANCED_EXAMINATIONS-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: ExamController, AcademicOfficer, Teacher.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
