# Feedback & Basic Committee Administration — Developer Task Backlog

**Module:** `feedback-committees`  |  **Requirement namespace:** `M2-FEEDBACK_COMMITTEES`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/FeedbackCommittees` and `apps/web/src/features/feedback-committees`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M2-FEEDBACK_COMMITTEES-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M2-FEEDBACK_COMMITTEES-T-002 | Domain and EF Core | Implement FeedbackCase, FeedbackResponse, Committee, CommitteeMembership plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M2-FEEDBACK_COMMITTEES-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M2-FEEDBACK_COMMITTEES-T-004 | Guardian suggestions, feedback and complaint submission | Backend API + frontend journey for: Guardian suggestions, feedback and complaint submission | Reviewed behavior, access checks and automated tests for guardian suggestions, feedback and complaint submission |
| M2-FEEDBACK_COMMITTEES-T-005 | Categorization, ownership and response history | Backend API + frontend journey for: Categorization, ownership and response history | Reviewed behavior, access checks and automated tests for categorization, ownership and response history |
| M2-FEEDBACK_COMMITTEES-T-006 | Private vs published responses and closure status | Backend API + frontend journey for: Private vs published responses and closure status | Reviewed behavior, access checks and automated tests for private vs published responses and closure status |
| M2-FEEDBACK_COMMITTEES-T-007 | Administrative committee creation, dates and member roster | Backend API + frontend journey for: Administrative committee creation, dates and member roster | Reviewed behavior, access checks and automated tests for administrative committee creation, dates and member roster |
| M2-FEEDBACK_COMMITTEES-T-008 | Committee membership history and read permissions | Backend API + frontend journey for: Committee membership history and read permissions | Reviewed behavior, access checks and automated tests for committee membership history and read permissions |
| M2-FEEDBACK_COMMITTEES-T-009 | Response time and unresolved issue reports | Backend API + frontend journey for: Response time and unresolved issue reports | Reviewed behavior, access checks and automated tests for response time and unresolved issue reports |
| M2-FEEDBACK_COMMITTEES-T-010 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M2-FEEDBACK_COMMITTEES-T-011 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
