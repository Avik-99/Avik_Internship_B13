# SaaS Commercial Operations & Enterprise Extensions — Business Rules

**Module:** `saas-enterprise`  |  **Requirement namespace:** `M3-SAAS_ENTERPRISE`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

## Module-specific rules

1. M3-SAAS_ENTERPRISE-BR-001: Core tenant isolation cannot be deferred to Milestone 3.
2. M3-SAAS_ENTERPRISE-BR-002: Subscription enforcement must not make customer data inaccessible without approved retention/export procedure.
3. M3-SAAS_ENTERPRISE-BR-003: Platform support may assume institution access only via time-limited audited approval.

## Mandatory shared rules

- A user operation must match authenticated membership, institution, and a named action permission.
- IDs are immutable; timestamps and changes are audited for privileged or material operations.
- Race conditions and duplicate requests must be handled at database/transaction boundaries.
- Mutating commands return a predictable validation or conflict error instead of silently overwriting another actor.
- Sensitive exports use expiring authorized access or streamed responses; never expose public object storage URLs.
- Configuration changes affecting historical records require effective dates or policy versions.

## Decisions requiring confirmation

The PDF provides examples and screenshots, but does not define all legal/academic rules. Obtain explicit approval for numeric limits, rounding, thresholds, retention periods and exceptional overrides.
