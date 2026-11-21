# Library & Lending — Developer Task Backlog

**Module:** `library`  |  **Requirement namespace:** `M3-LIBRARY`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/Library` and `apps/web/src/features/library`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M3-LIBRARY-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M3-LIBRARY-T-002 | Domain and EF Core | Implement LibraryItem, LibraryCopy, Borrowing, LoanReservation plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M3-LIBRARY-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M3-LIBRARY-T-004 | Catalog books, magazines, CDs and other library assets | Backend API + frontend journey for: Catalog books, magazines, CDs and other library assets | Reviewed behavior, access checks and automated tests for catalog books, magazines, cds and other library assets |
| M3-LIBRARY-T-005 | Multiple physical copies and searchable catalogue | Backend API + frontend journey for: Multiple physical copies and searchable catalogue | Reviewed behavior, access checks and automated tests for multiple physical copies and searchable catalogue |
| M3-LIBRARY-T-006 | Borrow and return transactions for authorized members | Backend API + frontend journey for: Borrow and return transactions for authorized members | Reviewed behavior, access checks and automated tests for borrow and return transactions for authorized members |
| M3-LIBRARY-T-007 | Loan due dates, reservation and overdue list | Backend API + frontend journey for: Loan due dates, reservation and overdue list | Reviewed behavior, access checks and automated tests for loan due dates, reservation and overdue list |
| M3-LIBRARY-T-008 | Lost/damaged copy adjustments and reports | Backend API + frontend journey for: Lost/damaged copy adjustments and reports | Reviewed behavior, access checks and automated tests for lost/damaged copy adjustments and reports |
| M3-LIBRARY-T-009 | Optional automated library fines invoiced to M1 fees | Backend API + frontend journey for: Optional automated library fines invoiced to M1 fees | Reviewed behavior, access checks and automated tests for optional automated library fines invoiced to m1 fees |
| M3-LIBRARY-T-010 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M3-LIBRARY-T-011 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
