# Payroll, Deductions & Provident Fund — Developer Task Backlog

**Module:** `staff-payroll`  |  **Requirement namespace:** `M2-STAFF_PAYROLL`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/StaffPayroll` and `apps/web/src/features/staff-payroll`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M2-STAFF_PAYROLL-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M2-STAFF_PAYROLL-T-002 | Domain and EF Core | Implement SalaryProfile, PayComponent, PayrollRun, Payslip plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M2-STAFF_PAYROLL-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M2-STAFF_PAYROLL-T-004 | Compensation policies, salary structures and payment cycles | Backend API + frontend journey for: Compensation policies, salary structures and payment cycles | Reviewed behavior, access checks and automated tests for compensation policies, salary structures and payment cycles |
| M2-STAFF_PAYROLL-T-005 | Attendance-based deductions using policy version | Backend API + frontend journey for: Attendance-based deductions using policy version | Reviewed behavior, access checks and automated tests for attendance-based deductions using policy version |
| M2-STAFF_PAYROLL-T-006 | Manual adjustments, deduction waivers and approvals | Backend API + frontend journey for: Manual adjustments, deduction waivers and approvals | Reviewed behavior, access checks and automated tests for manual adjustments, deduction waivers and approvals |
| M2-STAFF_PAYROLL-T-007 | Monthly salary generation and payroll approval/lock | Backend API + frontend journey for: Monthly salary generation and payroll approval/lock | Reviewed behavior, access checks and automated tests for monthly salary generation and payroll approval/lock |
| M2-STAFF_PAYROLL-T-008 | Downloadable employee payslips and payroll reports | Backend API + frontend journey for: Downloadable employee payslips and payroll reports | Reviewed behavior, access checks and automated tests for downloadable employee payslips and payroll reports |
| M2-STAFF_PAYROLL-T-009 | Provident fund contribution and balance records | Backend API + frontend journey for: Provident fund contribution and balance records | Reviewed behavior, access checks and automated tests for provident fund contribution and balance records |
| M2-STAFF_PAYROLL-T-010 | Accounting integration for salary expenses and liabilities | Backend API + frontend journey for: Accounting integration for salary expenses and liabilities | Reviewed behavior, access checks and automated tests for accounting integration for salary expenses and liabilities |
| M2-STAFF_PAYROLL-T-011 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M2-STAFF_PAYROLL-T-012 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

## Parallelization plan

1. **Contract owner:** Validate requirements, domain, endpoints and migration proposal; secure review sign-off.
2. **Backend developer(s):** Build aggregates, EF Core mappings, CQRS requests, permissions and events behind approved contract.
3. **Frontend developer(s):** Build Next.js screens against generated OpenAPI mock/typed client.
4. **QA developer:** Build acceptance, contract, tenant-isolation and negative-path tests independently.
5. **Integration developer:** Wire consumers after contract is stable and run docker-compose/E2E scenarios.

## Pull request merge policy

- PRs should be small and scoped to this module; one migration owner per module.
- A contract breaking change requires ADR + affected consumers approval before merge.
- No PR is done without an appropriate test, updated docs and reviewer.
