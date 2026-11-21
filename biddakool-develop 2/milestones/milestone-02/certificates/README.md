# Certificates & Enhanced ID Card Designer

**Module:** `certificates`  |  **Requirement namespace:** `M2-CERTIFICATES`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Purpose:** Official student certificates and flexible identity card production for institutions, campuses and cohorts.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 19-20** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: CertificateTemplate, CertificateIssue, IdentityCardTemplate, IdentityCardIssue, DocumentVerification. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Issue character/testimonial, transfer and other school certificates
- Configurable certificate numbering and verification links
- ID front/back template designer with portrait/landscape layouts
- Separate teacher, staff, student and campus templates
- Merge authorized dynamic profile fields and headmaster signature
- Bulk print and PDF export with issuance audit

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/Certificates`.
- Next.js feature UI and typed client under `apps/web/src/features/certificates`.
- Test project at `tests/Certificates.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| student-lifecycle | Students, Guardians & Enrollment | M1 |
| faculty-staff | Faculty, Teacher & Staff Directory | M1 |
| tenant-institution | Tenant & Institution Configuration | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
