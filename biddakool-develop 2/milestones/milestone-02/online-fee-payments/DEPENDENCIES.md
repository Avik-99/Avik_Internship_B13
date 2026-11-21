# Online Payments & Reconciliation — Dependencies & Interfaces

**Module:** `online-fee-payments`  |  **Requirement namespace:** `M2-ONLINE_FEE_PAYMENTS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

## Upstream prerequisites

| Depends on | Owner | Milestone |
| --- | --- | --- |
| fee-management | Student Fees, Dues & Cash Collection | M1 |
| foundation-identity | Identity & Access Control | M1 |
| tenant-institution | Tenant & Institution Configuration | M1 |

## Integration contract

- Use an owning module’s application interface for commands that require an immediate business outcome.
- Prefer versioned events for cross-module reactions; consumer inbox must deduplicate by eventId.
- Use read model projections or dedicated authorized query interfaces for cross-module reporting.
- Never import another module’s Infrastructure project or EF Core DbContext.
- Stub or mock upstream published interfaces during independent feature development.

## Published events

- Event `Payments.Captured.v1`: outbox publication after local commit; `eventId`, `tenantId`, `occurredAtUtc`, `schemaVersion`, correlation and source entity ID required.
- Event `Payments.Refunded.v1`: outbox publication after local commit; `eventId`, `tenantId`, `occurredAtUtc`, `schemaVersion`, correlation and source entity ID required.

## Parallel work ownership

- **Module owner** owns `src/Modules/OnlineFeePayments`, `apps/web/src/features/online-fee-payments`, module tests and API contracts.
- **Platform/core concerns** (shared authentication, tenant middleware, observability and CI conventions) are owned within the single @biddakool-devs team.
- **Integration reviewer** signs off cross-module payload or behavior changes before contract merge.
- Avoid having two developers edit the same EF migrations, shared OpenAPI schema or common UI package without coordination.
