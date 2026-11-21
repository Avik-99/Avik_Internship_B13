# Tenant & Institution Configuration

**Module:** `tenant-institution`  |  **Requirement namespace:** `M1-TENANT_INSTITUTION`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Purpose:** Create and maintain institutions with type-specific policies, branding, and tenant data boundaries from day one.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 9-10, 20, 46** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: Tenant, Institution, Campus, InstitutionSettings, AcademicCalendar, Holiday, ModuleEntitlement. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Tenant provisioning and isolated institution settings
- Institution type: school, college, university, medical college, madrasa or training center
- Contact information, address, logos, letterhead, timezone, Bangla/English locale and public profile
- Campus records, shifts, working weekdays, holiday calendar and academic date formats
- Per-tenant module enablement and configurable policies
- Institution dashboard with tenant-level counts and quick links

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/TenantInstitution`.
- Next.js feature UI and typed client under `apps/web/src/features/tenant-institution`.
- Test project at `tests/TenantInstitution.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| foundation-identity | Identity & Access Control | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
