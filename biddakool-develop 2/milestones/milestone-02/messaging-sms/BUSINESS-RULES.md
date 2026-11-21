# In-App Messaging, SMS & Notifications — Business Rules

**Module:** `messaging-sms`  |  **Requirement namespace:** `M2-MESSAGING_SMS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

## Module-specific rules

1. M2-MESSAGING_SMS-BR-001: Messaging participants must have a permissible communication relationship.
2. M2-MESSAGING_SMS-BR-002: Automated sends are queued with transactional outbox and delivery idempotency.
3. M2-MESSAGING_SMS-BR-003: Handle template variable escaping and sensitive field redaction in delivery logs.
4. M2-MESSAGING_SMS-BR-004: Tenant-specific SMS quota and provider credentials are access-controlled.

## Mandatory shared rules

- A user operation must match authenticated membership, institution, and a named action permission.
- IDs are immutable; timestamps and changes are audited for privileged or material operations.
- Race conditions and duplicate requests must be handled at database/transaction boundaries.
- Mutating commands return a predictable validation or conflict error instead of silently overwriting another actor.
- Sensitive exports use expiring authorized access or streamed responses; never expose public object storage URLs.
- Configuration changes affecting historical records require effective dates or policy versions.

## Decisions requiring confirmation

The PDF provides examples and screenshots, but does not define all legal/academic rules. Obtain explicit approval for numeric limits, rounding, thresholds, retention periods and exceptional overrides.
