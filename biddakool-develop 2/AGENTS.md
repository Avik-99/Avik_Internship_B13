# Biddakool — Instructions for AI Coding Agents and Developers

## Non-negotiable context

Read `README.md`, `docs/01-SYSTEM-ARCHITECTURE.md`, `docs/02-MULTITENANCY.md`, `docs/03-ACADEMIC-MODEL.md` and the assigned module's README, requirements, domain, API, database, tasks, tests and acceptance files. Do not code from a brochure screenshot alone.

## Repository behavior

- Single monorepo: `apps/web`, `apps/api`, `src/BuildingBlocks`, `src/Modules`, `tests`, `docs`, `milestones`. The existing Next.js app lives in apps/web. Backend and shared project paths describe planned targets. Inspect the assigned path before scaffolding and use apps/web/AGENTS.md for frontend changes.
- Domain projects cannot reference Infrastructure, EF Core, HTTP, or Next.js.
- Application layer handles CQRS command/query workflows and transaction boundaries; Domain holds invariants; Infrastructure implements persistence/integrations; API exposes HTTP.
- Each module owns its database tables, EF DbContext, migrations, API group and UI feature folder.
- Never share DbContext across modules or query another module's private tables. Use interfaces, authorized query APIs, read projections, or event contracts.
- Treat all user-visible configuration, terms, grades, permissions, timezones, finances and tenant IDs as untrusted inputs.

## Safety and policy

- Deny access by default. Always obtain tenant from authenticated membership and validate membership; do not trust frontend-provided tenant ID alone.
- Check permission and linked relationship for every student/guardian action. Protect PII, exam marks, medical student records and financial information.
- Use realistic domain validations; if a threshold/rounding rule is not in an approved business decision, create a decision ticket instead of inventing it.
- Never claim a test passed without executing it; never skip tests or disable checks as a shortcut.
- Preserve history of issued receipts, published grades, attendance corrections and approvals.
- Enforce idempotency and concurrency around money, registration and state transitions.

## Before implementation

1. Identify module owner and modules depended upon.
2. Convert candidate entities/fields into reviewed DDL and ADR; publish OpenAPI/event schemas.
3. Plan API and UI tasks that can run concurrently with mock contracts.
4. Implement vertical slices: contract → domain → application → persistence/API → typed client → UI → E2E.
5. Write tests covering happy, validation, authorization, tenant-mismatch, concurrency and rollback.

## Output format for agent PR

- Summary of implemented requirement IDs, changed files and scope.
- ERD/migration changes; OpenAPI/event changes, versions and consumers affected.
- Commands executed for tests, lint, build and results.
- Remaining assumptions, screenshots of tested UI if applicable, security review notes.

**Do not implement another module's feature simply because a screenshot puts both on the same page.**

## Working from a developer assignment

Start with the requirement IDs, allowed module paths and acceptance criteria in the issue. Identify whether a contract is approved or proposed in [the register](docs/12-DECISIONS-REGISTER.md). Surface disagreements in the PR and continue independent work. A backend-only task leaves the Next.js application in place. Coordinate shared contracts before assigning producer and consumer work to separate developers. Hand back the diff, executed tests, remaining decisions and any effects on other modules.
