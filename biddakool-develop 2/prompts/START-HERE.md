# Developer / AI Agent Implementation Prompts

## Prompt 1 — extend the existing monorepo

Work on the developer-assigned backend foundation task. Read README.md, AGENTS.md, docs/01 through docs/07, docs/09, docs/12, docs/guides/BACKEND-SOLUTION-STRUCTURE.md and the M1 overview. Inventory the current tree. Keep the existing apps/web Next.js application and its Bun lockfile. Scaffold the missing ASP.NET Core 10 composition root and the approved project boundaries for the assigned module. Demonstrate dependency registration and a build/test entry point. Plan PostgreSQL integration tests and CI checks for the projects included in this task. Keep production authentication choices and migrations tied to reviewed decisions. Report paths, commands actually run, outcomes and decisions needed for the next PR.

### Acceptance for the foundation PR

Deliver a root Biddakool.slnx, apps/api/Biddakool.Api, one module registration entry point, and a discoverable .NET smoke-test project. Expose GET /health/live with a minimal 200 response. Exercise the real host in a test and resolve a module dependency inside a service scope. The scaffold can use a synthetic fixture until the initial migration is reviewed.

Add a GitHub Actions workflow for pull requests to develop and main that installs the pinned .NET 10 SDK and executes these same commands from a clean checkout:

```sh
dotnet restore Biddakool.slnx
dotnet build Biddakool.slnx --configuration Release --no-restore
dotnet test Biddakool.slnx --configuration Release --no-build
```

Include the passing CI run, number of discovered tests and changed paths in the PR. A green build with zero discovered tests fails acceptance. The frontend entry point is the existing apps/web. Keep frontend dependency or route changes in the feature PR that needs them.

### First feature contract

Before splitting attendance API and client work, the Attendance owner and web developer review the [OpenAPI operation](../contracts/openapi/attendance-finalize.yaml), agree on error codes and replay behavior, and record the review in the feature PR. Generate client types from that revision. The foundation PR can proceed independently.

## Prompt 2 — independent module work

You own module `{{MILESTONE}}/{{MODULE_ID}}`. Read its `README.md`, `AGENTS.md`, `REQUIREMENTS.md`, `BUSINESS-RULES.md`, `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md`, `API-CONTRACT.md`, `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md`, `ACCEPTANCE-CRITERIA.md` and global architecture docs. Complete one vertical feature slice at a time; do not access other modules' infrastructure. Start by finalizing proposed contracts, then implement code, frontend integration, migrations and tests with tenant isolation. Mark as assumption any business rules not authorized by the PDF or product owner. Report all commands and tests actually run.

## Prompt 3 — integration auditor

Using `docs/14-PDF-FEATURE-TRACEABILITY.md`, `docs/16-INTEGRATION-EVENTS.md` and `docs/18-INTEGRATION-TEST-MATRIX.md`, audit implemented modules for omissions, cross-module coupling, tenant isolation vulnerabilities and incompatible contracts. Produce actionable findings grouped by severity and ownership; do not auto-apply breaking schema changes.

## Initial frontend

The initial frontend project — marketing landing page (`/`) and institute panel dashboard (`/login`, `/dashboard/*`) — is created in [`apps/web/`](../apps/web/). Treat it as the starting point for all frontend work.
