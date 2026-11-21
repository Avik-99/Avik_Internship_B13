# Governance, Committees & Audit — Developer Task Backlog

**Module:** `institutional-governance`  |  **Requirement namespace:** `M3-INSTITUTIONAL_GOVERNANCE`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Suggested work area:** `src/Modules/InstitutionalGovernance` and `apps/web/src/features/institutional-governance`. Assign tasks to different developers where files do not overlap; reserve contract edits for module owner.

| Task ID | Work item | Implementation objective | Definition of done |
| --- | --- | --- | --- |
| M3-INSTITUTIONAL_GOVERNANCE-T-001 | Contract & schema design | Confirm business rules, OpenAPI, ERD, aggregate boundaries and security/privacy classification | Reviewed ADR and acceptance criteria |
| M3-INSTITUTIONAL_GOVERNANCE-T-002 | Domain and EF Core | Implement GovernanceCommittee, CommitteeMeeting, ApprovalWorkflow, ApprovalDecision plus supporting aggregates, migrations, indexes, optimistic concurrency | Domain + persistence integration tests |
| M3-INSTITUTIONAL_GOVERNANCE-T-003 | Application CQRS | Command handlers, query projections, validators, authorization and audit/outbox | Unit + API tests |
| M3-INSTITUTIONAL_GOVERNANCE-T-004 | Committee roles, terms, agenda and meeting minutes | Backend API + frontend journey for: Committee roles, terms, agenda and meeting minutes | Reviewed behavior, access checks and automated tests for committee roles, terms, agenda and meeting minutes |
| M3-INSTITUTIONAL_GOVERNANCE-T-005 | Approval chains for major academic and financial decisions | Backend API + frontend journey for: Approval chains for major academic and financial decisions | Reviewed behavior, access checks and automated tests for approval chains for major academic and financial decisions |
| M3-INSTITUTIONAL_GOVERNANCE-T-006 | Policy approval and review versions | Backend API + frontend journey for: Policy approval and review versions | Reviewed behavior, access checks and automated tests for policy approval and review versions |
| M3-INSTITUTIONAL_GOVERNANCE-T-007 | Audit log search, filters and privileged access reviews | Backend API + frontend journey for: Audit log search, filters and privileged access reviews | Reviewed behavior, access checks and automated tests for audit log search, filters and privileged access reviews |
| M3-INSTITUTIONAL_GOVERNANCE-T-008 | Role delegation and temporary permissions | Backend API + frontend journey for: Role delegation and temporary permissions | Reviewed behavior, access checks and automated tests for role delegation and temporary permissions |
| M3-INSTITUTIONAL_GOVERNANCE-T-009 | Retention and export controls for institution records | Backend API + frontend journey for: Retention and export controls for institution records | Reviewed behavior, access checks and automated tests for retention and export controls for institution records |
| M3-INSTITUTIONAL_GOVERNANCE-T-010 | Integration contracts | Consumer stubs, event handlers, idempotency and negative tests | Cross-module integration suite |
| M3-INSTITUTIONAL_GOVERNANCE-T-011 | Release readiness | Load checks, accessibility, security, documentation and observability | Milestone release gate passes |

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
