# Medical College Academic Operations

**Module:** `medical-education`  |  **Requirement namespace:** `M3-MEDICAL_EDUCATION`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Purpose:** Specialized clinical teaching, attendance thresholds, item/card/term assessments and professional examination eligibility.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 54-57** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: MedicalBatch, ClinicalRotation, WardGroup, ClinicalTeachingSession, MedicalExamComponent, ProfessionalExamRule, EligibilitySnapshot, TeachingEvaluation. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Lecture, tutorial, ward and clinical group teaching sessions
- Full-batch, group/ward and subject-specific attendance reporting
- Configurable attendance warnings including the example 75% rule
- Multi-stage leave recommendation/forwarding/approval in medical programs
- Item, card and term exam marking with rank/fail highlighting
- Professional exam eligibility report with reasons from attendance and results
- Student medical academic dashboard with threshold warnings
- Anonymous student-to-teacher evaluation and aggregate summaries

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/MedicalEducation`.
- Next.js feature UI and typed client under `apps/web/src/features/medical-education`.
- Test project at `tests/MedicalEducation.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| academic-registry | Academic Registry & Curriculum | M1 |
| student-lifecycle | Students, Guardians & Enrollment | M1 |
| attendance | Student & Staff Attendance | M1 |
| assessment-results | Examinations, Grades & Results | M1 |
| leave-workflows | Leave Request & Approvals | M2 |
| messaging-sms | In-App Messaging, SMS & Notifications | M2 |
| faculty-staff | Faculty, Teacher & Staff Directory | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
