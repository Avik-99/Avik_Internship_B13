# Exam Admit Cards & Seat Plans — Functional Requirements

**Module:** `exam-operations`  |  **Requirement namespace:** `M2-EXAM_OPERATIONS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Reference:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 28** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Functional requirements

| ID | Behavior to deliver | Priority | Reference |
| --- | --- | --- | --- |
| M2-EXAM_OPERATIONS-FR-001 | Admit cards with photo, student identifiers, subjects, date/time and signature | P2 | PDF p. 28 / Biddakool extension |
| M2-EXAM_OPERATIONS-FR-002 | Exam seat plan by room capacity and candidate eligibility | P2 | PDF p. 28 / Biddakool extension |
| M2-EXAM_OPERATIONS-FR-003 | Seat cards with student photo, class/group, shift and roll | P2 | PDF p. 28 / Biddakool extension |
| M2-EXAM_OPERATIONS-FR-004 | Room invigilator assignment and signature fields | P2 | PDF p. 28 / Biddakool extension |
| M2-EXAM_OPERATIONS-FR-005 | Printable bulk PDF generation with preview and audit | P2 | PDF p. 28 / Biddakool extension |
| M2-EXAM_OPERATIONS-FR-006 | Exam admission eligibility integration with institution policy | P2 | PDF p. 28 / Biddakool extension |

## Actors / use cases

- **ExamController** — may perform only operations granted by institution permissions and module policy.
- **AcademicOfficer** — may perform only operations granted by institution permissions and module policy.
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
