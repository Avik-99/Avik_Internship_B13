# Online Courses, Assignments & Quizzes — Acceptance Criteria

**Module:** `learning-management`  |  **Requirement namespace:** `M3-LEARNING_MANAGEMENT`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M3-LEARNING_MANAGEMENT-AC-001 | Authorized Teacher can complete: google classroom-like online course workspace. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-LEARNING_MANAGEMENT-AC-002 | Authorized Teacher can complete: learning materials, attachments, class notes and published syllabus. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-LEARNING_MANAGEMENT-AC-003 | Authorized Teacher can complete: assignments, submission windows and uploads. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-LEARNING_MANAGEMENT-AC-004 | Authorized Teacher can complete: teacher reviews of submitted files and online marking. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-LEARNING_MANAGEMENT-AC-005 | Authorized Teacher can complete: mcq quiz bank, attempts, scoring and time limits. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-LEARNING_MANAGEMENT-AC-006 | Authorized Teacher can complete: student course activity and progress dashboards. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-LEARNING_MANAGEMENT-AC-007 | Authorized Teacher can complete: optional sync of graded assessment outcomes into the results module. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M3-LEARNING_MANAGEMENT-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: Teacher, Student, AcademicOfficer.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
