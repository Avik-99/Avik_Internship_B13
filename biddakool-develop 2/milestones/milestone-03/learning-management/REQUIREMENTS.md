# Online Courses, Assignments & Quizzes — Functional Requirements

**Module:** `learning-management`  |  **Requirement namespace:** `M3-LEARNING_MANAGEMENT`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Reference:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 32-33, 50** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Functional requirements

| ID | Behavior to deliver | Priority | Reference |
| --- | --- | --- | --- |
| M3-LEARNING_MANAGEMENT-FR-001 | Google Classroom-like online course workspace | P3 | PDF p. 32-33, 50 / Biddakool extension |
| M3-LEARNING_MANAGEMENT-FR-002 | Learning materials, attachments, class notes and published syllabus | P3 | PDF p. 32-33, 50 / Biddakool extension |
| M3-LEARNING_MANAGEMENT-FR-003 | Assignments, submission windows and uploads | P3 | PDF p. 32-33, 50 / Biddakool extension |
| M3-LEARNING_MANAGEMENT-FR-004 | Teacher reviews of submitted files and online marking | P3 | PDF p. 32-33, 50 / Biddakool extension |
| M3-LEARNING_MANAGEMENT-FR-005 | MCQ quiz bank, attempts, scoring and time limits | P3 | PDF p. 32-33, 50 / Biddakool extension |
| M3-LEARNING_MANAGEMENT-FR-006 | Student course activity and progress dashboards | P3 | PDF p. 32-33, 50 / Biddakool extension |
| M3-LEARNING_MANAGEMENT-FR-007 | Optional sync of graded assessment outcomes into the Results module | P3 | PDF p. 32-33, 50 / Biddakool extension |

## Actors / use cases

- **Teacher** — may perform only operations granted by institution permissions and module policy.
- **Student** — may perform only operations granted by institution permissions and module policy.
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
