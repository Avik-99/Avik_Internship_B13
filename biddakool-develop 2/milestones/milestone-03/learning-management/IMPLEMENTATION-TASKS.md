# Online Courses, Assignments & Quizzes — Developer Task Backlog

**Module:** `learning-management`  |  **Requirement namespace:** `M3-LEARNING_MANAGEMENT`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/LearningManagement` and `apps/web/src/features/learning-management`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M3-LEARNING_MANAGEMENT-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M3-LEARNING_MANAGEMENT-T-002 | Domain and EF Core | Implement OnlineClassroom, LearningMaterial, Assignment, AssignmentSubmission plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M3-LEARNING_MANAGEMENT-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M3-LEARNING_MANAGEMENT-T-004 | Google Classroom-like online course workspace | Backend API + frontend journey for: Google Classroom-like online course workspace | Reviewed behavior, access checks and automated tests for google classroom-like online course workspace |
| M3-LEARNING_MANAGEMENT-T-005 | Learning materials, attachments, class notes and published syllabus | Backend API + frontend journey for: Learning materials, attachments, class notes and published syllabus | Reviewed behavior, access checks and automated tests for learning materials, attachments, class notes and published syllabus |
| M3-LEARNING_MANAGEMENT-T-006 | Assignments, submission windows and uploads | Backend API + frontend journey for: Assignments, submission windows and uploads | Reviewed behavior, access checks and automated tests for assignments, submission windows and uploads |
| M3-LEARNING_MANAGEMENT-T-007 | Teacher reviews of submitted files and online marking | Backend API + frontend journey for: Teacher reviews of submitted files and online marking | Reviewed behavior, access checks and automated tests for teacher reviews of submitted files and online marking |
| M3-LEARNING_MANAGEMENT-T-008 | MCQ quiz bank, attempts, scoring and time limits | Backend API + frontend journey for: MCQ quiz bank, attempts, scoring and time limits | Reviewed behavior, access checks and automated tests for mcq quiz bank, attempts, scoring and time limits |
| M3-LEARNING_MANAGEMENT-T-009 | Student course activity and progress dashboards | Backend API + frontend journey for: Student course activity and progress dashboards | Reviewed behavior, access checks and automated tests for student course activity and progress dashboards |
| M3-LEARNING_MANAGEMENT-T-010 | Optional sync of graded assessment outcomes into the Results module | Backend API + frontend journey for: Optional sync of graded assessment outcomes into the Results module | Reviewed behavior, access checks and automated tests for optional sync of graded assessment outcomes into the results module |
| M3-LEARNING_MANAGEMENT-T-011 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M3-LEARNING_MANAGEMENT-T-012 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
