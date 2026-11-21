# Biddakool Web — Design System Document

> **Status:** Descriptive + normative. Generated 19 Nov 2026 by analysing the implemented `apps/web` application (Next.js 16 App Router port, ADR-012). It documents the design that **exists today** and sets the standard for future frontend work in `apps/web`.
>
> **Authority:** Where this document and the code disagree, **the code is authoritative**; update this document in the same PR that changes the design. Primary sources:
>
> - `apps/web/src/app/globals.css` — tokens, base rules, all marketing/panel layout classes, responsive rules (3,750 lines; the single design stylesheet).
> - `apps/web/src/app/layout.tsx` — fonts, global metadata, providers.
> - `apps/web/src/components/ui/*` — ~45 shadcn-style Radix primitives (Tailwind utility classes + CVA variants).
> - `apps/web/src/components/{brand,demo-dialog,product-preview}.tsx`, `src/components/marketing/landing.tsx`, `src/components/panel/*` — composition patterns.
> - `apps/web/src/lib/{marketing-content.ts,panel/copy.ts,panel/logic.ts}` — content, translations, formatting rules.
>
> Related reading: `docs/08-FRONTEND-GUIDELINES.md` (architecture/UX requirements), `docs/20-PORTAL-SCREEN-INVENTORY.md` (screen coverage), `docs/24-FRONTEND-NEXTJS-MIGRATION.md` (why this stack), `apps/web/AGENTS.md` (non-negotiable Next.js rules).

---

## 1. Design principles observed in the application

1. **One calm, institutional palette.** A deep indigo/navy primary on near-white surfaces, with four restrained accent tones (gold, green, rose, soft blue) used for *meaning* (fees, attendance, alerts, navigation), not decoration.
2. **Tokens over literals.** Every colour is an `oklch()` CSS custom property registered through Tailwind v4's `@theme inline`; components reference semantic names (`bg-primary`, `text-muted-foreground`) rather than raw values.
3. **Two densities, one language.** The marketing site is spacious, editorial and marketing-sized (66px hero, 88px section rhythm); the institute panel is deliberately dense (13px base, 8–12px labels) so operators can scan tables and KPIs without scrolling.
4. **Bilingual by construction.** All panel strings and mock labels pass through `t()` (`src/lib/panel/copy.ts`); money uses `money(value, language)`; dates switch between `18 November 2026` and `১৮ নভেম্বর ২০২৬`.
5. **Radix + CVA primitives, app-specific CSS classes.** Generic interaction components come from `src/components/ui/`; page/section composition rides on named CSS classes in `globals.css` (`.hero`, `.kpi-card`, `.panel-nav-link`, …). Both use the same tokens.
6. **Accessible by default.** Semantic landmarks, `aria-pressed`/`aria-selected`/`aria-invalid`, `sr-only` labels, visible focus rings, keyboard-operable tabs, and a global `prefers-reduced-motion` reset.
7. **Demo-safe.** Panel data is fictional and client-memory only. Every money/publish action has an explicit confirmation, and demo state is labelled in the UI (`.demo-indicator`, "Fictional sample data").

---

## 2. Where the design lives (source map)

| Concern | File / location | Notes |
| --- | --- | --- |
| Design tokens (colour, radius, fonts) | `src/app/globals.css:31-145`, `:158-171`, `:1930-1934` | `@theme inline`, `:root`, `.dark`, brand accents, panel tokens. |
| Base element rules | `src/app/globals.css:147-198` | Border colour, body font/background, heading font, links, `.container`. |
| Marketing layout classes | `src/app/globals.css:199-1313` | Header, hero, product preview, sections, FAQ, CTA, footer. |
| Marketing responsive rules | `src/app/globals.css:1414-1928` | Breakpoints 1500 / 1100 / 900 / 600 / 380. |
| Dialog + login form styles | `src/app/globals.css:1274-1413` | `.demo-dialog`, `.login-page`, `.login-content`. |
| Panel layout classes | `src/app/globals.css:1935-3199` | Shell, sidebar, topbar, page, KPIs, charts, tables, forms, states. |
| Panel responsive rules | `src/app/globals.css:3200-3750` | Breakpoints 1600 / 1150 / 850 / 600 / 360. |
| Fonts + metadata | `src/app/layout.tsx:1-65` | `next/font` DM Sans + Manrope; CSS variables on `<html>`. |
| Buttons | `src/components/ui/button.tsx:9-53` | CVA variants/sizes; exported `buttonVariants`. |
| Utility class merger | `src/lib/utils.ts:1-6` | `cn()` = `twMerge(clsx(...))`. |
| Shared primitives | `src/components/ui/*.tsx` | Accordion … Tooltip; all `"use client"`. |
| Brand mark | `src/components/brand.tsx`, `src/assets/logo-trn.png` | Next `<Image>`, tagline "Empowering Education". |
| Content & translations | `src/lib/marketing-content.ts`, `src/lib/panel/copy.ts` | Single content modules; do not hard-code copy in views. |
| Generated OG artwork | `src/app/opengraph-image.tsx` | 1200×630 gradient card (known literal-colour exception, §15). |

---

## 3. Colour system

### 3.1 Semantic tokens (light / dark)

