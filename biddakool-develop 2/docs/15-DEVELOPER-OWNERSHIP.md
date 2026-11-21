# Multi-Developer Ownership & Workstream Partitioning

> **Team decision (18 November 2026):** Biddakool maintains a **single GitHub team, `@biddakool-devs`**, in the `biddakool-dev` organization. The team is small, role separation is not practical, and every task — backend, frontend, QA, integration and documentation — is performed by members of this one team. The focus areas below are **not teams**: they only indicate where extra review attention is needed. They never restrict who may work on what.

## Ownership model

- Single team: `@biddakool-devs` owns the repository, all modules and all shared building blocks (see `.github/CODEOWNERS`).
- One **named accountable owner per module** (a person, not a sub-team); other `@biddakool-devs` members may work independently on backend, frontend and QA slices after schema/API contract freeze.
- The module's accountable owner controls its DbContext, migrations, OpenAPI, domain and UI feature directory.
- Shared building blocks, app shell, API host bootstrapping and API client generator changes always need a second reviewer, because they affect every module.
- No developer edits another module's domain model directly. Request an exported application interface or event contract instead.

## Suggested focus areas within @biddakool-devs (not fixed headcount, not teams)

| Focus area | Typical concerns |
| --- | --- |
| Platform | Host, tenant context, RBAC, health checks, outbox, observability, CI, shared building blocks |
| Academic kernel | Academic registry, enrollment model, grading policy contracts, admissions interfaces |
| Institution operations | Staff, attendance, routines, leave, facilities |
| Finance | Fees, payments, accounting, payroll, donations |
| Experience | Next.js app shell, shared UI, portal dashboards and typed OpenAPI clients |
| Integration & QA | Contract compatibility, Testcontainers, E2E, performance and security gates |

Any `@biddakool-devs` member may work in any focus area. If the team later grows enough for sub-teams to become practical, record that decision in an issue and update this document and `.github/CODEOWNERS` together.

## Parallel work startup process

1. Platform-focused members start M1 Identity, Tenancy, monorepo/CI and common contracts.
2. Academic-focused members define Institution + Program/Term/CourseOffering + StudentEnrollment schemas.
3. Staff/routine/attendance/fees/assessment workstreams mock those contracts and build in parallel.
4. The Next.js app shell and mocks proceed in parallel while other members implement real role-specific screens.
5. Integration/QA focus validates end-to-end journeys in staging and manages milestone release gates.

## Code ownership

`.github/CODEOWNERS` assigns the entire repository to the single team:

```text
# .github/CODEOWNERS
* @biddakool-devs
```

Each new module still records its named accountable owner in its module documents. Coordinate changes to shared migrations, CI and event schemas with a dedicated integration review (see `CONTRIBUTING.md`).
