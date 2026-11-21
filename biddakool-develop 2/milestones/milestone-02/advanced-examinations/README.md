# Advanced Grading, Analysis & Report Cards

**Module:** `advanced-examinations`  |  **Requirement namespace:** `M2-ADVANCED_EXAMINATIONS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Purpose:** Expand M1 examination engine for nuanced grade calculations and institution-specific outputs.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 22-27, 58-63** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: AssessmentWeightRule, SubjectCombination, ResultRuleVersion, ReportTemplate, ReportTemplateRevision, MeritSnapshot. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Weighted class tests, monthly tests, homework and continuous assessments
- Aggregate semester, annual and cross-term results
- Combine two or more subjects for pass/fail and GPA calculations
- Optional/excluded subjects, grace marks and fail highlighting
- Teacher evaluation notes and attendance on report card
- Class/section merit rank, fail list and performance distribution
- Custom report card templates, seals, logos and auto-signatures
- Compact and detailed tabulations, teacher-wise and subject-wise analytics
- School-specific and madrasa-specific layouts from brochure examples

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/AdvancedExaminations`.
- Next.js feature UI and typed client under `apps/web/src/features/advanced-examinations`.
- Test project at `tests/AdvancedExaminations.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| assessment-results | Examinations, Grades & Results | M1 |
| academic-registry | Academic Registry & Curriculum | M1 |
| attendance | Student & Staff Attendance | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
