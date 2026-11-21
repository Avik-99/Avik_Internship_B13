# Biometric, RFID & Device Attendance — Developer Task Backlog

**Module:** `device-attendance`  |  **Requirement namespace:** `M2-DEVICE_ATTENDANCE`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/DeviceAttendance` and `apps/web/src/features/device-attendance`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M2-DEVICE_ATTENDANCE-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M2-DEVICE_ATTENDANCE-T-002 | Domain and EF Core | Implement AttendanceDevice, DevicePersonMapping, RawPunch, PunchReconciliation plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M2-DEVICE_ATTENDANCE-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M2-DEVICE_ATTENDANCE-T-004 | Device registry per institution/campus | Backend API + frontend journey for: Device registry per institution/campus | Reviewed behavior, access checks and automated tests for device registry per institution/campus |
| M2-DEVICE_ATTENDANCE-T-005 | External vendor bridge for RFID, card, fingerprint or face attendance data | Backend API + frontend journey for: External vendor bridge for RFID, card, fingerprint or face attendance data | Reviewed behavior, access checks and automated tests for external vendor bridge for rfid, card, fingerprint or face attendance data |
| M2-DEVICE_ATTENDANCE-T-006 | Per-device staff/student identity mapping | Backend API + frontend journey for: Per-device staff/student identity mapping | Reviewed behavior, access checks and automated tests for per-device staff/student identity mapping |
| M2-DEVICE_ATTENDANCE-T-007 | Idempotent attendance event ingestion with clock synchronization | Backend API + frontend journey for: Idempotent attendance event ingestion with clock synchronization | Reviewed behavior, access checks and automated tests for idempotent attendance event ingestion with clock synchronization |
| M2-DEVICE_ATTENDANCE-T-008 | Review and reconcile missing/duplicate/late records | Backend API + frontend journey for: Review and reconcile missing/duplicate/late records | Reviewed behavior, access checks and automated tests for review and reconcile missing/duplicate/late records |
| M2-DEVICE_ATTENDANCE-T-009 | Automated attendance notifications and status alerts | Backend API + frontend journey for: Automated attendance notifications and status alerts | Reviewed behavior, access checks and automated tests for automated attendance notifications and status alerts |
| M2-DEVICE_ATTENDANCE-T-010 | Expose staff attendance events for payroll rules | Backend API + frontend journey for: Expose staff attendance events for payroll rules | Reviewed behavior, access checks and automated tests for expose staff attendance events for payroll rules |
| M2-DEVICE_ATTENDANCE-T-011 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M2-DEVICE_ATTENDANCE-T-012 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

## Parallelization plan

1. **Contract owner:** Validate requirements, domain, endpoints and migration proposal; secure review sign-off.
2. **Backend developer(s):** Build aggregates, EF Core mappings, CQRS requests, permissions and events behind approved contract.
3. **Frontend developer(s):** Build Next.js screens against generated OpenAPI mock/typed client.
4. **QA developer:** Build acceptance, contract, tenant-isolation and negative-path tests independently.
5. **Integration developer:** Wire consumers after contract is stable and run docker-compose/E2E scenarios.

## Pull request merge policy

- PRs should be small and scoped to this module; one migration owner per module.
- A contract breaking change requires ADR + affected consumers approval before merge.
- No PR is done without an appropriate test, updated docs and reviewer.
