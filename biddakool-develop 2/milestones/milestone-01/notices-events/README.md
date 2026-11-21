# Notices, Events & Calendar

**Module:** `notices-events`  |  **Requirement namespace:** `M1-NOTICES_EVENTS`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Purpose:** Basic in-app official announcements, targeted notices and institution event calendar.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 9-10, 46, 48-50** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: Notice, NoticeAudience, NoticeAttachment, Event, NoticeReadReceipt. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Create public, institute-wide, program, class and staff notices
- Attach documents and schedule publication/expiry
- Read institution event calendar and academic holidays
- Target student, guardian, teacher or staff audiences
- Maintain read history if policy requires acknowledgement
- Expose dashboard notice feed and important events

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/NoticesEvents`.
- Next.js feature UI and typed client under `apps/web/src/features/notices-events`.
- Test project at `tests/NoticesEvents.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| tenant-institution | Tenant & Institution Configuration | M1 |
| academic-registry | Academic Registry & Curriculum | M1 |
| foundation-identity | Identity & Access Control | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
