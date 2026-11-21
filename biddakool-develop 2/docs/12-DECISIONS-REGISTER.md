# Architecture & Product Decision Register

## Decisions and review status

| ID | Decision | Status |
| --- | --- | --- |
| ADR-001 | ASP.NET Core 10 modular monolith | Approved by user |
| ADR-002 | Clean Architecture + DDD + CQRS + EF Core 10 | Approved by user |
| ADR-003 | PostgreSQL | Approved by user |
| ADR-004 | Next.js + TypeScript | Approved by user |
| ADR-005 | Multi-tenant SaaS | Approved by user |
| ADR-006 | Single monorepo | Approved by user |
| ADR-007 | M1 flexible academic model for all institution types | Recommended baseline |
| ADR-008 | [Shared PostgreSQL and module schemas](adr/ADR-008-DATABASE-TENANCY.md) | Recommended for M1; confirm before tenant-owned migrations |
| ADR-009 | Project name Biddakool (replaces working name EduNexus) | Approved by user, 18 Nov 2026 (#1) |
| ADR-010 | Single GitHub team @biddakool-devs; no sub-teams | Approved by user, 18 Nov 2026 (#3) |
| ADR-011 | GitFlow branching model (`main`/`develop` + feat/release/hotfix) | Approved by user, 18 Nov 2026 (#5) |
| ADR-012 | Migrate `apps/web` design prototype from TanStack Start to Next.js App Router (conformance with ADR-004) | Approved by user, 18 Nov 2026 (#8); [completed migration record](24-FRONTEND-NEXTJS-MIGRATION.md) |
| ADR-013 | [Global identity and scoped memberships](adr/ADR-013-IDENTITY-AND-TENANT-MEMBERSHIP.md) | Proposed for module and product-owner review |
| ADR-014 | [Backend testing conventions](09-TESTING-QUALITY.md#proposed-backend-test-conventions) | Recommended for team review |

## Open decisions (do not silently invent)

- Exact Bangladesh and international regulatory policies by institution and data type.
- Default grade scales, GPA rounding, assessment weights, student promotion rules and special pass cases.
- University credit/CGPA rules, term withdrawal, academic probation and transcript issuance.
- Medical professional exam attendance threshold, card/term composition, appeals and retake rules.
- Fee currency rules, refund/waiver approvals, offline cash controls, payment gateway provider.
- Email/SMS/push provider, sending limits and consent policies.
- Hosting provider, deployment regions, data residency, retention and disaster recovery requirements.
- Subscription billing implementation, plan entitlements and commercial packaging.
- Authentication method details, privileged MFA policy and object-storage provider.

## How to close decisions

Create an ADR with alternatives, consequences, migration impact, owner, affected modules, date and product-owner sign-off; link to updated module requirements.

Pending implementation choices include controller versus minimal API endpoints, CQRS dispatch mechanism, mapping library and logging provider. Cortex Mediator, Mapster and Serilog are candidates from the reference material. Approve each dependency when a concrete implementation need and an owner are identified.
