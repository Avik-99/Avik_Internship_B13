# Faculty, Teacher & Staff Directory — Business Rules

**Module:** `faculty-staff`  |  **Requirement namespace:** `M1-FACULTY_STAFF`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

## Module-specific rules

1. M1-FACULTY_STAFF-BR-001: A user can be a teacher in one institution and a guardian in another.
2. M1-FACULTY_STAFF-BR-002: Teaching assignments are effective-dated for history and timetable integrity.
3. M1-FACULTY_STAFF-BR-003: Employment status changes do not remove historical teaching, attendance or grading records.

## Mandatory shared rules

- A user operation must match authenticated membership, institution, and a named action permission.
- IDs are immutable; timestamps and changes are audited for privileged or material operations.
- Race conditions and duplicate requests must be handled at database/transaction boundaries.
- Mutating commands return a predictable validation or conflict error instead of silently overwriting another actor.
- Sensitive exports use expiring authorized access or streamed responses; never expose public object storage URLs.
- Configuration changes affecting historical records require effective dates or policy versions.

## Decisions requiring confirmation

The PDF provides examples and screenshots, but does not define all legal/academic rules. Obtain explicit approval for numeric limits, rounding, thresholds, retention periods and exceptional overrides.
