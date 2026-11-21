# Examinations, Grades & Results — Functional Requirements

**Module:** `assessment-results`  |  **Requirement namespace:** `M1-ASSESSMENT_RESULTS`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Reference:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 21-27, 49, 53, 55-57** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Functional requirements

| ID | Behavior to deliver | Priority | Reference |
| --- | --- | --- | --- |
| M1-ASSESSMENT_RESULTS-FR-001 | Exam categories, assessments, exam components and subject/course mapping | P1 | PDF p. 21-27, 49, 53, 55-57 / Biddakool extension |
| M1-ASSESSMENT_RESULTS-FR-002 | Full marks, minimum pass marks, grade boundaries and basic weighting | P1 | PDF p. 21-27, 49, 53, 55-57 / Biddakool extension |
| M1-ASSESSMENT_RESULTS-FR-003 | Teacher-owned marks entry and approval workflow | P1 | PDF p. 21-27, 49, 53, 55-57 / Biddakool extension |
| M1-ASSESSMENT_RESULTS-FR-004 | Grade, percentage, GPA/CGPA compatible calculation; configurable grading policy | P1 | PDF p. 21-27, 49, 53, 55-57 / Biddakool extension |
| M1-ASSESSMENT_RESULTS-FR-005 | Provisional vs published results with authorized release | P1 | PDF p. 21-27, 49, 53, 55-57 / Biddakool extension |
| M1-ASSESSMENT_RESULTS-FR-006 | Printable exam result sheet, subject performance and report cards | P1 | PDF p. 21-27, 49, 53, 55-57 / Biddakool extension |
| M1-ASSESSMENT_RESULTS-FR-007 | Tabulation sheet, pass/fail and simple merit order when allowed | P1 | PDF p. 21-27, 49, 53, 55-57 / Biddakool extension |
| M1-ASSESSMENT_RESULTS-FR-008 | Guardian/student visibility only after result publication | P1 | PDF p. 21-27, 49, 53, 55-57 / Biddakool extension |
| M1-ASSESSMENT_RESULTS-FR-009 | Academic result snapshots for historical reproducibility | P1 | PDF p. 21-27, 49, 53, 55-57 / Biddakool extension |

## Actors / use cases

- **AcademicOfficer** — may perform only operations granted by institution permissions and module policy.
- **Teacher** — may perform only operations granted by institution permissions and module policy.
- **ExamController** — may perform only operations granted by institution permissions and module policy.
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
