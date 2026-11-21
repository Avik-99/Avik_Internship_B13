# Hifz Department & Assessment — Acceptance Criteria

**Module:** `hifz`  |  **Requirement namespace:** `M3-HIFZ`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M3-HIFZ-AC-001 | Authorized HifzTeacher can complete: hifz department/group creation and group teacher assignment. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-HIFZ-AC-002 | Authorized HifzTeacher can complete: student group membership, list, filters and search. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-HIFZ-AC-003 | Authorized HifzTeacher can complete: monthly memorization progress and lesson observations. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-HIFZ-AC-004 | Authorized HifzTeacher can complete: hifz-specific examination categories, marks and outcomes. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-HIFZ-AC-005 | Authorized HifzTeacher can complete: hifz tabulation, merit lists and specialized report formats. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-HIFZ-AC-006 | Authorized HifzTeacher can complete: allow hifz-specific workflows without introducing school-only constraints elsewhere. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M3-HIFZ-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: HifzTeacher, AcademicOfficer, Student, Guardian.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
