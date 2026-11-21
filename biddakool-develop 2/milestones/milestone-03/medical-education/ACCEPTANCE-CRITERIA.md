# Medical College Academic Operations — Acceptance Criteria

**Module:** `medical-education`  |  **Requirement namespace:** `M3-MEDICAL_EDUCATION`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M3-MEDICAL_EDUCATION-AC-001 | Authorized MedicalAcademicOfficer can complete: lecture, tutorial, ward and clinical group teaching sessions. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-MEDICAL_EDUCATION-AC-002 | Authorized MedicalAcademicOfficer can complete: full-batch, group/ward and subject-specific attendance reporting. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-MEDICAL_EDUCATION-AC-003 | Authorized MedicalAcademicOfficer can complete: configurable attendance warnings including the example 75% rule. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-MEDICAL_EDUCATION-AC-004 | Authorized MedicalAcademicOfficer can complete: multi-stage leave recommendation/forwarding/approval in medical programs. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-MEDICAL_EDUCATION-AC-005 | Authorized MedicalAcademicOfficer can complete: item, card and term exam marking with rank/fail highlighting. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-MEDICAL_EDUCATION-AC-006 | Authorized MedicalAcademicOfficer can complete: professional exam eligibility report with reasons from attendance and results. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-MEDICAL_EDUCATION-AC-007 | Authorized MedicalAcademicOfficer can complete: student medical academic dashboard with threshold warnings. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-MEDICAL_EDUCATION-AC-008 | Authorized MedicalAcademicOfficer can complete: anonymous student-to-teacher evaluation and aggregate summaries. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M3-MEDICAL_EDUCATION-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: MedicalAcademicOfficer, ClinicalTeacher, Student, MedicalExamController.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
