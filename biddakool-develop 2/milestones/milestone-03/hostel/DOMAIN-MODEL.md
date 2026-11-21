# Hostel, Housing & Residence Fees — Domain Model

**Module:** `hostel`  |  **Requirement namespace:** `M3-HOSTEL`  |  **Milestone:** 3  |  **Status:** Proposed baseline for implementation

## Bounded context

Campuses, hostel buildings, floors, rooms, bed allocations and housing dues.

## Candidate aggregates / entities

| Concept | Suggested category | Baseline fields (not final DDL) |
| --- | --- | --- |
| Hostel | Candidate aggregate root | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| HostelFloor | Candidate aggregate root | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| HostelRoom | Candidate aggregate root | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| Bed | Candidate entity/value object; finalize per transactional invariant | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| HousingAssignment | Candidate entity/value object; finalize per transactional invariant | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| HousingChargePolicy | Candidate entity/value object; finalize per transactional invariant | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |

## Domain invariants

- One bed can have only one active occupant for the same date interval.
- Check-in and transfer retain historical occupancy.
- Hostel never creates a parallel payment ledger; it creates Fee charges.

## Command/query separation

- Domain methods express allowed transitions; application commands orchestrate authorization, validation and transactions.
- Queries project directly to DTOs and do not mutate domain state.
- Aggregate references across modules use opaque identifiers and published contracts.
- Avoid generic repository abstractions that obscure domain invariants; use aggregate-specific repositories when useful.

## Versioned integration messages

- `Housing.Assigned.v1`
- `Housing.ChargeGenerated.v1`

## Model review checklist

- Identify exact aggregate boundaries and consistency requirements in an ADR before merging initial migrations.
- Confirm the entity-to-tenant relationship and any institution/campus/program scoping.
- Clarify lifecycle, soft-delete rules and historical retention; no destructive edits to published/financial records.
