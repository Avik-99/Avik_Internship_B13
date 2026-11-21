# Tenant & Institution Configuration — Business Rules

**Module:** `tenant-institution`  |  **Requirement namespace:** `M1-TENANT_INSTITUTION`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

## Module-specific rules

1. M1-TENANT_INSTITUTION-BR-001: Every institution-owned row carries a tenant discriminator and is protected from cross-tenant access.
2. M1-TENANT_INSTITUTION-BR-002: Institution type configures default flows but must not gate core domain objects through hardcoded conditionals.
3. M1-TENANT_INSTITUTION-BR-003: Tenant timezone is used for display and day boundaries; store timestamps as UTC.
4. M1-TENANT_INSTITUTION-BR-004: Tenant deletion is a controlled retention workflow, never an unreviewed hard delete.

## Mandatory shared rules

- A user operation must match authenticated membership, institution, and a named action permission.
- IDs are immutable; timestamps and changes are audited for privileged or material operations.
- Race conditions and duplicate requests must be handled at database/transaction boundaries.
- Mutating commands return a predictable validation or conflict error instead of silently overwriting another actor.
- Sensitive exports use expiring authorized access or streamed responses; never expose public object storage URLs.
- Configuration changes affecting historical records require effective dates or policy versions.

## Decisions requiring confirmation

The PDF provides examples and screenshots, but does not define all legal/academic rules. Obtain explicit approval for numeric limits, rounding, thresholds, retention periods and exceptional overrides.
