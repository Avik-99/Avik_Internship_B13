# Examinations, Grades & Results — Developer Task Backlog

**Module:** `assessment-results`  |  **Requirement namespace:** `M1-ASSESSMENT_RESULTS`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/AssessmentResults` and `apps/web/src/features/assessment-results`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M1-ASSESSMENT_RESULTS-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M1-ASSESSMENT_RESULTS-T-002 | Domain and EF Core | Implement Exam, AssessmentComponent, GradePolicyVersion, MarksEntry plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M1-ASSESSMENT_RESULTS-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M1-ASSESSMENT_RESULTS-T-004 | Exam categories, assessments, exam components and subject/course mapping | Backend API + frontend journey for: Exam categories, assessments, exam components and subject/course mapping | Reviewed behavior, access checks and automated tests for exam categories, assessments, exam components and subject/course mapping |
| M1-ASSESSMENT_RESULTS-T-005 | Full marks, minimum pass marks, grade boundaries and basic weighting | Backend API + frontend journey for: Full marks, minimum pass marks, grade boundaries and basic weighting | Reviewed behavior, access checks and automated tests for full marks, minimum pass marks, grade boundaries and basic weighting |
| M1-ASSESSMENT_RESULTS-T-006 | Teacher-owned marks entry and approval workflow | Backend API + frontend journey for: Teacher-owned marks entry and approval workflow | Reviewed behavior, access checks and automated tests for teacher-owned marks entry and approval workflow |
| M1-ASSESSMENT_RESULTS-T-007 | Grade, percentage, GPA/CGPA compatible calculation; configurable grading policy | Backend API + frontend journey for: Grade, percentage, GPA/CGPA compatible calculation; configurable grading policy | Reviewed behavior, access checks and automated tests for grade, percentage, gpa/cgpa compatible calculation; configurable grading policy |
| M1-ASSESSMENT_RESULTS-T-008 | Provisional vs published results with authorized release | Backend API + frontend journey for: Provisional vs published results with authorized release | Reviewed behavior, access checks and automated tests for provisional vs published results with authorized release |
| M1-ASSESSMENT_RESULTS-T-009 | Printable exam result sheet, subject performance and report cards | Backend API + frontend journey for: Printable exam result sheet, subject performance and report cards | Reviewed behavior, access checks and automated tests for printable exam result sheet, subject performance and report cards |
| M1-ASSESSMENT_RESULTS-T-010 | Tabulation sheet, pass/fail and simple merit order when allowed | Backend API + frontend journey for: Tabulation sheet, pass/fail and simple merit order when allowed | Reviewed behavior, access checks and automated tests for tabulation sheet, pass/fail and simple merit order when allowed |
| M1-ASSESSMENT_RESULTS-T-011 | Guardian/student visibility only after result publication | Backend API + frontend journey for: Guardian/student visibility only after result publication | Reviewed behavior, access checks and automated tests for guardian/student visibility only after result publication |
| M1-ASSESSMENT_RESULTS-T-012 | Academic result snapshots for historical reproducibility | Backend API + frontend journey for: Academic result snapshots for historical reproducibility | Reviewed behavior, access checks and automated tests for academic result snapshots for historical reproducibility |
| M1-ASSESSMENT_RESULTS-T-013 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M1-ASSESSMENT_RESULTS-T-014 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
