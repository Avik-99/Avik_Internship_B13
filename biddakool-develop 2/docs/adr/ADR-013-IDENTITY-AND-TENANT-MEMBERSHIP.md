# ADR-013 — User identity and institution membership

Proposed on 19 November 2026. Review owners are the Identity and Tenant Institution module owners. Product-owner approval is pending.

## Context and alternatives

The platform supports one person working across institutions. The previous candidate schema placed tenant_id on both User and TenantMembership. An account per tenant simplifies local account administration but duplicates credentials and recovery state. A global principal with scoped memberships supports one sign-in and requires precise membership selection, revocation and auditing.

## Proposed decision

Identify one global user by opaque ID. Link the user to a tenant and institution through an active membership. Scope role assignments to that membership. A teacher in A can be a guardian in B. Switching to B requires a fresh membership check and uses B's permissions and guardian relationships. An authenticated user can list their own active memberships before selecting an institution. Lookup of a matching email alone never grants access.

Identity owns users, memberships and assignments. Tenant Institution owns organization records. Validate organization identifiers through its published contract. Define a first-tenant provisioning flow using a global platform principal, then create the tenant/institution and activate its first membership through an idempotent invitation flow. Record partial provisioning so retries can resume.

## Consequences and verification

A revoked membership denies subsequent tenant access, including retries and background exports on behalf of the user. Other active memberships remain usable. Test membership switching, revocation, invitation retry and denial of an unrelated student record. Keep role cache entries scoped to membership and invalidate them on permission changes. Verify the selected session mechanism achieves the agreed revocation behavior before integration.

## Rollout and approval

The archive contains no backend migrations. Review this proposal alongside the candidate schema before generating the initial migration. If adopting the design in an environment with existing accounts, inventory duplicate identities, review linking evidence, preserve original audit IDs and rehearse a reversible mapping. Never merge accounts solely by email. Production credential provider, BFF session mechanics, MFA and session lifetime require separate decisions. Record approval or supersession in the [register](../12-DECISIONS-REGISTER.md).
