# Biometric, RFID & Device Attendance — Domain Model

**Module:** `device-attendance`  |  **Requirement namespace:** `M2-DEVICE_ATTENDANCE`  |  **Milestone:** 2  |  **Status:** Proposed baseline for implementation

## Bounded context

Integrate approved attendance devices and import fingerprints/face/card presence events into M1 attendance.

## Candidate aggregates / entities

| Concept | Suggested category | Baseline fields (not final DDL) |
| --- | --- | --- |
| AttendanceDevice | Candidate aggregate root | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| DevicePersonMapping | Candidate aggregate root | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| RawPunch | Candidate aggregate root | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| PunchReconciliation | Candidate entity/value object; finalize per transactional invariant | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| DeviceIntegrationLog | Candidate entity/value object; finalize per transactional invariant | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |

## Domain invariants

- Never store raw biometric templates in Biddakool unless explicitly required and separately reviewed.
- Importing the same vendor event twice must produce one attendance action.
- Device-to-tenant binding is validated before accepting events.

## Command/query separation

- Domain methods express allowed transitions; application commands orchestrate authorization, validation and transactions.
- Queries project directly to DTOs and do not mutate domain state.
- Aggregate references across modules use opaque identifiers and published contracts.
- Avoid generic repository abstractions that obscure domain invariants; use aggregate-specific repositories when useful.

## Versioned integration messages

- `AttendanceDevice.PunchImported.v1`

## Model review checklist

- Identify exact aggregate boundaries and consistency requirements in an ADR before merging initial migrations.
- Confirm the entity-to-tenant relationship and any institution/campus/program scoping.
- Clarify lifecycle, soft-delete rules and historical retention; no destructive edits to published/financial records.
