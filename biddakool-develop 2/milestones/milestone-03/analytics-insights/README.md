# Advanced Academic & Operational Analytics

**Module:** `analytics-insights`  |  **Requirement namespace:** `M3-ANALYTICS_INSIGHTS`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Purpose:** Cross-domain analytical projections for decision support while protecting privacy and preserving source authority.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 15-18, 24-27, 31, 35-39, 55-57** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: AnalyticsSnapshot, ReportingDimension, KpiDefinition, InsightRule, AnalyticsExportJob. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Longitudinal attendance, exam, fee and staff trends
- Student performance by course, program, year and cohort
- Grade distribution, pass/fail and institutional comparison
- Teacher/class-level performance analysis with fair-context metadata
- At-risk indicators based on transparent policy-defined thresholds
- Institution-level analytics exports with authorized drilldowns
- Optional AI-assisted insights gated by privacy controls

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/AnalyticsInsights`.
- Next.js feature UI and typed client under `apps/web/src/features/analytics-insights`.
- Test project at `tests/AnalyticsInsights.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| attendance | Student & Staff Attendance | M1 |
| assessment-results | Examinations, Grades & Results | M1 |
| fee-management | Student Fees, Dues & Cash Collection | M1 |
| student-lifecycle | Students, Guardians & Enrollment | M1 |
| faculty-staff | Faculty, Teacher & Staff Directory | M1 |
| accounting-ledger | Accounting & General Ledger | M2 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
