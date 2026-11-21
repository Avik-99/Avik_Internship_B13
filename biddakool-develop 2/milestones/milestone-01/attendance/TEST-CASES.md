# Student & Staff Attendance — Test Cases

**Module:** `attendance`  |  **Requirement namespace:** `M1-ATTENDANCE`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M1-ATTENDANCE-TC-001 | Record present/absent/late/excused status for an offering/class session | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-ATTENDANCE-TC-002 | Bulk class roll-call with draft/save/finalize states | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-ATTENDANCE-TC-003 | Staff attendance entry independent of student session attendance | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-ATTENDANCE-TC-004 | Attendance corrections requiring permission and reason | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-ATTENDANCE-TC-005 | Daily, monthly, student, teacher, campus and course reports | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-ATTENDANCE-TC-006 | Guardians view linked students’ attendance and summary | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-ATTENDANCE-TC-007 | Attendance percentages computed using configurable session eligibility | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-ATTENDANCE-TC-008 | Expose attendance reporting data for future payroll and medical eligibility | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-ATTENDANCE-TC-009 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M1-ATTENDANCE-TC-010 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M1-ATTENDANCE-TC-011 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.

## Lost response and revocation (API-003)

Seed an authorized teacher and open session v3. Finalize with key K and simulate losing the HTTP response after database commit. Retry K with the original body. Assert 200 and equivalent data at v4, exactly one transition audit and one outbox event. Revoke the teacher's membership and repeat K using a still-authenticated principal. Assert 403, no replayed data and unchanged record counts. A teacher in another active tenant querying that foreign session receives 404. Run at the HTTP boundary with real PostgreSQL and independent request scopes.
