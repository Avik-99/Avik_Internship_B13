# Student, Guardian, Teacher & Admin Portals

**Module:** `self-service-portals`  |  **Requirement namespace:** `M1-SELF_SERVICE_PORTALS`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Purpose:** Next.js web experiences over public contracts of domain modules; no duplicated portal databases.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 14-18, 48-53** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: DashboardPreference, UserNotificationPreference. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Admin home with student/staff, fees, dues, attendance and exam summaries
- Teacher portal for assigned students, attendance, marks, schedules and notices
- Student portal for profile, current courses, attendance, results, fees and notices
- Guardian portal with linked-child switcher and access to authorized child records
- Accountant workspace for collections, receipts and dues
- Role-aware navigation and responsive Bangla/English UX
- Download protected receipts, profile pages and result reports

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/SelfServicePortals`.
- Next.js feature UI and typed client under `apps/web/src/features/self-service-portals`.
- Test project at `tests/SelfServicePortals.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| foundation-identity | Identity & Access Control | M1 |
| tenant-institution | Tenant & Institution Configuration | M1 |
| academic-registry | Academic Registry & Curriculum | M1 |
| student-lifecycle | Students, Guardians & Enrollment | M1 |
| faculty-staff | Faculty, Teacher & Staff Directory | M1 |
| attendance | Student & Staff Attendance | M1 |
| assessment-results | Examinations, Grades & Results | M1 |
| fee-management | Student Fees, Dues & Cash Collection | M1 |
| notices-events | Notices, Events & Calendar | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
