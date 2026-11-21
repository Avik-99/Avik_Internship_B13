# Lesson Plans, Diaries & Student Progress — Acceptance Criteria

**Module:** `lesson-plans`  |  **Requirement namespace:** `M2-LESSON_PLANS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M2-LESSON_PLANS-AC-001 | Authorized Teacher can complete: teacher-created subject/course lesson plans by academic term. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-LESSON_PLANS-AC-002 | Authorized Teacher can complete: per-day class diary and homework tasks. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-LESSON_PLANS-AC-003 | Authorized Teacher can complete: individual student daily lesson evaluation and comments. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-LESSON_PLANS-AC-004 | Authorized Teacher can complete: monthly subject-wise progress summaries. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-LESSON_PLANS-AC-005 | Authorized Teacher can complete: student/guardian access to published diaries and evaluations. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-LESSON_PLANS-AC-006 | Authorized Teacher can complete: teacher workload views and learning progress export. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M2-LESSON_PLANS-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: Teacher, AcademicOfficer, Student, Guardian.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
