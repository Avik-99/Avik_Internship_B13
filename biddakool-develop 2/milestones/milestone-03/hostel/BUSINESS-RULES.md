# Hostel, Housing & Residence Fees — Business Rules

**Module:** `hostel`  |  **Requirement namespace:** `M3-HOSTEL`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

## Module-specific rules

1. M3-HOSTEL-BR-001: One bed can have only one active occupant for the same date interval.
2. M3-HOSTEL-BR-002: Check-in and transfer retain historical occupancy.
3. M3-HOSTEL-BR-003: Hostel never creates a parallel payment ledger; it creates Fee charges.

## Mandatory shared rules

- A user operation must match authenticated membership, institution, and a named action permission.
- IDs are immutable; timestamps and changes are audited for privileged or material operations.
- Race conditions and duplicate requests must be handled at database/transaction boundaries.
- Mutating commands return a predictable validation or conflict error instead of silently overwriting another actor.
- Sensitive exports use expiring authorized access or streamed responses; never expose public object storage URLs.
- Configuration changes affecting historical records require effective dates or policy versions.

## Decisions requiring confirmation

The PDF provides examples and screenshots, but does not define all legal/academic rules. Obtain explicit approval for numeric limits, rounding, thresholds, retention periods and exceptional overrides.
