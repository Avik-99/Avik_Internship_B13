# Library & Lending — Acceptance Criteria

**Module:** `library`  |  **Requirement namespace:** `M3-LIBRARY`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M3-LIBRARY-AC-001 | Authorized Librarian can complete: catalog books, magazines, cds and other library assets. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-LIBRARY-AC-002 | Authorized Librarian can complete: multiple physical copies and searchable catalogue. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-LIBRARY-AC-003 | Authorized Librarian can complete: borrow and return transactions for authorized members. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-LIBRARY-AC-004 | Authorized Librarian can complete: loan due dates, reservation and overdue list. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-LIBRARY-AC-005 | Authorized Librarian can complete: lost/damaged copy adjustments and reports. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-LIBRARY-AC-006 | Authorized Librarian can complete: optional automated library fines invoiced to m1 fees. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M3-LIBRARY-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: Librarian, Student, Teacher.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
