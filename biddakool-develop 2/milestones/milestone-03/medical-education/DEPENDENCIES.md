# Medical College Academic Operations — Dependencies & Interfaces

**Module:** `medical-education`  |  **Requirement namespace:** `M3-MEDICAL_EDUCATION`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

## Upstream prerequisites

| Depends on | Owner | Milestone |
| --- | --- | --- |
| academic-registry | Academic Registry & Curriculum | M1 |
| student-lifecycle | Students, Guardians & Enrollment | M1 |
| attendance | Student & Staff Attendance | M1 |
| assessment-results | Examinations, Grades & Results | M1 |
| leave-workflows | Leave Request & Approvals | M2 |
| messaging-sms | In-App Messaging, SMS & Notifications | M2 |
| faculty-staff | Faculty, Teacher & Staff Directory | M1 |

## Integration contract

- Use an owning module’s application interface for commands that require an immediate business outcome.
- Prefer versioned events for cross-module reactions; consumer inbox must deduplicate by eventId.
- Use read model projections or dedicated authorized query interfaces for cross-module reporting.
- Never import another module’s Infrastructure project or EF Core DbContext.
- Stub or mock upstream published interfaces during independent feature development.

## Published events

- Event `Medical.EligibilityCalculated.v1`: outbox publication after local commit; `eventId`, `tenantId`, `occurredAtUtc`, `schemaVersion`, correlation and source entity ID required.

## Parallel work ownership

- **Module owner** owns `src/Modules/MedicalEducation`, `apps/web/src/features/medical-education`, module tests and API contracts.
- **Platform/core concerns** (shared authentication, tenant middleware, observability and CI conventions) are owned within the single @biddakool-devs team.
- **Integration reviewer** signs off cross-module payload or behavior changes before contract merge.
- Avoid having two developers edit the same EF migrations, shared OpenAPI schema or common UI package without coordination.
