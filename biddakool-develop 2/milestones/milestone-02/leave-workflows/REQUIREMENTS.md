# Leave Request & Approvals — Functional Requirements

**Module:** `leave-workflows`  |  **Requirement namespace:** `M2-LEAVE_WORKFLOWS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Reference:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 19, 53, 55** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Functional requirements

| ID | Behavior to deliver | Priority | Reference |
| --- | --- | --- | --- |
| M2-LEAVE_WORKFLOWS-FR-001 | Student/guardian and staff leave application | P2 | PDF p. 19, 53, 55 / Biddakool extension |
| M2-LEAVE_WORKFLOWS-FR-002 | Leave category, dates, attachments and reason | P2 | PDF p. 19, 53, 55 / Biddakool extension |
| M2-LEAVE_WORKFLOWS-FR-003 | Flexible approval chain with recommend/forward/approve/reject | P2 | PDF p. 19, 53, 55 / Biddakool extension |
| M2-LEAVE_WORKFLOWS-FR-004 | Leave balance and holiday overlap checks where appropriate | P2 | PDF p. 19, 53, 55 / Biddakool extension |
| M2-LEAVE_WORKFLOWS-FR-005 | Leave history and reports by student/teacher | P2 | PDF p. 19, 53, 55 / Biddakool extension |
| M2-LEAVE_WORKFLOWS-FR-006 | Approved leave integrated with attendance without deleting prior marks | P2 | PDF p. 19, 53, 55 / Biddakool extension |

## Actors / use cases

- **Student** — may perform only operations granted by institution permissions and module policy.
- **Guardian** — may perform only operations granted by institution permissions and module policy.
- **Teacher** — may perform only operations granted by institution permissions and module policy.
- **HRManager** — may perform only operations granted by institution permissions and module policy.
- **AcademicOfficer** — may perform only operations granted by institution permissions and module policy.

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
