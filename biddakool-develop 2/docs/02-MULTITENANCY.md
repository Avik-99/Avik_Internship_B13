# Tenancy, Data Isolation & Institution Selection

## Tenant model

Tenant = customer/account boundary; Institution = educational organization; Campus = site inside institution. An MVP tenant may have one institution, but model should not assume so. Every institution-owned business record has authenticated TenantId; campus/program are additional filters, not tenant boundaries.

## Request processing

1. Authenticate principal and current institution/tenant membership.
2. Resolve effective TenantContext and allowed institution/campus scope.
3. Authorize permission and, where needed, relationship (guardian↔student, assigned teacher↔course).
4. Validate identifiers and apply tenant predicates to every repository/query/export.
5. Stamp TenantId server-side; reject writes whose foreign IDs belong to another tenant.
6. Reset tenant context for background workers; require explicit tenant metadata on each job and event.

## Threat-model must-test cases

- User from Tenant A requests Tenant B student ID via direct URL.
- User guesses fee receipt, result document, download link or object storage key from another tenant.
- Background notifications deliver another tenant's information because cache key lacks tenantId.
- Shared academic catalog result filtering accidentally omits tenantId.
- Import process accepts foreign StudentId or TeacherId.
- Public application URLs target wrong institution.

## EF Core and PostgreSQL controls

- Central tenant aware query filter on tenant-owned entities; add explicit scope checks for raw SQL and exports.
- Unique indexes include tenant_id unless a key is truly global identity.
- Global identity membership spans tenants, but tenant records do not.
- Admin/platform support sessions require audit and separate permissions; do not bypass by dropping filters.
- Encrypt secrets, minimize PII, enforce retention, take tested backups and prevent cross-tenant observability leakage.

## Rules for portal routes

A guardian may see only linked children and only within policy. University students may not be accessible to a guardian without appropriate consent. Teachers see only assigned course/class cohorts unless given broader academic officer role.

The proposed [identity ownership decision](adr/ADR-013-IDENTITY-AND-TENANT-MEMBERSHIP.md) distinguishes the global sign-in identity from institution-scoped membership and role assignment. Review it before the first identity migration.
