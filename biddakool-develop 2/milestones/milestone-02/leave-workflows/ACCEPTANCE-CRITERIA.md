# Leave Request & Approvals — Acceptance Criteria

**Module:** `leave-workflows`  |  **Requirement namespace:** `M2-LEAVE_WORKFLOWS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M2-LEAVE_WORKFLOWS-AC-001 | Authorized Student can complete: student/guardian and staff leave application. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-LEAVE_WORKFLOWS-AC-002 | Authorized Student can complete: leave category, dates, attachments and reason. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-LEAVE_WORKFLOWS-AC-003 | Authorized Student can complete: flexible approval chain with recommend/forward/approve/reject. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-LEAVE_WORKFLOWS-AC-004 | Authorized Student can complete: leave balance and holiday overlap checks where appropriate. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-LEAVE_WORKFLOWS-AC-005 | Authorized Student can complete: leave history and reports by student/teacher. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-LEAVE_WORKFLOWS-AC-006 | Authorized Student can complete: approved leave integrated with attendance without deleting prior marks. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M2-LEAVE_WORKFLOWS-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: Student, Guardian, Teacher, HRManager, AcademicOfficer.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
