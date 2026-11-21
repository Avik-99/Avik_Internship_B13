# Academic Registry & Curriculum — Acceptance Criteria

**Module:** `academic-registry`  |  **Requirement namespace:** `M1-ACADEMIC_REGISTRY`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M1-ACADEMIC_REGISTRY-AC-001 | Authorized InstitutionAdmin can complete: academic years, sessions, terms/semesters and active term selection. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-ACADEMIC_REGISTRY-AC-002 | Authorized InstitutionAdmin can complete: departments, faculties, programs, batches, levels, groups and school class labels. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-ACADEMIC_REGISTRY-AC-003 | Authorized InstitutionAdmin can complete: course/subject catalog including codes, optional credits and pass criteria. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-ACADEMIC_REGISTRY-AC-004 | Authorized InstitutionAdmin can complete: course offerings / class sections scheduled in a term and assigned to teachers. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-ACADEMIC_REGISTRY-AC-005 | Authorized InstitutionAdmin can complete: curriculum and assessment policy versions per program. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-ACADEMIC_REGISTRY-AC-006 | Authorized InstitutionAdmin can complete: configurable gpa/grade scales and academic calendar rules. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-ACADEMIC_REGISTRY-AC-007 | Authorized InstitutionAdmin can complete: support subject combinations and optional courses without custom columns. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M1-ACADEMIC_REGISTRY-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: InstitutionAdmin, AcademicOfficer, Teacher.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
