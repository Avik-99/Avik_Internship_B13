# In-App Messaging, SMS & Notifications — Dependencies & Interfaces

**Module:** `messaging-sms`  |  **Requirement namespace:** `M2-MESSAGING_SMS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

## Upstream prerequisites

| Depends on | Owner | Milestone |
| --- | --- | --- |
| foundation-identity | Identity & Access Control | M1 |
| student-lifecycle | Students, Guardians & Enrollment | M1 |
| faculty-staff | Faculty, Teacher & Staff Directory | M1 |
| attendance | Student & Staff Attendance | M1 |
| fee-management | Student Fees, Dues & Cash Collection | M1 |
| assessment-results | Examinations, Grades & Results | M1 |
| notices-events | Notices, Events & Calendar | M1 |

## Integration contract

- Use an owning module’s application interface for commands that require an immediate business outcome.
- Prefer versioned events for cross-module reactions; consumer inbox must deduplicate by eventId.
- Use read model projections or dedicated authorized query interfaces for cross-module reporting.
- Never import another module’s Infrastructure project or EF Core DbContext.
- Stub or mock upstream published interfaces during independent feature development.

## Published events

- Event `Messaging.MessageSent.v1`: outbox publication after local commit; `eventId`, `tenantId`, `occurredAtUtc`, `schemaVersion`, correlation and source entity ID required.
- Event `Messaging.DeliveryFailed.v1`: outbox publication after local commit; `eventId`, `tenantId`, `occurredAtUtc`, `schemaVersion`, correlation and source entity ID required.

## Parallel work ownership

- **Module owner** owns `src/Modules/MessagingSms`, `apps/web/src/features/messaging-sms`, module tests and API contracts.
- **Platform/core concerns** (shared authentication, tenant middleware, observability and CI conventions) are owned within the single @biddakool-devs team.
- **Integration reviewer** signs off cross-module payload or behavior changes before contract merge.
- Avoid having two developers edit the same EF migrations, shared OpenAPI schema or common UI package without coordination.
