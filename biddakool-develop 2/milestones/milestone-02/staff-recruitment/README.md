# Faculty & Staff Recruitment

**Module:** `staff-recruitment`  |  **Requirement namespace:** `M2-STAFF_RECRUITMENT`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Purpose:** Online recruitment posts, applications and recruitment-exam paperwork integrated with the personnel directory.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 13** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: JobOpening, JobApplicant, JobApplication, HiringStage, HiringDecision. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Create teaching and non-teaching vacancies and public application windows
- Job applicant profile, documents and online submission
- Recruitment application fee and verification
- Print submitted application and recruitment admit card
- Shortlisting, interview stages and offer tracking
- Convert accepted applicant into M1 staff member

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/StaffRecruitment`.
- Next.js feature UI and typed client under `apps/web/src/features/staff-recruitment`.
- Test project at `tests/StaffRecruitment.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| faculty-staff | Faculty, Teacher & Staff Directory | M1 |
| fee-management | Student Fees, Dues & Cash Collection | M1 |
| tenant-institution | Tenant & Institution Configuration | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
