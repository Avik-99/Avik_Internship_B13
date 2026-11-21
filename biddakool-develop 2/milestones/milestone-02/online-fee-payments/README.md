# Online Payments & Reconciliation

**Module:** `online-fee-payments`  |  **Requirement namespace:** `M2-ONLINE_FEE_PAYMENTS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Purpose:** Provider-neutral hosted payment checkout and reconciliation integrated with M1 fee invoices.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 35-36, 48** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: PaymentIntent, PaymentProviderConfig, PaymentCallback, PaymentSettlement, PaymentReconciliation. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Hosted checkout for guardian and student fee dues
- Payment provider configuration per institution with controlled secrets
- Payment initiation, redirect and server-side webhook validation
- Pending, authorized, captured, failed, refunded and reconciled states
- Payment idempotency and duplicate webhook handling
- Partial fee invoice allocations and receipt generation on final capture
- Cash vs online collection reporting and payout reconciliation

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/OnlineFeePayments`.
- Next.js feature UI and typed client under `apps/web/src/features/online-fee-payments`.
- Test project at `tests/OnlineFeePayments.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| fee-management | Student Fees, Dues & Cash Collection | M1 |
| foundation-identity | Identity & Access Control | M1 |
| tenant-institution | Tenant & Institution Configuration | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
