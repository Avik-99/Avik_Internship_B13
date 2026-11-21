import {
  LayoutDashboard,
  Users,
  CalendarDays,
  ClipboardCheck,
  GraduationCap,
  Wallet,
  Bell,
  Settings,
  ChevronDown,
  ArrowUpRight,
  Search,
  MoreHorizontal,
  Plus,
  PanelLeft,
} from "lucide-react";
import { Brand } from "@/components/brand";

// Replace this whole component with a supplied screenshot when available.
export function ProductPreview() {
  return (
    <div
      className="product-preview"
      role="img"
      aria-label="Illustrative Biddakool administrator dashboard with sample student, attendance, and fee data"
    >
      <div className="preview-browser">
        <div className="browser-dots">
          <i />
          <i />
          <i />
        </div>
        <span>
          <span className="secure-dot" /> Biddakool · Institution workspace
        </span>
        <span className="sample-label">SAMPLE PREVIEW</span>
      </div>
      <div className="preview-app">
        <aside className="preview-sidebar">
          <Brand compact />
          <div className="preview-institution">
            <span className="institution-avatar">
              <GraduationCap size={18} />
            </span>
            <span>
              Example institution<small>Academic year 2026</small>
            </span>
            <ChevronDown size={12} />
          </div>
          <span className="preview-nav-label">WORKSPACE</span>
          {[
            [LayoutDashboard, "Overview"],
            [Users, "Students"],
            [ClipboardCheck, "Attendance"],
            [GraduationCap, "Exams & results"],
            [Wallet, "Fees & receipts"],
            [CalendarDays, "Timetable"],
            [Bell, "Notices"],
          ].map(([Icon, label], index) => {
            const ItemIcon = Icon as typeof Users;
            return (
              <div
                key={String(label)}
                className={`preview-nav-item ${index === 0 ? "selected" : ""}`}
              >
                <ItemIcon size={15} />
                {String(label)}
              </div>
            );
          })}
          <div className="preview-sidebar-bottom">
            <Settings size={15} /> Settings & configuration
          </div>
        </aside>
        <div className="preview-main">
          <div className="preview-topbar">
            <span>
              <PanelLeft size={15} /> Overview
            </span>
            <span>
              <Search size={15} />
              <Bell size={15} />
              <b className="user-avatar">AK</b>
            </span>
          </div>
          <div className="preview-content">
            <div className="preview-welcome">
              <div>
                <span className="preview-breadcrumb">Your institution, at a glance</span>
                <h3>
                  Good morning, Admin <span className="wave">☀</span>
                </h3>
                <p>Here’s what’s happening at your institution today.</p>
              </div>
              <span className="preview-date">
                <CalendarDays size={13} /> 18 November 2026
              </span>
            </div>
            <div className="preview-stats">
              {[
                {
                  icon: Users,
                  label: "Total students",
                  value: "1,248",
                  note: "Across all programs",
                  tone: "blue",
                },
                {
                  icon: ClipboardCheck,
                  label: "Today’s attendance",
                  value: "94.2%",
                  note: "Present and ready to learn",
                  tone: "green",
                },
                {
                  icon: Wallet,
                  label: "Fees collected",
                  value: "৳ 2,84,500",
                  note: "This month",
                  tone: "gold",
                },
                {
                  icon: GraduationCap,
                  label: "Upcoming exams",
                  value: "06",
                  note: "Scheduled this month",
                  tone: "rose",
                },
              ].map((s) => (
                <div className="preview-stat" key={s.label}>
                  <span className={`icon-tile tone-${s.tone}`}>
                    <s.icon size={16} />
                  </span>
                  <span>{s.label}</span>
                  <strong>{s.value}</strong>
                  <small>{s.note}</small>
                </div>
              ))}
            </div>
            <div className="preview-panels">
              <div className="preview-chart">
                <div className="preview-panel-title">
                  <strong>Attendance overview</strong>
                  <span>
                    This week <ChevronDown size={10} />
                  </span>
                </div>
                <div className="chart-legend">
                  <i /> Present <i /> Absent
                </div>
                <div className="chart-body">
                  <div className="chart-axis">
                    <span>100%</span>
                    <span>75%</span>
                    <span>50%</span>
                    <span>25%</span>
                  </div>
                  <div className="chart-bars">
                    {["Sun", "Mon", "Tue", "Wed", "Thu"].map((day, i) => (
                      <div className={`chart-day day-${i}`} key={day}>
                        <div>
                          <i />
                          <i />
                        </div>
                        <span>{day}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="preview-notices">
                <div className="preview-panel-title">
                  <strong>Upcoming & notices</strong>
                  <MoreHorizontal size={16} />
                </div>
                {[
                  {
                    day: "22",
                    month: "NOV",
                    title: "Mid-term examinations",
                    sub: "All programs · Examination",
                    tone: "blue",
                  },
                  {
                    day: "25",
                    month: "NOV",
                    title: "Guardian–teacher meeting",
                    sub: "Campus auditorium · Event",
                    tone: "gold",
                  },
                  {
                    day: "30",
                    month: "NOV",
                    title: "Monthly fee deadline",
                    sub: "All students · Reminder",
                    tone: "green",
                  },
                ].map((n) => (
                  <div className="preview-notice" key={n.day}>
                    <span className={`notice-date tone-${n.tone}`}>
                      <b>{n.day}</b>
                      {n.month}
                    </span>
                    <span>
                      <strong>{n.title}</strong>
                      <small>{n.sub}</small>
                    </span>
                    <ArrowUpRight size={13} />
                  </div>
                ))}
              </div>
            </div>
            <div className="preview-bottom">
              <span>
                <span className="secure-dot" /> Everything in one connected workspace.
              </span>
              <span>
                <Plus size={12} /> Add a student
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
