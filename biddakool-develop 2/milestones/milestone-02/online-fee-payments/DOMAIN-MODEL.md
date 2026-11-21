# Online Payments & Reconciliation — Domain Model

**Module:** `online-fee-payments`  |  **Requirement namespace:** `M2-ONLINE_FEE_PAYMENTS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

## Bounded context

Provider-neutral hosted payment checkout and reconciliation integrated with M1 fee invoices.

## Candidate aggregates / entities

| Concept | Suggested category | Baseline fields (not final DDL) |
| --- | --- | --- |
| PaymentIntent | Candidate aggregate root | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| PaymentProviderConfig | Candidate aggregate root | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| PaymentCallback | Candidate aggregate root | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| PaymentSettlement | Candidate entity/value object; finalize per transactional invariant | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| PaymentReconciliation | Candidate entity/value object; finalize per transactional invariant | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |

## Domain invariants

- Never mark a bill paid based on an unverified browser redirect.
- Webhook signatures, amount, currency and tenant payment intent must match.
- One captured transaction is applied to fees exactly once.

## Command/query separation

- Domain methods express allowed transitions; application commands orchestrate authorization, validation and transactions.
- Queries project directly to DTOs and do not mutate domain state.
- Aggregate references across modules use opaque identifiers and published contracts.
- Avoid generic repository abstractions that obscure domain invariants; use aggregate-specific repositories when useful.

## Versioned integration messages

- `Payments.Captured.v1`
- `Payments.Refunded.v1`

## Model review checklist

- Identify exact aggregate boundaries and consistency requirements in an ADR before merging initial migrations.
- Confirm the entity-to-tenant relationship and any institution/campus/program scoping.
- Clarify lifecycle, soft-delete rules and historical retention; no destructive edits to published/financial records.
