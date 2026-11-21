# Advanced Academic & Operational Analytics — Developer Task Backlog

**Module:** `analytics-insights`  |  **Requirement namespace:** `M3-ANALYTICS_INSIGHTS`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/AnalyticsInsights` and `apps/web/src/features/analytics-insights`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M3-ANALYTICS_INSIGHTS-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M3-ANALYTICS_INSIGHTS-T-002 | Domain and EF Core | Implement AnalyticsSnapshot, ReportingDimension, KpiDefinition, InsightRule plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M3-ANALYTICS_INSIGHTS-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M3-ANALYTICS_INSIGHTS-T-004 | Longitudinal attendance, exam, fee and staff trends | Backend API + frontend journey for: Longitudinal attendance, exam, fee and staff trends | Reviewed behavior, access checks and automated tests for longitudinal attendance, exam, fee and staff trends |
| M3-ANALYTICS_INSIGHTS-T-005 | Student performance by course, program, year and cohort | Backend API + frontend journey for: Student performance by course, program, year and cohort | Reviewed behavior, access checks and automated tests for student performance by course, program, year and cohort |
| M3-ANALYTICS_INSIGHTS-T-006 | Grade distribution, pass/fail and institutional comparison | Backend API + frontend journey for: Grade distribution, pass/fail and institutional comparison | Reviewed behavior, access checks and automated tests for grade distribution, pass/fail and institutional comparison |
| M3-ANALYTICS_INSIGHTS-T-007 | Teacher/class-level performance analysis with fair-context metadata | Backend API + frontend journey for: Teacher/class-level performance analysis with fair-context metadata | Reviewed behavior, access checks and automated tests for teacher/class-level performance analysis with fair-context metadata |
| M3-ANALYTICS_INSIGHTS-T-008 | At-risk indicators based on transparent policy-defined thresholds | Backend API + frontend journey for: At-risk indicators based on transparent policy-defined thresholds | Reviewed behavior, access checks and automated tests for at-risk indicators based on transparent policy-defined thresholds |
| M3-ANALYTICS_INSIGHTS-T-009 | Institution-level analytics exports with authorized drilldowns | Backend API + frontend journey for: Institution-level analytics exports with authorized drilldowns | Reviewed behavior, access checks and automated tests for institution-level analytics exports with authorized drilldowns |
| M3-ANALYTICS_INSIGHTS-T-010 | Optional AI-assisted insights gated by privacy controls | Backend API + frontend journey for: Optional AI-assisted insights gated by privacy controls | Reviewed behavior, access checks and automated tests for optional ai-assisted insights gated by privacy controls |
| M3-ANALYTICS_INSIGHTS-T-011 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M3-ANALYTICS_INSIGHTS-T-012 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

## Parallelization plan

1. **Contract owner:** Validate requirements, domain, endpoints and migration proposal; secure review sign-off.
2. **Backend developer(s):** Build aggregates, EF Core mappings, CQRS requests, permissions and events behind approved contract.
3. **Frontend developer(s):** Build Next.js screens against generated OpenAPI mock/typed client.
4. **QA developer:** Build acceptance, contract, tenant-isolation and negative-path tests independently.
5. **Integration developer:** Wire consumers after contract is stable and run docker-compose/E2E scenarios.

## Pull request merge policy

- PRs should be small and scoped to this module; one migration owner per module.
- A contract breaking change requires ADR + affected consumers approval before merge.
- No PR is done without an appropriate test, updated docs and reviewer.
