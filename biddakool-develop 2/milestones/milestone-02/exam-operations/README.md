# Exam Admit Cards & Seat Plans

**Module:** `exam-operations`  |  **Requirement namespace:** `M2-EXAM_OPERATIONS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Purpose:** Examination operations including timed examination schedule, customizable admit card and seat allocation.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 28** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: ExamVenue, ExamSeat, ExamCandidate, ExamAdmitCard, InvigilationAssignment. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Admit cards with photo, student identifiers, subjects, date/time and signature
- Exam seat plan by room capacity and candidate eligibility
- Seat cards with student photo, class/group, shift and roll
- Room invigilator assignment and signature fields
- Printable bulk PDF generation with preview and audit
- Exam admission eligibility integration with institution policy

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/ExamOperations`.
- Next.js feature UI and typed client under `apps/web/src/features/exam-operations`.
- Test project at `tests/ExamOperations.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| assessment-results | Examinations, Grades & Results | M1 |
| scheduling | Class, Teacher & Examination Timetables | M1 |
| student-lifecycle | Students, Guardians & Enrollment | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
