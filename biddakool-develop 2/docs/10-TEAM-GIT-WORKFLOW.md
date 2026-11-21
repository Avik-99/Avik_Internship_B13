# Git Branching, Reviews & Ownership

## Git model

**GitFlow** (ADR-011; decision 18 November 2026). `develop` is the default branch and the default PR target.

| Branch | Purpose | Branches from | Merges into | Notes |
| --- | --- | --- | --- | --- |
| `main` | Production-ready history | — | — | Protected; receives only `release/*` and `hotfix/*` merges; every merge is tagged `vX.Y.Z` |
| `develop` | Integration of completed work | `main` | `release/*` | Protected; all everyday PRs merge here after review |
| `feat/*`, `fix/*`, `docs/*`, `chore/*` | One capability per branch, short-lived | `develop` | `develop` via PR | e.g. `feat/M1-attendance-session-entry`, `fix/M2-payment-idempotency`, `docs/M3-medical-eligibility` |
| `release/vX.Y` | Stabilization, version bump, release checklist | `develop` | `main` (tagged) **and** back-merged to `develop` | Fixes only; no new features |
| `hotfix/vX.Y.Z` | Urgent production fix | `main` (at its tag) | `main` (tagged) **and** back-merged to `develop` | Same review gates; smallest possible change |

Rules: never push directly to `main` or `develop` — PRs only; keep capability branches short-lived and rebased on `develop`; no long-running milestone branches (milestones are tracked by issues and labels, not branches); signed/matched CI status required before merge; one migration owner per module; module-specific CODEOWNERS entries once developers are assigned (currently the single team `@biddakool-devs` owns everything).

Branch-to-environment: `develop` feeds CI and shared integration/staging; `release/*` hardens on staging against the release gates in `docs/11-DEVOPS-DEPLOYMENT.md`; tags on `main` (`vX.Y.Z`) mark production deploys; `hotfix/*` branches fix production from `main`.

## Ownership levels

- Platform/architecture owner: host, identity/tenant building blocks, CI, observability.
- Module owner: domain, application, DbContext/migrations, OpenAPI, events and tests.
- Web platform owner: Next.js shell, auth session, shared UI and localization.
- Feature UI owner: module's frontend folder and E2E journeys.
- QA/integration owner: contract/E2E suites and release checklist.

## Coordination

During daily sync, announce cross-module changes with event/route affected, intended compatibility and rollout order. Use ADR when a module boundary must move. Revert breaking changes, not consumers silently.

## PR labels

`module:<slug>`, `milestone:M1|M2|M3`, `kind:feature|fix|contract|migration|docs`, `breaking-change`, `security-review`.
