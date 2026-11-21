# Notices, Events & Calendar — Developer Task Backlog

**Module:** `notices-events`  |  **Requirement namespace:** `M1-NOTICES_EVENTS`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/NoticesEvents` and `apps/web/src/features/notices-events`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M1-NOTICES_EVENTS-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M1-NOTICES_EVENTS-T-002 | Domain and EF Core | Implement Notice, NoticeAudience, NoticeAttachment, Event plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M1-NOTICES_EVENTS-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M1-NOTICES_EVENTS-T-004 | Create public, institute-wide, program, class and staff notices | Backend API + frontend journey for: Create public, institute-wide, program, class and staff notices | Reviewed behavior, access checks and automated tests for create public, institute-wide, program, class and staff notices |
| M1-NOTICES_EVENTS-T-005 | Attach documents and schedule publication/expiry | Backend API + frontend journey for: Attach documents and schedule publication/expiry | Reviewed behavior, access checks and automated tests for attach documents and schedule publication/expiry |
| M1-NOTICES_EVENTS-T-006 | Read institution event calendar and academic holidays | Backend API + frontend journey for: Read institution event calendar and academic holidays | Reviewed behavior, access checks and automated tests for read institution event calendar and academic holidays |
| M1-NOTICES_EVENTS-T-007 | Target student, guardian, teacher or staff audiences | Backend API + frontend journey for: Target student, guardian, teacher or staff audiences | Reviewed behavior, access checks and automated tests for target student, guardian, teacher or staff audiences |
| M1-NOTICES_EVENTS-T-008 | Maintain read history if policy requires acknowledgement | Backend API + frontend journey for: Maintain read history if policy requires acknowledgement | Reviewed behavior, access checks and automated tests for maintain read history if policy requires acknowledgement |
| M1-NOTICES_EVENTS-T-009 | Expose dashboard notice feed and important events | Backend API + frontend journey for: Expose dashboard notice feed and important events | Reviewed behavior, access checks and automated tests for expose dashboard notice feed and important events |
| M1-NOTICES_EVENTS-T-010 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M1-NOTICES_EVENTS-T-011 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
