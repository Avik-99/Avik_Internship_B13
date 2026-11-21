# Students, Guardians & Enrollment — Business Rules

**Module:** `student-lifecycle`  |  **Requirement namespace:** `M1-STUDENT_LIFECYCLE`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

## Module-specific rules

1. M1-STUDENT_LIFECYCLE-BR-001: Identity and enrollment history must be separate to preserve prior academic records.
2. M1-STUDENT_LIFECYCLE-BR-002: A guardian must be linked and authorized to view an individual student.
3. M1-STUDENT_LIFECYCLE-BR-003: Roll and registration numbers are uniqueness-scoped to the institution policy.
4. M1-STUDENT_LIFECYCLE-BR-004: Promotion does not mutate previous term placement or already-published results.

## Mandatory shared rules

- A user operation must match authenticated membership, institution, and a named action permission.
- IDs are immutable; timestamps and changes are audited for privileged or material operations.
- Race conditions and duplicate requests must be handled at database/transaction boundaries.
- Mutating commands return a predictable validation or conflict error instead of silently overwriting another actor.
- Sensitive exports use expiring authorized access or streamed responses; never expose public object storage URLs.
- Configuration changes affecting historical records require effective dates or policy versions.

## Decisions requiring confirmation

The PDF provides examples and screenshots, but does not define all legal/academic rules. Obtain explicit approval for numeric limits, rounding, thresholds, retention periods and exceptional overrides.
