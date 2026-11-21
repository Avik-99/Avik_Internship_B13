# Notices, Events & Calendar — Acceptance Criteria

**Module:** `notices-events`  |  **Requirement namespace:** `M1-NOTICES_EVENTS`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M1-NOTICES_EVENTS-AC-001 | Authorized InstitutionAdmin can complete: create public, institute-wide, program, class and staff notices. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-NOTICES_EVENTS-AC-002 | Authorized InstitutionAdmin can complete: attach documents and schedule publication/expiry. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-NOTICES_EVENTS-AC-003 | Authorized InstitutionAdmin can complete: read institution event calendar and academic holidays. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-NOTICES_EVENTS-AC-004 | Authorized InstitutionAdmin can complete: target student, guardian, teacher or staff audiences. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-NOTICES_EVENTS-AC-005 | Authorized InstitutionAdmin can complete: maintain read history if policy requires acknowledgement. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M1-NOTICES_EVENTS-AC-006 | Authorized InstitutionAdmin can complete: expose dashboard notice feed and important events. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M1-NOTICES_EVENTS-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: InstitutionAdmin, AcademicOfficer, Teacher, Student, Guardian.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
