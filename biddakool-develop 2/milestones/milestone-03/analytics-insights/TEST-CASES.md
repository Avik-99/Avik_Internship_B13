# Advanced Academic & Operational Analytics — Test Cases

**Module:** `analytics-insights`  |  **Requirement namespace:** `M3-ANALYTICS_INSIGHTS`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M3-ANALYTICS_INSIGHTS-TC-001 | Longitudinal attendance, exam, fee and staff trends | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-ANALYTICS_INSIGHTS-TC-002 | Student performance by course, program, year and cohort | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-ANALYTICS_INSIGHTS-TC-003 | Grade distribution, pass/fail and institutional comparison | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-ANALYTICS_INSIGHTS-TC-004 | Teacher/class-level performance analysis with fair-context metadata | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-ANALYTICS_INSIGHTS-TC-005 | At-risk indicators based on transparent policy-defined thresholds | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-ANALYTICS_INSIGHTS-TC-006 | Institution-level analytics exports with authorized drilldowns | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-ANALYTICS_INSIGHTS-TC-007 | Optional AI-assisted insights gated by privacy controls | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-ANALYTICS_INSIGHTS-TC-008 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M3-ANALYTICS_INSIGHTS-TC-009 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M3-ANALYTICS_INSIGHTS-TC-010 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
