# Class, Teacher & Examination Timetables

**Module:** `scheduling`  |  **Requirement namespace:** `M1-SCHEDULING`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Purpose:** Schedule course sections and exams, presenting class/section, teacher and room-specific timetable views.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 28-30** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: TimeSlot, TeachingSchedule, ScheduleMeeting, Room, ExamSchedule, SchedulePublication. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Weekly schedules with period times, weekdays and academic terms
- Class/section schedule views and cross-class overview
- Faculty/teacher personal and weekly combined timetables
- Classroom or room assignment
- Time-slot conflict detection for teacher, room and student group
- Basic examination timetable with start/end time
- Publish routines to student, guardian and teacher panels

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/Scheduling`.
- Next.js feature UI and typed client under `apps/web/src/features/scheduling`.
- Test project at `tests/Scheduling.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| academic-registry | Academic Registry & Curriculum | M1 |
| faculty-staff | Faculty, Teacher & Staff Directory | M1 |
| student-lifecycle | Students, Guardians & Enrollment | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
