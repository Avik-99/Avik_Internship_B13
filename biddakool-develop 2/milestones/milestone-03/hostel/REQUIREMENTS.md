# Hostel, Housing & Residence Fees — Functional Requirements

**Module:** `hostel`  |  **Requirement namespace:** `M3-HOSTEL`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Reference:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 10, 42** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Functional requirements

| ID | Behavior to deliver | Priority | Reference |
| --- | --- | --- | --- |
| M3-HOSTEL-FR-001 | Hostel/building/floor/room/bed catalogue and capacity | P3 | PDF p. 10, 42 / Biddakool extension |
| M3-HOSTEL-FR-002 | Student room or bed assignment and release with occupancy history | P3 | PDF p. 10, 42 / Biddakool extension |
| M3-HOSTEL-FR-003 | Hostel and meal charge configuration | P3 | PDF p. 10, 42 / Biddakool extension |
| M3-HOSTEL-FR-004 | Automatic monthly room/meal charge generation | P3 | PDF p. 10, 42 / Biddakool extension |
| M3-HOSTEL-FR-005 | Hostel due collection through the Fees module | P3 | PDF p. 10, 42 / Biddakool extension |
| M3-HOSTEL-FR-006 | Occupancy, vacancy and hostel resident reports | P3 | PDF p. 10, 42 / Biddakool extension |

## Actors / use cases

- **HostelManager** — may perform only operations granted by institution permissions and module policy.
- **Accountant** — may perform only operations granted by institution permissions and module policy.
- **Student** — may perform only operations granted by institution permissions and module policy.

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