Defined in `globals.css:76-145`, exposed as Tailwind utilities via `@theme inline` (`bg-primary`, `text-muted-foreground`, `border-border`, `ring-ring`, `bg-chart-1`, `bg-sidebar-accent`, …). **All colour values must be `oklch()`.**

| Token | :root (light) | .dark | Role |
| --- | --- | --- | --- |
| `--background` | `oklch(0.997 0.001 95)` | `oklch(0.129 0.042 264.695)` | Page canvas (near-white / deep navy). |
| `--foreground` | `oklch(0.235 0.031 261)` | `oklch(0.984 0.003 247.858)` | Primary text. |
| `--card` / `--popover` | `oklch(1 0 0)` | `oklch(0.208 0.042 265.755)` | Raised surfaces. |
| `--card-foreground` / `--popover-foreground` | `oklch(0.129 0.042 264.695)` | `oklch(0.984 0.003 247.858)` | Text on raised surfaces. |
| `--primary` | `oklch(0.39 0.158 266)` | `oklch(0.929 0.013 255.508)` | Deep indigo brand colour; buttons, active nav, accents. |
| `--primary-foreground` | `oklch(0.984 0.003 247.858)` | `oklch(0.208 0.042 265.755)` | Contrast text on `--primary`. |
| `--secondary` | `oklch(0.968 0.007 247.896)` | `oklch(0.279 0.041 260.031)` | Secondary buttons. |
| `--secondary-foreground` | `oklch(0.208 0.042 265.755)` | `oklch(0.984 0.003 247.858)` | Text on secondary. |
| `--muted` | `oklch(0.968 0.007 247.896)` | `oklch(0.279 0.041 260.031)` | Muted surfaces (tab/list backgrounds). |
| `--muted-foreground` | `oklch(0.52 0.021 260)` | `oklch(0.704 0.04 256.788)` | Secondary text, labels, icons. |
| `--accent` | `oklch(0.95 0.02 262)` | `oklch(0.279 0.041 260.031)` | Hover/focus surfaces. |
| `--accent-foreground` | `oklch(0.208 0.042 265.755)` | `oklch(0.984 0.003 247.858)` | Text on accent. |
| `--destructive` | `oklch(0.577 0.245 27.325)` | `oklch(0.704 0.191 22.216)` | Error text/buttons. |
| `--destructive-foreground` | `oklch(0.984 0.003 247.858)` | `oklch(0.984 0.003 247.858)` | Text on destructive. |
| `--border` | `oklch(0.925 0.008 260)` | `oklch(1 0 0 / 10%)` | Hairlines (1px everywhere). |
| `--input` | `oklch(0.929 0.013 255.508)` | `oklch(1 0 0 / 15%)` | Input/select borders. |
| `--ring` | `oklch(0.704 0.04 256.788)` | `oklch(0.551 0.027 264.364)` | Focus ring (usually 1–2px). |
| `--chart-1 … --chart-5` | orange / teal / blue / yellow-green / amber (see source) | blue / green / gold / purple / red | Generic chart series (Radix/shadcn defaults). |

**Sidebar tokens** (`:102-109`, `:137-144`): `--sidebar`, `--sidebar-foreground`, `--sidebar-primary`, `--sidebar-primary-foreground`, `--sidebar-accent`, `--sidebar-accent-foreground`, `--sidebar-border`, `--sidebar-ring`. The current panel shell actually uses `--background`/`--blue-soft` for its sidebar rather than the `--sidebar-*` family; treat `--sidebar-*` as available for future shadcn `Sidebar` work.

**Rules**

- Use semantic tokens in new CSS: `background: var(--background)`, `color: var(--muted-foreground)`, Tailwind `bg-primary`, `text-destructive`.
- The universal selector in `@layer base` sets `border-color: var(--color-border)` on `*`, so borders rarely need an explicit colour.
- To add a semantic colour: add it to `:root` **and** `.dark`, then register `--color-<name>: var(--<name>)` in `@theme inline` (`globals.css:13-29`).
- `.dark` tokens exist, but **no theme switch is implemented** in the current UI; the app renders light only.

### 3.2 Brand accents (marketing + panel)

Declared at `globals.css:158-171` and `:1930-1934`. These are custom (not Tailwind-registered) variables; use them via `var(--…)` in CSS or `style={{ color: "var(--green)" }}` in charts.

