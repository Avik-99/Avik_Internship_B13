# In-App Messaging, SMS & Notifications — Test Cases

**Module:** `messaging-sms`  |  **Requirement namespace:** `M2-MESSAGING_SMS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M2-MESSAGING_SMS-TC-001 | Guardian/teacher in-app threads and message notifications | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-MESSAGING_SMS-TC-002 | SMS templates with placeholders and preview | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-MESSAGING_SMS-TC-003 | Unicode, masking/non-masking and provider-specific delivery settings | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-MESSAGING_SMS-TC-004 | Bulk recipient selection from student, teacher and manual phone groups | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-MESSAGING_SMS-TC-005 | Saved recipient groups and duplicate recipient suppression | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-MESSAGING_SMS-TC-006 | Automated attendance, due, payment, result and greeting alerts | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-MESSAGING_SMS-TC-007 | SMS delivery reports and failed-message retry policies | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-MESSAGING_SMS-TC-008 | Notification preferences and push/email provider abstraction | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-MESSAGING_SMS-TC-009 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M2-MESSAGING_SMS-TC-010 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M2-MESSAGING_SMS-TC-011 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
