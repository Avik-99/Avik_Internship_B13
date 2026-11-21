# Notices, Events & Calendar — Test Cases

**Module:** `notices-events`  |  **Requirement namespace:** `M1-NOTICES_EVENTS`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M1-NOTICES_EVENTS-TC-001 | Create public, institute-wide, program, class and staff notices | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-NOTICES_EVENTS-TC-002 | Attach documents and schedule publication/expiry | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-NOTICES_EVENTS-TC-003 | Read institution event calendar and academic holidays | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-NOTICES_EVENTS-TC-004 | Target student, guardian, teacher or staff audiences | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-NOTICES_EVENTS-TC-005 | Maintain read history if policy requires acknowledgement | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-NOTICES_EVENTS-TC-006 | Expose dashboard notice feed and important events | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-NOTICES_EVENTS-TC-007 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M1-NOTICES_EVENTS-TC-008 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M1-NOTICES_EVENTS-TC-009 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
