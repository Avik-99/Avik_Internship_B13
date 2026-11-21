# Online Application & Admission

**Module:** `online-admissions`  |  **Requirement namespace:** `M2-ONLINE_ADMISSIONS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Purpose:** Public applicant intake and institution-managed admission selection; accepted applications become M1 student records.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 12** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: AdmissionCampaign, Applicant, AdmissionApplication, ApplicationDocument, AdmissionDecision, AdmissionAdmitCard. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Public admission campaigns, eligibility criteria and available seats
- Configurable application forms and applicant document uploads
- Application submission with reference number and downloadable filled form
- Application fee charge/payment state
- Application review, status changes and admissions selection
- Admit card after verified payment when admission exam is enabled
- Offer, accept, enroll and reject transitions with audit

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/OnlineAdmissions`.
- Next.js feature UI and typed client under `apps/web/src/features/online-admissions`.
- Test project at `tests/OnlineAdmissions.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| tenant-institution | Tenant & Institution Configuration | M1 |
| academic-registry | Academic Registry & Curriculum | M1 |
| student-lifecycle | Students, Guardians & Enrollment | M1 |
| fee-management | Student Fees, Dues & Cash Collection | M1 |
| exam-operations | Exam Admit Cards & Seat Plans | M2 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
