# Examinations, Grades & Results — Acceptance Criteria

**Module:** `assessment-results`  |  **Requirement namespace:** `M1-ASSESSMENT_RESULTS`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M1-ASSESSMENT_RESULTS-AC-001 | Authorized AcademicOfficer can complete: exam categories, assessments, exam components and subject/course mapping. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-ASSESSMENT_RESULTS-AC-002 | Authorized AcademicOfficer can complete: full marks, minimum pass marks, grade boundaries and basic weighting. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-ASSESSMENT_RESULTS-AC-003 | Authorized AcademicOfficer can complete: teacher-owned marks entry and approval workflow. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-ASSESSMENT_RESULTS-AC-004 | Authorized AcademicOfficer can complete: grade, percentage, gpa/cgpa compatible calculation; configurable grading policy. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-ASSESSMENT_RESULTS-AC-005 | Authorized AcademicOfficer can complete: provisional vs published results with authorized release. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-ASSESSMENT_RESULTS-AC-006 | Authorized AcademicOfficer can complete: printable exam result sheet, subject performance and report cards. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-ASSESSMENT_RESULTS-AC-007 | Authorized AcademicOfficer can complete: tabulation sheet, pass/fail and simple merit order when allowed. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-ASSESSMENT_RESULTS-AC-008 | Authorized AcademicOfficer can complete: guardian/student visibility only after result publication. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-ASSESSMENT_RESULTS-AC-009 | Authorized AcademicOfficer can complete: academic result snapshots for historical reproducibility. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M1-ASSESSMENT_RESULTS-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: AcademicOfficer, Teacher, ExamController, Student, Guardian.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
