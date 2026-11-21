# Exam Admit Cards & Seat Plans — Domain Model

**Module:** `exam-operations`  |  **Requirement namespace:** `M2-EXAM_OPERATIONS`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

## Bounded context

Examination operations including timed examination schedule, customizable admit card and seat allocation.

## Candidate aggregates / entities

| Concept | Suggested category | Baseline fields (not final DDL) |
| --- | --- | --- |
| ExamVenue | Candidate aggregate root | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| ExamSeat | Candidate aggregate root | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| ExamCandidate | Candidate aggregate root | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| ExamAdmitCard | Candidate entity/value object; finalize per transactional invariant | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| InvigilationAssignment | Candidate entity/value object; finalize per transactional invariant | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |

## Domain invariants

- Seat assignment is unique per room/session; candidate cannot have overlapping sittings.
- Reissues remain traceable without altering the canonical examination entry.

## Command/query separation

- Domain methods express allowed transitions; application commands orchestrate authorization, validation and transactions.
- Queries project directly to DTOs and do not mutate domain state.
- Aggregate references across modules use opaque identifiers and published contracts.
- Avoid generic repository abstractions that obscure domain invariants; use aggregate-specific repositories when useful.

## Versioned integration messages

- `ExamOperations.SeatsAllocated.v1`

## Model review checklist

- Identify exact aggregate boundaries and consistency requirements in an ADR before merging initial migrations.
- Confirm the entity-to-tenant relationship and any institution/campus/program scoping.
- Clarify lifecycle, soft-delete rules and historical retention; no destructive edits to published/financial records.
