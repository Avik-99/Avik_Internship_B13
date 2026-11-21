# Lesson Plans, Diaries & Student Progress

**Module:** `lesson-plans`  |  **Requirement namespace:** `M2-LESSON_PLANS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Purpose:** Teaching plans, daily lesson records, teacher observations and subject-specific monthly progress.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 31, 50, 53** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: LessonPlan, LessonPlanItem, ClassDiary, DailyEvaluation, ProgressSummary. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Teacher-created subject/course lesson plans by academic term
- Per-day class diary and homework tasks
- Individual student daily lesson evaluation and comments
- Monthly subject-wise progress summaries
- Student/guardian access to published diaries and evaluations
- Teacher workload views and learning progress export

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/LessonPlans`.
- Next.js feature UI and typed client under `apps/web/src/features/lesson-plans`.
- Test project at `tests/LessonPlans.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| academic-registry | Academic Registry & Curriculum | M1 |
| scheduling | Class, Teacher & Examination Timetables | M1 |
| student-lifecycle | Students, Guardians & Enrollment | M1 |
| faculty-staff | Faculty, Teacher & Staff Directory | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
