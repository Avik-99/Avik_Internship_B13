# Donations & Donor Pledges — Acceptance Criteria

**Module:** `donations`  |  **Requirement namespace:** `M3-DONATIONS`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M3-DONATIONS-AC-001 | Authorized FinanceManager can complete: donor profile and communication consent. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-DONATIONS-AC-002 | Authorized FinanceManager can complete: monthly/annual pledge schedules and expected dues. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-DONATIONS-AC-003 | Authorized FinanceManager can complete: record one-time or recurring donation receipts. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-DONATIONS-AC-004 | Authorized FinanceManager can complete: donor receipts and acknowledgments. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-DONATIONS-AC-005 | Authorized FinanceManager can complete: donation due reminders through messaging. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-DONATIONS-AC-006 | Authorized FinanceManager can complete: accounting income integration and pledge status reports. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M3-DONATIONS-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: FinanceManager, FundraisingOfficer, InstitutionAdmin.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