| Token | Value | Meaning / usage |
| --- | --- | --- |
| `--gold` | `oklch(0.79 0.156 79)` | Fees, "draft", warning, sun icon, notification dot, hero underline. |
| `--gold-soft` | `oklch(0.965 0.038 86)` | Tint behind gold icons/badges, dues callout. |
| `--green` | `oklch(0.53 0.113 160)` | Attendance/present, published/active/ready, success, Bangladesh dot. |
| `--green-soft` | `oklch(0.95 0.031 158)` | Tint behind green icons/badges, positive pills. |
| `--rose` | `oklch(0.6 0.135 20)` | Absent/inactive/due amounts, browser-dot. |
| `--rose-soft` | `oklch(0.962 0.023 18)` | Tint behind rose icons/badges. |
| `--blue-soft` | `oklch(0.953 0.024 264)` | Selected navigation, institution/user avatars, info notices, step numbers. |
| `--section-soft` | `oklch(0.978 0.006 257)` | Alternating section backgrounds, table head, search fields, monospace-ish surfaces. |
| `--hero-glow` / `--hero-tint` | `oklch(0.977 0.021 94)` / `oklch(0.967 0.022 259)` | Warm/cool radial gradients behind the hero. |
| `--panel-background` | `oklch(0.977 0.005 255)` | Slightly cooler canvas for the institute workspace. |
| `--panel-chart-bar` | `oklch(0.73 0.13 83)` | Gold bar fill in the fee-collection chart. |
| `--preview-shadow` | `0 24px 65px -24px oklch(0.28 0.05 263 / 0.23), 0 2px 10px oklch(0.3 0.04 263 / 0.04)` | Raised "product preview"/visual cards, hovered feature cards, dropdown/shadow surfaces. |
| `--panel-shadow` | `0 2px 8px oklch(0.3 0.03 260 / 0.025)` | Very subtle card shadow in the panel. |

### 3.3 Tone and status colour mapping

**Icon tiles** (`globals.css:597-625`) — `.icon-tile` is a 43×43 rounded-8 container with a 22px icon; `.tone-{blue|green|gold|rose}` pairs foreground/soft-background tokens. Smaller variants are achieved by overriding width/height (30px KPI, 31px list/sidebar, 35px portal task, 27px preview stat).

**Status badges** (`.status-badge`, `globals.css:2742-2777`) — `<StatusBadge value>` generates `status-<lowercased, hyphenated value>`:

| Value(s) | Colour | Semantic |
| --- | --- | --- |
| `Active`, `Published`, `Ready`, `Cash` | `--green` on `--green-soft` | Positive / completed. |
| `Completed`, `Online` | `--primary` on `--blue-soft` | Informational / digital. |
| `Draft` | `--gold` on `--gold-soft` | Pending. |
| `Inactive` | `--rose` on `--rose-soft` | Negative / disabled. |

All other values fall back to `--muted-foreground` on `--section-soft`. A 4px `currentColor` dot precedes the label.

**Attendance marks** (`globals.css:3003-3020`, `:3058-3066`): `Present` → green, `Absent` → rose, `Late` → gold; the selected button in `.attendance-marks` receives the matching soft background. `.due-amount` uses `--rose`; `.grade-badge` uses green/green-soft; `.chart-pill` uses green/green-soft.

### 3.4 Colour rules for new work

- Do **not** introduce hex/rgb literals in `globals.css` or components; the only accepted literal today is the OG image gradient (§15).
- Prefer the semantic token (primary/secondary/muted/destructive) for UI chrome; use the accent tokens only for data semantics and decorative brand highlights.
- Maintain contrast: text tokens are paired (`foreground`/`background`, `primary`/`primary-foreground`); never override one without the other.
- For translucent fills use `color-mix(in oklch, var(--x) N%, transparent)` (see `.final-cta p`, `.person-avatar` border).

---

## 4. Typography

### 4.1 Fonts

| Token | Family | Loaded as | Used for |
| --- | --- | --- | --- |
| `--font-sans` | DM Sans | `next/font/google` → CSS variable `--font-dm-sans`; fallback `"DM Sans", sans-serif` | Body copy, labels, tables, buttons, form fields. |
| `--font-display` | Manrope | `next/font/google` → CSS variable `--font-manrope`; fallback `"Manrope", sans-serif` | `h1`–`h4`, brand wordmark, KPI numbers, large financial figures. |

Loaded in `src/app/layout.tsx:8-17` with `subsets: ["latin"], display: "swap"` and self-hosted at build time — **never add a Google Fonts `<link>`**. `body { font-family: var(--font-sans); margin: 0; -webkit-font-smoothing: antialiased; }`; all headings use `--font-display` with `letter-spacing: 0` (`globals.css:172-194`).

### 4.2 Marketing type scale

| Element | Desktop | ≤600px | Weight / line-height |
| --- | --- | --- | --- |
| `.hero h1` | 66px (60px ≤1100; hero top padding drops to 55px ≥1500) | 40px (35px ≤380) | 750 / 1.25 (1.3 mobile) |
| `h2` (`.section-heading`, `.final-cta h2`) | 36px (`.why-heading h2` 33px) | 28px (26–27px for variants) | 700 / 1.35 |
| `.institution-heading p`, `.section-heading p` | 13–14px | 11–12px | 400 / 1.75 |
| `.eyebrow` | 10px (9px in sub-sections) | 9px | 650, uppercase, `--primary` or `--muted-foreground` |
| `.hero-description` | 16px | 13px | 400 / 1.8 |
| `.hero-eyebrow` | 9px | 7px | 650, pill, muted foreground |
| `.feature-item h3` | 15px | 12px | 700 |
| `.feature-item p` | 12px | 10px | 400 / 1.8 |
| `.portal-copy h3` | 26px | 23px | 700 / 1.4 |
| `.step h3` | 17px | 15px | 700 |
| `.faq-list summary` | 13px | 12px | 550 |
| `.final-cta p` | 13px | 12px | 400, `--primary-foreground` at 78% opacity |
| `.site-footer h3` / links | 11px | 11–12px | 650 / 400 |

