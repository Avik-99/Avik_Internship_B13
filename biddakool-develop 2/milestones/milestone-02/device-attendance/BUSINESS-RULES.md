# Biometric, RFID & Device Attendance — Business Rules

**Module:** `device-attendance`  |  **Requirement namespace:** `M2-DEVICE_ATTENDANCE`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

## Module-specific rules

1. M2-DEVICE_ATTENDANCE-BR-001: Never store raw biometric templates in Biddakool unless explicitly required and separately reviewed.
2. M2-DEVICE_ATTENDANCE-BR-002: Importing the same vendor event twice must produce one attendance action.
3. M2-DEVICE_ATTENDANCE-BR-003: Device-to-tenant binding is validated before accepting events.

## Mandatory shared rules

- A user operation must match authenticated membership, institution, and a named action permission.
- IDs are immutable; timestamps and changes are audited for privileged or material operations.
- Race conditions and duplicate requests must be handled at database/transaction boundaries.
- Mutating commands return a predictable validation or conflict error instead of silently overwriting another actor.
- Sensitive exports use expiring authorized access or streamed responses; never expose public object storage URLs.
- Configuration changes affecting historical records require effective dates or policy versions.

## Decisions requiring confirmation

The PDF provides examples and screenshots, but does not define all legal/academic rules. Obtain explicit approval for numeric limits, rounding, thresholds, retention periods and exceptional overrides.
