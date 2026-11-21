# Payroll, Deductions & Provident Fund — Business Rules

**Module:** `staff-payroll`  |  **Requirement namespace:** `M2-STAFF_PAYROLL`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

## Module-specific rules

1. M2-STAFF_PAYROLL-BR-001: A payroll run is idempotent per employee and pay period.
2. M2-STAFF_PAYROLL-BR-002: Locked payroll cannot be modified; changes are carried by explicit adjustment/revision.
3. M2-STAFF_PAYROLL-BR-003: Attendance deductions must use an auditable policy snapshot.

## Mandatory shared rules

- A user operation must match authenticated membership, institution, and a named action permission.
- IDs are immutable; timestamps and changes are audited for privileged or material operations.
- Race conditions and duplicate requests must be handled at database/transaction boundaries.
- Mutating commands return a predictable validation or conflict error instead of silently overwriting another actor.
- Sensitive exports use expiring authorized access or streamed responses; never expose public object storage URLs.
- Configuration changes affecting historical records require effective dates or policy versions.

## Decisions requiring confirmation

The PDF provides examples and screenshots, but does not define all legal/academic rules. Obtain explicit approval for numeric limits, rounding, thresholds, retention periods and exceptional overrides.
