# Inventory & Warehouse Operations

**Module:** `inventory`  |  **Requirement namespace:** `M3-INVENTORY`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Purpose:** Purchase, stock transfer and sale/distribution of institute supplies and merchandise.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 10, 41** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: InventoryItem, Warehouse, Supplier, PurchaseOrder, StockReceipt, InventoryMovement, StockTransfer, InventorySale. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Master item catalogue, unit and reorder threshold
- Warehouse/store locations per campus
- Supplier purchase on cash or credit with stock receipt
- Issue/sell items to students, staff or teachers and print receipt
- Stock deductions, adjustments and transfer between warehouses
- Stock ledger and warehouse-wise availability reports

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/Inventory`.
- Next.js feature UI and typed client under `apps/web/src/features/inventory`.
- Test project at `tests/Inventory.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| tenant-institution | Tenant & Institution Configuration | M1 |
| student-lifecycle | Students, Guardians & Enrollment | M1 |
| faculty-staff | Faculty, Teacher & Staff Directory | M1 |
| accounting-ledger | Accounting & General Ledger | M2 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
