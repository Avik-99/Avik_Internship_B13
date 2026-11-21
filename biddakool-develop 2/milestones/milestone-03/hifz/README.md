# Hifz Department & Assessment

**Module:** `hifz`  |  **Requirement namespace:** `M3-HIFZ`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Purpose:** Specialized Quran memorization groups, teachers, progress and examinations for relevant institutions.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 10, 45** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: HifzDepartment, HifzGroup, HifzGroupMembership, HifzProgressRecord, HifzExam. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Hifz department/group creation and group teacher assignment
- Student group membership, list, filters and search
- Monthly memorization progress and lesson observations
- Hifz-specific examination categories, marks and outcomes
- Hifz tabulation, merit lists and specialized report formats
- Allow Hifz-specific workflows without introducing school-only constraints elsewhere

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/Hifz`.
- Next.js feature UI and typed client under `apps/web/src/features/hifz`.
- Test project at `tests/Hifz.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| student-lifecycle | Students, Guardians & Enrollment | M1 |
| faculty-staff | Faculty, Teacher & Staff Directory | M1 |
| assessment-results | Examinations, Grades & Results | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
