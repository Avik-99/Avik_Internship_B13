# Leave Request & Approvals — Business Rules

**Module:** `leave-workflows`  |  **Requirement namespace:** `M2-LEAVE_WORKFLOWS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

## Module-specific rules

1. M2-LEAVE_WORKFLOWS-BR-001: Approvers cannot approve a request they are not entitled to review.
2. M2-LEAVE_WORKFLOWS-BR-002: Leave approval is audited with timestamp and approver identity.
3. M2-LEAVE_WORKFLOWS-BR-003: Approved leave creates explicit attendance exception events; no direct mutation from UI.

## Mandatory shared rules

- A user operation must match authenticated membership, institution, and a named action permission.
- IDs are immutable; timestamps and changes are audited for privileged or material operations.
- Race conditions and duplicate requests must be handled at database/transaction boundaries.
- Mutating commands return a predictable validation or conflict error instead of silently overwriting another actor.
- Sensitive exports use expiring authorized access or streamed responses; never expose public object storage URLs.
- Configuration changes affecting historical records require effective dates or policy versions.

## Decisions requiring confirmation

The PDF provides examples and screenshots, but does not define all legal/academic rules. Obtain explicit approval for numeric limits, rounding, thresholds, retention periods and exceptional overrides.
