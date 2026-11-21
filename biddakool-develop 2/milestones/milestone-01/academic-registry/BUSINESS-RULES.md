# Academic Registry & Curriculum — Business Rules

**Module:** `academic-registry`  |  **Requirement namespace:** `M1-ACADEMIC_REGISTRY`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

## Module-specific rules

1. M1-ACADEMIC_REGISTRY-BR-001: A course is the durable catalog definition; an offering is the term-specific delivery instance.
2. M1-ACADEMIC_REGISTRY-BR-002: Never delete a course/subject referenced by historical enrollments or results.
3. M1-ACADEMIC_REGISTRY-BR-003: Grade scales and curriculum definitions are versioned; historical results retain the policy version.
4. M1-ACADEMIC_REGISTRY-BR-004: Credit weighting and class roll numbers are institution/program rules, not hardcoded global behavior.

## Mandatory shared rules

- A user operation must match authenticated membership, institution, and a named action permission.
- IDs are immutable; timestamps and changes are audited for privileged or material operations.
- Race conditions and duplicate requests must be handled at database/transaction boundaries.
- Mutating commands return a predictable validation or conflict error instead of silently overwriting another actor.
- Sensitive exports use expiring authorized access or streamed responses; never expose public object storage URLs.
- Configuration changes affecting historical records require effective dates or policy versions.

## Decisions requiring confirmation

The PDF provides examples and screenshots, but does not define all legal/academic rules. Obtain explicit approval for numeric limits, rounding, thresholds, retention periods and exceptional overrides.
