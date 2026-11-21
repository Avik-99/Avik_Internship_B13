# Contributing & Parallel Development

## Working agreement (GitFlow)

- `develop` is the default branch and the base for everyday work: branch per capability — `feat/M1-attendance-session-entry`, `fix/M2-payment-idempotency`, `docs/M3-medical-eligibility` — and merge back into `develop` via PR. Never push directly to protected `main` or `develop`.
- Cut `release/vX.Y` from `develop` when a milestone is stable; merge it into `main` with a `vX.Y.Z` tag, then back-merge into `develop`.
- Urgent production fixes: branch `hotfix/vX.Y.Z` from the affected `main` tag; merge into `main` (tagged) and back-merge into `develop`.
- Squash/rebase small PRs. Avoid long-running milestone branches; milestones are tracked by issues and labels.
- Require 1 module reviewer plus 1 platform/integration reviewer for database, public API, security or events.
- Changes crossing modules require explicit ticket, contract compatibility check and review by each affected owner.
- Avoid single PRs that introduce an entire milestone. Favor one end-to-end vertical slice per PR.

## Before requesting review

- [ ] Requirement/acceptance IDs included in PR.
- [ ] EF Core migrations owned by correct module; forward/rollback documented.
- [ ] OpenAPI changes reviewed and generated TS client rebuilt.
- [ ] Unit + integration + relevant E2E tests added and run.
- [ ] Tenant isolation, RBAC, N+1 query, accessibility and localization verified.
- [ ] Docs and events changelog updated; no credentials or test PII committed.

## Conflict prevention

1. Reserve modifications to shared building blocks to platform-maintainer-owned PRs.
2. Place feature code under module path and avoid broad index exports.
3. Every module controls its schema migration; coordinate ordering on deployment.
4. Keep a versioned events package; announce contract changes before merging.
5. Mock module interfaces during development; integrate in staging with contract tests.
