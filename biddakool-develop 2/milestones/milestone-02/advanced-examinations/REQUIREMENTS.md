# Advanced Grading, Analysis & Report Cards — Functional Requirements

**Module:** `advanced-examinations`  |  **Requirement namespace:** `M2-ADVANCED_EXAMINATIONS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Reference:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 22-27, 58-63** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Functional requirements

| ID | Behavior to deliver | Priority | Reference |
| --- | --- | --- | --- |
| M2-ADVANCED_EXAMINATIONS-FR-001 | Weighted class tests, monthly tests, homework and continuous assessments | P2 | PDF p. 22-27, 58-63 / Biddakool extension |
| M2-ADVANCED_EXAMINATIONS-FR-002 | Aggregate semester, annual and cross-term results | P2 | PDF p. 22-27, 58-63 / Biddakool extension |
| M2-ADVANCED_EXAMINATIONS-FR-003 | Combine two or more subjects for pass/fail and GPA calculations | P2 | PDF p. 22-27, 58-63 / Biddakool extension |
| M2-ADVANCED_EXAMINATIONS-FR-004 | Optional/excluded subjects, grace marks and fail highlighting | P2 | PDF p. 22-27, 58-63 / Biddakool extension |
| M2-ADVANCED_EXAMINATIONS-FR-005 | Teacher evaluation notes and attendance on report card | P2 | PDF p. 22-27, 58-63 / Biddakool extension |
| M2-ADVANCED_EXAMINATIONS-FR-006 | Class/section merit rank, fail list and performance distribution | P2 | PDF p. 22-27, 58-63 / Biddakool extension |
| M2-ADVANCED_EXAMINATIONS-FR-007 | Custom report card templates, seals, logos and auto-signatures | P2 | PDF p. 22-27, 58-63 / Biddakool extension |
| M2-ADVANCED_EXAMINATIONS-FR-008 | Compact and detailed tabulations, teacher-wise and subject-wise analytics | P2 | PDF p. 22-27, 58-63 / Biddakool extension |
| M2-ADVANCED_EXAMINATIONS-FR-009 | School-specific and madrasa-specific layouts from brochure examples | P2 | PDF p. 22-27, 58-63 / Biddakool extension |

## Actors / use cases

- **ExamController** — may perform only operations granted by institution permissions and module policy.
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