The hero highlight ("Education.") uses `--primary` plus a hand-drawn gold SVG underline (`globals.css:301-318`).

### 4.3 Panel type scale

The panel sets `font-size: 13px` at `.panel-app` and uses a deliberately dense scale:

| Element | Size | Weight / notes |
| --- | --- | --- |
| `.page-heading h1`, `.dashboard-heading h1` | 28px (31px ≥1600, 26px ≤850, 23px ≤600, 21px ≤360) | 750 / 1.4, `--font-display` |
| `.kpi-card > strong` | 25px (29px ≥1600, 24px ≤600) | 750, `--font-display`, nowrap |
| `.dues-summary > strong`, `.receipt-success > strong` | 26px / 29px | `--font-display`; amounts use `money()` |
| `.panel-form-dialog h2` | 21px (20px ≤600) | 700 |
| `.widget-heading h2` | 12px | 700 |
| `.section-inline-heading h2` | 14px | 650 |
| `.panel-app table` / `td` | 11px (10px ≤600) | `th` 10px, 500, muted |
| `.page-heading p`, `.panel-nav-link`, `.table` toolbar inputs | 11–12px | labels 550–650 |
| `.sidebar-group-label`, `.preview-nav-label`, `.status-badge`, breadcrumb, KPI caption | 8–10px | uppercase group labels; muted, high letter density |
| `.brand` in panel header | 24px (22px ≤1150) | 800, `--font-display`, logo 38px |

**Rule of thumb:** marketing copy is 12–16px with generous leading (1.75–1.9); panel data is 8–12px with tight rows; only page titles, KPIs and financial figures use display type above 20px.

### 4.4 Numbers, currency and dates

- Currency is Bangladeshi Taka, formatted by `money(value, language)` in `src/lib/panel/logic.ts:35-37` using `Intl.NumberFormat("en-BD" | "bn-BD", { maximumFractionDigits: 2 })` prefixed with `৳` (e.g. `৳ 2,84,500` in the preview, `money()` output in KPIs/receipts); the currency symbol `৳` is hard-coded in the amount field label.
- Panel date sample is `18 November 2026` / `১৮ নভেম্বর ২০২৬` (hard-coded in the demo because data is fictional); marketing footer year uses `getYear()`.
- No web-font loading for Bangla glyphs — system fallback is used for Bengali text.

---

## 5. Spacing, grids and layout

### 5.1 Global geometry

- `.container { width: min(1160px, calc(100% - 64px)); margin-inline: auto; }` → 32px side gutters, 20px below 600px (`globals.css:195-198`, `:1572-1574`).
- `html { scroll-behavior: smooth; scroll-padding-top: 100px; }` (auto + no offset for reduced motion).
- `* { border-color: var(--color-border); }` — hairline borders are uniformly 1px.
- Standard icon sizes: 13/14/15/16px inline (Lucide props or `[&_svg]:size-4`), 22px in 43px tiles, 27px in `.why-grid`.

### 5.2 Marketing layout

| Section | Key measurements |
| --- | --- |
| `.site-header` | 91px tall (75px ≤600), `position: relative`, `z-index: 20`, 1px bottom border; `.header-inner` flex space-between, 20px gap. |
| `.brand` | 25px wordmark (22px ≤600), 43px logo (37px ≤600), 10px gap, 8.5px tagline. |
| Desktop nav | 25px gap, 12px labels, hover → `--primary`; hidden ≤900px, replaced by `.mobile-nav` dropdown. |
| `.hero-inner` | `padding-top: 61px` (55px ≥1500, 38px ≤600); centred; radial-gradient background. |
| Hero actions | 46px tall pill buttons (43px ≤600), 12px gap, `padding-inline: 24px`; reassurance row 10px. |
| `.product-stage` / `.product-preview` | max-width 1040px, margin-top 43px; mock browser chrome 34px tall; mock app grid `182px 1fr`, min-height 438px. |
| `.institution-section` | 34px/29px vertical padding; 6-column icon grid (3 columns ≤900, stacked ≤600). |
| `.section` | `padding: 88px 0` (58px ≤600); `.section-heading` margin-bottom 43px (30px ≤600). |
| `.features-grid` / `.why-grid` | 4 columns, 19px / 35px gaps (2 columns ≤900, tighter ≤600). |
| `.portals-section` | `--section-soft` background; `.portal-panel` 2 columns, 90px gap, `padding: 0 70px` (1 column ≤600). |
| `.portal-tabs` | underline tab bar, 48px tall tabs, 25px gap, 2px primary active underline. |
| `.steps-grid` | 3 columns, 65px gap; numbered 48px circular step badges. |
| `.faq-layout` | `0.85fr 1.2fr`, 100px gap; `<details>` rows with 21px vertical padding and rotating `+`. |
| `.final-cta` | `--primary` background, 64px vertical padding, centred, gold eyebrow. |
| `.site-footer` | 51px top padding; 4-column grid (`2fr 1fr 1fr 1.4fr`), 30px gap; 2 columns ≤600. |

### 5.3 Institute panel layout

