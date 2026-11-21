# Payroll, Deductions & Provident Fund

**Module:** `staff-payroll`  |  **Requirement namespace:** `M2-STAFF_PAYROLL`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Purpose:** Monthly staff payroll with attendance-linked deductions and employee downloadable payslips.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 15, 43, 53** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: SalaryProfile, PayComponent, PayrollRun, Payslip, PayrollAdjustment, ProvidentFundAccount, ProvidentFundTransaction. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Compensation policies, salary structures and payment cycles
- Attendance-based deductions using policy version
- Manual adjustments, deduction waivers and approvals
- Monthly salary generation and payroll approval/lock
- Downloadable employee payslips and payroll reports
- Provident fund contribution and balance records
- Accounting integration for salary expenses and liabilities

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/StaffPayroll`.
- Next.js feature UI and typed client under `apps/web/src/features/staff-payroll`.
- Test project at `tests/StaffPayroll.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| faculty-staff | Faculty, Teacher & Staff Directory | M1 |
| attendance | Student & Staff Attendance | M1 |
| leave-workflows | Leave Request & Approvals | M2 |
| accounting-ledger | Accounting & General Ledger | M2 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
