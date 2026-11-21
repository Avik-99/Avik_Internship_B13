# Medical College Academic Operations — Functional Requirements

**Module:** `medical-education`  |  **Requirement namespace:** `M3-MEDICAL_EDUCATION`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Reference:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 54-57** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Functional requirements

| ID | Behavior to deliver | Priority | Reference |
| --- | --- | --- | --- |
| M3-MEDICAL_EDUCATION-FR-001 | Lecture, tutorial, ward and clinical group teaching sessions | P3 | PDF p. 54-57 / Biddakool extension |
| M3-MEDICAL_EDUCATION-FR-002 | Full-batch, group/ward and subject-specific attendance reporting | P3 | PDF p. 54-57 / Biddakool extension |
| M3-MEDICAL_EDUCATION-FR-003 | Configurable attendance warnings including the example 75% rule | P3 | PDF p. 54-57 / Biddakool extension |
| M3-MEDICAL_EDUCATION-FR-004 | Multi-stage leave recommendation/forwarding/approval in medical programs | P3 | PDF p. 54-57 / Biddakool extension |
| M3-MEDICAL_EDUCATION-FR-005 | Item, card and term exam marking with rank/fail highlighting | P3 | PDF p. 54-57 / Biddakool extension |
| M3-MEDICAL_EDUCATION-FR-006 | Professional exam eligibility report with reasons from attendance and results | P3 | PDF p. 54-57 / Biddakool extension |
| M3-MEDICAL_EDUCATION-FR-007 | Student medical academic dashboard with threshold warnings | P3 | PDF p. 54-57 / Biddakool extension |
| M3-MEDICAL_EDUCATION-FR-008 | Anonymous student-to-teacher evaluation and aggregate summaries | P3 | PDF p. 54-57 / Biddakool extension |

## Actors / use cases

- **MedicalAcademicOfficer** — may perform only operations granted by institution permissions and module policy.
- **ClinicalTeacher** — may perform only operations granted by institution permissions and module policy.
- **Student** — may perform only operations granted by institution permissions and module policy.
- **MedicalExamController** — may perform only operations granted by institution permissions and module policy.

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
