# Governance, Committees & Audit

**Module:** `institutional-governance`  |  **Requirement namespace:** `M3-INSTITUTIONAL_GOVERNANCE`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

**Purpose:** Advanced institutional approvals, audit evidence and committee-based governance over foundational permissions.

**Evidence:** Uploaded EximusEdu_Brochure_v3.pdf, **PDF page(s) 9, 46** (physical PDF numbering; not the brochure’s internal printed page numbering).

## Module boundary

Owns: GovernanceCommittee, CommitteeMeeting, ApprovalWorkflow, ApprovalDecision, PolicyRevision, AuditReview. Other modules use documented application interfaces, read-only projections or versioned events, not direct table or DbContext access.

## Features

- Committee roles, terms, agenda and meeting minutes
- Approval chains for major academic and financial decisions
- Policy approval and review versions
- Audit log search, filters and privileged access reviews
- Role delegation and temporary permissions
- Retention and export controls for institution records

## Expected developer output

- ASP.NET Core module slice with Domain/Application/Infrastructure/API organization under `src/Modules/InstitutionalGovernance`.
- Next.js feature UI and typed client under `apps/web/src/features/institutional-governance`.
- Test project at `tests/InstitutionalGovernance.Tests`.
- Own migration scripts, tracing, metrics and documentation changes.

## Dependencies

| Module ID | Module | First Milestone |
| --- | --- | --- |
| foundation-identity | Identity & Access Control | M1 |
| feedback-committees | Feedback & Basic Committee Administration | M2 |
| tenant-institution | Tenant & Institution Configuration | M1 |

## Documents to read

1. `docs/01-SYSTEM-ARCHITECTURE.md` and `docs/02-MULTITENANCY.md`
2. `REQUIREMENTS.md` and `BUSINESS-RULES.md`
3. `DOMAIN-MODEL.md`, `DATABASE-SCHEMA.md` and `API-CONTRACT.md`
4. `DEPENDENCIES.md`, `IMPLEMENTATION-TASKS.md`, `TEST-CASES.md` and `ACCEPTANCE-CRITERIA.md`

**Source caution:** The scope is a structured Biddakool implementation interpretation, not a claim that the brochure specifies database tables, endpoint names, or technical invariants.
