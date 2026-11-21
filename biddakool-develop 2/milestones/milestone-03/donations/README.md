# Donations & Donor Pledges

**Module:** `donations`  |  **Requirement namespace:** `M3-DONATIONS`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Purpose:** Donors, recurring pledged contributions, collections and acknowledgment.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 10, 43** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: Donor, DonationPledge, PledgeInstallment, DonationCollection, DonorReceipt. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Donor profile and communication consent
- Monthly/annual pledge schedules and expected dues
- Record one-time or recurring donation receipts
- Donor receipts and acknowledgments
- Donation due reminders through Messaging
- Accounting income integration and pledge status reports

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/Donations`.
- Next.js feature UI and typed client under `apps/web/src/features/donations`.
- Test project at `tests/Donations.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| accounting-ledger | Accounting & General Ledger | M2 |
| messaging-sms | In-App Messaging, SMS & Notifications | M2 |
| tenant-institution | Tenant & Institution Configuration | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
