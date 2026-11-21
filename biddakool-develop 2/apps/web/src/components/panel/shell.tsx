"use client";

import { useEffect, useState, useSyncExternalStore, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  Wallet,
  CalendarDays,
  Bell,
  UserRound,
  ChartNoAxesCombined,
  Settings,
  PanelLeft,
  Search,
  ChevronDown,
  LogOut,
  ShieldCheck,
  ArrowUpRight,
  School,
} from "lucide-react";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { panelCopy, panelNavigation } from "@/lib/panel/copy";
import { endDemoSession, hasDemoSession } from "@/lib/panel/demo-session";
import { usePanel } from "./provider";
const icons = {
  dashboard: LayoutDashboard,
  students: Users,
  academics: BookOpen,
  attendance: ClipboardCheck,
  exams: GraduationCap,
  fees: Wallet,
  schedules: CalendarDays,
  notices: Bell,
  staff: UserRound,
  reports: ChartNoAxesCombined,
  settings: Settings,
};
// The panel shell always renders {children} — including during prerender and
// RSC renders, where the demo-session flag is always false. Before hydration
// (or for visitors without a session) the shell is visually replaced by a
// loading skeleton and redirected to /login; instant-navigation validation
// (docs/messages/instant-unrendered-segment) still sees the full tree. The
// demo-session gate is a UI affordance for a fictional demo, never
// authentication.
export function PanelShell({ children }: { children: ReactNode }) {
  const { t, language, setLanguage, notices, students, reset } = usePanel();
  const [collapsed, setCollapsed] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [search, setSearch] = useState("");
  const [profile, setProfile] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  // Parity with the TanStack app's `ssr: false` dashboard: the demo-session
  // flag is browser-memory module state (an external store to React), read
  // here via useSyncExternalStore — the server snapshot is always false, so
  // the gate overlay shows until the client session opens. This is a UI gate
  // for a fictional demo, never authentication.
  const noopSubscribe = () => () => {};
  const signedIn = useSyncExternalStore(
    noopSubscribe,
    () => hasDemoSession(),
    () => false,
  );
  useEffect(() => {
    if (!signedIn) router.replace("/login");
  }, [signedIn, router]);
  const current = panelNavigation.find((n) => n.path === pathname)?.label ?? "Dashboard";
  function signOut() {
    reset();
    endDemoSession();
    router.replace("/login");
  }
  const nav = (
    <>
      <div className="panel-brand">
        <Link href="/" aria-label="Biddakool home">
          <Brand />
        </Link>
      </div>
      <div className="sidebar-institution">
        <span className="icon-tile tone-blue">
          <School />
        </span>
        <span>
          <strong>{t(panelCopy.institution)}</strong>
          <small>{t("Academic year 2026")}</small>
        </span>
      </div>
      <nav aria-label={t("INSTITUTION")}>
        {(["WORKSPACE", "MANAGEMENT", "INSTITUTION"] as const).map((group) => (
          <div className="sidebar-group" key={group}>
            <span className="sidebar-group-label">{t(group)}</span>
            {panelNavigation
              .filter((n) => n.group === group)
              .map((item) => {
                const Icon = icons[item.icon];
                return (
                  <Button
                    asChild
                    variant="ghost"
                    key={item.path}
                    title={t(item.label)}
                    className={`panel-nav-link ${pathname === item.path ? "is-active" : ""}`}
                  >
                    <Link href={item.path} onClick={() => setDrawer(false)}>
                      <Icon />
                      <span>{t(item.label)}</span>
                      {item.label === "Students" && <small>{students.length}</small>}
                    </Link>
                  </Button>
                );
              })}
          </div>
        ))}
      </nav>
      <div className="sidebar-footer">
        <ShieldCheck size={16} />
        <span>
          {t("Demo workspace")}
          <small>{t("Fictional sample data")}</small>
        </span>
        <Link href="/" aria-label={t("Back to Biddakool")} title={t("Back to Biddakool")}>
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </>
  );
  const results = search.trim()
    ? students
        .filter((s) =>
          `${s.name} ${s.id} ${s.className}`.toLowerCase().includes(search.toLowerCase()),
        )
        .slice(0, 4)
    : [];
  const navResults = search.trim()
    ? panelNavigation.filter((n) => t(n.label).toLowerCase().includes(search.toLowerCase()))
    : [];
  return (
    <div
      className={`panel-app ${collapsed ? "sidebar-collapsed" : ""} ${signedIn ? "" : "is-gated"}`}
      lang={language}
      aria-busy={signedIn ? undefined : "true"}
    >
      {!signedIn && (
        <div className="panel-gate" role="status" aria-label={t("Loading")}>
          <div className="panel-skeleton">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} />
            ))}
          </div>
        </div>
      )}
      <aside className="panel-sidebar">{nav}</aside>
      <Sheet open={drawer} onOpenChange={setDrawer}>
        <SheetContent side="left" className="panel-mobile-sidebar">
          <SheetTitle className="sr-only">{t("INSTITUTION")}</SheetTitle>
          <SheetDescription className="sr-only">{t("Demo workspace")}</SheetDescription>
          {nav}
        </SheetContent>
      </Sheet>
      <div className="panel-main">
        <header className="panel-topbar">
          <Button
            variant="ghost"
            size="icon"
            className="desktop-sidebar-toggle"
            aria-label={t("Toggle sidebar")}
            title={t("Toggle sidebar")}
            onClick={() => setCollapsed(!collapsed)}
          >
            <PanelLeft />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="mobile-sidebar-toggle"
            aria-label={t("Open navigation")}
            onClick={() => setDrawer(true)}
          >
            <PanelLeft />
          </Button>
          <span className="topbar-institution">
            {t(panelCopy.institution)}
            <small>{t("Administrator")}</small>
          </span>
          <div className="global-search">
            <Search size={16} />
            <Input
              aria-label={t("Search your workspace…")}
              placeholder={t("Search your workspace…")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <div className="global-search-results">
                <strong>{t("Search results")}</strong>
                {navResults.map((n) => (
                  <Link key={n.path} href={n.path} onClick={() => setSearch("")}>
                    {t(n.label)}
                    <ArrowUpRight size={14} />
                  </Link>
                ))}
                {results.map((s) => (
                  <Link
                    href={`/dashboard/students?q=${encodeURIComponent(s.name)}`}
                    key={s.id}
                    onClick={() => setSearch("")}
                  >
                    {s.name}
                    <small>{s.id}</small>
                  </Link>
                ))}
                {results.length === 0 && navResults.length === 0 && (
                  <p>{t("No matching records")}</p>
                )}
              </div>
            )}
          </div>
          <div className="topbar-controls">
            <div className="language-switch" aria-label={t("Language")}>
              <Button
                variant="ghost"
                size="sm"
                aria-pressed={language === "bn"}
                onClick={() => setLanguage("bn")}
                className={language === "bn" ? "selected" : ""}
              >
                বাং
              </Button>
              <Button
                variant="ghost"
                size="sm"
                aria-pressed={language === "en"}
                onClick={() => setLanguage("en")}
                className={language === "en" ? "selected" : ""}
              >
                EN
              </Button>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={t("Notifications")}
                  className="notification-button"
                >
                  <Bell />
                  <i />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="notifications-menu">
                <DropdownMenuLabel>{t("Notifications")}</DropdownMenuLabel>
                {notices.slice(0, 3).map((n) => (
                  <DropdownMenuItem asChild key={n.id}>
                    <Link href="/dashboard/notices">
                      <Bell />
                      <span>
                        {n.title}
                        <small>{n.date}</small>
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="topbar-divider" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="account-trigger" aria-label={t("Account menu")}>
                  <span className="person-avatar">DA</span>
                  <span>
                    {t("Demo Administrator")}
                    <small>{t("Administrator")}</small>
                  </span>
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{t("Demo Administrator")}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={() => setProfile(true)}>
                  <UserRound />
                  {t("Profile")}
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => signOut()}>
                  <LogOut />
                  {t("Sign out")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <div className="panel-page">
          <div className="panel-breadcrumb">
            {t("INSTITUTION")}
            <span>/</span>
            {t(current)}
            <span className="demo-indicator">
              <i />
              {t("Demo workspace")}
            </span>
          </div>
          {children}
        </div>
        <footer className="panel-bottom">
          <span>© 2026 Biddakool</span>
          <span>{t(panelCopy.demoNote)}</span>
        </footer>
      </div>
      <Dialog open={profile} onOpenChange={setProfile}>
        <DialogContent className="panel-form-dialog">
          <DialogTitle>{t("Profile")}</DialogTitle>
          <DialogDescription>{t("Demo account · No personal data stored")}</DialogDescription>
          <div className="receipt-summary">
            <p>
              <span>{t("Name")}</span>
              <strong>{t(panelCopy.account)}</strong>
            </p>
            <p>
              <span>{t("Role")}</span>
              <strong>{t("Administrator")}</strong>
            </p>
            <p>
              <span>{t("Email")}</span>
              <strong>{panelCopy.accountEmail}</strong>
            </p>
            <p>
              <span>{t("INSTITUTION")}</span>
              <strong>{t(panelCopy.institution)}</strong>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
