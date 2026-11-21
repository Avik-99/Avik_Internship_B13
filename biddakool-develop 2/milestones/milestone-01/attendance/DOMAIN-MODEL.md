# Student & Staff Attendance — Domain Model

**Module:** `attendance`  |  **Requirement namespace:** `M1-ATTENDANCE`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

## Bounded context

Attendance for school classes and term-specific course/medical teaching sessions with teacher and staff tracking.

## Candidate aggregates / entities

| Concept | Suggested category | Baseline fields (not final DDL) |
| --- | --- | --- |
| AttendanceSession | Candidate aggregate root | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| StudentAttendanceRecord | Candidate aggregate root | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| StaffAttendanceRecord | Candidate aggregate root | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| AttendanceAdjustment | Candidate entity/value object; finalize per transactional invariant | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| AttendancePolicy | Candidate entity/value object; finalize per transactional invariant | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |

## Domain invariants

- Exactly one current attendance record per student per attendance session.
- Only assigned staff or authorized officers may finalize session attendance.
- Corrected records retain immutable adjustment history.
- Threshold alerts are configured in M2/M3; do not hardcode 75% as a global rule.

## Command/query separation

- Domain methods express allowed transitions; application commands orchestrate authorization, validation and transactions.
- Queries project directly to DTOs and do not mutate domain state.
- Aggregate references across modules use opaque identifiers and published contracts.
- Avoid generic repository abstractions that obscure domain invariants; use aggregate-specific repositories when useful.

## Versioned integration messages

- `Attendance.SessionFinalized.v1`
- `Attendance.RecordCorrected.v1`

## Model review checklist

- Identify exact aggregate boundaries and consistency requirements in an ADR before merging initial migrations.
- Confirm the entity-to-tenant relationship and any institution/campus/program scoping.
- Clarify lifecycle, soft-delete rules and historical retention; no destructive edits to published/financial records.
