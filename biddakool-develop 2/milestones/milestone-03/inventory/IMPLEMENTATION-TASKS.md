# Inventory & Warehouse Operations — Developer Task Backlog

**Module:** `inventory`  |  **Requirement namespace:** `M3-INVENTORY`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/Inventory` and `apps/web/src/features/inventory`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M3-INVENTORY-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M3-INVENTORY-T-002 | Domain and EF Core | Implement InventoryItem, Warehouse, Supplier, PurchaseOrder plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M3-INVENTORY-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M3-INVENTORY-T-004 | Master item catalogue, unit and reorder threshold | Backend API + frontend journey for: Master item catalogue, unit and reorder threshold | Reviewed behavior, access checks and automated tests for master item catalogue, unit and reorder threshold |
| M3-INVENTORY-T-005 | Warehouse/store locations per campus | Backend API + frontend journey for: Warehouse/store locations per campus | Reviewed behavior, access checks and automated tests for warehouse/store locations per campus |
| M3-INVENTORY-T-006 | Supplier purchase on cash or credit with stock receipt | Backend API + frontend journey for: Supplier purchase on cash or credit with stock receipt | Reviewed behavior, access checks and automated tests for supplier purchase on cash or credit with stock receipt |
| M3-INVENTORY-T-007 | Issue/sell items to students, staff or teachers and print receipt | Backend API + frontend journey for: Issue/sell items to students, staff or teachers and print receipt | Reviewed behavior, access checks and automated tests for issue/sell items to students, staff or teachers and print receipt |
| M3-INVENTORY-T-008 | Stock deductions, adjustments and transfer between warehouses | Backend API + frontend journey for: Stock deductions, adjustments and transfer between warehouses | Reviewed behavior, access checks and automated tests for stock deductions, adjustments and transfer between warehouses |
| M3-INVENTORY-T-009 | Stock ledger and warehouse-wise availability reports | Backend API + frontend journey for: Stock ledger and warehouse-wise availability reports | Reviewed behavior, access checks and automated tests for stock ledger and warehouse-wise availability reports |
| M3-INVENTORY-T-010 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M3-INVENTORY-T-011 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
