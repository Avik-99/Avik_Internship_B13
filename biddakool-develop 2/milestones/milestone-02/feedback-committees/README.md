# Feedback & Basic Committee Administration

**Module:** `feedback-committees`  |  **Requirement namespace:** `M2-FEEDBACK_COMMITTEES`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Purpose:** Process guardian feedback and establish institution-specific administrative committee membership.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 46** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: FeedbackCase, FeedbackResponse, Committee, CommitteeMembership. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Guardian suggestions, feedback and complaint submission
- Categorization, ownership and response history
- Private vs published responses and closure status
- Administrative committee creation, dates and member roster
- Committee membership history and read permissions
- Response time and unresolved issue reports

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/FeedbackCommittees`.
- Next.js feature UI and typed client under `apps/web/src/features/feedback-committees`.
- Test project at `tests/FeedbackCommittees.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| foundation-identity | Identity & Access Control | M1 |
| tenant-institution | Tenant & Institution Configuration | M1 |
| student-lifecycle | Students, Guardians & Enrollment | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
