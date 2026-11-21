# Academic Registry & Curriculum — Developer Task Backlog

**Module:** `academic-registry`  |  **Requirement namespace:** `M1-ACADEMIC_REGISTRY`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/AcademicRegistry` and `apps/web/src/features/academic-registry`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M1-ACADEMIC_REGISTRY-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M1-ACADEMIC_REGISTRY-T-002 | Domain and EF Core | Implement AcademicYear, AcademicTerm, Department, Program plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M1-ACADEMIC_REGISTRY-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M1-ACADEMIC_REGISTRY-T-004 | Academic years, sessions, terms/semesters and active term selection | Backend API + frontend journey for: Academic years, sessions, terms/semesters and active term selection | Reviewed behavior, access checks and automated tests for academic years, sessions, terms/semesters and active term selection |
| M1-ACADEMIC_REGISTRY-T-005 | Departments, faculties, programs, batches, levels, groups and school class labels | Backend API + frontend journey for: Departments, faculties, programs, batches, levels, groups and school class labels | Reviewed behavior, access checks and automated tests for departments, faculties, programs, batches, levels, groups and school class labels |
| M1-ACADEMIC_REGISTRY-T-006 | Course/subject catalog including codes, optional credits and pass criteria | Backend API + frontend journey for: Course/subject catalog including codes, optional credits and pass criteria | Reviewed behavior, access checks and automated tests for course/subject catalog including codes, optional credits and pass criteria |
| M1-ACADEMIC_REGISTRY-T-007 | Course offerings / class sections scheduled in a term and assigned to teachers | Backend API + frontend journey for: Course offerings / class sections scheduled in a term and assigned to teachers | Reviewed behavior, access checks and automated tests for course offerings / class sections scheduled in a term and assigned to teachers |
| M1-ACADEMIC_REGISTRY-T-008 | Curriculum and assessment policy versions per program | Backend API + frontend journey for: Curriculum and assessment policy versions per program | Reviewed behavior, access checks and automated tests for curriculum and assessment policy versions per program |
| M1-ACADEMIC_REGISTRY-T-009 | Configurable GPA/grade scales and academic calendar rules | Backend API + frontend journey for: Configurable GPA/grade scales and academic calendar rules | Reviewed behavior, access checks and automated tests for configurable gpa/grade scales and academic calendar rules |
| M1-ACADEMIC_REGISTRY-T-010 | Support subject combinations and optional courses without custom columns | Backend API + frontend journey for: Support subject combinations and optional courses without custom columns | Reviewed behavior, access checks and automated tests for support subject combinations and optional courses without custom columns |
| M1-ACADEMIC_REGISTRY-T-011 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M1-ACADEMIC_REGISTRY-T-012 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
