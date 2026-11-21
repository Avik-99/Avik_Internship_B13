# Online Courses, Assignments & Quizzes

**Module:** `learning-management`  |  **Requirement namespace:** `M3-LEARNING_MANAGEMENT`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Purpose:** Learning management built around the canonical CourseOffering with content, submissions and online marking.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 32-33, 50** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: OnlineClassroom, LearningMaterial, Assignment, AssignmentSubmission, AssignmentMark, Quiz, QuizQuestion, QuizAttempt. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Google Classroom-like online course workspace
- Learning materials, attachments, class notes and published syllabus
- Assignments, submission windows and uploads
- Teacher reviews of submitted files and online marking
- MCQ quiz bank, attempts, scoring and time limits
- Student course activity and progress dashboards
- Optional sync of graded assessment outcomes into the Results module

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/LearningManagement`.
- Next.js feature UI and typed client under `apps/web/src/features/learning-management`.
- Test project at `tests/LearningManagement.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| academic-registry | Academic Registry & Curriculum | M1 |
| student-lifecycle | Students, Guardians & Enrollment | M1 |
| faculty-staff | Faculty, Teacher & Staff Directory | M1 |
| assessment-results | Examinations, Grades & Results | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
