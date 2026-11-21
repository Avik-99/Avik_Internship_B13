# Payroll, Deductions & Provident Fund — Functional Requirements

**Module:** `staff-payroll`  |  **Requirement namespace:** `M2-STAFF_PAYROLL`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Reference:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 15, 43, 53** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Functional requirements

| ID | Behavior to deliver | Priority | Reference |
| --- | --- | --- | --- |
| M2-STAFF_PAYROLL-FR-001 | Compensation policies, salary structures and payment cycles | P2 | PDF p. 15, 43, 53 / Biddakool extension |
| M2-STAFF_PAYROLL-FR-002 | Attendance-based deductions using policy version | P2 | PDF p. 15, 43, 53 / Biddakool extension |
| M2-STAFF_PAYROLL-FR-003 | Manual adjustments, deduction waivers and approvals | P2 | PDF p. 15, 43, 53 / Biddakool extension |
| M2-STAFF_PAYROLL-FR-004 | Monthly salary generation and payroll approval/lock | P2 | PDF p. 15, 43, 53 / Biddakool extension |
| M2-STAFF_PAYROLL-FR-005 | Downloadable employee payslips and payroll reports | P2 | PDF p. 15, 43, 53 / Biddakool extension |
| M2-STAFF_PAYROLL-FR-006 | Provident fund contribution and balance records | P2 | PDF p. 15, 43, 53 / Biddakool extension |
| M2-STAFF_PAYROLL-FR-007 | Accounting integration for salary expenses and liabilities | P2 | PDF p. 15, 43, 53 / Biddakool extension |

## Actors / use cases

- **HRManager** — may perform only operations granted by institution permissions and module policy.
- **Accountant** — may perform only operations granted by institution permissions and module policy.
- **Staff** — may perform only operations granted by institution permissions and module policy.
- **Teacher** — may perform only operations granted by institution permissions and module policy.

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
