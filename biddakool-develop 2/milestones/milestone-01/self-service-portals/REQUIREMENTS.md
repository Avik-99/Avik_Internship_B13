# Student, Guardian, Teacher & Admin Portals — Functional Requirements

**Module:** `self-service-portals`  |  **Requirement namespace:** `M1-SELF_SERVICE_PORTALS`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Reference:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 14-18, 48-53** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Functional requirements

| ID | Behavior to deliver | Priority | Reference |
| --- | --- | --- | --- |
| M1-SELF_SERVICE_PORTALS-FR-001 | Admin home with student/staff, fees, dues, attendance and exam summaries | P1 | PDF p. 14-18, 48-53 / Biddakool extension |
| M1-SELF_SERVICE_PORTALS-FR-002 | Teacher portal for assigned students, attendance, marks, schedules and notices | P1 | PDF p. 14-18, 48-53 / Biddakool extension |
| M1-SELF_SERVICE_PORTALS-FR-003 | Student portal for profile, current courses, attendance, results, fees and notices | P1 | PDF p. 14-18, 48-53 / Biddakool extension |
| M1-SELF_SERVICE_PORTALS-FR-004 | Guardian portal with linked-child switcher and access to authorized child records | P1 | PDF p. 14-18, 48-53 / Biddakool extension |
| M1-SELF_SERVICE_PORTALS-FR-005 | Accountant workspace for collections, receipts and dues | P1 | PDF p. 14-18, 48-53 / Biddakool extension |
| M1-SELF_SERVICE_PORTALS-FR-006 | Role-aware navigation and responsive Bangla/English UX | P1 | PDF p. 14-18, 48-53 / Biddakool extension |
| M1-SELF_SERVICE_PORTALS-FR-007 | Download protected receipts, profile pages and result reports | P1 | PDF p. 14-18, 48-53 / Biddakool extension |

## Actors / use cases

- **InstitutionAdmin** — may perform only operations granted by institution permissions and module policy.
- **AcademicOfficer** — may perform only operations granted by institution permissions and module policy.
- **Accountant** — may perform only operations granted by institution permissions and module policy.
- **Teacher** — may perform only operations granted by institution permissions and module policy.
- **Student** — may perform only operations granted by institution permissions and module policy.
- **Guardian** — may perform only operations granted by institution permissions and module policy.

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
