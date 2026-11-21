# Medical College Academic Operations — Developer Task Backlog

**Module:** `medical-education`  |  **Requirement namespace:** `M3-MEDICAL_EDUCATION`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/MedicalEducation` and `apps/web/src/features/medical-education`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M3-MEDICAL_EDUCATION-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M3-MEDICAL_EDUCATION-T-002 | Domain and EF Core | Implement MedicalBatch, ClinicalRotation, WardGroup, ClinicalTeachingSession plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M3-MEDICAL_EDUCATION-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M3-MEDICAL_EDUCATION-T-004 | Lecture, tutorial, ward and clinical group teaching sessions | Backend API + frontend journey for: Lecture, tutorial, ward and clinical group teaching sessions | Reviewed behavior, access checks and automated tests for lecture, tutorial, ward and clinical group teaching sessions |
| M3-MEDICAL_EDUCATION-T-005 | Full-batch, group/ward and subject-specific attendance reporting | Backend API + frontend journey for: Full-batch, group/ward and subject-specific attendance reporting | Reviewed behavior, access checks and automated tests for full-batch, group/ward and subject-specific attendance reporting |
| M3-MEDICAL_EDUCATION-T-006 | Configurable attendance warnings including the example 75% rule | Backend API + frontend journey for: Configurable attendance warnings including the example 75% rule | Reviewed behavior, access checks and automated tests for configurable attendance warnings including the example 75% rule |
| M3-MEDICAL_EDUCATION-T-007 | Multi-stage leave recommendation/forwarding/approval in medical programs | Backend API + frontend journey for: Multi-stage leave recommendation/forwarding/approval in medical programs | Reviewed behavior, access checks and automated tests for multi-stage leave recommendation/forwarding/approval in medical programs |
| M3-MEDICAL_EDUCATION-T-008 | Item, card and term exam marking with rank/fail highlighting | Backend API + frontend journey for: Item, card and term exam marking with rank/fail highlighting | Reviewed behavior, access checks and automated tests for item, card and term exam marking with rank/fail highlighting |
| M3-MEDICAL_EDUCATION-T-009 | Professional exam eligibility report with reasons from attendance and results | Backend API + frontend journey for: Professional exam eligibility report with reasons from attendance and results | Reviewed behavior, access checks and automated tests for professional exam eligibility report with reasons from attendance and results |
| M3-MEDICAL_EDUCATION-T-010 | Student medical academic dashboard with threshold warnings | Backend API + frontend journey for: Student medical academic dashboard with threshold warnings | Reviewed behavior, access checks and automated tests for student medical academic dashboard with threshold warnings |
| M3-MEDICAL_EDUCATION-T-011 | Anonymous student-to-teacher evaluation and aggregate summaries | Backend API + frontend journey for: Anonymous student-to-teacher evaluation and aggregate summaries | Reviewed behavior, access checks and automated tests for anonymous student-to-teacher evaluation and aggregate summaries |
| M3-MEDICAL_EDUCATION-T-012 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M3-MEDICAL_EDUCATION-T-013 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
