# Student Fees, Dues & Cash Collection

**Module:** `fee-management`  |  **Requirement namespace:** `M1-FEE_MANAGEMENT`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Purpose:** Cash collection, receivables and student fee schedules with auditable receipts, ready for M2 payment integration.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 10, 35-36, 48** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: FeeType, FeeSchedule, StudentCharge, FeeInvoice, Payment, PaymentAllocation, FeeConcession, Receipt. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Institution fee types, fee groups and class/program-specific schedules
- Assign one-time, monthly, term or credit-based charges
- Generate student invoices and maintain outstanding dues
- Cash/manual payment recording with unique receipt numbers
- Partial payments, fee waivers and discount approval
- Student and guardian fee history, receipts and unpaid balance views
- Cashier shift/day collection report and fee-category breakdown
- Preserve payment allocation and refund history; no destructive editing

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/FeeManagement`.
- Next.js feature UI and typed client under `apps/web/src/features/fee-management`.
- Test project at `tests/FeeManagement.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| student-lifecycle | Students, Guardians & Enrollment | M1 |
| academic-registry | Academic Registry & Curriculum | M1 |
| foundation-identity | Identity & Access Control | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
