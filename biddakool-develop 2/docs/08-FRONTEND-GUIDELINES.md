# Next.js + TypeScript Implementation Guide

> **Status (ADR-012, Nov 2026):** this Next.js App Router guide is the implemented stack for `apps/web`. The web app was migrated from the TanStack Start design prototype per `docs/24-FRONTEND-NEXTJS-MIGRATION.md` (Phase 4 cutover complete); the prototype remains in git history only.

## Routing

Use App Router for institution-scoped experiences, e.g. `/(institution)/students`, `/(institution)/academics`, `/(institution)/attendance`, `/(institution)/fees`; public routes for admissions/recruitment; platform admin separate from institution UI.

## Architecture

- Each business module owns `apps/web/src/features/<module-id>` with feature API hooks, views, validation schemas and tests.
- Shared UI components under `packages/ui`; shared app shell/locale infrastructure owned as a platform responsibility within the single `@biddakool-devs` team.
- Generate typed client models from approved OpenAPI; do not create arbitrary API DTO duplicates.
- Server components and caches must be aware of user and institution. Never cache private responses in a globally shared cache key.
- Permission-aware navigation, but backend always enforces authorization.

## UX requirements

- Bangla/English-ready labels, date/number formatting, accessible keyboard navigation and screen-reader semantics.
- Tables have pagination, filter, export controls and visible loading/empty/error states.
- Financial/destructive actions show confirmation and recoverable error messages.
- Result and document downloads must use short-lived authenticated URLs or streaming.
- Guardian child switcher re-validates relationship server-side.

## Testing

Typecheck + lint + unit component tests + Playwright role journeys. Validate mobile screen sizes and PDF print output separately.

## Connecting an existing screen

Use the existing route and component as the starting point. Inspect the mock provider and demo-session gate in apps/web/src/lib/panel before connecting real data. Keep demo state separate from production session handling. The server resolves the authenticated institution before it fetches private data. Scope client query keys to membership and clear private state on sign-out or an institution switch. Verify that switching from tenant A to B during an outstanding request cannot render A’s late response. Keep loading, empty, denied and retry states distinct. Run the existing Vitest and Playwright suites plus a two-tenant integration journey when the API is available.
