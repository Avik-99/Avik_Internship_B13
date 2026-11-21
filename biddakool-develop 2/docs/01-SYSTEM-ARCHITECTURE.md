# System Architecture — Modular Monolith + Clean Architecture

## Logical decomposition

```text
Next.js Web (apps/web)
       |
Typed OpenAPI Client / BFF session layer
       |
ASP.NET Core API Host (apps/api)
       |
Tenant Resolution + Authentication + Authorization + Observability
       |
+----------------------------- Modular Monolith ----------------------------+
|  Identity  Institution  Academics  Students  Staff  Attendance  Exams  Fees |
|  Scheduling  Notices  Portals  M2 automations  M3 specialist modules       |
|  Each module: Domain | Application (CQRS) | Infrastructure (EF) | API       |
+--------------------------------------------------------------------------+
       |
PostgreSQL (separate owned schemas/tables per module; tenant isolation)
       |
Transactional Outbox -> Module Event Dispatcher -> Consumer Inbox
```

## Repository layout (existing web app and planned backend targets)

```text
biddakool/
  apps/api/Biddakool.Api/                  # ASP.NET Core host and endpoints
  apps/web/                              # Next.js App Router + TypeScript
  src/BuildingBlocks/                    # DI, Result, TenantContext, Time, Events
  src/Modules/<Module>/Domain/
  src/Modules/<Module>/Application/
  src/Modules/<Module>/Infrastructure/
  src/Modules/<Module>/Api/
  packages/api-client/                   # generated OpenAPI types/client
  packages/ui/                           # versioned shared UI components
  tests/<Module>.Tests/
  tests/Architecture.Tests/
  tests/Integration.Tests/
  tests/E2E/
  infra/                                  # CI/container/deployment manifests
  docs/ milestones/
```

## Dependency rules

- Domain references no UI, HTTP, persistence or other module infrastructure.
- Application may depend on public contract interfaces, never another module's entity types or DbContext.
- Infrastructure depends inward and owns storage/external adapters.
- API host composes module registration; feature endpoints grouped by module.
- Use minimal APIs or controllers consistently per approved ADR; do not mix idioms arbitrarily.
- Commands and queries separated in application layer; do not create a separate service for every trivial operation unless useful.
- Domain events stay local to aggregates; integration events are published on successful transaction commit via outbox.

## PostgreSQL strategy

Prefer a **shared PostgreSQL database with tenant_id on every tenant-owned row** and per-module schemas. Apply tenant-aware EF query filters AND independently verify tenant predicate in writes and exports; optionally deploy PostgreSQL RLS as defense in depth after operational design. Do not confuse per-module schema with per-tenant schema.

## CQRS implementation choices

- Commands enforce invariants and use unit-of-work/transaction scoped to one module aggregate boundary.
- Queries can use EF projections or optimized SQL from the owning module, returning DTOs.
- Repositories are aggregate-specific where necessary, not generic CRUD wrappers by default.
- Event handling is async and eventually consistent; critical synchronous invariants should remain within one owning aggregate.

## Technology baseline

C#/.NET 10, ASP.NET Core 10, EF Core 10, Npgsql for PostgreSQL, Next.js + TypeScript. Pin patch versions in implementation lockfiles, and re-review current security advisories before release. Ancillary libraries/cloud vendor are intentionally unselected.

See the [backend solution guide](guides/BACKEND-SOLUTION-STRUCTURE.md) for the project reference map, composition root and module registration example.
