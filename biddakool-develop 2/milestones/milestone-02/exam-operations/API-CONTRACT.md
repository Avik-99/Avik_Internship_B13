# Exam Admit Cards & Seat Plans — API Contract

**Module:** `exam-operations`  |  **Requirement namespace:** `M2-EXAM_OPERATIONS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Status:** Proposed routes; finalize OpenAPI changes before parallel implementation. Only the owning module changes these contracts.

## Route inventory

| ID | Method | Path | Responsibility |
| --- | --- | --- | --- |
| M2-EXAM_OPERATIONS-API-001 | POST | /api/v1/exam-operations/{examId}/allocate-seats | Validated command (idempotent where retried) |
| M2-EXAM_OPERATIONS-API-002 | GET | /api/v1/exam-operations/{examId}/admit-cards | Read/list projection |
| M2-EXAM_OPERATIONS-API-003 | GET | /api/v1/exam-operations/{examId}/seat-plan | Read/list projection |
| M2-EXAM_OPERATIONS-API-004 | POST | /api/v1/exam-operations/{examId}/publish | Validated command (idempotent where retried) |

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
