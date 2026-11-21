# Students, Guardians & Enrollment

**Module:** `student-lifecycle`  |  **Requirement namespace:** `M1-STUDENT_LIFECYCLE`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Purpose:** Canonical student identity, guardians, school class assignments and university course enrollments throughout academic life.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 12, 14, 19-20, 48-50** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: Student, GuardianLink, StudentAdmission, ProgramEnrollment, ClassPlacement, CourseEnrollment, StudentStatusHistory, StudentDocument. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Admin-driven student enrollment with admission number and contact details
- Student profile including photo, emergency contact, academic history and documents
- One or more guardians linked to a student with verified relationship and portal access
- Program/cohort/class/section placement and academic session enrollment
- University/medical course-offering registration and enrollment history
- Promotion, transfer, graduation, withdrawal and re-admission status transitions
- Class roll number uniqueness within active placement scope
- Tenant-specific student ID card and downloadable profile information

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/StudentLifecycle`.
- Next.js feature UI and typed client under `apps/web/src/features/student-lifecycle`.
- Test project at `tests/StudentLifecycle.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| foundation-identity | Identity & Access Control | M1 |
| tenant-institution | Tenant & Institution Configuration | M1 |
| academic-registry | Academic Registry & Curriculum | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
