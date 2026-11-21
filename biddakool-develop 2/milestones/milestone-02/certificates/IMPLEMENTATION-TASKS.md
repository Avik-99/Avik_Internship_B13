# Certificates & Enhanced ID Card Designer — Developer Task Backlog

**Module:** `certificates`  |  **Requirement namespace:** `M2-CERTIFICATES`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/Certificates` and `apps/web/src/features/certificates`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M2-CERTIFICATES-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M2-CERTIFICATES-T-002 | Domain and EF Core | Implement CertificateTemplate, CertificateIssue, IdentityCardTemplate, IdentityCardIssue plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M2-CERTIFICATES-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M2-CERTIFICATES-T-004 | Issue character/testimonial, transfer and other school certificates | Backend API + frontend journey for: Issue character/testimonial, transfer and other school certificates | Reviewed behavior, access checks and automated tests for issue character/testimonial, transfer and other school certificates |
| M2-CERTIFICATES-T-005 | Configurable certificate numbering and verification links | Backend API + frontend journey for: Configurable certificate numbering and verification links | Reviewed behavior, access checks and automated tests for configurable certificate numbering and verification links |
| M2-CERTIFICATES-T-006 | ID front/back template designer with portrait/landscape layouts | Backend API + frontend journey for: ID front/back template designer with portrait/landscape layouts | Reviewed behavior, access checks and automated tests for id front/back template designer with portrait/landscape layouts |
| M2-CERTIFICATES-T-007 | Separate teacher, staff, student and campus templates | Backend API + frontend journey for: Separate teacher, staff, student and campus templates | Reviewed behavior, access checks and automated tests for separate teacher, staff, student and campus templates |
| M2-CERTIFICATES-T-008 | Merge authorized dynamic profile fields and headmaster signature | Backend API + frontend journey for: Merge authorized dynamic profile fields and headmaster signature | Reviewed behavior, access checks and automated tests for merge authorized dynamic profile fields and headmaster signature |
| M2-CERTIFICATES-T-009 | Bulk print and PDF export with issuance audit | Backend API + frontend journey for: Bulk print and PDF export with issuance audit | Reviewed behavior, access checks and automated tests for bulk print and pdf export with issuance audit |
| M2-CERTIFICATES-T-010 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M2-CERTIFICATES-T-011 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
