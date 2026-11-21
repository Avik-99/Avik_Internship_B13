# Notices, Events & Calendar — Business Rules

**Module:** `notices-events`  |  **Requirement namespace:** `M1-NOTICES_EVENTS`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

## Module-specific rules

1. M1-NOTICES_EVENTS-BR-001: Targeting must be resolved server-side from memberships and enrollment.
2. M1-NOTICES_EVENTS-BR-002: Do not expose private notices through public asset URLs.
3. M1-NOTICES_EVENTS-BR-003: Unpublished and expired notices do not appear in user feeds.

## Mandatory shared rules

- A user operation must match authenticated membership, institution, and a named action permission.
- IDs are immutable; timestamps and changes are audited for privileged or material operations.
- Race conditions and duplicate requests must be handled at database/transaction boundaries.
- Mutating commands return a predictable validation or conflict error instead of silently overwriting another actor.
- Sensitive exports use expiring authorized access or streamed responses; never expose public object storage URLs.
- Configuration changes affecting historical records require effective dates or policy versions.

## Decisions requiring confirmation

The PDF provides examples and screenshots, but does not define all legal/academic rules. Obtain explicit approval for numeric limits, rounding, thresholds, retention periods and exceptional overrides.
