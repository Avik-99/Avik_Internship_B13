# Biometric, RFID & Device Attendance — Acceptance Criteria

**Module:** `device-attendance`  |  **Requirement namespace:** `M2-DEVICE_ATTENDANCE`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M2-DEVICE_ATTENDANCE-AC-001 | Authorized InstitutionAdmin can complete: device registry per institution/campus. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-DEVICE_ATTENDANCE-AC-002 | Authorized InstitutionAdmin can complete: external vendor bridge for rfid, card, fingerprint or face attendance data. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-DEVICE_ATTENDANCE-AC-003 | Authorized InstitutionAdmin can complete: per-device staff/student identity mapping. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-DEVICE_ATTENDANCE-AC-004 | Authorized InstitutionAdmin can complete: idempotent attendance event ingestion with clock synchronization. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-DEVICE_ATTENDANCE-AC-005 | Authorized InstitutionAdmin can complete: review and reconcile missing/duplicate/late records. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-DEVICE_ATTENDANCE-AC-006 | Authorized InstitutionAdmin can complete: automated attendance notifications and status alerts. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-DEVICE_ATTENDANCE-AC-007 | Authorized InstitutionAdmin can complete: expose staff attendance events for payroll rules. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M2-DEVICE_ATTENDANCE-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: InstitutionAdmin, HRManager, AcademicOfficer.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
