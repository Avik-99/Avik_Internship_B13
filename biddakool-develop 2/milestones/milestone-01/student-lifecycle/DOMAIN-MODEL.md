# Students, Guardians & Enrollment — Domain Model

**Module:** `student-lifecycle`  |  **Requirement namespace:** `M1-STUDENT_LIFECYCLE`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

## Bounded context

Canonical student identity, guardians, school class assignments and university course enrollments throughout academic life.

## Candidate aggregates / entities

| Concept | Suggested category | Baseline fields (not final DDL) |
| --- | --- | --- |
| Student | Candidate aggregate root | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| GuardianLink | Candidate aggregate root | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| StudentAdmission | Candidate aggregate root | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| ProgramEnrollment | Candidate entity/value object; finalize per transactional invariant | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| ClassPlacement | Candidate entity/value object; finalize per transactional invariant | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| CourseEnrollment | Candidate entity/value object; finalize per transactional invariant | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| StudentStatusHistory | Candidate entity/value object; finalize per transactional invariant | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| StudentDocument | Candidate entity/value object; finalize per transactional invariant | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |

## Domain invariants

- Identity and enrollment history must be separate to preserve prior academic records.
- A guardian must be linked and authorized to view an individual student.
- Roll and registration numbers are uniqueness-scoped to the institution policy.
- Promotion does not mutate previous term placement or already-published results.

## Command/query separation

- Domain methods express allowed transitions; application commands orchestrate authorization, validation and transactions.
- Queries project directly to DTOs and do not mutate domain state.
- Aggregate references across modules use opaque identifiers and published contracts.
- Avoid generic repository abstractions that obscure domain invariants; use aggregate-specific repositories when useful.

## Versioned integration messages

- `Students.Created.v1`
- `Students.Enrolled.v1`
- `Students.StatusChanged.v1`

## Model review checklist

- Identify exact aggregate boundaries and consistency requirements in an ADR before merging initial migrations.
- Confirm the entity-to-tenant relationship and any institution/campus/program scoping.
- Clarify lifecycle, soft-delete rules and historical retention; no destructive edits to published/financial records.
