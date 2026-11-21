# In-App Messaging, SMS & Notifications — Developer Task Backlog

**Module:** `messaging-sms`  |  **Requirement namespace:** `M2-MESSAGING_SMS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/MessagingSms` and `apps/web/src/features/messaging-sms`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M2-MESSAGING_SMS-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M2-MESSAGING_SMS-T-002 | Domain and EF Core | Implement MessageThread, Message, SmsTemplate, RecipientGroup plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M2-MESSAGING_SMS-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M2-MESSAGING_SMS-T-004 | Guardian/teacher in-app threads and message notifications | Backend API + frontend journey for: Guardian/teacher in-app threads and message notifications | Reviewed behavior, access checks and automated tests for guardian/teacher in-app threads and message notifications |
| M2-MESSAGING_SMS-T-005 | SMS templates with placeholders and preview | Backend API + frontend journey for: SMS templates with placeholders and preview | Reviewed behavior, access checks and automated tests for sms templates with placeholders and preview |
| M2-MESSAGING_SMS-T-006 | Unicode, masking/non-masking and provider-specific delivery settings | Backend API + frontend journey for: Unicode, masking/non-masking and provider-specific delivery settings | Reviewed behavior, access checks and automated tests for unicode, masking/non-masking and provider-specific delivery settings |
| M2-MESSAGING_SMS-T-007 | Bulk recipient selection from student, teacher and manual phone groups | Backend API + frontend journey for: Bulk recipient selection from student, teacher and manual phone groups | Reviewed behavior, access checks and automated tests for bulk recipient selection from student, teacher and manual phone groups |
| M2-MESSAGING_SMS-T-008 | Saved recipient groups and duplicate recipient suppression | Backend API + frontend journey for: Saved recipient groups and duplicate recipient suppression | Reviewed behavior, access checks and automated tests for saved recipient groups and duplicate recipient suppression |
| M2-MESSAGING_SMS-T-009 | Automated attendance, due, payment, result and greeting alerts | Backend API + frontend journey for: Automated attendance, due, payment, result and greeting alerts | Reviewed behavior, access checks and automated tests for automated attendance, due, payment, result and greeting alerts |
| M2-MESSAGING_SMS-T-010 | SMS delivery reports and failed-message retry policies | Backend API + frontend journey for: SMS delivery reports and failed-message retry policies | Reviewed behavior, access checks and automated tests for sms delivery reports and failed-message retry policies |
| M2-MESSAGING_SMS-T-011 | Notification preferences and push/email provider abstraction | Backend API + frontend journey for: Notification preferences and push/email provider abstraction | Reviewed behavior, access checks and automated tests for notification preferences and push/email provider abstraction |
| M2-MESSAGING_SMS-T-012 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M2-MESSAGING_SMS-T-013 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

## Parallelization plan

1. **Contract owner:** Validate requirements, domain, endpoints and migration proposal; secure review sign-off.
2. **Backend developer(s):** Build aggregates, EF Core mappings, CQRS requests, permissions and events behind approved contract.
3. **Frontend developer(s):** Build Next.js screens against generated OpenAPI mock/typed client.
4. **QA developer:** Build acceptance, contract, tenant-isolation and negative-path tests independently.
5. **Integration developer:** Wire consumers after contract is stable and run docker-compose/E2E scenarios.

## Pull request merge policy

- PRs should be small and scoped to this module; one migration owner per module.
- A contract breaking change requires ADR + affected consumers approval before merge.
- No PR is done without an appropriate test, updated docs and reviewer.
