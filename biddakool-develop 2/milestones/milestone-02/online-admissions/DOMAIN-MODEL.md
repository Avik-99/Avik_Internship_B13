# Online Application & Admission — Domain Model

**Module:** `online-admissions`  |  **Requirement namespace:** `M2-ONLINE_ADMISSIONS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

## Bounded context

Public applicant intake and institution-managed admission selection; accepted applications become M1 student records.

## Candidate aggregates / entities

| Concept | Suggested category | Baseline fields (not final DDL) |
| --- | --- | --- |
| AdmissionCampaign | Candidate aggregate root | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| Applicant | Candidate aggregate root | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| AdmissionApplication | Candidate aggregate root | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| ApplicationDocument | Candidate entity/value object; finalize per transactional invariant | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| AdmissionDecision | Candidate entity/value object; finalize per transactional invariant | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| AdmissionAdmitCard | Candidate entity/value object; finalize per transactional invariant | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |

## Domain invariants

- Applicants are distinct from student profiles until an enrollment is approved.
- Application payment verification must precede paid-exam admit card release.
- Application submissions are idempotent and validated against campaign deadlines.

## Command/query separation

- Domain methods express allowed transitions; application commands orchestrate authorization, validation and transactions.
- Queries project directly to DTOs and do not mutate domain state.
- Aggregate references across modules use opaque identifiers and published contracts.
- Avoid generic repository abstractions that obscure domain invariants; use aggregate-specific repositories when useful.

## Versioned integration messages

- `Admissions.ApplicationSubmitted.v1`
- `Admissions.ApplicationAccepted.v1`

## Model review checklist

- Identify exact aggregate boundaries and consistency requirements in an ADR before merging initial migrations.
- Confirm the entity-to-tenant relationship and any institution/campus/program scoping.
- Clarify lifecycle, soft-delete rules and historical retention; no destructive edits to published/financial records.
