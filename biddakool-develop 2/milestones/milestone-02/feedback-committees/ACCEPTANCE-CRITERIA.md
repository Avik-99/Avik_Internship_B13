# Feedback & Basic Committee Administration — Acceptance Criteria

**Module:** `feedback-committees`  |  **Requirement namespace:** `M2-FEEDBACK_COMMITTEES`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M2-FEEDBACK_COMMITTEES-AC-001 | Authorized Guardian can complete: guardian suggestions, feedback and complaint submission. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-FEEDBACK_COMMITTEES-AC-002 | Authorized Guardian can complete: categorization, ownership and response history. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-FEEDBACK_COMMITTEES-AC-003 | Authorized Guardian can complete: private vs published responses and closure status. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-FEEDBACK_COMMITTEES-AC-004 | Authorized Guardian can complete: administrative committee creation, dates and member roster. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-FEEDBACK_COMMITTEES-AC-005 | Authorized Guardian can complete: committee membership history and read permissions. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-FEEDBACK_COMMITTEES-AC-006 | Authorized Guardian can complete: response time and unresolved issue reports. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M2-FEEDBACK_COMMITTEES-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: Guardian, InstitutionAdmin, CommitteeMember.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
