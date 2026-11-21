# Online Application & Admission — Functional Requirements

**Module:** `online-admissions`  |  **Requirement namespace:** `M2-ONLINE_ADMISSIONS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Reference:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 12** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Functional requirements

| ID | Behavior to deliver | Priority | Reference |
| --- | --- | --- | --- |
| M2-ONLINE_ADMISSIONS-FR-001 | Public admission campaigns, eligibility criteria and available seats | P2 | PDF p. 12 / Biddakool extension |
| M2-ONLINE_ADMISSIONS-FR-002 | Configurable application forms and applicant document uploads | P2 | PDF p. 12 / Biddakool extension |
| M2-ONLINE_ADMISSIONS-FR-003 | Application submission with reference number and downloadable filled form | P2 | PDF p. 12 / Biddakool extension |
| M2-ONLINE_ADMISSIONS-FR-004 | Application fee charge/payment state | P2 | PDF p. 12 / Biddakool extension |
| M2-ONLINE_ADMISSIONS-FR-005 | Application review, status changes and admissions selection | P2 | PDF p. 12 / Biddakool extension |
| M2-ONLINE_ADMISSIONS-FR-006 | Admit card after verified payment when admission exam is enabled | P2 | PDF p. 12 / Biddakool extension |
| M2-ONLINE_ADMISSIONS-FR-007 | Offer, accept, enroll and reject transitions with audit | P2 | PDF p. 12 / Biddakool extension |

## Actors / use cases

- **Applicant** — may perform only operations granted by institution permissions and module policy.
- **AdmissionOfficer** — may perform only operations granted by institution permissions and module policy.
- **InstitutionAdmin** — may perform only operations granted by institution permissions and module policy.

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
