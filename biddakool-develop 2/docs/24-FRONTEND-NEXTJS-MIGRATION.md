# Frontend Migration Plan — TanStack Start → Next.js App Router

**Status:** Completed — all four phases done (last: Phase 4 cutover, 18 Nov 2026; user decision tracked in issue #8)
**Scope:** `apps/web` only. No backend, API or database impact.
**Working rule:** every phase ends with `bun run build` + `bun run test` green and a demo-able app. One phase per working session, one PR per phase.

## 1. Context

The design prototype generated for issue #8 (PR #9) is a TanStack Start app (React 19, Vite, TanStack Router, Tailwind CSS 4, shadcn-style Radix components, TanStack Query). It is fully server-side rendered, so it is not SEO-broken today. However:

- **ADR-004 already approves Next.js + TypeScript** for the web frontend; the prototype diverges from the approved stack.
- `docs/08-FRONTEND-GUIDELINES.md`, `docs/20-PORTAL-SCREEN-INVENTORY.md` and all module UI plans assume Next.js App Router (`/(institution)/...` route groups, feature folders under `apps/web/src/features/<module-id>`).
- The marketing site must be maximally SEO-friendly; Next.js App Router gives us the mature metadata/sitemap/OG ecosystem and matches the approved architecture.

### Decision record (ADR-012)

**Date:** 18 Nov 2026  **Status:** Accepted  **Owners:** @biddakool-devs (proposed by user)

| Option | Advantages | Disadvantages | Migration impact |
| --- | --- | --- | --- |
| Keep TanStack Start | Zero migration cost; SSR + static prerender already work | Diverges from ADR-004; module docs/tooling assume Next.js; smaller ecosystem for SEO needs | None |
| **Convert to Next.js App Router (chosen)** | Conforms to ADR-004; mature SEO/MDX/image ecosystem; matches route-group plans; future API-client integration assumes it | 3–4 sessions of migration work; risk of subtle regressions | Phased plan below |

**Consequences:** `apps/web` is rebuilt on Next.js; design tokens, styles, UI components and copy port over; TanStack-specific routing/error files are replaced by Next conventions. Rollback = revert the phase PRs; the TanStack app stays intact until Phase 4 cutover.

## 2. Migration strategy — parallel app, then cutover

Build the Next.js app at **`apps/web-next`** while `apps/web` (TanStack) keeps working. Each phase is independently verifiable and the demo never breaks. In Phase 4, `apps/web-next` is renamed to `apps/web` and the TanStack app is deleted.

This avoids a long-lived broken state and gives clean review boundaries per phase.

## 3. What ports over almost unchanged

- `src/styles.css` (Tailwind 4 + design tokens) — same file, via `@tailwindcss/postcss`.
- `src/components/ui/*` (~45 shadcn-style Radix components) — copy as-is; add `"use client"` only where a component uses hooks/browser APIs.
- `src/lib/**` — `marketing-content.ts`, `panel/*` (mock-data, logic, copy, demo-session), `utils.ts`: copy as-is.
- `public/*` — favicon, robots (replaced by `robots.ts` in Phase 1), logo assets.
- TanStack Query — works identically in Next.js.

## 4. What must be rewritten

| TanStack construct | Next.js replacement |
| --- | --- |
| `src/routes/__root.tsx` (shellComponent, `HeadContent`, root meta) | `app/layout.tsx` + `metadata` export / `generateMetadata` |
| `createFileRoute` in every route file | `app/**/page.tsx` + `app/**/layout.tsx` file conventions |
| `<Link to="...">` | `<Link href="...">` |
| `useNavigate`, `useRouterState`, `useRouter` | `next/navigation`: `useRouter().push`, `usePathname` |
| `<Outlet />` (panel layout) | nested layout in `app/dashboard/layout.tsx` |
| `src/start.ts`, `src/server.ts`, `lib/error-capture.ts`, `lib/error-page.ts` | Next conventions: `error.tsx`, `not-found.tsx`, `global-error.tsx` (h3/SSR-wrapper logic deleted) |
| `src/test/app-routing.test.tsx` | routing smoke test via Playwright (Phase 4) |

## 5. Phases

### Phase 1 — Scaffold + SEO-first marketing site (the SEO goal ships here)

**Scope:**
- `create-next-app` (TypeScript, App Router, Tailwind 4) at `apps/web-next`; port `styles.css`, `components/ui`, `Brand`, `product-preview`, `demo-dialog`, `lib/marketing-content.ts`.
- Marketing landing at `app/page.tsx` ported from `src/routes/index.tsx` (server component; interactive islands — demo form dialog, language toggle — as client components).
- **SEO package:** `generateMetadata` with title template + canonical URLs; `app/sitemap.ts`; `app/robots.ts`; JSON-LD (`Organization`, `SoftwareApplication`, `FAQPage` for the FAQ section); `next/font` self-hosted fonts replacing the Google Fonts `<link>`; `next/image` for logo/preview assets; OG/Twitter image asset; semantic-heading audit of the landing.
- Root 404 page (`not-found.tsx`).

**Exit criteria:** landing renders at `/` with full metadata/sitemap/robots/JSON-LD; Lighthouse SEO ≥ 95 on `/`; build + tests green.

### Phase 2 — Demo sign-in + panel shell + dashboard home

**Scope:** `/login` (client component, demo credentials, forgot-password UI); `app/dashboard/layout.tsx` with sidebar shell, topbar (search, notifications, BN/EN toggle, user menu), mobile drawer; dashboard home (KPI cards, charts, lists, quick actions) from `components/panel/home.tsx`; panel state provider (demo session persists while navigating).

**Exit criteria:** sign in → dashboard home; navigation/search/language toggle work; demo edits survive navigation; build + tests green.

### Phase 3 — All panel pages

**Scope:** port `components/panel/pages.tsx` + `forms.tsx` + `data-table.tsx` into `app/dashboard/**/page.tsx`: students (table + add form), attendance (roster + save), fees (collections/dues tabs + confirmations), exams (list + results + publish confirmation), notices (list + create), plus the simpler academics/schedules/staff/reports/settings lists. Loading/empty/error states preserved.

**Exit criteria:** every route from `docs/20-PORTAL-SCREEN-INVENTORY.md` admin section reachable and functional with mock data; confirmations on financial/publish actions; build + tests green.

### Phase 4 — Tests, cutover, cleanup ✅ (done 18 Nov 2026)

**Scope:** port vitest suites (`logic`, `marketing-content`, `provider`) with Next-compatible setup; replace TanStack routing test with Playwright role-journey smoke tests (per `docs/08`); **cutover:** rename `apps/web-next` → `apps/web`, delete the TanStack app, regenerate lockfile; update `apps/web/README.md` + `AGENTS.md` (remove "open decision" note), add a note to `docs/08-FRONTEND-GUIDELINES.md` referencing ADR-012; close the open-decision comment in issue #8.

**Exit criteria:** single `apps/web` on Next.js; full build + unit + E2E smoke green; docs consistent; PR merges to `develop`.

**Completion notes:** vitest suites (`logic`, `marketing-content`, `provider`) ported; Playwright role-journey smoke tests (visitor + administrator, chromium) live in `apps/web/e2e/` and run against the production build; `apps/web-next` renamed to `apps/web` and the TanStack app deleted (rollback = `git revert` of the cutover commit); `apps/web/README.md` + `AGENTS.md` rewritten post-cutover; `docs/08` references ADR-012; issue #8 closed.

## 6. Risks and mitigations

- **Client/server boundary mistakes** (`useState` in server components) → keep interactive subtrees as client components; typecheck catches most.
- **Demo-session provider differences** → provider ports as a React context client component; behavior covered by ported tests.
- **Style drift during port** → copy `styles.css` verbatim; only font loading moves to `next/font`.
- **Broken links/route renames** → grep-audited `Link to` → `href` map in Phase 2/3; Playwright smoke in Phase 4.

## 7. Rollback

Each phase is a separate PR to `develop`. A failed phase is reverted via its PR; the TanStack app remains the live demo until the Phase 4 cutover commit is merged. After cutover, rollback is `git revert` of the cutover commit (restores the TanStack app from history).
