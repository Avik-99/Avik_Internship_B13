# Leave Request & Approvals

**Module:** `leave-workflows`  |  **Requirement namespace:** `M2-LEAVE_WORKFLOWS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

**Purpose:** Student and employee time-off requests, flexible multi-step approvals and downstream attendance status updates.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 19, 53, 55** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: LeaveRequest, LeaveCategory, LeaveApprovalStep, LeaveBalance, LeavePolicy. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Student/guardian and staff leave application
- Leave category, dates, attachments and reason
- Flexible approval chain with recommend/forward/approve/reject
- Leave balance and holiday overlap checks where appropriate
- Leave history and reports by student/teacher
- Approved leave integrated with attendance without deleting prior marks

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/LeaveWorkflows`.
- Next.js feature UI and typed client under `apps/web/src/features/leave-workflows`.
- Test project at `tests/LeaveWorkflows.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| student-lifecycle | Students, Guardians & Enrollment | M1 |
| faculty-staff | Faculty, Teacher & Staff Directory | M1 |
| attendance | Student & Staff Attendance | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
