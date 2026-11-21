# Identity & Access Control — Domain Model

**Module:** `foundation-identity`  |  **Requirement namespace:** `M1-FOUNDATION_IDENTITY`  |  **Milestone:** 1  |  **Status:** Proposed baseline for implementation

## Bounded context

Platform identity, institution memberships and policy-based access control; a foundational service, not a generic school-only role table.

## Candidate aggregates / entities

| Concept | Suggested category | Baseline fields (not final DDL) |
| --- | --- | --- |
| User | Global principal under proposed ADR-013 | Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| TenantMembership | Candidate aggregate root | UserId, TenantId, InstitutionId, Status, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| Role | Candidate aggregate root | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| Permission | Candidate entity/value object; finalize per transactional invariant | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| RolePermission | Candidate entity/value object; finalize per transactional invariant | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| AuthSession | Candidate entity/value object; finalize per transactional invariant | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |
| SecurityAudit | Candidate entity/value object; finalize per transactional invariant | TenantId, Id, CreatedAtUtc, UpdatedAtUtc, concurrency marker + domain attributes |

## Domain invariants

- Identity IDs are globally unique, but permissions are resolved within the selected tenant membership.
- Deny access by default; never trust tenant identifiers in request bodies.
- No person can gain tenant membership via merely knowing an email address.
- Password resets invalidate prior sessions according to the security policy.

## Command/query separation

- Domain methods express allowed transitions; application commands orchestrate authorization, validation and transactions.
- Queries project directly to DTOs and do not mutate domain state.
- Aggregate references across modules use opaque identifiers and published contracts.
- Avoid generic repository abstractions that obscure domain invariants; use aggregate-specific repositories when useful.

## Versioned integration messages

- `Identity.UserInvited.v1`
- `Identity.MembershipActivated.v1`

## Model review checklist

- Identify exact aggregate boundaries and consistency requirements in an ADR before merging initial migrations.
- Confirm the entity-to-tenant relationship and any institution/campus/program scoping.
- Clarify lifecycle, soft-delete rules and historical retention; no destructive edits to published/financial records.
