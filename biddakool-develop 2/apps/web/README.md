# Biddakool Web — Next.js (`apps/web`)

Next.js (App Router) web frontend for Biddakool, per **ADR-012** (`docs/24-FRONTEND-NEXTJS-MIGRATION.md`). It carries the SEO-first marketing site (`/`) and the institute panel demo (`/login`, `/dashboard/*`), ported from the original TanStack Start design prototype in the Phase 4 cutover (the prototype lives on in git history).

**Demo only:** no real authentication, no persisted institution data. Mock content stays in dedicated modules to be replaced by generated API clients later.

## Stack

Next.js 16 (App Router, Turbopack, cache components) · React 19 · TypeScript · Tailwind CSS 4 · shadcn-style Radix components · Bun · Vitest (unit) · Playwright (E2E smoke).

## Structure

- `src/app/` — routes: `/` marketing landing (static, revalidated), `/login` (demo sign-in), `/dashboard/**` (panel pages), plus file conventions: `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `not-found.tsx`, `icon.png`.
- `src/components/marketing/landing.tsx` — the landing page (client component; interactive islands: demo dialog, portal tabs, mobile menu).
- `src/components/panel/` — panel shell, dashboard home, login form, provider (demo session + language + mock-data state), pages, forms, data-table.
- `src/lib/panel/` — panel mock data, demo logic, EN/BN copy, demo-session (memory-only UI gate, not auth), `panelMetadata()` helper.
- `src/components/ui/` — shared shadcn-style components (`"use client"`).
- `src/lib/marketing-content.ts` — landing copy + demo-form schema (single content module).
- `src/app/layout.tsx` — root layout, `next/font` self-hosted DM Sans + Manrope, default metadata, wraps the app in the panel `PanelProvider` + `Toaster` so demo state survives navigation.
- `e2e/` — Playwright role-journey smoke tests (visitor + administrator); `src/**/*.test.*` — Vitest unit suites (`logic`, `marketing-content`, `provider`).

## SEO package

- Per-route `metadata` with canonical URLs (`metadataBase` — **placeholder domain, replace before launch**, see `METADATA_BASE_URL`).
- JSON-LD: `Organization`, `WebSite`, `SoftwareApplication`, `FAQPage` (built from the same content module the page renders).
- `app/sitemap.ts`, `app/robots.ts` (crawlers blocked from `/dashboard`), generated `opengraph-image` (1200×630) and twitter card tags.
- Self-hosted fonts via `next/font` (no Google Fonts request), `next/image` for the brand logo, single `<h1>` per page, branded `not-found`.

## Commands

```sh
bun install
bun run dev        # dev server
bun run build      # production build
bun run start      # serve production build
bun run test       # vitest unit suites
bun run test:e2e   # playwright role-journey smoke (builds + serves the app)
bun run lint       # eslint
```

First checkout (or after a Playwright upgrade): `bunx playwright install chromium`.

## Notes

- Design standard: `docs/25-DESIGN-SYSTEM.md` — analysed from this app; use it for new pages/components and keep it in sync with `globals.css` changes.
- `ui/calendar.tsx` (react-day-picker) and `ui/chart.tsx` (recharts wrapper) were not ported — the dashboard home uses `recharts` directly; reintroduce these wrappers with current APIs if a page needs them.
- The panel is gated client-side (`useSyncExternalStore` over the memory-only demo-session flag): the shell always renders into the prerender (instant-navigation validation) but is visually replaced by a skeleton until the client gate opens; `/dashboard` is `noindex` and disallowed in `robots.ts`.
- TanStack Query was not carried over — the demo issues no queries. Revisit when data fetching lands.
