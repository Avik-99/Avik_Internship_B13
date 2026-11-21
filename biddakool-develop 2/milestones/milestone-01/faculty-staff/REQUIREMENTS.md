# Faculty, Teacher & Staff Directory — Functional Requirements

**Module:** `faculty-staff`  |  **Requirement namespace:** `M1-FACULTY_STAFF`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Reference:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 13-15, 18, 52-53** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Functional requirements

| ID | Behavior to deliver | Priority | Reference |
| --- | --- | --- | --- |
| M1-FACULTY_STAFF-FR-001 | Register teacher, faculty, employee and non-teaching staff profiles | P1 | PDF p. 13-15, 18, 52-53 / Biddakool extension |
| M1-FACULTY_STAFF-FR-002 | Employment designation, department, active status and employment dates | P1 | PDF p. 13-15, 18, 52-53 / Biddakool extension |
| M1-FACULTY_STAFF-FR-003 | Teacher subject and course-offering assignments | P1 | PDF p. 13-15, 18, 52-53 / Biddakool extension |
| M1-FACULTY_STAFF-FR-004 | Class teacher, adviser or academic supervisor assignments | P1 | PDF p. 13-15, 18, 52-53 / Biddakool extension |
| M1-FACULTY_STAFF-FR-005 | Profile view, search, filtering and downloadable staff profile | P1 | PDF p. 13-15, 18, 52-53 / Biddakool extension |
| M1-FACULTY_STAFF-FR-006 | Separate teaching duties from payroll and compensation data | P1 | PDF p. 13-15, 18, 52-53 / Biddakool extension |

## Actors / use cases

- **InstitutionAdmin** — may perform only operations granted by institution permissions and module policy.
- **HRManager** — may perform only operations granted by institution permissions and module policy.
- **AcademicOfficer** — may perform only operations granted by institution permissions and module policy.
- **Teacher** — may perform only operations granted by institution permissions and module policy.

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