| Region | Key measurements |
| --- | --- |
| `.panel-app` | flex, `min-height: 100dvh`, `--panel-background`, 13px base, `--panel-sidebar-width: 232px`. |
| `.panel-sidebar` | `position: fixed`, 100dvh, left 0, `z-index: 30`, white surface, right border, `transition: width .18s`. Brand row 84px; institution card; grouped nav; footer. |
| Collapsed / responsive width | 74px when `.sidebar-collapsed`; 208px ≤1150; 74px ≤850; 0 and hidden ≤600 (mobile uses a `Sheet` drawer). |
| `.panel-nav-link` | 39px tall, 5px radius, 12px label, 12px icon, 13px horizontal padding; active = `--blue-soft` + primary text + 3px left indicator bar. |
| `.panel-main` | `margin-left: var(--panel-sidebar-width)`, `width: calc(100% - …)`, flex column. |
| `.panel-topbar` | 76px tall (64px ≤600), white, sticky (`top: 0`, `z-index: 25`), 1px bottom border, 25px horizontal padding (13px ≤600). Contains toggle, institution label, global search (≤280px), language switch, notifications, divider, account menu. |
| `.panel-page` | `padding: 23px 28px 40px` (28px 40px 45px ≥1600; 18px 16px 30px ≤600), `flex: 1`. |
| `.page-heading` | `margin: 22px 0 27px`, flex between; actions are 36px tall buttons with 10px gap. |
| `.kpi-grid` | 5 equal columns, 13px gap → 3 columns ≤850 → 2 columns ≤600 (last card spans full width). |
| `.dashboard-charts` | `1.1fr 1fr`, 18px gap, 205px chart height (245px ≥1600, 195px ≤600); each chart in `<Suspense>` with `.chart-fallback`. |
| `.dashboard-lists` | 3 equal columns, 18px gap → 1 column ≤850. |
| `.panel-table-region` | white surface, 1px border, 6px radius, `overflow: hidden`, subtle `--panel-shadow`. Toolbar 17px/18px padding; 36px inputs/selects/controls; table header 13px/18px padding, rows 17px/18px; pagination 13px/18px. |
| `.panel-form-dialog` | max-width 580px, `max-height: 90dvh`, scrollable, 26px padding, 8px radius. Collection dialog max-width 450px. |
| `.panel-form` | vertical 16px gap; `.form-grid` 2 columns with 15px gap; `.span-full` for full-width fields; `.form-actions` right-aligned row with top border, 18px top padding. |
| `.panel-bottom` | footer inside `.panel-main`, 17px vertical padding, 9px muted text, top border. |

**Breakpoint summary** (two parallel ladders — marketing uses 1500/1100/900/600/380, panel uses 1600/1150/850/600/360):

| Width | Marketing | Panel |
| --- | --- | --- |
| ≥1500 / ≥1600 | Reduced hero top padding | Roomier page padding, bigger KPIs/charts. |
| ≤1100 / ≤1150 | Smaller hero, tighter nav | Sidebar 208px, compact topbar/cards. |
| ≤900 / ≤850 | Desktop nav → mobile menu; 2-col grids | Sidebar collapses to 74px icons; KPI grid 3 cols; lists 1 col. |
| ≤600 | 20px gutters, 40px hero, stacked sections, 2-col footer | Sidebar removed (Sheet drawer), 64px topbar, 2-col KPI grid, 2-col forms. |
| ≤380 / ≤360 | 35px hero, scaled product mock | Tighter paddings, single-column form grid. |

---

## 6. Radius, elevation, motion

- Radius scale (`globals.css:34-40`, `--radius: 0.5rem` = 8px): `sm` 4px, `md` 6px, `lg` 8px, `xl` 12px, `2xl` 16px, `3xl` 20px, `4xl` 24px.
- Actual usage: 4–6px for inputs, selects, chips and table widgets; 8px for cards/dialogs/feature tiles; 10px for the product-preview top corners; **30px pill** for hero/CTA buttons and `.hero-eyebrow`; 50% for avatars and dots.
- Elevation: `--panel-shadow` for cards, `--preview-shadow` for the product mock, portal visual and hovered feature cards; Tailwind `shadow`/`shadow-sm`/`shadow-lg` for shadcn primitives and toasts.
- Motion: colour transitions `0.2s`; sidebar/topbar/main transitions `0.18s`; feature hover `translateY(-3px) + shadow`; Radix state animations via `tw-animate-css` (`data-[state=open]:animate-in`, fade/zoom classes); `.chart-fallback` and `.panel-skeleton` use `panel-pulse 1.2s ease-in-out infinite`; `.faq-plus` rotates 45° on open.
- `@media (prefers-reduced-motion: reduce)` disables all animations/transitions and smooth scrolling (`globals.css:1913-1923`).

---

## 7. Components

### 7.1 Button (`src/components/ui/button.tsx`)

Base: `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50`, child SVGs forced to `size-4` and `shrink-0`.

