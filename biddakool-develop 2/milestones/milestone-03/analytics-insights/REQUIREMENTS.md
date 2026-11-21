# Advanced Academic & Operational Analytics — Functional Requirements

**Module:** `analytics-insights`  |  **Requirement namespace:** `M3-ANALYTICS_INSIGHTS`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Reference:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 15-18, 24-27, 31, 35-39, 55-57** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Functional requirements

| ID | Behavior to deliver | Priority | Reference |
| --- | --- | --- | --- |
| M3-ANALYTICS_INSIGHTS-FR-001 | Longitudinal attendance, exam, fee and staff trends | P3 | PDF p. 15-18, 24-27, 31, 35-39, 55-57 / Biddakool extension |
| M3-ANALYTICS_INSIGHTS-FR-002 | Student performance by course, program, year and cohort | P3 | PDF p. 15-18, 24-27, 31, 35-39, 55-57 / Biddakool extension |
| M3-ANALYTICS_INSIGHTS-FR-003 | Grade distribution, pass/fail and institutional comparison | P3 | PDF p. 15-18, 24-27, 31, 35-39, 55-57 / Biddakool extension |
| M3-ANALYTICS_INSIGHTS-FR-004 | Teacher/class-level performance analysis with fair-context metadata | P3 | PDF p. 15-18, 24-27, 31, 35-39, 55-57 / Biddakool extension |
| M3-ANALYTICS_INSIGHTS-FR-005 | At-risk indicators based on transparent policy-defined thresholds | P3 | PDF p. 15-18, 24-27, 31, 35-39, 55-57 / Biddakool extension |
| M3-ANALYTICS_INSIGHTS-FR-006 | Institution-level analytics exports with authorized drilldowns | P3 | PDF p. 15-18, 24-27, 31, 35-39, 55-57 / Biddakool extension |
| M3-ANALYTICS_INSIGHTS-FR-007 | Optional AI-assisted insights gated by privacy controls | P3 | PDF p. 15-18, 24-27, 31, 35-39, 55-57 / Biddakool extension |

## Actors / use cases

- **InstitutionAdmin** — may perform only operations granted by institution permissions and module policy.
- **AcademicOfficer** — may perform only operations granted by institution permissions and module policy.
- **Analyst** — may perform only operations granted by institution permissions and module policy.

## Workflow baseline

1. Resolve the signed-in identity, institution membership, tenant scope and permission.
2. Read reference data owned by prerequisite modules through documented application interfaces.
3. Validate the request against institution policy, effective dates and domain invariants.
4. Execute one command transaction; write outbox event and audit record when appropriate.
5. Present status, validation errors and an accessible confirmation in the Next.js feature UI.
6. Serve tenant-filtered lists, detail pages and authorized exports.

## Non-functional requirements

- Tenant isolation on all reads and writes (including exports, background jobs and reporting).
- Server-side validation and policy-based authorization; UI guards are presentation only.
- Clear UTC timestamps, tenant-local date display and pagination for lists.
- Audit state transitions, protect personally identifiable information, and use structured logs.
- Keyboard-accessible responsive Next.js UI; accessible Bangla/English labels where available.

## Out of scope

- Features exclusively assigned to another milestone/module are not to be duplicated here.
- Business rules and external provider choices not expressly supported by the brochure must be reviewed with product owner before implementation.

## Open business decisions

- Confirm institution-specific exceptions, approval levels, retention and legal requirements.
- Confirm exact user-facing terminology for school, university, medical and madrasa modes.
