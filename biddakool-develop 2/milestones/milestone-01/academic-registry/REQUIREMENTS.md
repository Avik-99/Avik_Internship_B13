# Academic Registry & Curriculum — Functional Requirements

**Module:** `academic-registry`  |  **Requirement namespace:** `M1-ACADEMIC_REGISTRY`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Reference:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 9-10, 21, 29-30** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Functional requirements

| ID | Behavior to deliver | Priority | Reference |
| --- | --- | --- | --- |
| M1-ACADEMIC_REGISTRY-FR-001 | Academic years, sessions, terms/semesters and active term selection | P1 | PDF p. 9-10, 21, 29-30 / Biddakool extension |
| M1-ACADEMIC_REGISTRY-FR-002 | Departments, faculties, programs, batches, levels, groups and school class labels | P1 | PDF p. 9-10, 21, 29-30 / Biddakool extension |
| M1-ACADEMIC_REGISTRY-FR-003 | Course/subject catalog including codes, optional credits and pass criteria | P1 | PDF p. 9-10, 21, 29-30 / Biddakool extension |
| M1-ACADEMIC_REGISTRY-FR-004 | Course offerings / class sections scheduled in a term and assigned to teachers | P1 | PDF p. 9-10, 21, 29-30 / Biddakool extension |
| M1-ACADEMIC_REGISTRY-FR-005 | Curriculum and assessment policy versions per program | P1 | PDF p. 9-10, 21, 29-30 / Biddakool extension |
| M1-ACADEMIC_REGISTRY-FR-006 | Configurable GPA/grade scales and academic calendar rules | P1 | PDF p. 9-10, 21, 29-30 / Biddakool extension |
| M1-ACADEMIC_REGISTRY-FR-007 | Support subject combinations and optional courses without custom columns | P1 | PDF p. 9-10, 21, 29-30 / Biddakool extension |

## Actors / use cases

- **InstitutionAdmin** — may perform only operations granted by institution permissions and module policy.
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
