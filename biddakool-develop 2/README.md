# Biddakool — Educational Institution Management Platform

**Development baseline updated 19 November 2026.** The repository includes a Next.js App Router web application with demo data and a three-milestone implementation specification. The ASP.NET Core host, module projects, production identity and database migrations are planned. Begin with the [developer-directed bootstrap prompt](prompts/START-HERE.md).

Biddakool is a **multi-tenant SaaS** for **schools, colleges, universities, medical colleges, madrasas and training centers**, developed by multiple developers within a single monorepo.

## Approved technology decisions

- Backend: **ASP.NET Core 10**, C#, Clean Architecture, modular monolith, DDD, CQRS, EF Core 10, PostgreSQL.
- Frontend: **Next.js + TypeScript**, generated OpenAPI clients and role-aware, responsive experiences.
- Infrastructure: containerized build/deploy, CI, observability, outbox/inbox event integration; exact cloud vendor deliberately undecided.
- Tenancy: shared platform with **strong institution isolation from day one**; advanced SaaS billing is Milestone 3.

## Scope and source

- Source is the uploaded 64-page **EximusEdu_Brochure_v3.pdf**, **excluding PDF pages 1–6**.
- PDF pp. **7–57** cover index/overview, feature detail and medical-specific functions; pp. **58–63** show report card samples. Page 64 is closing material.
- Brochure claims and UI screenshots are feature references; they **do not specify API routes, database design, legal compliance, or complete calculation policies**. Our proposed designs are explicitly marked.
- This repo package gives module owners an actionable baseline. Confirm open policy decisions before coding critical finance/grades/medical eligibility.

## Read first

1. `AGENTS.md` — coding agent/developer operating rules.
2. `docs/00-PROJECT-CHARTER.md` — goals and milestone acceptance.
3. `docs/01-SYSTEM-ARCHITECTURE.md` — code module boundaries.
4. `docs/02-MULTITENANCY.md` + `docs/03-ACADEMIC-MODEL.md` — non-negotiable foundation.
5. `docs/14-PDF-FEATURE-TRACEABILITY.md` — verify each brochure page is accounted for.
6. `docs/15-DEVELOPER-OWNERSHIP.md` — parallelization and merges.
7. `milestones/milestone-01/README.md` — start delivery.

## Milestone groups

- **M1 — Mandatory operational product**: secure tenant foundation, multi-type academic structures, students, staff, scheduling, attendance, results, fees, notices and portals.
- **M2 — Advanced automation**: online admissions/recruitment, devices, leave, detailed reporting, finance, payroll, communications and other workflow extensions.
- **M3 — Specialized/enterprise**: inventory, library, hostel, donations, Hifz, LMS, medical academic operations, analytics and commercial SaaS extensions.

## Developer definition of done

A module is done only when requirements, business rules, API contracts, ownership, tests, migrations, tenant isolation, CI and acceptance evidence are signed off. Cross-module consumers must use application contracts/events; direct cross-module database writes are prohibited.

## Names

`Biddakool` is the approved project name (decision: 18 November 2026; it replaces the earlier working name). Verify trademarks, package names and domain availability before public release.
