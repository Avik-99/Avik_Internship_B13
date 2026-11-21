# Online Payments & Reconciliation — Business Rules

**Module:** `online-fee-payments`  |  **Requirement namespace:** `M2-ONLINE_FEE_PAYMENTS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

## Module-specific rules

1. M2-ONLINE_FEE_PAYMENTS-BR-001: Never mark a bill paid based on an unverified browser redirect.
2. M2-ONLINE_FEE_PAYMENTS-BR-002: Webhook signatures, amount, currency and tenant payment intent must match.
3. M2-ONLINE_FEE_PAYMENTS-BR-003: One captured transaction is applied to fees exactly once.

## Mandatory shared rules

- A user operation must match authenticated membership, institution, and a named action permission.
- IDs are immutable; timestamps and changes are audited for privileged or material operations.
- Race conditions and duplicate requests must be handled at database/transaction boundaries.
- Mutating commands return a predictable validation or conflict error instead of silently overwriting another actor.
- Sensitive exports use expiring authorized access or streamed responses; never expose public object storage URLs.
- Configuration changes affecting historical records require effective dates or policy versions.

## Decisions requiring confirmation

The PDF provides examples and screenshots, but does not define all legal/academic rules. Obtain explicit approval for numeric limits, rounding, thresholds, retention periods and exceptional overrides.
