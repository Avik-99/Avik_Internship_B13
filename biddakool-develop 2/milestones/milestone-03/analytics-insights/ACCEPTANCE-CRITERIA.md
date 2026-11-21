# Advanced Academic & Operational Analytics — Acceptance Criteria

**Module:** `analytics-insights`  |  **Requirement namespace:** `M3-ANALYTICS_INSIGHTS`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M3-ANALYTICS_INSIGHTS-AC-001 | Authorized InstitutionAdmin can complete: longitudinal attendance, exam, fee and staff trends. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-ANALYTICS_INSIGHTS-AC-002 | Authorized InstitutionAdmin can complete: student performance by course, program, year and cohort. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-ANALYTICS_INSIGHTS-AC-003 | Authorized InstitutionAdmin can complete: grade distribution, pass/fail and institutional comparison. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-ANALYTICS_INSIGHTS-AC-004 | Authorized InstitutionAdmin can complete: teacher/class-level performance analysis with fair-context metadata. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-ANALYTICS_INSIGHTS-AC-005 | Authorized InstitutionAdmin can complete: at-risk indicators based on transparent policy-defined thresholds. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-ANALYTICS_INSIGHTS-AC-006 | Authorized InstitutionAdmin can complete: institution-level analytics exports with authorized drilldowns. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-ANALYTICS_INSIGHTS-AC-007 | Authorized InstitutionAdmin can complete: optional ai-assisted insights gated by privacy controls. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M3-ANALYTICS_INSIGHTS-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: InstitutionAdmin, AcademicOfficer, Analyst.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
