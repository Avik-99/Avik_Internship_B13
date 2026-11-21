# Biometric, RFID & Device Attendance — Test Cases

**Module:** `device-attendance`  |  **Requirement namespace:** `M2-DEVICE_ATTENDANCE`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M2-DEVICE_ATTENDANCE-TC-001 | Device registry per institution/campus | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-DEVICE_ATTENDANCE-TC-002 | External vendor bridge for RFID, card, fingerprint or face attendance data | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-DEVICE_ATTENDANCE-TC-003 | Per-device staff/student identity mapping | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-DEVICE_ATTENDANCE-TC-004 | Idempotent attendance event ingestion with clock synchronization | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-DEVICE_ATTENDANCE-TC-005 | Review and reconcile missing/duplicate/late records | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-DEVICE_ATTENDANCE-TC-006 | Automated attendance notifications and status alerts | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-DEVICE_ATTENDANCE-TC-007 | Expose staff attendance events for payroll rules | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-DEVICE_ATTENDANCE-TC-008 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M2-DEVICE_ATTENDANCE-TC-009 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M2-DEVICE_ATTENDANCE-TC-010 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
