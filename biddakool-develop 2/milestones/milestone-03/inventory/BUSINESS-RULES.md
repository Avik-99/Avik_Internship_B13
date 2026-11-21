# Inventory & Warehouse Operations — Business Rules

**Module:** `inventory`  |  **Requirement namespace:** `M3-INVENTORY`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

## Module-specific rules

1. M3-INVENTORY-BR-001: Stock is changed by append-only movement records with reconciled balance.
2. M3-INVENTORY-BR-002: Transfers carry source and destination warehouse and controlled handoff.
3. M3-INVENTORY-BR-003: Purchase or sale postings integrate via events, not direct ledger table writes.

## Mandatory shared rules

- A user operation must match authenticated membership, institution, and a named action permission.
- IDs are immutable; timestamps and changes are audited for privileged or material operations.
- Race conditions and duplicate requests must be handled at database/transaction boundaries.
- Mutating commands return a predictable validation or conflict error instead of silently overwriting another actor.
- Sensitive exports use expiring authorized access or streamed responses; never expose public object storage URLs.
- Configuration changes affecting historical records require effective dates or policy versions.

## Decisions requiring confirmation

The PDF provides examples and screenshots, but does not define all legal/academic rules. Obtain explicit approval for numeric limits, rounding, thresholds, retention periods and exceptional overrides.
