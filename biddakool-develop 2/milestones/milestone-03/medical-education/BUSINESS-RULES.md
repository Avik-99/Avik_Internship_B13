# Medical College Academic Operations — Business Rules

**Module:** `medical-education`  |  **Requirement namespace:** `M3-MEDICAL_EDUCATION`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

## Module-specific rules

1. M3-MEDICAL_EDUCATION-BR-001: The 75% figure is a brochure example; each medical program must configure its valid threshold.
2. M3-MEDICAL_EDUCATION-BR-002: Eligibility calculations retain the exact exam/attendance policy version and evidence.
3. M3-MEDICAL_EDUCATION-BR-003: Student teacher evaluations must be anonymous to faculty recipients; set minimum aggregation size.
4. M3-MEDICAL_EDUCATION-BR-004: Medical extension does not fork student profile or duplicate attendance records.

## Mandatory shared rules

- A user operation must match authenticated membership, institution, and a named action permission.
- IDs are immutable; timestamps and changes are audited for privileged or material operations.
- Race conditions and duplicate requests must be handled at database/transaction boundaries.
- Mutating commands return a predictable validation or conflict error instead of silently overwriting another actor.
- Sensitive exports use expiring authorized access or streamed responses; never expose public object storage URLs.
- Configuration changes affecting historical records require effective dates or policy versions.

## Decisions requiring confirmation

The PDF provides examples and screenshots, but does not define all legal/academic rules. Obtain explicit approval for numeric limits, rounding, thresholds, retention periods and exceptional overrides.
