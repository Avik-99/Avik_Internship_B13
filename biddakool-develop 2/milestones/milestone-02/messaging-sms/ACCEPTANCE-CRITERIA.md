# In-App Messaging, SMS & Notifications — Acceptance Criteria

**Module:** `messaging-sms`  |  **Requirement namespace:** `M2-MESSAGING_SMS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Criterion | Given/When | Then |
| --- | --- | --- |
| M2-MESSAGING_SMS-AC-001 | Authorized InstitutionAdmin can complete: guardian/teacher in-app threads and message notifications. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-MESSAGING_SMS-AC-002 | Authorized InstitutionAdmin can complete: sms templates with placeholders and preview. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-MESSAGING_SMS-AC-003 | Authorized InstitutionAdmin can complete: unicode, masking/non-masking and provider-specific delivery settings. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-MESSAGING_SMS-AC-004 | Authorized InstitutionAdmin can complete: bulk recipient selection from student, teacher and manual phone groups. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-MESSAGING_SMS-AC-005 | Authorized InstitutionAdmin can complete: saved recipient groups and duplicate recipient suppression. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-MESSAGING_SMS-AC-006 | Authorized InstitutionAdmin can complete: automated attendance, due, payment, result and greeting alerts. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-MESSAGING_SMS-AC-007 | Authorized InstitutionAdmin can complete: sms delivery reports and failed-message retry policies. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |
| M2-MESSAGING_SMS-AC-008 | Authorized InstitutionAdmin can complete: notification preferences and push/email provider abstraction. | Unauthorized or cross-tenant caller cannot complete or view it; effect is persisted and tested. |

## Mandatory module release gates

- [ ] Each requirement `M2-MESSAGING_SMS-FR-xxx` maps to an implemented feature and reviewed acceptance test.
- [ ] Permission matrix validated for roles: InstitutionAdmin, Teacher, Guardian, Student, Staff.
- [ ] Tenant isolation verified for standard and alternate identifiers, file downloads and background jobs.
- [ ] OpenAPI schema versioned, generated TypeScript client type-checks and backend contract tests pass.
- [ ] Database migration and rollout have been reviewed, including rollback/forward-fix strategy.
- [ ] Structured tracing, audit, error handling, localization and accessibility checks pass.
- [ ] Dependencies and published events are tested; no direct cross-module DbContext references.
- [ ] Product owner signs off any institution-specific business rules not explicit in the PDF.

## Evidence

Attach CI run, PRs, E2E recording/screenshots where appropriate, migration check, demo notes and sign-off in milestone release notes.
