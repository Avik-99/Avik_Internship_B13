# In-App Messaging, SMS & Notifications

**Module:** `messaging-sms`  |  **Requirement namespace:** `M2-MESSAGING_SMS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Purpose:** Communication hub for parent-teacher messages, transaction alerts and templated audience notifications.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 10, 15, 35, 44** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: MessageThread, Message, SmsTemplate, RecipientGroup, Notification, DeliveryAttempt, CommunicationPreference. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Guardian/teacher in-app threads and message notifications
- SMS templates with placeholders and preview
- Unicode, masking/non-masking and provider-specific delivery settings
- Bulk recipient selection from student, teacher and manual phone groups
- Saved recipient groups and duplicate recipient suppression
- Automated attendance, due, payment, result and greeting alerts
- SMS delivery reports and failed-message retry policies
- Notification preferences and push/email provider abstraction

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/MessagingSms`.
- Next.js feature UI and typed client under `apps/web/src/features/messaging-sms`.
- Test project at `tests/MessagingSms.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| foundation-identity | Identity & Access Control | M1 |
| student-lifecycle | Students, Guardians & Enrollment | M1 |
| faculty-staff | Faculty, Teacher & Staff Directory | M1 |
| attendance | Student & Staff Attendance | M1 |
| fee-management | Student Fees, Dues & Cash Collection | M1 |
| assessment-results | Examinations, Grades & Results | M1 |
| notices-events | Notices, Events & Calendar | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
