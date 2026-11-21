# Student, Guardian, Teacher & Admin Portals — Test Cases

**Module:** `self-service-portals`  |  **Requirement namespace:** `M1-SELF_SERVICE_PORTALS`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M1-SELF_SERVICE_PORTALS-TC-001 | Admin home with student/staff, fees, dues, attendance and exam summaries | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-SELF_SERVICE_PORTALS-TC-002 | Teacher portal for assigned students, attendance, marks, schedules and notices | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-SELF_SERVICE_PORTALS-TC-003 | Student portal for profile, current courses, attendance, results, fees and notices | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-SELF_SERVICE_PORTALS-TC-004 | Guardian portal with linked-child switcher and access to authorized child records | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-SELF_SERVICE_PORTALS-TC-005 | Accountant workspace for collections, receipts and dues | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-SELF_SERVICE_PORTALS-TC-006 | Role-aware navigation and responsive Bangla/English UX | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-SELF_SERVICE_PORTALS-TC-007 | Download protected receipts, profile pages and result reports | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M1-SELF_SERVICE_PORTALS-TC-008 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M1-SELF_SERVICE_PORTALS-TC-009 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M1-SELF_SERVICE_PORTALS-TC-010 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
