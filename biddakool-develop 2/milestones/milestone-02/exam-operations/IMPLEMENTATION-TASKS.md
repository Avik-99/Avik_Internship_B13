# Exam Admit Cards & Seat Plans — Developer Task Backlog

**Module:** `exam-operations`  |  **Requirement namespace:** `M2-EXAM_OPERATIONS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/ExamOperations` and `apps/web/src/features/exam-operations`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M2-EXAM_OPERATIONS-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M2-EXAM_OPERATIONS-T-002 | Domain and EF Core | Implement ExamVenue, ExamSeat, ExamCandidate, ExamAdmitCard plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M2-EXAM_OPERATIONS-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M2-EXAM_OPERATIONS-T-004 | Admit cards with photo, student identifiers, subjects, date/time and signature | Backend API + frontend journey for: Admit cards with photo, student identifiers, subjects, date/time and signature | Reviewed behavior, access checks and automated tests for admit cards with photo, student identifiers, subjects, date/time and signature |
| M2-EXAM_OPERATIONS-T-005 | Exam seat plan by room capacity and candidate eligibility | Backend API + frontend journey for: Exam seat plan by room capacity and candidate eligibility | Reviewed behavior, access checks and automated tests for exam seat plan by room capacity and candidate eligibility |
| M2-EXAM_OPERATIONS-T-006 | Seat cards with student photo, class/group, shift and roll | Backend API + frontend journey for: Seat cards with student photo, class/group, shift and roll | Reviewed behavior, access checks and automated tests for seat cards with student photo, class/group, shift and roll |
| M2-EXAM_OPERATIONS-T-007 | Room invigilator assignment and signature fields | Backend API + frontend journey for: Room invigilator assignment and signature fields | Reviewed behavior, access checks and automated tests for room invigilator assignment and signature fields |
| M2-EXAM_OPERATIONS-T-008 | Printable bulk PDF generation with preview and audit | Backend API + frontend journey for: Printable bulk PDF generation with preview and audit | Reviewed behavior, access checks and automated tests for printable bulk pdf generation with preview and audit |
| M2-EXAM_OPERATIONS-T-009 | Exam admission eligibility integration with institution policy | Backend API + frontend journey for: Exam admission eligibility integration with institution policy | Reviewed behavior, access checks and automated tests for exam admission eligibility integration with institution policy |
| M2-EXAM_OPERATIONS-T-010 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M2-EXAM_OPERATIONS-T-011 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
