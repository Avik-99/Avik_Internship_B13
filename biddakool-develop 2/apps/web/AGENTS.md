<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Biddakool Rules — Next.js Web (`apps/web`)

Next.js (App Router) web frontend per ADR-012 and `docs/24-FRONTEND-NEXTJS-MIGRATION.md` (the migration is complete). Read `/AGENTS.md`, `docs/08-FRONTEND-GUIDELINES.md` and the migration plan before changing code.

- Marketing landing is a statically prerendered server page (`src/app/page.tsx` owns metadata + JSON-LD); the interactive landing lives in `src/components/marketing/landing.tsx` (client component).
- SEO invariants: every route exports `metadata` with a canonical URL; content routes own their head; `METADATA_BASE_URL` in `src/app/layout.tsx` is a placeholder — replace before launch; `/dashboard` stays disallowed in `robots.ts` and `noindex`. A layout's `title.template` does not apply to its own-segment page — use `title.absolute` there (see `page.tsx`, `panelMetadata()`).
- `/login` renders the client `LoginForm`; `/dashboard/**` renders the client `PanelShell` (sidebar/topbar/drawer). The demo-session flag is browser-memory module state read via `useSyncExternalStore` — a UI gate, never authentication. The shell always renders `{children}` (the gate hides the shell visually via `.is-gated` + `.panel-gate` and redirects to `/login`) so instant-navigation validation sees the full segment tree — never conditionally omit `{children}` (docs/messages/instant-unrendered-segment).
- Keep panel mock data and business helpers (`src/lib/panel/`) separate from views (`src/components/panel/`); the `PanelProvider` (mounted in the root layout, with the `Toaster`) carries language + demo edits across routes — do not remount it per page.
- Centralize panel English/Bangla strings in `src/lib/panel/copy.ts`; per-page panel metadata comes from `panelMetadata()` in `src/lib/panel/metadata.ts` (absolute titles — a layout `title.template` does not apply to its own-segment page).
- Panel pages live in `src/components/panel/pages.tsx` (client); each `src/app/dashboard/**/page.tsx` is a server page owning its metadata via `panelMetadata()` and rendering the client page. `StudentsRoute` defers its `useSearchParams` read to a post-mount child (server snapshot `false`) — the page prerenders fully and no page-level Suspense boundary is needed; do not read `useSearchParams()` during prerender or the segment drops out of the static shell.
- Keep marketing copy in `src/lib/marketing-content.ts` (browser-safe content module) so translations can be added without changing layout.
- Shared shadcn components live in `src/components/ui/` with `"use client"`; `calendar.tsx` and `chart.tsx` are intentionally absent (`home.tsx` uses `recharts` directly — reintroduce wrappers with current APIs only when a page needs them). `ResponsiveContainer` renders nothing during prerender, so every chart in `home.tsx` sits inside a `<Suspense>` boundary (`.chart-fallback`) to keep the dashboard's static shell valid.
- Testing: unit suites (`src/**/*.test.*`) run on Vitest/jsdom (`bun run test`); role-journey smoke tests live in `e2e/` on Playwright (`bun run test:e2e`, chromium only, run against the production build via the Playwright `webServer`). Keep both green for every change.
- Demo-only: no real authentication, no persisted institution data; mock content stays in separate modules to be replaced by generated API clients later. Do not wire real APIs or tenancy into this app.
- Fonts are self-hosted via `next/font` — never add a Google Fonts `<link>`.
- Design system: `docs/25-DESIGN-SYSTEM.md` documents the tokens, components and patterns in use; follow it for new UI and update it in the same PR when global styles or component APIs change.
