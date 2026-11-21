# Student Fees, Dues & Cash Collection — Functional Requirements

**Module:** `fee-management`  |  **Requirement namespace:** `M1-FEE_MANAGEMENT`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Reference:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 10, 35-36, 48** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Functional requirements

| ID | Behavior to deliver | Priority | Reference |
| --- | --- | --- | --- |
| M1-FEE_MANAGEMENT-FR-001 | Institution fee types, fee groups and class/program-specific schedules | P1 | PDF p. 10, 35-36, 48 / Biddakool extension |
| M1-FEE_MANAGEMENT-FR-002 | Assign one-time, monthly, term or credit-based charges | P1 | PDF p. 10, 35-36, 48 / Biddakool extension |
| M1-FEE_MANAGEMENT-FR-003 | Generate student invoices and maintain outstanding dues | P1 | PDF p. 10, 35-36, 48 / Biddakool extension |
| M1-FEE_MANAGEMENT-FR-004 | Cash/manual payment recording with unique receipt numbers | P1 | PDF p. 10, 35-36, 48 / Biddakool extension |
| M1-FEE_MANAGEMENT-FR-005 | Partial payments, fee waivers and discount approval | P1 | PDF p. 10, 35-36, 48 / Biddakool extension |
| M1-FEE_MANAGEMENT-FR-006 | Student and guardian fee history, receipts and unpaid balance views | P1 | PDF p. 10, 35-36, 48 / Biddakool extension |
| M1-FEE_MANAGEMENT-FR-007 | Cashier shift/day collection report and fee-category breakdown | P1 | PDF p. 10, 35-36, 48 / Biddakool extension |
| M1-FEE_MANAGEMENT-FR-008 | Preserve payment allocation and refund history; no destructive editing | P1 | PDF p. 10, 35-36, 48 / Biddakool extension |

## Actors / use cases

- **InstitutionAdmin** — may perform only operations granted by institution permissions and module policy.
- **Accountant** — may perform only operations granted by institution permissions and module policy.
- **Cashier** — may perform only operations granted by institution permissions and module policy.
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
