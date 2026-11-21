# Accounting & General Ledger — Business Rules

**Module:** `accounting-ledger`  |  **Requirement namespace:** `M2-ACCOUNTING_LEDGER`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

## Module-specific rules

1. M2-ACCOUNTING_LEDGER-BR-001: Every posted journal entry balances debit and credit.
2. M2-ACCOUNTING_LEDGER-BR-002: Posted fiscal periods become read-only except authorized adjustment periods.
3. M2-ACCOUNTING_LEDGER-BR-003: No direct cross-module writes to accounting tables.
4. M2-ACCOUNTING_LEDGER-BR-004: External events are consumed with an inbox to ensure at-most-once financial posting effect.

## Mandatory shared rules

- A user operation must match authenticated membership, institution, and a named action permission.
- IDs are immutable; timestamps and changes are audited for privileged or material operations.
- Race conditions and duplicate requests must be handled at database/transaction boundaries.
- Mutating commands return a predictable validation or conflict error instead of silently overwriting another actor.
- Sensitive exports use expiring authorized access or streamed responses; never expose public object storage URLs.
- Configuration changes affecting historical records require effective dates or policy versions.

## Decisions requiring confirmation

The PDF provides examples and screenshots, but does not define all legal/academic rules. Obtain explicit approval for numeric limits, rounding, thresholds, retention periods and exceptional overrides.
