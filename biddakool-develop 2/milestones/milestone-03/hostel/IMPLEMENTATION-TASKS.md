# Hostel, Housing & Residence Fees — Developer Task Backlog

**Module:** `hostel`  |  **Requirement namespace:** `M3-HOSTEL`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/Hostel` and `apps/web/src/features/hostel`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M3-HOSTEL-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M3-HOSTEL-T-002 | Domain and EF Core | Implement Hostel, HostelFloor, HostelRoom, Bed plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M3-HOSTEL-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M3-HOSTEL-T-004 | Hostel/building/floor/room/bed catalogue and capacity | Backend API + frontend journey for: Hostel/building/floor/room/bed catalogue and capacity | Reviewed behavior, access checks and automated tests for hostel/building/floor/room/bed catalogue and capacity |
| M3-HOSTEL-T-005 | Student room or bed assignment and release with occupancy history | Backend API + frontend journey for: Student room or bed assignment and release with occupancy history | Reviewed behavior, access checks and automated tests for student room or bed assignment and release with occupancy history |
| M3-HOSTEL-T-006 | Hostel and meal charge configuration | Backend API + frontend journey for: Hostel and meal charge configuration | Reviewed behavior, access checks and automated tests for hostel and meal charge configuration |
| M3-HOSTEL-T-007 | Automatic monthly room/meal charge generation | Backend API + frontend journey for: Automatic monthly room/meal charge generation | Reviewed behavior, access checks and automated tests for automatic monthly room/meal charge generation |
| M3-HOSTEL-T-008 | Hostel due collection through the Fees module | Backend API + frontend journey for: Hostel due collection through the Fees module | Reviewed behavior, access checks and automated tests for hostel due collection through the fees module |
| M3-HOSTEL-T-009 | Occupancy, vacancy and hostel resident reports | Backend API + frontend journey for: Occupancy, vacancy and hostel resident reports | Reviewed behavior, access checks and automated tests for occupancy, vacancy and hostel resident reports |
| M3-HOSTEL-T-010 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M3-HOSTEL-T-011 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
