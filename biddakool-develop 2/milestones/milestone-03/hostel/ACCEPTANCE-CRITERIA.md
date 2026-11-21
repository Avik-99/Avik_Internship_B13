# Hostel, Housing & Residence Fees — Acceptance Criteria

**Module:** `hostel`  |  **Requirement namespace:** `M3-HOSTEL`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M3-HOSTEL-AC-001 | Authorized HostelManager can complete: hostel/building/floor/room/bed catalogue and capacity. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-HOSTEL-AC-002 | Authorized HostelManager can complete: student room or bed assignment and release with occupancy history. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-HOSTEL-AC-003 | Authorized HostelManager can complete: hostel and meal charge configuration. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-HOSTEL-AC-004 | Authorized HostelManager can complete: automatic monthly room/meal charge generation. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-HOSTEL-AC-005 | Authorized HostelManager can complete: hostel due collection through the fees module. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M3-HOSTEL-AC-006 | Authorized HostelManager can complete: occupancy, vacancy and hostel resident reports. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M3-HOSTEL-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: HostelManager, Accountant, Student.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
