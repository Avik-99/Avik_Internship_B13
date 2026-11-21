# Advanced Grading, Analysis & Report Cards — Developer Task Backlog

**Module:** `advanced-examinations`  |  **Requirement namespace:** `M2-ADVANCED_EXAMINATIONS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/AdvancedExaminations` and `apps/web/src/features/advanced-examinations`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M2-ADVANCED_EXAMINATIONS-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M2-ADVANCED_EXAMINATIONS-T-002 | Domain and EF Core | Implement AssessmentWeightRule, SubjectCombination, ResultRuleVersion, ReportTemplate plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M2-ADVANCED_EXAMINATIONS-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M2-ADVANCED_EXAMINATIONS-T-004 | Weighted class tests, monthly tests, homework and continuous assessments | Backend API + frontend journey for: Weighted class tests, monthly tests, homework and continuous assessments | Reviewed behavior, access checks and automated tests for weighted class tests, monthly tests, homework and continuous assessments |
| M2-ADVANCED_EXAMINATIONS-T-005 | Aggregate semester, annual and cross-term results | Backend API + frontend journey for: Aggregate semester, annual and cross-term results | Reviewed behavior, access checks and automated tests for aggregate semester, annual and cross-term results |
| M2-ADVANCED_EXAMINATIONS-T-006 | Combine two or more subjects for pass/fail and GPA calculations | Backend API + frontend journey for: Combine two or more subjects for pass/fail and GPA calculations | Reviewed behavior, access checks and automated tests for combine two or more subjects for pass/fail and gpa calculations |
| M2-ADVANCED_EXAMINATIONS-T-007 | Optional/excluded subjects, grace marks and fail highlighting | Backend API + frontend journey for: Optional/excluded subjects, grace marks and fail highlighting | Reviewed behavior, access checks and automated tests for optional/excluded subjects, grace marks and fail highlighting |
| M2-ADVANCED_EXAMINATIONS-T-008 | Teacher evaluation notes and attendance on report card | Backend API + frontend journey for: Teacher evaluation notes and attendance on report card | Reviewed behavior, access checks and automated tests for teacher evaluation notes and attendance on report card |
| M2-ADVANCED_EXAMINATIONS-T-009 | Class/section merit rank, fail list and performance distribution | Backend API + frontend journey for: Class/section merit rank, fail list and performance distribution | Reviewed behavior, access checks and automated tests for class/section merit rank, fail list and performance distribution |
| M2-ADVANCED_EXAMINATIONS-T-010 | Custom report card templates, seals, logos and auto-signatures | Backend API + frontend journey for: Custom report card templates, seals, logos and auto-signatures | Reviewed behavior, access checks and automated tests for custom report card templates, seals, logos and auto-signatures |
| M2-ADVANCED_EXAMINATIONS-T-011 | Compact and detailed tabulations, teacher-wise and subject-wise analytics | Backend API + frontend journey for: Compact and detailed tabulations, teacher-wise and subject-wise analytics | Reviewed behavior, access checks and automated tests for compact and detailed tabulations, teacher-wise and subject-wise analytics |
| M2-ADVANCED_EXAMINATIONS-T-012 | School-specific and madrasa-specific layouts from brochure examples | Backend API + frontend journey for: School-specific and madrasa-specific layouts from brochure examples | Reviewed behavior, access checks and automated tests for school-specific and madrasa-specific layouts from brochure examples |
| M2-ADVANCED_EXAMINATIONS-T-013 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M2-ADVANCED_EXAMINATIONS-T-014 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
