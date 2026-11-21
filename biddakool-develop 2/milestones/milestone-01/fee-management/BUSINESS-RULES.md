# Student Fees, Dues & Cash Collection — Business Rules

**Module:** `fee-management`  |  **Requirement namespace:** `M1-FEE_MANAGEMENT`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

## Module-specific rules

1. M1-FEE_MANAGEMENT-BR-001: Amounts are decimal with currency and rounding policy; do not use float.
2. M1-FEE_MANAGEMENT-BR-002: Receipts are unique in an institution accounting sequence and remain immutable.
3. M1-FEE_MANAGEMENT-BR-003: Payments must not over-allocate; credits are represented explicitly.
4. M1-FEE_MANAGEMENT-BR-004: All financial writes run in an atomic database transaction with idempotency protection.

## Mandatory shared rules

- A user operation must match authenticated membership, institution, and a named action permission.
- IDs are immutable; timestamps and changes are audited for privileged or material operations.
- Race conditions and duplicate requests must be handled at database/transaction boundaries.
- Mutating commands return a predictable validation or conflict error instead of silently overwriting another actor.
- Sensitive exports use expiring authorized access or streamed responses; never expose public object storage URLs.
- Configuration changes affecting historical records require effective dates or policy versions.

## Decisions requiring confirmation

The PDF provides examples and screenshots, but does not define all legal/academic rules. Obtain explicit approval for numeric limits, rounding, thresholds, retention periods and exceptional overrides.

## Worked collection and reversal

A cashier records 600 against a 1,000 balance in the same currency. Commit payment, allocation, immutable receipt, audit, idempotency outcome and outbox together. The balance is 400. Replaying the same authorized payment returns the original receipt. A concurrent independent payment must recheck available dues before allocating. An approved full reversal references the original payment and adds a compensating entry of 600. With no other postings the balance returns to 1,000 and both entries remain visible. Confirm reversal authority and accounting period rules before enabling this action.
