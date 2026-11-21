# Student & Staff Attendance

**Module:** `attendance`  |  **Requirement namespace:** `M1-ATTENDANCE`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Purpose:** Attendance for school classes and term-specific course/medical teaching sessions with teacher and staff tracking.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 15-18, 49, 52, 55** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: AttendanceSession, StudentAttendanceRecord, StaffAttendanceRecord, AttendanceAdjustment, AttendancePolicy. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Record present/absent/late/excused status for an offering/class session
- Bulk class roll-call with draft/save/finalize states
- Staff attendance entry independent of student session attendance
- Attendance corrections requiring permission and reason
- Daily, monthly, student, teacher, campus and course reports
- Guardians view linked students’ attendance and summary
- Attendance percentages computed using configurable session eligibility
- Expose attendance reporting data for future payroll and medical eligibility

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/Attendance`.
- Next.js feature UI and typed client under `apps/web/src/features/attendance`.
- Test project at `tests/Attendance.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| academic-registry | Academic Registry & Curriculum | M1 |
| student-lifecycle | Students, Guardians & Enrollment | M1 |
| faculty-staff | Faculty, Teacher & Staff Directory | M1 |
| scheduling | Class, Teacher & Examination Timetables | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
