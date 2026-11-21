# Identity & Access Control — Business Rules

**Module:** `foundation-identity`  |  **Requirement namespace:** `M1-FOUNDATION_IDENTITY`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

## Module-specific rules

1. M1-FOUNDATION_IDENTITY-BR-001: Identity IDs are globally unique, but permissions are resolved within the selected tenant membership.
2. M1-FOUNDATION_IDENTITY-BR-002: Deny access by default; never trust tenant identifiers in request bodies.
3. M1-FOUNDATION_IDENTITY-BR-003: No person can gain tenant membership via merely knowing an email address.
4. M1-FOUNDATION_IDENTITY-BR-004: Password resets invalidate prior sessions according to the security policy.

## Mandatory shared rules

- A user operation must match authenticated membership, institution, and a named action permission.
- IDs are immutable; timestamps and changes are audited for privileged or material operations.
- Race conditions and duplicate requests must be handled at database/transaction boundaries.
- Mutating commands return a predictable validation or conflict error instead of silently overwriting another actor.
- Sensitive exports use expiring authorized access or streamed responses; never expose public object storage URLs.
- Configuration changes affecting historical records require effective dates or policy versions.

## Decisions requiring confirmation

The PDF provides examples and screenshots, but does not define all legal/academic rules. Obtain explicit approval for numeric limits, rounding, thresholds, retention periods and exceptional overrides.
