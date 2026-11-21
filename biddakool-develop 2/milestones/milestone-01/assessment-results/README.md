# Examinations, Grades & Results

**Module:** `assessment-results`  |  **Requirement namespace:** `M1-ASSESSMENT_RESULTS`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Purpose:** Tenant-configurable exam lifecycle, score entry, result calculation and transcript/report publication.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 21-27, 49, 53, 55-57** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: Exam, AssessmentComponent, GradePolicyVersion, MarksEntry, ResultPublication, StudentResult, GradeRecord, ResultSnapshot. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Exam categories, assessments, exam components and subject/course mapping
- Full marks, minimum pass marks, grade boundaries and basic weighting
- Teacher-owned marks entry and approval workflow
- Grade, percentage, GPA/CGPA compatible calculation; configurable grading policy
- Provisional vs published results with authorized release
- Printable exam result sheet, subject performance and report cards
- Tabulation sheet, pass/fail and simple merit order when allowed
- Guardian/student visibility only after result publication
- Academic result snapshots for historical reproducibility

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/AssessmentResults`.
- Next.js feature UI and typed client under `apps/web/src/features/assessment-results`.
- Test project at `tests/AssessmentResults.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| academic-registry | Academic Registry & Curriculum | M1 |
| student-lifecycle | Students, Guardians & Enrollment | M1 |
| faculty-staff | Faculty, Teacher & Staff Directory | M1 |
| attendance | Student & Staff Attendance | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
