# Advanced Academic & Operational Analytics — Business Rules

**Module:** `analytics-insights`  |  **Requirement namespace:** `M3-ANALYTICS_INSIGHTS`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

## Module-specific rules

1. M3-ANALYTICS_INSIGHTS-BR-001: Analytics projections are read-only and do not become system of record.
2. M3-ANALYTICS_INSIGHTS-BR-002: At-risk flags are decision support, never automatic disciplinary action.
3. M3-ANALYTICS_INSIGHTS-BR-003: Cross-tenant aggregate statistics require explicit consent and privacy threshold controls.

## Mandatory shared rules

- A user operation must match authenticated membership, institution, and a named action permission.
- IDs are immutable; timestamps and changes are audited for privileged or material operations.
- Race conditions and duplicate requests must be handled at database/transaction boundaries.
- Mutating commands return a predictable validation or conflict error instead of silently overwriting another actor.
- Sensitive exports use expiring authorized access or streamed responses; never expose public object storage URLs.
- Configuration changes affecting historical records require effective dates or policy versions.

## Decisions requiring confirmation

The PDF provides examples and screenshots, but does not define all legal/academic rules. Obtain explicit approval for numeric limits, rounding, thresholds, retention periods and exceptional overrides.
