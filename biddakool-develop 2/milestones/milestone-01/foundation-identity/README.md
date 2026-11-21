# Identity & Access Control

**Module:** `foundation-identity`  |  **Requirement namespace:** `M1-FOUNDATION_IDENTITY`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

**Purpose:** Platform identity, institution memberships and policy-based access control; a foundational service, not a generic school-only role table.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 9-10, 46** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: User, TenantMembership, Role, Permission, RolePermission, AuthSession, SecurityAudit. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Tenant-scoped login, logout, invitation and password recovery
- Separate platform-level and institution-level access; membership selection for a multi-institution user
- Institution-configurable roles with explicit permissions for each action
- Faculty, accountant, student, guardian and admin login identities
- Audit privileged actions; suspend accounts and revoke active sessions
- Secure file/document download authorization for results, identity cards and receipts

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/FoundationIdentity`.
- Next.js feature UI and typed client under `apps/web/src/features/foundation-identity`.
- Test project at `tests/FoundationIdentity.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

No feature-module dependency; foundational infrastructure still applies.

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
