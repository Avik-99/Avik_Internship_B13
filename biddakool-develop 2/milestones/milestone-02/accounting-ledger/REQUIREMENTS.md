# Accounting & General Ledger — Functional Requirements

**Module:** `accounting-ledger`  |  **Requirement namespace:** `M2-ACCOUNTING_LEDGER`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Reference:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 35, 37-39** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Functional requirements

| ID | Behavior to deliver | Priority | Reference |
| --- | --- | --- | --- |
| M2-ACCOUNTING_LEDGER-FR-001 | Chart of accounts and configurable fiscal years | P2 | PDF p. 35, 37-39 / Biddakool extension |
| M2-ACCOUNTING_LEDGER-FR-002 | Manual income and expense vouchers with review/approval | P2 | PDF p. 35, 37-39 / Biddakool extension |
| M2-ACCOUNTING_LEDGER-FR-003 | Ledger posting journal and reversals (not destructive delete) | P2 | PDF p. 35, 37-39 / Biddakool extension |
| M2-ACCOUNTING_LEDGER-FR-004 | Receipt/voucher daily topsheets and register | P2 | PDF p. 35, 37-39 / Biddakool extension |
| M2-ACCOUNTING_LEDGER-FR-005 | Income/expense statements and general ledger (detail/summary) | P2 | PDF p. 35, 37-39 / Biddakool extension |
| M2-ACCOUNTING_LEDGER-FR-006 | Billing and invoice attachment references | P2 | PDF p. 35, 37-39 / Biddakool extension |
| M2-ACCOUNTING_LEDGER-FR-007 | Post fee payments, waivers, refunds and donations via explicitly versioned integration events | P2 | PDF p. 35, 37-39 / Biddakool extension |

## Actors / use cases

- **Accountant** — may perform only operations granted by institution permissions and module policy.
- **FinanceManager** — may perform only operations granted by institution permissions and module policy.
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
