# Student & Staff Attendance — API Contract

**Module:** `attendance`  |  **Requirement namespace:** `M1-ATTENDANCE`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Status:** Proposed routes; finalize OpenAPI changes before parallel implementation. Only the owning module changes these contracts.

## Route inventory

| ID | Method | Path | Responsibility |
| --- | --- | --- | --- |
| M1-ATTENDANCE-API-001 | POST | /api/v1/attendance/sessions | Validated command (idempotent where retried) |
| M1-ATTENDANCE-API-002 | PUT | /api/v1/attendance/sessions/{sessionId}/records | Validated command (idempotent where retried) |
| M1-ATTENDANCE-API-003 | POST | /api/v1/attendance/sessions/{sessionId}/finalize | Validated command (idempotent where retried) |
| M1-ATTENDANCE-API-004 | GET | /api/v1/attendance/students/{studentId}/summary | Read/list projection |
| M1-ATTENDANCE-API-005 | GET | /api/v1/attendance/staff | Read/list projection |
| M1-ATTENDANCE-API-006 | POST | /api/v1/attendance/corrections | Validated command (idempotent where retried) |

## Headers & authorization

- `Authorization: Bearer <access-token>` for API clients (or approved secure BFF cookie strategy).
- `X-Institution-Id`: only if multiple memberships are supported; validate against token/membership and never trust it alone.
- `Idempotency-Key`: required for financial, registration and other retryable critical writes.
- Use `application/json` except sanctioned streaming/upload endpoints.

## Standard success envelope (illustrative)

```json
{
  "data": { "id": "d5853499-84db-426c-9951-2d86e873c5b2" },
  "meta": { "correlationId": "01J-EXAMPLE" }
}
```

## Errors

Return RFC 9457 Problem Details (`application/problem+json`) for validation (400/422), authorization (401/403), not found (404), conflict (409), rate limits (429). Domain error codes remain stable.

## Query conventions

Use `page`, `pageSize` with a capped maximum; explicit `sort`, `filter` and stable date formats. For large exports, use asynchronous export jobs with authorized expiring links.

## Frontend integration

Generate TypeScript DTO/clients from a reviewed OpenAPI schema. Never duplicate request models as manually diverging frontend interfaces. Add contract tests for each listed route.

The [worked finalization contract](../../../docs/guides/ATTENDANCE-VERTICAL-SLICE.md) covers API-003 retries, concurrency and rollback. Ratify the illustrated payload and errors during OpenAPI review.

Use the [OpenAPI finalize operation](../../../contracts/openapi/attendance-finalize.yaml) for proposed wire fields, header rules and machine-readable responses for API-003. API and web owners review the same revision before generating a client.
