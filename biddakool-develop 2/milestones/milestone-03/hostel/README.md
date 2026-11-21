# Hostel, Housing & Residence Fees

**Module:** `hostel`  |  **Requirement namespace:** `M3-HOSTEL`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Purpose:** Campuses, hostel buildings, floors, rooms, bed allocations and housing dues.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 10, 42** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: Hostel, HostelFloor, HostelRoom, Bed, HousingAssignment, HousingChargePolicy. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Hostel/building/floor/room/bed catalogue and capacity
- Student room or bed assignment and release with occupancy history
- Hostel and meal charge configuration
- Automatic monthly room/meal charge generation
- Hostel due collection through the Fees module
- Occupancy, vacancy and hostel resident reports

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/Hostel`.
- Next.js feature UI and typed client under `apps/web/src/features/hostel`.
- Test project at `tests/Hostel.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| student-lifecycle | Students, Guardians & Enrollment | M1 |
| fee-management | Student Fees, Dues & Cash Collection | M1 |
| tenant-institution | Tenant & Institution Configuration | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
