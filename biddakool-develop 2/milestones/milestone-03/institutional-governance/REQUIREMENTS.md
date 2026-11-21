# Governance, Committees & Audit — Functional Requirements

**Module:** `institutional-governance`  |  **Requirement namespace:** `M3-INSTITUTIONAL_GOVERNANCE`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Reference:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 9, 46** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Functional requirements

| ID | Behavior to deliver | Priority | Reference |
| --- | --- | --- | --- |
| M3-INSTITUTIONAL_GOVERNANCE-FR-001 | Committee roles, terms, agenda and meeting minutes | P3 | PDF p. 9, 46 / Biddakool extension |
| M3-INSTITUTIONAL_GOVERNANCE-FR-002 | Approval chains for major academic and financial decisions | P3 | PDF p. 9, 46 / Biddakool extension |
| M3-INSTITUTIONAL_GOVERNANCE-FR-003 | Policy approval and review versions | P3 | PDF p. 9, 46 / Biddakool extension |
| M3-INSTITUTIONAL_GOVERNANCE-FR-004 | Audit log search, filters and privileged access reviews | P3 | PDF p. 9, 46 / Biddakool extension |
| M3-INSTITUTIONAL_GOVERNANCE-FR-005 | Role delegation and temporary permissions | P3 | PDF p. 9, 46 / Biddakool extension |
| M3-INSTITUTIONAL_GOVERNANCE-FR-006 | Retention and export controls for institution records | P3 | PDF p. 9, 46 / Biddakool extension |

## Actors / use cases

- **InstitutionAdmin** — may perform only operations granted by institution permissions and module policy.
- **CommitteeMember** — may perform only operations granted by institution permissions and module policy.
- **Auditor** — may perform only operations granted by institution permissions and module policy.

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
