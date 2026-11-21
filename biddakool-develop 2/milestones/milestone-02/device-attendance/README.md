# Biometric, RFID & Device Attendance

**Module:** `device-attendance`  |  **Requirement namespace:** `M2-DEVICE_ATTENDANCE`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Purpose:** Integrate approved attendance devices and import fingerprints/face/card presence events into M1 attendance.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 15-18** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: AttendanceDevice, DevicePersonMapping, RawPunch, PunchReconciliation, DeviceIntegrationLog. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Device registry per institution/campus
- External vendor bridge for RFID, card, fingerprint or face attendance data
- Per-device staff/student identity mapping
- Idempotent attendance event ingestion with clock synchronization
- Review and reconcile missing/duplicate/late records
- Automated attendance notifications and status alerts
- Expose staff attendance events for payroll rules

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/DeviceAttendance`.
- Next.js feature UI and typed client under `apps/web/src/features/device-attendance`.
- Test project at `tests/DeviceAttendance.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| attendance | Student & Staff Attendance | M1 |
| faculty-staff | Faculty, Teacher & Staff Directory | M1 |
| student-lifecycle | Students, Guardians & Enrollment | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
