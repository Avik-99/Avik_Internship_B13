# Online Payments & Reconciliation — Functional Requirements

**Module:** `online-fee-payments`  |  **Requirement namespace:** `M2-ONLINE_FEE_PAYMENTS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Reference:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 35-36, 48** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Functional requirements

| ID | Behavior to deliver | Priority | Reference |
| --- | --- | --- | --- |
| M2-ONLINE_FEE_PAYMENTS-FR-001 | Hosted checkout for guardian and student fee dues | P2 | PDF p. 35-36, 48 / Biddakool extension |
| M2-ONLINE_FEE_PAYMENTS-FR-002 | Payment provider configuration per institution with controlled secrets | P2 | PDF p. 35-36, 48 / Biddakool extension |
| M2-ONLINE_FEE_PAYMENTS-FR-003 | Payment initiation, redirect and server-side webhook validation | P2 | PDF p. 35-36, 48 / Biddakool extension |
| M2-ONLINE_FEE_PAYMENTS-FR-004 | Pending, authorized, captured, failed, refunded and reconciled states | P2 | PDF p. 35-36, 48 / Biddakool extension |
| M2-ONLINE_FEE_PAYMENTS-FR-005 | Payment idempotency and duplicate webhook handling | P2 | PDF p. 35-36, 48 / Biddakool extension |
| M2-ONLINE_FEE_PAYMENTS-FR-006 | Partial fee invoice allocations and receipt generation on final capture | P2 | PDF p. 35-36, 48 / Biddakool extension |
| M2-ONLINE_FEE_PAYMENTS-FR-007 | Cash vs online collection reporting and payout reconciliation | P2 | PDF p. 35-36, 48 / Biddakool extension |

## Actors / use cases

- **Accountant** — may perform only operations granted by institution permissions and module policy.
- **Guardian** — may perform only operations granted by institution permissions and module policy.
- **Student** — may perform only operations granted by institution permissions and module policy.
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
