# Leave Request & Approvals — Developer Task Backlog

**Module:** `leave-workflows`  |  **Requirement namespace:** `M2-LEAVE_WORKFLOWS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/LeaveWorkflows` and `apps/web/src/features/leave-workflows`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M2-LEAVE_WORKFLOWS-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M2-LEAVE_WORKFLOWS-T-002 | Domain and EF Core | Implement LeaveRequest, LeaveCategory, LeaveApprovalStep, LeaveBalance plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M2-LEAVE_WORKFLOWS-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M2-LEAVE_WORKFLOWS-T-004 | Student/guardian and staff leave application | Backend API + frontend journey for: Student/guardian and staff leave application | Reviewed behavior, access checks and automated tests for student/guardian and staff leave application |
| M2-LEAVE_WORKFLOWS-T-005 | Leave category, dates, attachments and reason | Backend API + frontend journey for: Leave category, dates, attachments and reason | Reviewed behavior, access checks and automated tests for leave category, dates, attachments and reason |
| M2-LEAVE_WORKFLOWS-T-006 | Flexible approval chain with recommend/forward/approve/reject | Backend API + frontend journey for: Flexible approval chain with recommend/forward/approve/reject | Reviewed behavior, access checks and automated tests for flexible approval chain with recommend/forward/approve/reject |
| M2-LEAVE_WORKFLOWS-T-007 | Leave balance and holiday overlap checks where appropriate | Backend API + frontend journey for: Leave balance and holiday overlap checks where appropriate | Reviewed behavior, access checks and automated tests for leave balance and holiday overlap checks where appropriate |
| M2-LEAVE_WORKFLOWS-T-008 | Leave history and reports by student/teacher | Backend API + frontend journey for: Leave history and reports by student/teacher | Reviewed behavior, access checks and automated tests for leave history and reports by student/teacher |
| M2-LEAVE_WORKFLOWS-T-009 | Approved leave integrated with attendance without deleting prior marks | Backend API + frontend journey for: Approved leave integrated with attendance without deleting prior marks | Reviewed behavior, access checks and automated tests for approved leave integrated with attendance without deleting prior marks |
| M2-LEAVE_WORKFLOWS-T-010 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M2-LEAVE_WORKFLOWS-T-011 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
