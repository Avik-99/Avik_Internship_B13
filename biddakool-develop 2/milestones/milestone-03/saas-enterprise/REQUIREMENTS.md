# SaaS Commercial Operations & Enterprise Extensions — Functional Requirements

**Module:** `saas-enterprise`  |  **Requirement namespace:** `M3-SAAS_ENTERPRISE`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Reference:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 9, 20, 46** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Functional requirements

| ID | Behavior to deliver | Priority | Reference |
| --- | --- | --- | --- |
| M3-SAAS_ENTERPRISE-FR-001 | Subscription plans, feature entitlements and usage limit enforcement | P3 | PDF p. 9, 20, 46 / Biddakool extension |
| M3-SAAS_ENTERPRISE-FR-002 | Trial, activation, renewal and plan change workflows | P3 | PDF p. 9, 20, 46 / Biddakool extension |
| M3-SAAS_ENTERPRISE-FR-003 | Institution self-service branding and optional custom domains | P3 | PDF p. 9, 20, 46 / Biddakool extension |
| M3-SAAS_ENTERPRISE-FR-004 | Central platform support tools with audited break-glass access | P3 | PDF p. 9, 20, 46 / Biddakool extension |
| M3-SAAS_ENTERPRISE-FR-005 | Tenant-scoped backups, export and disaster recovery procedures | P3 | PDF p. 9, 20, 46 / Biddakool extension |
| M3-SAAS_ENTERPRISE-FR-006 | Advanced campus hierarchy, delegated regional admin and consolidated reporting | P3 | PDF p. 9, 20, 46 / Biddakool extension |
| M3-SAAS_ENTERPRISE-FR-007 | External API keys, integration registry and rate limits | P3 | PDF p. 9, 20, 46 / Biddakool extension |
| M3-SAAS_ENTERPRISE-FR-008 | Automated provisioning/deprovisioning and compliant tenant data export | P3 | PDF p. 9, 20, 46 / Biddakool extension |

## Actors / use cases

- **PlatformAdmin** — may perform only operations granted by institution permissions and module policy.
- **InstitutionAdmin** — may perform only operations granted by institution permissions and module policy.
- **SupportAgent** — may perform only operations granted by institution permissions and module policy.

## Workflow baseline

1. Resolve the signed-in identity, institution membership, tenant scope and permission.
2. Read reference data owned by prerequisite modules through documented application interfaces.
3. Validate the request against institution policy, effective dates and domain invariants.
4. Execute one command transaction; write outbox event and audit record when appropriate.
5. Present status, validation errors and an accessible confirmation in the Next.js feature UI.
6. Serve tenant-filtered lists, detail pages and authorized exports.

## Non-functional requirements

- Tenant isolation on all reads and writes (including exports, background jobs and reporting).
- Server-side validation and policy-based authorization; UI guards are presentation only.
- Clear UTC timestamps, tenant-local date display and pagination for lists.
- Audit state transitions, protect personally identifiable information, and use structured logs.
- Keyboard-accessible responsive Next.js UI; accessible Bangla/English labels where available.

## Out of scope

- Features exclusively assigned to another milestone/module are not to be duplicated here.
- Business rules and external provider choices not expressly supported by the brochure must be reviewed with product owner before implementation.

## Open business decisions

- Confirm institution-specific exceptions, approval levels, retention and legal requirements.
- Confirm exact user-facing terminology for school, university, medical and madrasa modes.
