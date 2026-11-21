# Advanced Grading, Analysis & Report Cards — Business Rules

**Module:** `advanced-examinations`  |  **Requirement namespace:** `M2-ADVANCED_EXAMINATIONS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

## Module-specific rules

1. M2-ADVANCED_EXAMINATIONS-BR-001: Weighted components must total their configured policy allowance or be explicitly normalized.
2. M2-ADVANCED_EXAMINATIONS-BR-002: Templates render from a published result snapshot, never live mutable mark rows.
3. M2-ADVANCED_EXAMINATIONS-BR-003: Merit ties, rounding, grace and optional course policy are explicitly configured.

## Mandatory shared rules

- A user operation must match authenticated membership, institution, and a named action permission.
- IDs are immutable; timestamps and changes are audited for privileged or material operations.
- Race conditions and duplicate requests must be handled at database/transaction boundaries.
- Mutating commands return a predictable validation or conflict error instead of silently overwriting another actor.
- Sensitive exports use expiring authorized access or streamed responses; never expose public object storage URLs.
- Configuration changes affecting historical records require effective dates or policy versions.

## Decisions requiring confirmation

The PDF provides examples and screenshots, but does not define all legal/academic rules. Obtain explicit approval for numeric limits, rounding, thresholds, retention periods and exceptional overrides.
