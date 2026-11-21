# ADR-008 — Database tenancy for Milestone 1

Status: proposed implementation baseline. Review owners: backend architecture, Identity and Tenant Institution. Record the decision date and reviewers in the register before the first tenant-owned migration.

## Choice and trade-offs

Use a shared PostgreSQL database and a schema owned by each module. Keep tenant_id on tenant-owned records. This allows one migration stream per module and keeps onboarding lightweight. Isolation depends on scoped queries, tenant-aware uniqueness and write constraints. A schema per tenant multiplies migration work. A database per tenant simplifies separate restore and physical isolation while adding provisioning and operational overhead. Revisit dedicated databases if a contracted institution needs physical isolation or independent recovery.

## Storage rules

Module owners control tables, migration history and indexes. Validate tenant and institution against active membership at the request boundary. Apply EF filters on reads and explicit tenant predicates in raw SQL, writes, exports and jobs. Enforce same-tenant relationships with composite keys inside each module. External institution IDs are opaque and verified through the owner contract. PostgreSQL RLS requires a separate implementation decision.

## Review and rollout

Read alongside [ADR-013](ADR-013-IDENTITY-AND-TENANT-MEMBERSHIP.md). On a disposable PostgreSQL instance, demonstrate that two tenants may reuse an institution-local business key, foreign-tenant writes fail, and a background job reads only its selected tenant. Inspect the generated migration for composite constraints and per-module ownership. Record results in the migration PR. A future move to dedicated storage needs tenant-scoped export, reconciliation, cutover and restore rehearsal.
