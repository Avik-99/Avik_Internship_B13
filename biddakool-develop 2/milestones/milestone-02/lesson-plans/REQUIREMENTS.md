# Lesson Plans, Diaries & Student Progress — Functional Requirements

**Module:** `lesson-plans`  |  **Requirement namespace:** `M2-LESSON_PLANS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Reference:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 31, 50, 53** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Functional requirements

| ID | Behavior to deliver | Priority | Reference |
| --- | --- | --- | --- |
| M2-LESSON_PLANS-FR-001 | Teacher-created subject/course lesson plans by academic term | P2 | PDF p. 31, 50, 53 / Biddakool extension |
| M2-LESSON_PLANS-FR-002 | Per-day class diary and homework tasks | P2 | PDF p. 31, 50, 53 / Biddakool extension |
| M2-LESSON_PLANS-FR-003 | Individual student daily lesson evaluation and comments | P2 | PDF p. 31, 50, 53 / Biddakool extension |
| M2-LESSON_PLANS-FR-004 | Monthly subject-wise progress summaries | P2 | PDF p. 31, 50, 53 / Biddakool extension |
| M2-LESSON_PLANS-FR-005 | Student/guardian access to published diaries and evaluations | P2 | PDF p. 31, 50, 53 / Biddakool extension |
| M2-LESSON_PLANS-FR-006 | Teacher workload views and learning progress export | P2 | PDF p. 31, 50, 53 / Biddakool extension |

## Actors / use cases

- **Teacher** — may perform only operations granted by institution permissions and module policy.
- **AcademicOfficer** — may perform only operations granted by institution permissions and module policy.
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
