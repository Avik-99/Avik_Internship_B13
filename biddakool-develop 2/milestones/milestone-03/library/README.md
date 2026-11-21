# Library & Lending

**Module:** `library`  |  **Requirement namespace:** `M3-LIBRARY`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Purpose:** Institutional library catalogue, book copies, lending and return history.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 10, 42** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: LibraryItem, LibraryCopy, Borrowing, LoanReservation, LibraryMember. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Catalog books, magazines, CDs and other library assets
- Multiple physical copies and searchable catalogue
- Borrow and return transactions for authorized members
- Loan due dates, reservation and overdue list
- Lost/damaged copy adjustments and reports
- Optional automated library fines invoiced to M1 fees

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/Library`.
- Next.js feature UI and typed client under `apps/web/src/features/library`.
- Test project at `tests/Library.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| student-lifecycle | Students, Guardians & Enrollment | M1 |
| faculty-staff | Faculty, Teacher & Staff Directory | M1 |
| fee-management | Student Fees, Dues & Cash Collection | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
