# SaaS Commercial Operations & Enterprise Extensions

**Module:** `saas-enterprise`  |  **Requirement namespace:** `M3-SAAS_ENTERPRISE`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Purpose:** Platform billing, premium entitlements and enterprise deployment extensions built over M1 tenant isolation.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 9, 20, 46** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: SaaSPlan, Subscription, Entitlement, UsageCounter, CustomDomain, SupportAccessGrant, IntegrationRegistration. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Subscription plans, feature entitlements and usage limit enforcement
- Trial, activation, renewal and plan change workflows
- Institution self-service branding and optional custom domains
- Central platform support tools with audited break-glass access
- Tenant-scoped backups, export and disaster recovery procedures
- Advanced campus hierarchy, delegated regional admin and consolidated reporting
- External API keys, integration registry and rate limits
- Automated provisioning/deprovisioning and compliant tenant data export

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/SaasEnterprise`.
- Next.js feature UI and typed client under `apps/web/src/features/saas-enterprise`.
- Test project at `tests/SaasEnterprise.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| foundation-identity | Identity & Access Control | M1 |
| tenant-institution | Tenant & Institution Configuration | M1 |
| accounting-ledger | Accounting & General Ledger | M2 |
| analytics-insights | Advanced Academic & Operational Analytics | M3 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
