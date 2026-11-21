# Inventory & Warehouse Operations — Acceptance Criteria

**Module:** `inventory`  |  **Requirement namespace:** `M3-INVENTORY`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M3-INVENTORY-AC-001 | Authorized StoreManager can complete: master item catalogue, unit and reorder threshold. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-INVENTORY-AC-002 | Authorized StoreManager can complete: warehouse/store locations per campus. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-INVENTORY-AC-003 | Authorized StoreManager can complete: supplier purchase on cash or credit with stock receipt. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-INVENTORY-AC-004 | Authorized StoreManager can complete: issue/sell items to students, staff or teachers and print receipt. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-INVENTORY-AC-005 | Authorized StoreManager can complete: stock deductions, adjustments and transfer between warehouses. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-INVENTORY-AC-006 | Authorized StoreManager can complete: stock ledger and warehouse-wise availability reports. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M3-INVENTORY-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: StoreManager, Accountant, InstitutionAdmin.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