| Variant | Classes | Where to use |
| --- | --- | --- |
| `default` | `bg-primary text-primary-foreground shadow hover:bg-primary/90` | Primary actions in the panel: Add student, Save, Collect fee, Publish. |
| `hero` | `bg-primary … shadow-sm … rounded-full` | Marketing CTAs (header "Request a demo", hero primary). |
| `light` | `bg-primary-foreground text-primary … rounded-full` | CTA button inside the dark `.final-cta` band. |
| `outline` | `border border-input bg-background shadow-sm hover:bg-accent` | Secondary actions: "Explore features", quick actions, Cancel, icon toolbar buttons. |
| `secondary` | `bg-secondary … shadow-sm hover:bg-secondary/80` | Generic secondary emphasis (rarely used today). |
| `ghost` | `hover:bg-accent hover:text-accent-foreground` | Navigation links, icon buttons, portal/fees tabs, "Sign in" link. |
| `link` | `text-primary underline-offset-4 hover:underline` | Text actions: View results, Details, FAQ links, "View all". |
| `destructive` | `bg-destructive text-destructive-foreground` | Reserved for destructive confirmations. |

Sizes: `default` (h-9 px-4 py-2), `sm` (h-8, text-xs), `lg` (h-10 px-8; CSS overrides make hero/demo buttons 45–46px), `icon` (h-9 w-9). `asChild` uses Radix `Slot` so a `<Link>`/`<a>` can receive the same styles. Compose overrides with `cn()` and export `buttonVariants` when styling links outside the component (e.g. the 404 page).

### 7.2 Inputs, selects and forms

- **Input** (`ui/input.tsx`): `h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring md:text-sm`.
- Context overrides: `.demo-form input` 41px/13px; `.panel-form input` 38px/12px with `box-shadow: none`; `.table-search input` 36px with 33px left padding for the search icon; `.global-search input` 35px, transparent border, `--section-soft` fill.
- **Native `<select>`** is used for panel filters/forms (`.panel-app select`, `.panel-form select`): 36/38px, 1px border, 5px radius, 11–12px; the shadcn **Select** primitive (`ui/select.tsx`) is available but not used in the panel demo.
- **Textarea**: native `<textarea>` styled by `.demo-form textarea` / `.panel-form textarea` (1px `--input` border, 5px radius, 10–12px padding, focus ring `--primary`).
- **Labels**: flex column with 7px gap, 11px (panel) / 12px (demo) 550-weight label; required fields append ` *`. Checkbox label is a row (`.checkbox-field`), native checkbox 15px, `accent-color: var(--primary)`.
- **Validation**: forms use `noValidate` + `FormData` + Zod (`demoSchema`) or local logic; errors render `<span/p className="field-error">` in `--destructive` 11px, with `aria-invalid` on the field and `role="alert"` on panel errors.
- **Actions**: `.form-actions` right-aligned with top border; Cancel = `outline`, submit = `default` with a `Check` icon.
- **Toast feedback** (`ui/sonner.tsx`): `<Toaster position="bottom-right" />` mounted once in the root layout; `toast.success` after add/save/collect/publish, `toast.error` on failed collection/save. Toast classes use semantic `background/foreground/border-border/shadow-lg`.

### 7.3 Data display

- **Status badges** — see §3.3. `.audience-badge` and `.grade-badge` are compact label chips (10px).
- **Person cells** (`.table-person`, `src/components/panel/data-table.tsx:214-230`): 33px circular initials avatar (`--blue-soft`/`--primary`) + 11px name + 9px secondary ID. Tables also use `.cell-secondary` for sub-lines.
- **KPI cards** (`.kpi-card`): white surface, 6px radius, 1px border, 17px/15px padding, `--panel-shadow`; label 9px muted, 30px tone icon tile top-right, 25px display value, 8px note with a 4px green dot.
- **Widgets** (`.dashboard-widget`): white bordered 6px-radius surfaces; `.widget-heading` holds a 12px title, optional 9px subtitle and a right-side pill/total; `.widget-list-item` rows are 65px min-height with a 31px icon tile, 10px title, 8px subtitle and a chevron.
- **Tables** — generic shadcn `Table` primitives exist (`ui/table.tsx`), but the panel's actual tables use plain `<table>` inside `.panel-table-region` with the CSS in §5.3. Every list provides search, a native filter `<select>`, a state-preview menu, pagination (6 rows/page by default), and loading/empty/error states.
- **States** (`data-table.tsx:26-74`): `.panel-skeleton` (4 pulsing 23px bars), `.table-state` (Inbox/CircleAlert icon, 13px heading, 11px help text, Retry button). `StateMenu` lets the demo switch `Ready | Loading | Empty | Error`.
- **Charts** (dashboard home): `recharts` used directly — `AreaChart` (attendance, primary stroke with 14%→0% primary gradient fill) and `BarChart` (fees, `--panel-chart-bar`, 4px top radius, max bar width 31). Axes are borderless with `--muted-foreground` ticks; grid is dashed `--border`; tooltips use `--background`/`--border` with 6px radius. Every chart is wrapped in `<Suspense>` to preserve the static shell.

### 7.4 Overlays and navigation components

