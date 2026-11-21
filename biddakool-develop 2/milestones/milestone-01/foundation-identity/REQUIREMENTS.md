# Identity & Access Control — Functional Requirements

**Module:** `foundation-identity`  |  **Requirement namespace:** `M1-FOUNDATION_IDENTITY`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Reference:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 9-10, 46** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Functional requirements

| ID | Behavior to deliver | Priority | Reference |
| --- | --- | --- | --- |
| M1-FOUNDATION_IDENTITY-FR-001 | Tenant-scoped login, logout, invitation and password recovery | P1 | PDF p. 9-10, 46 / Biddakool extension |
| M1-FOUNDATION_IDENTITY-FR-002 | Separate platform-level and institution-level access; membership selection for a multi-institution user | P1 | PDF p. 9-10, 46 / Biddakool extension |
| M1-FOUNDATION_IDENTITY-FR-003 | Institution-configurable roles with explicit permissions for each action | P1 | PDF p. 9-10, 46 / Biddakool extension |
| M1-FOUNDATION_IDENTITY-FR-004 | Faculty, accountant, student, guardian and admin login identities | P1 | PDF p. 9-10, 46 / Biddakool extension |
| M1-FOUNDATION_IDENTITY-FR-005 | Audit privileged actions; suspend accounts and revoke active sessions | P1 | PDF p. 9-10, 46 / Biddakool extension |
| M1-FOUNDATION_IDENTITY-FR-006 | Secure file/document download authorization for results, identity cards and receipts | P1 | PDF p. 9-10, 46 / Biddakool extension |

## Actors / use cases

- **PlatformAdmin** — may perform only operations granted by institution permissions and module policy.
- **InstitutionAdmin** — may perform only operations granted by institution permissions and module policy.
- **Staff** — may perform only operations granted by institution permissions and module policy.
- **Teacher** — may perform only operations granted by institution permissions and module policy.
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
