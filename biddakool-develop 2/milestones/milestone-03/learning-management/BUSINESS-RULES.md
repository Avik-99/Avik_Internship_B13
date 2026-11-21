# Online Courses, Assignments & Quizzes — Business Rules

**Module:** `learning-management`  |  **Requirement namespace:** `M3-LEARNING_MANAGEMENT`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

## Module-specific rules

1. M3-LEARNING_MANAGEMENT-BR-001: A classroom belongs to an existing academic course offering.
2. M3-LEARNING_MANAGEMENT-BR-002: Deadline extensions and late submissions are policy-driven and audited.
3. M3-LEARNING_MANAGEMENT-BR-003: Quiz question answers are never included in pre-submission student responses.

## Mandatory shared rules

- A user operation must match authenticated membership, institution, and a named action permission.
- IDs are immutable; timestamps and changes are audited for privileged or material operations.
- Race conditions and duplicate requests must be handled at database/transaction boundaries.
- Mutating commands return a predictable validation or conflict error instead of silently overwriting another actor.
- Sensitive exports use expiring authorized access or streamed responses; never expose public object storage URLs.
- Configuration changes affecting historical records require effective dates or policy versions.

## Decisions requiring confirmation

The PDF provides examples and screenshots, but does not define all legal/academic rules. Obtain explicit approval for numeric limits, rounding, thresholds, retention periods and exceptional overrides.
