# Accounting & General Ledger

**Module:** `accounting-ledger`  |  **Requirement namespace:** `M2-ACCOUNTING_LEDGER`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Purpose:** Accrual-aware or cash-policy-based double-entry ledger with fee collection postings and detailed statements.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 35, 37-39** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: Account, FiscalPeriod, JournalEntry, JournalLine, Voucher, LedgerPostingRule. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Chart of accounts and configurable fiscal years
- Manual income and expense vouchers with review/approval
- Ledger posting journal and reversals (not destructive delete)
- Receipt/voucher daily topsheets and register
- Income/expense statements and general ledger (detail/summary)
- Billing and invoice attachment references
- Post fee payments, waivers, refunds and donations via explicitly versioned integration events

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/AccountingLedger`.
- Next.js feature UI and typed client under `apps/web/src/features/accounting-ledger`.
- Test project at `tests/AccountingLedger.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| tenant-institution | Tenant & Institution Configuration | M1 |
| fee-management | Student Fees, Dues & Cash Collection | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
