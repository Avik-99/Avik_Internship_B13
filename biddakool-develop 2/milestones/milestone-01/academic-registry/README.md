# Academic Registry & Curriculum

**Module:** `academic-registry`  |  **Requirement namespace:** `M1-ACADEMIC_REGISTRY`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Purpose:** Common academic model supporting school class/section, university faculty/program/term/course and medical batch/rotation patterns.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 9-10, 21, 29-30** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: AcademicYear, AcademicTerm, Department, Program, Level, Course, Curriculum, CourseOffering, GradingScale, AssessmentPolicy. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Academic years, sessions, terms/semesters and active term selection
- Departments, faculties, programs, batches, levels, groups and school class labels
- Course/subject catalog including codes, optional credits and pass criteria
- Course offerings / class sections scheduled in a term and assigned to teachers
- Curriculum and assessment policy versions per program
- Configurable GPA/grade scales and academic calendar rules
- Support subject combinations and optional courses without custom columns

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/AcademicRegistry`.
- Next.js feature UI and typed client under `apps/web/src/features/academic-registry`.
- Test project at `tests/AcademicRegistry.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| tenant-institution | Tenant & Institution Configuration | M1 |
| foundation-identity | Identity & Access Control | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