- **Dialog** (`ui/dialog.tsx`): `bg-foreground/60 backdrop-blur-sm` overlay, centred white content, `max-w-lg`, 6–8px radius, 200ms fade/zoom; close `X` top-right; `DialogTitle` 18px semibold, `DialogDescription` 14px muted. App dialogs override with `.demo-dialog` (490px max, 30px padding) or `.panel-form-dialog` (580px max, 26px padding).
- **Dropdown menus** (`ui/dropdown-menu.tsx`): used for notifications (290px) and the account menu; icons 16px, labels 11px, secondary text 9px.
- **Sheet** (`ui/sheet.tsx`): mobile sidebar drawer, `side="left"`, 280px wide.
- **Tabs**: shadcn `Tabs` primitive exists; the app uses custom underline tabs — `.portal-tabs` (marketing, icon + label, keyboard arrow navigation) and `.panel-tabs` (Fees Collections/Dues with count chips). Active = primary text + 2px primary bottom border, transparent background.
- **FAQ**: native `<details>/<summary>` with custom `+` indicator; no JS accordion.
- **Toasts**: see §7.2.

### 7.5 Icons

- Library: **lucide-react** (`^1.75.0`); no icon fonts, no custom SVG icon set except the hero underline.
- Panel nav icons are mapped by semantic key in `shell.tsx` (`dashboard → LayoutDashboard`, `students → Users`, `academics → BookOpen`, `attendance → ClipboardCheck`, `exams → GraduationCap`, `fees → Wallet`, `schedules → CalendarDays`, `notices → Bell`, `staff → UserRound`, `reports → ChartNoAxesCombined`, `settings → Settings`). Marketing maps its own feature/portal/institution icons in `landing.tsx`.
- Marketing icons use a thinner stroke (`strokeWidth={1.5–1.7}`) than panel icons (default 2); keep this distinction when adding icons.
- Sizes: inline 13/14/15/16px via props or `[&_svg]:size-4`; `.icon-tile svg` 22px (overridden to 16–19px in smaller tiles); section icons 27px.
- Decorative icons are `aria-hidden` where appropriate; interactive icon-only buttons always carry `aria-label`.

---

## 8. Navigation patterns

**Marketing site**

