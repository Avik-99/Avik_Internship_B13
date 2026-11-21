# Faculty, Teacher & Staff Directory

**Module:** `faculty-staff`  |  **Requirement namespace:** `M1-FACULTY_STAFF`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Purpose:** Personnel records, faculty assignments and institutional staff directories without payroll assumptions.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 13-15, 18, 52-53** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: StaffMember, StaffEmployment, Designation, DepartmentAssignment, TeachingAssignment, AdvisingAssignment. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Register teacher, faculty, employee and non-teaching staff profiles
- Employment designation, department, active status and employment dates
- Teacher subject and course-offering assignments
- Class teacher, adviser or academic supervisor assignments
- Profile view, search, filtering and downloadable staff profile
- Separate teaching duties from payroll and compensation data

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/FacultyStaff`.
- Next.js feature UI and typed client under `apps/web/src/features/faculty-staff`.
- Test project at `tests/FacultyStaff.Tests`.
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
