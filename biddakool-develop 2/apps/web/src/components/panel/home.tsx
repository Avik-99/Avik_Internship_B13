"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import {
  Users,
  UserRound,
  ClipboardCheck,
  Wallet,
  CircleDollarSign,
  Plus,
  ArrowUpRight,
  Bell,
  CalendarDays,
  GraduationCap,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";
import { Button } from "@/components/ui/button";
import { usePanel } from "./provider";
import { StudentForm, CollectionForm, NoticeForm } from "./forms";
import { ListState, StateMenu, type ViewState } from "./data-table";
import { mockAttendanceTrend, mockFeeTrend, mockStaff, mockSchedules } from "@/lib/panel/mock-data";
import { collectedThisMonth, money } from "@/lib/panel/logic";
export function DashboardHome() {
  const { t, language, students, collections, exams, notices, attendance } = usePanel();
  const [studentOpen, setStudentOpen] = useState(false);
  const [collectionOpen, setCollectionOpen] = useState(false);
  const [noticeOpen, setNoticeOpen] = useState(false);
  const [state, setState] = useState<ViewState>("Loading");
  useEffect(() => {
    const timer = setTimeout(() => setState("Ready"), 250);
    return () => clearTimeout(timer);
  }, []);
  const latest = attendance.find((a) => a.date === "2026-11-18");
  const rate = latest
    ? Math.round(
        ((latest.present + latest.late) / (latest.present + latest.late + latest.absent)) * 100,
      )
    : 94;
  const feeTotal = collectedThisMonth(collections);
  const due = students.reduce((sum, s) => sum + s.due, 0);
  const stats = [
    {
      label: "Total students",
      value: String(students.length),
      note: "Active students",
      icon: Users,
      tone: "blue",
    },
    {
      label: "Total staff",
      value: String(mockStaff.length),
      note: "Teaching & administration",
      icon: UserRound,
      tone: "rose",
    },
    {
      label: "Today’s attendance",
      value: `${rate}%`,
      note: "Latest saved roster",
      icon: ClipboardCheck,
      tone: "green",
    },
    {
      label: "Fees collected this month",
      value: money(feeTotal, language),
      note: "November collections",
      icon: Wallet,
      tone: "gold",
    },
    {
      label: "Outstanding dues",
      value: money(due, language),
      note: "Across all classes",
      icon: CircleDollarSign,
      tone: "rose",
    },
  ];
  const upcoming = exams.filter((e) => e.status === "Draft");
  return (
    <>
      <div className="page-heading dashboard-heading">
        <div>
          <span className="panel-eyebrow">{t("Your institution, at a glance")}</span>
          <h1>
            {t("Good morning, Admin")} <span className="morning-sun">☀</span>
          </h1>
          <p>{t("Here’s a little clarity for your day.")}</p>
        </div>
        <div className="heading-date">
          <CalendarDays size={16} />
          {language === "bn" ? "১৮ নভেম্বর ২০২৬" : "18 November 2026"}
          <ChevronIcon />
        </div>
      </div>
      <div className="kpi-grid">
        {stats.map((s) => (
          <article className="kpi-card" key={s.label}>
            <div>
              <span>{t(s.label)}</span>
              <span className={`icon-tile tone-${s.tone}`}>
                <s.icon />
              </span>
            </div>
            <strong>{s.value}</strong>
            <small>
              <i />
              {t(s.note)}
            </small>
          </article>
        ))}
      </div>
      <div className="quick-actions">
        <span>{t("Quick actions")}</span>
        <Button variant="outline" onClick={() => setStudentOpen(true)}>
          <Plus />
          {t("Add student")}
        </Button>
        <Button variant="outline" asChild>
          <Link href="/dashboard/attendance">
            <ClipboardCheck />
            {t("Record attendance")}
          </Link>
        </Button>
        <Button variant="outline" onClick={() => setNoticeOpen(true)}>
          <Bell />
          {t("Create notice")}
        </Button>
        <Button variant="default" onClick={() => setCollectionOpen(true)}>
          <Wallet />
          {t("Collect fee")}
        </Button>
      </div>
      {/* Recharts ResponsiveContainer renders nothing until it can measure its
          box, which drops the subtree during prerender. The Suspense
          boundaries keep the charts in a validated, fallback-covered slot of
          the static shell (instant-unrendered-segment). */}
      <div className="dashboard-charts">
        <section className="dashboard-widget">
          <div className="widget-heading">
            <div>
              <h2>{t("Attendance trend")}</h2>
              <p>{t("Last 4 weeks")}</p>
            </div>
            <span className="chart-pill">
              <TrendingUp size={13} /> {rate}%
            </span>
          </div>
          <div className="dashboard-chart">
            <Suspense fallback={<div className="chart-fallback" />}>
              <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={mockAttendanceTrend}
                margin={{ top: 15, right: 10, left: -22, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="attendanceFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.14} />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="var(--border)" vertical={false} strokeDasharray="3 4" />
                <XAxis
                  dataKey="week"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                />
                <YAxis
                  domain={[60, 100]}
                  unit="%"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "var(--muted-foreground)", fontSize: 10 }}
                />
                <Tooltip
                  contentStyle={{
                    background: "var(--background)",
                    borderColor: "var(--border)",
                    borderRadius: 6,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="rate"
                  name={t("Attendance rate")}
                  stroke="var(--primary)"
                  strokeWidth={2.5}
                  fill="url(#attendanceFill)"
                />
              </AreaChart>
            </ResponsiveContainer>
            </Suspense>
          </div>
        </section>
        <section className="dashboard-widget">
          <div className="widget-heading">
            <div>
              <h2>{t("Monthly fee collection")}</h2>
              <p>{t("Last 6 months")}</p>
            </div>
            <span className="widget-total">{money(feeTotal, language)}</span>
          </div>
          <div className="dashboard-chart">
            <Suspense fallback={<div className="chart-fallback" />}>
              <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[...mockFeeTrend, { month: "Nov", amount: feeTotal }]}
                margin={{ top: 15, right: 10, left: -16, bottom: 0 }}
              >
                <CartesianGrid stroke="var(--border)" vertical={false} strokeDasharray="3 4" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                />
                <YAxis
                  tickFormatter={(n) => `${Number(n) / 1000}k`}
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "var(--muted-foreground)", fontSize: 10 }}
                />
                <Tooltip
                  formatter={(value) => money(Number(value), language)}
                  contentStyle={{
                    background: "var(--background)",
                    borderColor: "var(--border)",
                    borderRadius: 6,
                  }}
                />
                <Bar
                  dataKey="amount"
                  name={t("Fees collected")}
                  fill="var(--panel-chart-bar)"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={31}
                />
              </BarChart>
            </ResponsiveContainer>
            </Suspense>
          </div>
        </section>
      </div>
      <div className="dashboard-lists">
        <DashboardList
          title="Upcoming exams"
          path="/dashboard/exams"
          state={state}
          onChange={setState}
        >
          {upcoming.slice(0, 3).map((e) => (
            <div className="widget-list-item" key={e.id}>
              <span className="icon-tile tone-blue">
                <GraduationCap />
              </span>
              <span>
                <strong>{e.name}</strong>
                <small>
                  {e.className} · {e.start}
                </small>
              </span>
              <ArrowUpRight size={15} />
            </div>
          ))}
        </DashboardList>
        <DashboardList
          title="Recent notices"
          path="/dashboard/notices"
          state={state}
          onChange={setState}
        >
          {notices.slice(0, 3).map((n) => (
            <div className="widget-list-item" key={n.id}>
              <span className="icon-tile tone-gold">
                <Bell />
              </span>
              <span>
                <strong>{n.title}</strong>
                <small>
                  {t(n.audience)} · {n.date}
                </small>
              </span>
              <ArrowUpRight size={15} />
            </div>
          ))}
        </DashboardList>
        <DashboardList
          title="Today’s schedule"
          path="/dashboard/schedules"
          state={state}
          onChange={setState}
        >
          {mockSchedules
            .filter((s) => s.date === "2026-11-18")
            .slice(0, 3)
            .map((s) => (
              <div className="widget-list-item" key={s.id}>
                <span className="schedule-time">{s.time.split(" – ")[0]}</span>
                <span>
                  <strong>{s.subject}</strong>
                  <small>
                    {s.className} · {s.room}
                  </small>
                </span>
              </div>
            ))}
        </DashboardList>
      </div>
      <StudentForm open={studentOpen} onOpenChange={setStudentOpen} />
      <CollectionForm open={collectionOpen} onOpenChange={setCollectionOpen} />
      <NoticeForm open={noticeOpen} onOpenChange={setNoticeOpen} />
    </>
  );
}
function ChevronIcon() {
  return <ArrowUpRight size={13} />;
}
function DashboardList({
  title,
  path,
  state,
  onChange,
  children,
}: {
  title: string;
  path: "/dashboard/exams" | "/dashboard/notices" | "/dashboard/schedules";
  state: ViewState;
  onChange: (s: ViewState) => void;
  children: React.ReactNode;
}) {
  const { t } = usePanel();
  return (
    <section className="dashboard-widget">
      <div className="widget-heading">
        <h2>{t(title)}</h2>
        <StateMenu onChange={onChange} />
      </div>
      {state === "Ready" ? children : <ListState state={state} retry={() => onChange("Ready")} />}
      <Button variant="link" asChild className="widget-view-all">
        <Link href={path}>
          {t("View all")}
          <ArrowRight />
        </Link>
      </Button>
    </section>
  );
}
