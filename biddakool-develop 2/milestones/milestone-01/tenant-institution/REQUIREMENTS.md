# Tenant & Institution Configuration — Functional Requirements

**Module:** `tenant-institution`  |  **Requirement namespace:** `M1-TENANT_INSTITUTION`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Reference:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 9-10, 20, 46** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Functional requirements

| ID | Behavior to deliver | Priority | Reference |
| --- | --- | --- | --- |
| M1-TENANT_INSTITUTION-FR-001 | Tenant provisioning and isolated institution settings | P1 | PDF p. 9-10, 20, 46 / Biddakool extension |
| M1-TENANT_INSTITUTION-FR-002 | Institution type: school, college, university, medical college, madrasa or training center | P1 | PDF p. 9-10, 20, 46 / Biddakool extension |
| M1-TENANT_INSTITUTION-FR-003 | Contact information, address, logos, letterhead, timezone, Bangla/English locale and public profile | P1 | PDF p. 9-10, 20, 46 / Biddakool extension |
| M1-TENANT_INSTITUTION-FR-004 | Campus records, shifts, working weekdays, holiday calendar and academic date formats | P1 | PDF p. 9-10, 20, 46 / Biddakool extension |
| M1-TENANT_INSTITUTION-FR-005 | Per-tenant module enablement and configurable policies | P1 | PDF p. 9-10, 20, 46 / Biddakool extension |
| M1-TENANT_INSTITUTION-FR-006 | Institution dashboard with tenant-level counts and quick links | P1 | PDF p. 9-10, 20, 46 / Biddakool extension |

## Actors / use cases

- **PlatformAdmin** — may perform only operations granted by institution permissions and module policy.
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
