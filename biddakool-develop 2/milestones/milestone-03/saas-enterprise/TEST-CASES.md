# SaaS Commercial Operations & Enterprise Extensions — Test Cases

**Module:** `saas-enterprise`  |  **Requirement namespace:** `M3-SAAS_ENTERPRISE`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M3-SAAS_ENTERPRISE-TC-001 | Subscription plans, feature entitlements and usage limit enforcement | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-SAAS_ENTERPRISE-TC-002 | Trial, activation, renewal and plan change workflows | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-SAAS_ENTERPRISE-TC-003 | Institution self-service branding and optional custom domains | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-SAAS_ENTERPRISE-TC-004 | Central platform support tools with audited break-glass access | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-SAAS_ENTERPRISE-TC-005 | Tenant-scoped backups, export and disaster recovery procedures | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-SAAS_ENTERPRISE-TC-006 | Advanced campus hierarchy, delegated regional admin and consolidated reporting | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-SAAS_ENTERPRISE-TC-007 | External API keys, integration registry and rate limits | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-SAAS_ENTERPRISE-TC-008 | Automated provisioning/deprovisioning and compliant tenant data export | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M3-SAAS_ENTERPRISE-TC-009 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M3-SAAS_ENTERPRISE-TC-010 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M3-SAAS_ENTERPRISE-TC-011 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
