# Student & Staff Attendance — Business Rules

**Module:** `attendance`  |  **Requirement namespace:** `M1-ATTENDANCE`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

## Module-specific rules

1. M1-ATTENDANCE-BR-001: Exactly one current attendance record per student per attendance session.
2. M1-ATTENDANCE-BR-002: Only assigned staff or authorized officers may finalize session attendance.
3. M1-ATTENDANCE-BR-003: Corrected records retain immutable adjustment history.
4. M1-ATTENDANCE-BR-004: Threshold alerts are configured in M2/M3; do not hardcode 75% as a global rule.

## Mandatory shared rules

- A user operation must match authenticated membership, institution, and a named action permission.
- IDs are immutable; timestamps and changes are audited for privileged or material operations.
- Race conditions and duplicate requests must be handled at database/transaction boundaries.
- Mutating commands return a predictable validation or conflict error instead of silently overwriting another actor.
- Sensitive exports use expiring authorized access or streamed responses; never expose public object storage URLs.
- Configuration changes affecting historical records require effective dates or policy versions.

## Decisions requiring confirmation

The PDF provides examples and screenshots, but does not define all legal/academic rules. Obtain explicit approval for numeric limits, rounding, thresholds, retention periods and exceptional overrides.
