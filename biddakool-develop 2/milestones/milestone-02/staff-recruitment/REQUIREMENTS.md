# Faculty & Staff Recruitment — Functional Requirements

**Module:** `staff-recruitment`  |  **Requirement namespace:** `M2-STAFF_RECRUITMENT`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Reference:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 13** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Functional requirements

| ID | Behavior to deliver | Priority | Reference |
| --- | --- | --- | --- |
| M2-STAFF_RECRUITMENT-FR-001 | Create teaching and non-teaching vacancies and public application windows | P2 | PDF p. 13 / Biddakool extension |
| M2-STAFF_RECRUITMENT-FR-002 | Job applicant profile, documents and online submission | P2 | PDF p. 13 / Biddakool extension |
| M2-STAFF_RECRUITMENT-FR-003 | Recruitment application fee and verification | P2 | PDF p. 13 / Biddakool extension |
| M2-STAFF_RECRUITMENT-FR-004 | Print submitted application and recruitment admit card | P2 | PDF p. 13 / Biddakool extension |
| M2-STAFF_RECRUITMENT-FR-005 | Shortlisting, interview stages and offer tracking | P2 | PDF p. 13 / Biddakool extension |
| M2-STAFF_RECRUITMENT-FR-006 | Convert accepted applicant into M1 staff member | P2 | PDF p. 13 / Biddakool extension |

## Actors / use cases

- **Applicant** — may perform only operations granted by institution permissions and module policy.
- **HRManager** — may perform only operations granted by institution permissions and module policy.
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
