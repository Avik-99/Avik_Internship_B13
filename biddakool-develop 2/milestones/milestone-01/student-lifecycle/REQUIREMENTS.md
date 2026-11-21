# Students, Guardians & Enrollment — Functional Requirements

**Module:** `student-lifecycle`  |  **Requirement namespace:** `M1-STUDENT_LIFECYCLE`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Reference:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 12, 14, 19-20, 48-50** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Functional requirements

| ID | Behavior to deliver | Priority | Reference |
| --- | --- | --- | --- |
| M1-STUDENT_LIFECYCLE-FR-001 | Admin-driven student enrollment with admission number and contact details | P1 | PDF p. 12, 14, 19-20, 48-50 / Biddakool extension |
| M1-STUDENT_LIFECYCLE-FR-002 | Student profile including photo, emergency contact, academic history and documents | P1 | PDF p. 12, 14, 19-20, 48-50 / Biddakool extension |
| M1-STUDENT_LIFECYCLE-FR-003 | One or more guardians linked to a student with verified relationship and portal access | P1 | PDF p. 12, 14, 19-20, 48-50 / Biddakool extension |
| M1-STUDENT_LIFECYCLE-FR-004 | Program/cohort/class/section placement and academic session enrollment | P1 | PDF p. 12, 14, 19-20, 48-50 / Biddakool extension |
| M1-STUDENT_LIFECYCLE-FR-005 | University/medical course-offering registration and enrollment history | P1 | PDF p. 12, 14, 19-20, 48-50 / Biddakool extension |
| M1-STUDENT_LIFECYCLE-FR-006 | Promotion, transfer, graduation, withdrawal and re-admission status transitions | P1 | PDF p. 12, 14, 19-20, 48-50 / Biddakool extension |
| M1-STUDENT_LIFECYCLE-FR-007 | Class roll number uniqueness within active placement scope | P1 | PDF p. 12, 14, 19-20, 48-50 / Biddakool extension |
| M1-STUDENT_LIFECYCLE-FR-008 | Tenant-specific student ID card and downloadable profile information | P1 | PDF p. 12, 14, 19-20, 48-50 / Biddakool extension |

## Actors / use cases

- **InstitutionAdmin** — may perform only operations granted by institution permissions and module policy.
- **AdmissionOfficer** — may perform only operations granted by institution permissions and module policy.
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
