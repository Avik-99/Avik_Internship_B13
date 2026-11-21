"use client";

import { useState, useSyncExternalStore } from "react";
import { useSearchParams } from "next/navigation";
import {
  Plus,
  Check,
  ArrowLeft,
  ArrowUpRight,
  ReceiptText,
  Pencil,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { usePanel } from "./provider";
import { DataTable, Person, StatusBadge, ListState, StateMenu, type ViewState } from "./data-table";
import { StudentForm, CollectionForm, NoticeForm } from "./forms";
import { panelCopy } from "@/lib/panel/copy";
import {
  classes,
  mockAcademics,
  mockSchedules,
  mockStaff,
  mockReports,
  mockSettings,
  type AttendanceMark,
  type Notice,
} from "@/lib/panel/mock-data";
import { money, summarizeAttendance, gradeFor } from "@/lib/panel/logic";
export function PageHeading({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  const { t } = usePanel();
  return (
    <div className="page-heading">
      <div>
        <h1>{t(title)}</h1>
        <p>{t(description)}</p>
      </div>
      <div className="page-heading-actions">{children}</div>
    </div>
  );
}
// Next.js port of the TanStack students route: validateSearch/useSearch become
// useSearchParams. Reading it at render time would suspend the prerender
// (search params are unknown at build time) and drop this page's segment from
// the static shell, so the read is deferred to a child that only renders after
// mount (useSyncExternalStore server snapshot is false). Until then the
// unfiltered table prerenders; once mounted, the child reads ?q= reactively
// and DataTable resets via its initialSearch handling.
const subscribeNoop = () => () => {};
export function StudentsRoute() {
  const mounted = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );
  if (!mounted) return <StudentsPage />;
  return <StudentsWithSearch />;
}
function StudentsWithSearch() {
  const q = useSearchParams().get("q") ?? "";
  return <StudentsPage initialSearch={q} />;
}
export function StudentsPage({ initialSearch = "" }: { initialSearch?: string }) {
  const { t, students } = usePanel();
  const [open, setOpen] = useState(false);
  return (
    <>
      <PageHeading title="Students" description={panelCopy.descriptions.students}>
        <Button onClick={() => setOpen(true)}>
          <Plus />
          {t("Add student")}
        </Button>
      </PageHeading>
      <DataTable
        rows={students}
        initialSearch={initialSearch}
        searchText={(s) => `${s.name} ${s.banglaName} ${s.id} ${s.className} ${s.guardian}`}
        filter={{ label: "All classes", value: (s) => s.className, options: classes }}
        columns={[
          { label: "Student", render: (s) => <Person name={s.name} id={s.id} /> },
          {
            label: "Class / program",
            render: (s) => (
              <span>
                {s.className}
                <small className="cell-secondary">
                  {t("Roll")} {s.roll}
                </small>
              </span>
            ),
          },
          { label: "Section", render: (s) => s.section },
          {
            label: "Guardian",
            render: (s) => (
              <span>
                {s.guardian}
                <small className="cell-secondary">{s.phone}</small>
              </span>
            ),
          },
          { label: "Status", render: (s) => <StatusBadge value={s.status} /> },
        ]}
      />
      <StudentForm open={open} onOpenChange={setOpen} />
    </>
  );
}
export function AttendancePage() {
  const { t, students, attendance, saveAttendance } = usePanel();
  const [className, setClassName] = useState(classes[0] ?? "Class 8");
  const [date, setDate] = useState("2026-11-18");
  const [marks, setMarks] = useState<Record<string, AttendanceMark>>({});
  const [state, setState] = useState<ViewState>("Ready");
  const roster = students.filter((s) => s.className === className && s.status === "Active");
  const summary = summarizeAttendance(roster, marks);
  function load(c: string, d: string) {
    const existing = attendance.find((a) => a.className === c && a.date === d);
    setMarks(existing?.marks ?? {});
  }
  function save() {
    if (!date || roster.length === 0) {
      toast.error(t("Please complete the required fields."));
      return;
    }
    const allMarks = Object.fromEntries(roster.map((s) => [s.id, marks[s.id] ?? "Present"]));
    saveAttendance({
      id: `AT-${date}-${className}`,
      className,
      date,
      present: summary.Present,
      absent: summary.Absent,
      late: summary.Late,
      marks: allMarks,
    });
    toast.success(t("Attendance saved in demo workspace"));
  }
  return (
    <>
      <PageHeading title="Attendance" description={panelCopy.descriptions.attendance}>
        <Button onClick={save} disabled={state !== "Ready" || !roster.length}>
          <Check />
          {t("Save attendance")}
        </Button>
      </PageHeading>
      <div className="attendance-controls">
        <label>
          {t("Class")}
          <select
            value={className}
            onChange={(e) => {
              setClassName(e.target.value);
              load(e.target.value, date);
            }}
          >
            {classes.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label>
          {t("Date")}
          <Input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              load(className, e.target.value);
            }}
          />
        </label>
        <div className="attendance-counts">
          {(["Present", "Absent", "Late"] as const).map((mark) => (
            <span key={mark} className={`attendance-count mark-${mark.toLowerCase()}`}>
              <i />
              {t(mark)}
              <b>{summary[mark]}</b>
            </span>
          ))}
        </div>
      </div>
      <div className="section-inline-heading">
        <h2>
          {className}{" "}
          <span>
            · {roster.length} {t("Students")}
          </span>
        </h2>
        <Button variant="outline" onClick={() => setMarks({})}>
          {t("Mark all present")}
        </Button>
        <StateMenu onChange={setState} />
      </div>
      {state !== "Ready" ? (
        <ListState state={state} retry={() => setState("Ready")} />
      ) : (
        <DataTable
          rows={roster}
          searchText={(s) => `${s.name} ${s.id} ${s.roll}`}
          columns={[
            { label: "Student", render: (s) => <Person name={s.name} id={s.id} /> },
            { label: "Roll", render: (s) => s.roll },
            { label: "Section", render: (s) => s.section },
            {
              label: "Attendance",
              render: (s) => (
                <div className="attendance-marks" aria-label={`${s.name} ${t("Attendance")}`}>
                  {(["Present", "Absent", "Late"] as const).map((mark) => (
                    <Button
                      key={mark}
                      variant="ghost"
                      size="sm"
                      aria-pressed={(marks[s.id] ?? "Present") === mark}
                      className={`mark-${mark.toLowerCase()} ${(marks[s.id] ?? "Present") === mark ? "selected" : ""}`}
                      onClick={() => setMarks((old) => ({ ...old, [s.id]: mark }))}
                    >
                      {t(mark)}
                    </Button>
                  ))}
                </div>
              ),
            },
          ]}
        />
      )}
      <div className="section-inline-heading history-heading">
        <h2>{t("Recent attendance")}</h2>
      </div>
      <DataTable
        rows={attendance}
        searchText={(r) => `${r.className} ${r.date}`}
        filter={{ label: "All classes", value: (r) => r.className, options: classes }}
        columns={[
          { label: "Class", render: (r) => r.className },
          { label: "Date", render: (r) => r.date },
          { label: "Present", render: (r) => r.present },
          { label: "Absent", render: (r) => r.absent },
          { label: "Late", render: (r) => r.late },
        ]}
      />
    </>
  );
}
export function FeesPage() {
  const { t, language, collections, students } = usePanel();
  const [tab, setTab] = useState<"Collections" | "Dues">("Collections");
  const [open, setOpen] = useState(false);
  const dues = students.filter((s) => s.due > 0);
  return (
    <>
      <PageHeading title="Fees" description={panelCopy.descriptions.fees}>
        <Button onClick={() => setOpen(true)}>
          <Plus />
          {t("New collection")}
        </Button>
      </PageHeading>
      <div className="panel-tabs" role="tablist">
        {(["Collections", "Dues"] as const).map((name) => (
          <Button
            variant="ghost"
            role="tab"
            aria-selected={tab === name}
            key={name}
            className={tab === name ? "active" : ""}
            onClick={() => setTab(name)}
          >
            {t(name)}
            <span>{name === "Collections" ? collections.length : dues.length}</span>
          </Button>
        ))}
      </div>
      <div role="tabpanel">
        {tab === "Collections" ? (
          <DataTable
            key="collections"
            rows={collections}
            searchText={(r) => `${r.id} ${r.student} ${r.date} ${r.collector}`}
            filter={{
              label: "Payment method",
              value: (r) => r.method,
              options: ["Cash", "Online"],
            }}
            columns={[
              {
                label: "Receipt no.",
                render: (r) => (
                  <span className="receipt-number">
                    <ReceiptText size={15} />
                    {r.id}
                  </span>
                ),
              },
              { label: "Student", render: (r) => <Person name={r.student} /> },
              { label: "Date", render: (r) => r.date },
              { label: "Amount", render: (r) => <strong>{money(r.amount, language)}</strong> },
              { label: "Payment method", render: (r) => <StatusBadge value={r.method} /> },
              { label: "Collected by", render: (r) => t(r.collector) },
            ]}
          />
        ) : (
          <>
            <div className="dues-summary">
              <span>
                {t("Total due")}
                <small>
                  {dues.length} {t("Students")}
                </small>
              </span>
              <strong>
                {money(
                  dues.reduce((sum, s) => sum + s.due, 0),
                  language,
                )}
              </strong>
            </div>
            <DataTable
              key="dues"
              rows={dues}
              searchText={(s) => `${s.id} ${s.name} ${s.guardian}`}
              filter={{ label: "All classes", value: (s) => s.className, options: classes }}
              columns={[
                { label: "Student", render: (s) => <Person name={s.name} id={s.id} /> },
                { label: "Class", render: (s) => s.className },
                {
                  label: "Guardian",
                  render: (s) => (
                    <span>
                      {s.guardian}
                      <small className="cell-secondary">{s.phone}</small>
                    </span>
                  ),
                },
                {
                  label: "Outstanding amount",
                  render: (s) => <strong className="due-amount">{money(s.due, language)}</strong>,
                },
              ]}
            />
          </>
        )}
      </div>
      <CollectionForm open={open} onOpenChange={setOpen} />
    </>
  );
}
export function ExamsPage() {
  const { t, exams, students, publishExam } = usePanel();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [confirm, setConfirm] = useState(false);
  const exam = exams.find((e) => e.id === selectedId);
  function publish() {
    if (!exam || !publishExam(exam.id)) {
      toast.error(t("Only completed exams can be published."));
      setConfirm(false);
      return;
    }
    toast.success(t("Results published in demo workspace"));
    setConfirm(false);
  }
  if (exam) {
    const results = students
      .filter((s) => s.className === exam.className)
      .map((s, i) => ({ ...s, marks: [87, 74, 65, 92, 58][i % 5] ?? 70 }));
    return (
      <>
        <Button variant="link" className="back-link" onClick={() => setSelectedId(null)}>
          <ArrowLeft />
          {t("Back to exams")}
        </Button>
        <PageHeading title={exam.name} description={`${exam.className} · ${exam.term}`}>
          <StatusBadge value={exam.status} />
          <Button disabled={exam.status !== "Completed"} onClick={() => setConfirm(true)}>
            <ShieldCheck />
            {t("Publish results")}
          </Button>
        </PageHeading>
        <div className="results-note">
          {t("Maximum marks")}: 100 · {t("Fictional sample data")}
          {exam.status === "Draft" && <span>{t("Not ready for publication")}</span>}
        </div>
        <DataTable
          rows={results}
          searchText={(s) => `${s.name} ${s.id}`}
          columns={[
            { label: "Student", render: (s) => <Person name={s.name} id={s.id} /> },
            { label: "Roll", render: (s) => s.roll },
            { label: "Marks", render: (s) => <strong>{s.marks} / 100</strong> },
            {
              label: "Grade",
              render: (s) => <span className="grade-badge">{gradeFor(s.marks)}</span>,
            },
            { label: "Status", render: () => <StatusBadge value={exam.status} /> },
          ]}
        />
        <Dialog open={confirm} onOpenChange={setConfirm}>
          <DialogContent className="panel-form-dialog">
            <DialogTitle>{t("Confirm publication")}</DialogTitle>
            <DialogDescription>
              {t("These results will become published in the demo workspace.")}
            </DialogDescription>
            <div className="receipt-summary">
              <p>
                <span>{t("Exam")}</span>
                <strong>{exam.name}</strong>
              </p>
              <p>
                <span>{t("Class")}</span>
                <strong>{exam.className}</strong>
              </p>
            </div>
            <div className="form-actions">
              <Button variant="outline" onClick={() => setConfirm(false)}>
                {t("Cancel")}
              </Button>
              <Button onClick={publish}>
                {t("Publish results")}
                <Check />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  }
  return (
    <>
      <PageHeading title="Exams" description={panelCopy.descriptions.exams} />
      <DataTable
        rows={exams}
        searchText={(e) => `${e.name} ${e.className} ${e.term}`}
        filter={{
          label: "All statuses",
          value: (e) => e.status,
          options: ["Draft", "Completed", "Published"],
        }}
        columns={[
          { label: "Exam", render: (e) => <strong>{e.name}</strong> },
          { label: "Term", render: (e) => e.term },
          { label: "Class", render: (e) => e.className },
          {
            label: "Date range",
            render: (e) => (
              <span>
                {e.start}
                <small className="cell-secondary">{e.end}</small>
              </span>
            ),
          },
          { label: "Status", render: (e) => <StatusBadge value={e.status} /> },
          {
            label: "Actions",
            render: (e) => (
              <Button variant="link" size="sm" onClick={() => setSelectedId(e.id)}>
                {t("View results")}
                <ArrowUpRight />
              </Button>
            ),
          },
        ]}
      />
    </>
  );
}
export function NoticesPage() {
  const { t, notices } = usePanel();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Notice | undefined>();
  const [view, setView] = useState<Notice | undefined>();
  return (
    <>
      <PageHeading title="Notices" description={panelCopy.descriptions.notices}>
        <Button
          onClick={() => {
            setSelected(undefined);
            setOpen(true);
          }}
        >
          <Plus />
          {t("Create notice")}
        </Button>
      </PageHeading>
      <DataTable
        rows={notices}
        searchText={(n) => `${n.title} ${n.body} ${n.audience}`}
        filter={{
          label: "All audiences",
          value: (n) => n.audience,
          options: ["All", "Students", "Guardians", "Staff"],
        }}
        columns={[
          {
            label: "Title",
            render: (n) => (
              <Button variant="link" onClick={() => setView(n)} className="notice-title">
                {n.title}
              </Button>
            ),
          },
          {
            label: "Audience",
            render: (n) => <span className="audience-badge">{t(n.audience)}</span>,
          },
          { label: "Date", render: (n) => n.date },
          {
            label: "Published state",
            render: (n) => <StatusBadge value={n.published ? "Published" : "Draft"} />,
          },
          {
            label: "Actions",
            render: (n) => (
              <Button
                variant="ghost"
                size="icon"
                aria-label={`${t("Edit notice")}: ${n.title}`}
                title={t("Edit notice")}
                onClick={() => {
                  setSelected(n);
                  setOpen(true);
                }}
              >
                <Pencil />
              </Button>
            ),
          },
        ]}
      />
      <NoticeForm open={open} onOpenChange={setOpen} notice={selected} />
      <Dialog
        open={!!view}
        onOpenChange={(open) => {
          if (!open) setView(undefined);
        }}
      >
        <DialogContent className="panel-form-dialog">
          <DialogTitle>{view?.title}</DialogTitle>
          <DialogDescription>
            {t(view?.audience ?? "All")} · {view?.date}
          </DialogDescription>
          <p className="notice-body">{view?.body}</p>
        </DialogContent>
      </Dialog>
    </>
  );
}
export type SimplePageKind = "academics" | "schedules" | "staff" | "reports" | "settings";
export function SimplePage({ kind }: { kind: SimplePageKind }) {
  const { t, language, students, collections } = usePanel();
  const title = {
    academics: "Academics",
    schedules: "Schedules",
    staff: "Staff",
    reports: "Reports",
    settings: "Settings",
  }[kind];
  const [report, setReport] = useState<string | null>(null);
  const heading = <PageHeading title={title} description={panelCopy.descriptions[kind]} />;
  if (kind === "academics")
    return (
      <>
        {heading}
        <DataTable
          rows={mockAcademics}
          searchText={(r) => `${r.program} ${r.className} ${r.coordinator}`}
          filter={{ label: "All classes", value: (r) => r.className, options: classes }}
          columns={[
            { label: "Program", render: (r) => <strong>{r.program}</strong> },
            { label: "Class", render: (r) => r.className },
            { label: "Duration", render: (r) => r.duration },
            { label: "Coordinator", render: (r) => r.coordinator },
            { label: "Status", render: (r) => <StatusBadge value={r.status} /> },
          ]}
        />
      </>
    );
  if (kind === "schedules")
    return (
      <>
        {heading}
        <DataTable
          rows={mockSchedules}
          searchText={(r) => `${r.subject} ${r.className} ${r.teacher} ${r.date}`}
          filter={{ label: "All classes", value: (r) => r.className, options: classes }}
          columns={[
            { label: "Time", render: (r) => <strong>{r.time}</strong> },
            { label: "Subject", render: (r) => r.subject },
            { label: "Class", render: (r) => r.className },
            { label: "Teacher", render: (r) => r.teacher },
            { label: "Room", render: (r) => r.room },
            { label: "Date", render: (r) => r.date },
          ]}
        />
      </>
    );
  if (kind === "staff")
    return (
      <>
        {heading}
        <DataTable
          rows={mockStaff}
          searchText={(r) => `${r.name} ${r.id} ${r.program} ${r.location}`}
          filter={{
            label: "Role",
            value: (r) => r.role,
            options: ["Teacher", "Administrator", "Accounts officer"],
          }}
          columns={[
            { label: "Name", render: (r) => <Person name={r.name} id={r.id} /> },
            { label: "Role", render: (r) => t(r.role) },
            { label: "Program", render: (r) => r.program },
            { label: "Location", render: (r) => r.location },
            { label: "Status", render: (r) => <StatusBadge value={r.status} /> },
          ]}
        />
      </>
    );
  if (kind === "settings")
    return (
      <>
        {heading}
        <DataTable
          rows={mockSettings}
          searchText={(r) => `${r.setting} ${r.value} ${r.category}`}
          filter={{
            label: "Category",
            value: (r) => r.category,
            options: ["Institution details", "Academics", "Language", "Fees"],
          }}
          columns={[
            { label: "Setting", render: (r) => <strong>{t(r.setting)}</strong> },
            { label: "Value", render: (r) => t(r.value) },
            { label: "Category", render: (r) => t(r.category) },
          ]}
        />
      </>
    );
  return (
    <>
      {heading}
      <DataTable
        rows={mockReports}
        searchText={(r) => `${r.report} ${r.period}`}
        filter={{
          label: "Period",
          value: (r) => r.period,
          options: ["Academic year 2026", "November 2026", "Second term"],
        }}
        columns={[
          { label: "Report", render: (r) => <strong>{r.report}</strong> },
          { label: "Period", render: (r) => t(r.period) },
          { label: "Updated", render: (r) => r.updated },
          { label: "Status", render: (r) => <StatusBadge value={r.status} /> },
          {
            label: "Actions",
            render: (r) => (
              <Button variant="link" onClick={() => setReport(r.report)}>
                {t("Details")}
                <ArrowUpRight />
              </Button>
            ),
          },
        ]}
      />
      <Dialog
        open={!!report}
        onOpenChange={(value) => {
          if (!value) setReport(null);
        }}
      >
        <DialogContent className="panel-form-dialog">
          <DialogTitle>{report}</DialogTitle>
          <DialogDescription>{t("Fictional sample data")}</DialogDescription>
          <div className="receipt-summary">
            <p>
              <span>{t("Total students")}</span>
              <strong>{students.length}</strong>
            </p>
            <p>
              <span>{t("Fees collected")}</span>
              <strong>
                {money(
                  collections.reduce((sum, c) => sum + c.amount, 0),
                  language,
                )}
              </strong>
            </p>
            <p>
              <span>{t("Outstanding dues")}</span>
              <strong>
                {money(
                  students.reduce((sum, s) => sum + s.due, 0),
                  language,
                )}
              </strong>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
