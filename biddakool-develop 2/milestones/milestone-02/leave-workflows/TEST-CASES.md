# Leave Request & Approvals — Test Cases

**Module:** `leave-workflows`  |  **Requirement namespace:** `M2-LEAVE_WORKFLOWS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

| Test ID | Scenario | Expected result |
| --- | --- | --- |
| M2-LEAVE_WORKFLOWS-TC-001 | Student/guardian and staff leave application | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-LEAVE_WORKFLOWS-TC-002 | Leave category, dates, attachments and reason | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-LEAVE_WORKFLOWS-TC-003 | Flexible approval chain with recommend/forward/approve/reject | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-LEAVE_WORKFLOWS-TC-004 | Leave balance and holiday overlap checks where appropriate | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-LEAVE_WORKFLOWS-TC-005 | Leave history and reports by student/teacher | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-LEAVE_WORKFLOWS-TC-006 | Approved leave integrated with attendance without deleting prior marks | Valid authorized workflow succeeds; invalid/unauthorized input rejected; records tenant-scoped |
| M2-LEAVE_WORKFLOWS-TC-007 | Cross-tenant access | Create same IDs in two tenants; forbid cross-tenant read/write/export without data leakage |
| M2-LEAVE_WORKFLOWS-TC-008 | Concurrency & idempotency | Concurrent and retry requests do not duplicate protected state transitions |
| M2-LEAVE_WORKFLOWS-TC-009 | Historical data | Old term/approval/published records are not silently mutated by config changes |

## Required testing layers

- Domain unit tests for invariants and edge cases.
- ASP.NET Core API integration tests with PostgreSQL via Testcontainers (real database constraints).
- Contract tests on OpenAPI responses/errors and event envelope schema.
- Playwright E2E for the principal institution, teacher and student/guardian journeys where relevant.
- Security tests: denied permission, unauthorized export, tenant mismatch and ID enumeration.
- Accessibility checks on interactive Next.js screens; browser and responsive checks.
