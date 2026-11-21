# Student, Guardian, Teacher & Admin Portals — Business Rules

**Module:** `self-service-portals`  |  **Requirement namespace:** `M1-SELF_SERVICE_PORTALS`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

## Module-specific rules

1. M1-SELF_SERVICE_PORTALS-BR-001: Portals never bypass module API boundaries or access another module’s EF DbContext.
2. M1-SELF_SERVICE_PORTALS-BR-002: A guardian’s child switching must revalidate the relation on each request.
3. M1-SELF_SERVICE_PORTALS-BR-003: Dashboard counts are tenant-scoped; data freshness must be indicated if derived asynchronously.

## Mandatory shared rules

- A user operation must match authenticated membership, institution, and a named action permission.
- IDs are immutable; timestamps and changes are audited for privileged or material operations.
- Race conditions and duplicate requests must be handled at database/transaction boundaries.
- Mutating commands return a predictable validation or conflict error instead of silently overwriting another actor.
- Sensitive exports use expiring authorized access or streamed responses; never expose public object storage URLs.
- Configuration changes affecting historical records require effective dates or policy versions.

## Decisions requiring confirmation

The PDF provides examples and screenshots, but does not define all legal/academic rules. Obtain explicit approval for numeric limits, rounding, thresholds, retention periods and exceptional overrides.
