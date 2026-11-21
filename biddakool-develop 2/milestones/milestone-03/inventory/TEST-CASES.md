# Inventory & Warehouse Operations — Test Cases

**Module:** `inventory`  |  **Requirement namespace:** `M3-INVENTORY`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M3-INVENTORY-TC-001 | Master item catalogue, unit and reorder threshold | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-INVENTORY-TC-002 | Warehouse/store locations per campus | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-INVENTORY-TC-003 | Supplier purchase on cash or credit with stock receipt | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-INVENTORY-TC-004 | Issue/sell items to students, staff or teachers and print receipt | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-INVENTORY-TC-005 | Stock deductions, adjustments and transfer between warehouses | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-INVENTORY-TC-006 | Stock ledger and warehouse-wise availability reports | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-INVENTORY-TC-007 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M3-INVENTORY-TC-008 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M3-INVENTORY-TC-009 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
