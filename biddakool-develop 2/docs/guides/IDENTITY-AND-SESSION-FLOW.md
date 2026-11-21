# From sign-in to an authorized institution request

Worked production design for the existing Next.js app and proposed Identity module. The checked-in demo uses an in-memory UI gate. Its success state supplies no evidence of identity to a production API. The [identity ADR](../adr/ADR-013-IDENTITY-AND-TENANT-MEMBERSHIP.md) proposes a global user with scoped memberships. Credential provider, BFF session mechanism, step-up policies and token lifetimes await approval. ASP.NET Core Identity is one candidate for credential storage and account recovery.

## One user in two institutions

Samira teaches at institution A and has a guardian membership at institution B. The following browser flow illustrates the BFF option. Review it alongside the [Identity API contract](../../milestones/milestone-01/foundation-identity/API-CONTRACT.md).

| Action | Next.js and browser | API and data ownership |
| --- | --- | --- |
| Sign in | Submit through the server. Under the BFF option, issue an opaque Secure, HttpOnly session cookie and apply CSRF protection to state-changing requests. | Sign-in verifies the account through the selected provider. A server-side session binds the verified global user to its credential lifecycle. |
| Select A | List active memberships from GET /api/v1/me/memberships. Send the chosen institution as a selection request. | Resolve the institution and active membership for the verified user. Set the authorized scope and derive current permissions. A submitted institution ID alone grants no access. |
| Finalize attendance | Call the typed client with the selected scope and operation key. | Check current membership, finalize permission and teaching assignment for the target session. Apply tenant and institution predicates to persistence. |
| Switch to B | Finish the server-side switch, clear A's private view state, and discard late responses issued under A. Reload the authorized views for B. | Revalidate B membership. Samira can read a linked child's permitted summary. A teaching role held at A grants no finalize permission in B. |
| Revoke B | Show an access-denied state and refresh the membership selector. | Deny subsequent B requests, including retries. Invalidate membership-specific authorization caches. Recheck A independently. |
| Refresh or sign out | Refresh through the server under the selected strategy. On sign-out, expire the browser cookie and clear cached private views. | Validate session status before renewal. Revoke session/refresh material on sign-out. Subsequent use of the revoked session must fail. |

Keep private server-rendered results out of shared caches. On membership switch, bind each pending response to the membership and selection generation that initiated it. A late success from A must not populate B's dashboard.

## Implementation and acceptance

Identity owns account lifecycle and membership assignments. The attendance module owns the session and its authorized teacher relationship. If ASP.NET Core Identity is selected, keep its stores and credential managers in the identity infrastructure layer. Publish membership-scoped application operations to consuming modules. Scope tenant roles through membership assignments rather than treating a global account role as proof of local permission.

Use synthetic users across two tenants in integration tests. Exercise a valid switch, an unassigned institution, a revoked membership retry, a guardian requesting an unrelated child, and a stale response after switching. In a browser test verify sign-out followed by back navigation and a direct dashboard URL. The server must revalidate access on a fresh private request. Record the chosen switch contract, refresh behavior and revocation guarantees before generating the production client.