- Header: brand → anchor nav (`#features`, `#institutions`, `#portals`, `#how-it-works`, `#faq`) → ghost "Sign in" (external link to `/login`) → primary pill "Request a demo" → mobile menu toggle (≤900px).
- In-page anchors rely on `scroll-behavior: smooth` and `scroll-padding-top: 100px` so headings clear the header.
- Portal tabs implement `role="tablist"/"tab"/"tabpanel"` with `aria-selected`, `aria-controls` and Left/Right arrow key handling; the active tab drives an illustrative workspace card.
- Footer: 4 columns (brand + location, Explore, Get started, Let's connect) and a bottom bar with the security line.

**Institute panel**

- Sidebar: grouped navigation (`WORKSPACE`, `MANAGEMENT`, `INSTITUTION`) with active state, per-link count badge for Students, and a "Demo workspace / Fictional sample data" footer. Collapsible on desktop; `Sheet` drawer on mobile.
- Topbar: sidebar toggle, institution name + role, global search with result popover (students + nav items), bilingual `বাং / EN` segmented switch (`aria-pressed`), notifications dropdown with gold unread dot, divider, account dropdown (Profile / Sign out).
- Each page: breadcrumb (`INSTITUTION / <page>`) + `.demo-indicator` on the right, then `PageHeading` and content.
- Data tables: search → filter → state menu → table → pagination; row actions are link/ghost/icon buttons.
- Breadcrumb/heading navigation is textual; no separate tab bar except the Fees page.

---

## 9. Brand, imagery and illustration

- **Logo**: `src/assets/logo-trn.png`, rendered by `Brand` via `next/image` (unoptimized, 150×150 source). Sizes: 43px header/login, 38px footer/panel, 29px compact/preview. Wordmark: Manrope 800, `--primary`; tagline "Empowering Education" in 8.5px (6–8px compact) DM Sans 500, `--muted-foreground`.
- **Product preview** (`product-preview.tsx`): a fully CSS-built illustrative dashboard (browser chrome with three coloured dots, compact sidebar with sample nav, KPI strip, CSS bar chart and notice list) labelled `SAMPLE PREVIEW`. It is a `role="img"` with an aria-label. On small screens it is scaled (`scale(0.47)` / `0.4`) rather than re-laid out.
- **Portal visuals** (`.portal-visual`): sample task cards tilted `-1deg` with `--preview-shadow`, straightened on mobile.
- **Open Graph image** (`opengraph-image.tsx`): 1200×630 blue gradient card with logo, wordmark and tagline — see §15 for the literal-colour exception.
- **Favicon/icon**: `src/app/icon.png`; sitemap/robots are code-generated and `/dashboard` is `noindex` + disallowed.

---

## 10. Accessibility and localisation standards

- Use semantic landmarks (`header`, `main`, `nav`, `aside`, `footer`, `section`) and one `<h1>` per page.
- Interactive elements carry accessible names: `aria-label` on icon buttons, `aria-label` on search inputs, `aria-pressed` on toggle buttons/language switch, `aria-selected` on custom tabs, `aria-invalid` on invalid fields, `role="status"`/`role="alert"` on notices and empty/error states.
- Focus styles come from primitives: `focus-visible:outline-none` + `focus-visible:ring-1|2 focus-visible:ring-ring`; never remove them without a replacement.
- Decorative/duplicated text uses `.sr-only` (dialog close button, sheet titles).
- `prefers-reduced-motion` is globally honoured.
- Panel elements set `lang={language}`; all user-visible panel copy goes through `t()` and lives in `src/lib/panel/copy.ts` (English source + Bangla dictionary). Marketing copy lives in `src/lib/marketing-content.ts` and is currently English-only (documented in the FAQ).
- Never rely on colour alone: status badges pair a coloured dot with a text label; attendance buttons pair colour with "Present/Absent/Late".

---

## 11. Conventions for new pages and features

1. **Reuse before inventing.** Start from `Button`, `Input`, `Dialog`, `Badge`, `StatusBadge`, `DataTable`, `PageHeading`, `ListState`. Use `cn()` to merge overrides; do not duplicate variant logic.
2. **Use tokens.** Semantic Tailwind utilities for primitives; `var(--gold|green|rose|blue-soft|section-soft|panel-*)` for app-specific CSS. No new raw colours, no Google Fonts links.
3. **Choose the right surface class.** Marketing: `.section`, `.container`, `.eyebrow`, `.icon-tile tone-*`. Panel: `.panel-page`, `.page-heading`, `.panel-table-region`, `.dashboard-widget`, `.panel-form-dialog`, `.form-actions`.
4. **Keep density consistent.** Panel: 11px table text, 39px nav rows, 36px controls, 8px-radius cards. Marketing: 14–16px body, 88px section rhythm, pill CTAs.
5. **Respect the render model.** Server pages own metadata (`panelMetadata()` uses `title.absolute`); interactive subtrees are `"use client"`; `PanelShell` always renders `{children}`; charts need `<Suspense>`; defer `useSearchParams()` reads behind a post-mount child.
6. **Keep content separate.** Marketing strings → `marketing-content.ts`; panel strings → `copy.ts` with a Bangla entry; mock data → `lib/panel/mock-data.ts`; formatting/validation → `lib/panel/logic.ts`.
7. **Feedback and safety for money/state changes.** Confirmation dialog before issuing receipts or publishing results; `toast.success`/`toast.error`; preserve loading/empty/error states; keep demo labelling.
8. **Responsive check.** Verify at 1600, 1150/1100, 900/850, 600 and 380/360 widths; panel sidebar becomes a drawer at 600px, marketing nav at 900px.
9. **Verify.** `bun run build`, `bun run test`, `bun run lint`, `bun run test:e2e` must stay green (see `apps/web/README.md`). If a design token or component API changes, update this document in the same PR.

### 11.1 Adding a new semantic colour

1. Add `oklch()` values to `:root` and `.dark` in `globals.css`.
2. Register `--color-<name>: var(--<name>)` in `@theme inline`.
3. Use the generated utility (`bg-<name>`, `text-<name>`, `border-<name>`) in components; add a tone class only if the colour carries data meaning.
4. Document it in §3 and check contrast in both themes.

---

## 12. Known divergences / tech debt (do not copy into new work)

- **Two styling systems coexist:** shadcn/Tailwind utilities in `src/components/ui/*` and ~3,000 lines of hand-written CSS classes in `globals.css`. Both are intentional today; prefer the primitive + token route for new generic components, and add app-specific classes only for page composition.
- **Literal colours in OG artwork:** `opengraph-image.tsx:24-26` uses a hard-coded blue gradient (`#0b3b8c → #1a5fd0 → #38bdf8`) and `#ffffff` because Satori needs inline styles. This is the only accepted hex usage; it is **not** part of the UI token palette.
- **Dark tokens are unused:** `.dark` is defined but no switch/wrapper exists; the product is light-only.
- **Sidebar tokens are unused by the current shell:** the panel uses `--background`/`--blue-soft` instead of `--sidebar-*`.
- **`calendar.tsx` and `chart.tsx` were intentionally not ported** from the prototype; charts use `recharts` directly (see `apps/web/AGENTS.md`).
- **Native selects/checkboxes/textarea** are used in demo forms instead of the shadcn Select/Checkbox primitives; keep this consistent within a given form.
- **Marketing site is English-only** even though the platform is bilingual; the panel switch does not translate the landing page.

---

## 13. Quick reference (copy/paste recipes)

```tsx
// Marketing primary CTA
<Button variant="hero" size="lg" onClick={openDemo}>Request a demo <ArrowRight /></Button>

// Panel primary / secondary / text actions
<Button onClick={save}><Check /> Save student</Button>
<Button variant="outline" onClick={close}>Cancel</Button>
<Button variant="link" size="sm" onClick={view}>View results <ArrowUpRight /></Button>

// App-specific CSS using tokens
.kpi-card {
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 6px;
  box-shadow: var(--panel-shadow);
}

// Status/tones
<StatusBadge value="Published" />        // green chip
<span className="icon-tile tone-blue"><Users /></span>
```

```text
Palette:  primary indigo · near-white canvas · navy text
          gold = fees/draft · green = attendance/success · rose = absence/dues · blue-soft = selection
Type:     DM Sans (body) · Manrope (display) · panel 13px base · marketing 66px hero
Shape:    4–8px radius UI · 30px pill CTAs · 1px hairlines
Motion:   0.18–0.2s transitions · reduced-motion respected
Grid:     1160px container · 5-col KPI · 4-col features · 2-col portal/form
```

---

*Document owner: `@biddakool-devs`. Review whenever `apps/web/src/app/globals.css`, `ui/button.tsx`, or the panel shell changes.*
