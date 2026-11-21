"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Check, ArrowRight, ReceiptText } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePanel } from "./provider";
import { classes, type Collection, type Notice } from "@/lib/panel/mock-data";
import { money, validateCollection } from "@/lib/panel/logic";
export function StudentForm({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { t, students, addStudent } = usePanel();
  const [error, setError] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    const read = (key: string) => String(values[key] ?? "").trim();
    if (!read("name") || !read("guardian") || !read("phone") || !read("dob") || !read("roll")) {
      setError(true);
      return;
    }
    addStudent({
      id: `BDS-${Math.max(...students.map((s) => Number(s.id.replace("BDS-", "")))) + 1}`,
      name: read("name"),
      banglaName: read("banglaName"),
      dob: read("dob"),
      gender: read("gender"),
      className: read("className"),
      section: read("section"),
      roll: read("roll"),
      guardian: read("guardian"),
      phone: read("phone"),
      address: read("address"),
      status: "Active",
      due: 0,
    });
    toast.success(t("Student added to demo workspace"));
    onOpenChange(false);
    setError(false);
  }
  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        onOpenChange(value);
        setError(false);
      }}
    >
      <DialogContent className="panel-form-dialog">
        <DialogTitle>{t("New student")}</DialogTitle>
        <DialogDescription>{t("Add a fictional student to this workspace.")}</DialogDescription>
        <form className="panel-form" onSubmit={submit} noValidate>
          <div className="form-grid">
            {[
              { name: "name", label: "Name", type: "text", required: true },
              { name: "banglaName", label: "Bangla name", type: "text", required: false },
              { name: "dob", label: "Date of birth", type: "date", required: true },
              { name: "roll", label: "Roll", type: "text", required: true },
            ].map((field) => (
              <label key={field.name}>
                {t(field.label)}
                {field.required ? " *" : ""}
                <Input name={field.name} type={field.type} required={field.required} />
              </label>
            ))}
            <label>
              {t("Gender")}
              <select name="gender">
                {["Female", "Male", "Other"].map((g) => (
                  <option key={g} value={g}>
                    {t(g)}
                  </option>
                ))}
              </select>
            </label>
            <label>
              {t("Class / program")}
              <select name="className">
                {classes.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>
            <label>
              {t("Section")}
              <select name="section">
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
            </label>
            <label>
              {t("Guardian name")} *<Input name="guardian" required />
            </label>
            <label>
              {t("Guardian phone")} *<Input name="phone" placeholder="01XXX-XXXXXX" required />
            </label>
            <label className="span-full">
              {t("Address")}
              <textarea name="address" rows={2} />
            </label>
          </div>
          {error && (
            <p className="field-error" role="alert">
              {t("Please complete the required fields.")}
            </p>
          )}
          <div className="form-actions">
            <Button variant="outline" type="button" onClick={() => onOpenChange(false)}>
              {t("Cancel")}
            </Button>
            <Button type="submit">
              <Check />
              {t("Save student")}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
export function CollectionForm({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { t, language, students, collectFee } = usePanel();
  const [studentId, setStudentId] = useState("");
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState<"Cash" | "Online">("Cash");
  const [step, setStep] = useState<"form" | "confirm" | "receipt">("form");
  const [receipt, setReceipt] = useState<Collection | null>(null);
  const [error, setError] = useState("");
  const student = students.find((s) => s.id === studentId);
  function close(value: boolean) {
    onOpenChange(value);
    if (!value) {
      setStep("form");
      setError("");
      setAmount("");
      setStudentId("");
      setReceipt(null);
    }
  }
  function review(event: FormEvent) {
    event.preventDefault();
    if (!validateCollection(student, Number(amount))) {
      setError("Enter a positive amount no greater than the student’s outstanding dues.");
      return;
    }
    setError("");
    setStep("confirm");
  }
  function issue() {
    const result = collectFee(studentId, Number(amount), method);
    if (!result) {
      setError("Collection could not be completed");
      toast.error(t("Collection could not be completed"));
      setStep("form");
      return;
    }
    setReceipt(result);
    setStep("receipt");
    toast.success(t("Receipt issued in demo workspace"));
  }
  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent className="panel-form-dialog collection-dialog">
        <DialogTitle>
          {t(
            step === "form"
              ? "New collection"
              : step === "confirm"
                ? "Confirm collection"
                : "Receipt no.",
          )}
          {step === "receipt" && ` ${receipt?.id ?? ""}`}
        </DialogTitle>
        <DialogDescription>
          {t(
            step === "form"
              ? "Please use fictional information."
              : step === "confirm"
                ? "Confirm the details before issuing this demo receipt."
                : "Fictional receipt · No payment was processed",
          )}
        </DialogDescription>
        {step === "form" ? (
          <form onSubmit={review} className="panel-form">
            <label>
              {t("Student")}
              <select
                aria-label={t("Student")}
                value={studentId}
                onChange={(event) => setStudentId(event.target.value)}
              >
                <option value="">{t("Choose a student")}</option>
                {students
                  .filter((s) => s.due > 0)
                  .map((s) => (
                    <option value={s.id} key={s.id}>
                      {s.name} · {s.id}
                    </option>
                  ))}
              </select>
            </label>
            {student && (
              <div className="due-callout">
                {t("Outstanding amount")}
                <strong>{money(student.due, language)}</strong>
              </div>
            )}
            <label>
              {t("Amount")} (৳)
              <Input
                type="number"
                step="0.01"
                min="0.01"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
              />
            </label>
            <label>
              {t("Payment method")}
              <select
                value={method}
                onChange={(event) => setMethod(event.target.value === "Cash" ? "Cash" : "Online")}
              >
                <option value="Cash">{t("Cash")}</option>
                <option value="Online">{t("Online")}</option>
              </select>
            </label>
            {error && (
              <p role="alert" className="field-error">
                {t(error)}
              </p>
            )}
            <div className="form-actions">
              <Button variant="outline" type="button" onClick={() => close(false)}>
                {t("Cancel")}
              </Button>
              <Button type="submit">
                {t("Review collection")}
                <ArrowRight />
              </Button>
            </div>
          </form>
        ) : step === "confirm" ? (
          <>
            <div className="receipt-summary">
              <p>
                <span>{t("Student")}</span>
                <strong>{student?.name}</strong>
              </p>
              <p>
                <span>{t("Amount")}</span>
                <strong>{money(Number(amount), language)}</strong>
              </p>
              <p>
                <span>{t("Payment method")}</span>
                <strong>{t(method)}</strong>
              </p>
              <p>
                <span>{t("Date")}</span>
                <strong>18 Nov 2026</strong>
              </p>
            </div>
            <div className="form-actions">
              <Button variant="outline" onClick={() => setStep("form")}>
                {t("Cancel")}
              </Button>
              <Button onClick={issue}>
                <ReceiptText />
                {t("Issue receipt")}
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="receipt-success">
              <span className="icon-tile tone-green">
                <Check />
              </span>
              <h3>{receipt?.student}</h3>
              <strong>{money(receipt?.amount ?? 0, language)}</strong>
              <p>
                {t(receipt?.method ?? "Cash")} · {receipt?.date}
              </p>
            </div>
            <Button onClick={() => close(false)}>
              {t("Completed")}
              <Check />
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
export function NoticeForm({
  open,
  onOpenChange,
  notice,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  notice?: Notice | undefined;
}) {
  const { t, saveNotice } = usePanel();
  const [error, setError] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.currentTarget));
    const title = String(fields["title"] ?? "").trim();
    const body = String(fields["body"] ?? "").trim();
    const date = String(fields["date"] ?? "");
    if (!title || !body || !date) {
      setError(true);
      return;
    }
    const audience = String(fields["audience"]);
    saveNotice({
      id: notice?.id ?? `NT-${Date.now()}`,
      title,
      body,
      date,
      audience:
        audience === "Students" || audience === "Guardians" || audience === "Staff"
          ? audience
          : "All",
      published: fields["published"] === "on",
    });
    toast.success(t("Notice saved in demo workspace"));
    onOpenChange(false);
    setError(false);
  }
  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        onOpenChange(value);
        setError(false);
      }}
    >
      <DialogContent className="panel-form-dialog">
        <DialogTitle>{t(notice ? "Edit notice" : "Create notice")}</DialogTitle>
        <DialogDescription>{t("The right update, to the right people.")}</DialogDescription>
        <form onSubmit={submit} className="panel-form" noValidate key={notice?.id ?? "new"}>
          <label>
            {t("Title")} *<Input name="title" defaultValue={notice?.title ?? ""} required />
          </label>
          <label>
            {t("Body")} *
            <textarea name="body" rows={5} defaultValue={notice?.body ?? ""} required />
          </label>
          <div className="form-grid">
            <label>
              {t("Audience")}
              <select name="audience" defaultValue={notice?.audience ?? "All"}>
                {["All", "Students", "Guardians", "Staff"].map((a) => (
                  <option key={a} value={a}>
                    {t(a)}
                  </option>
                ))}
              </select>
            </label>
            <label>
              {t("Attach date")} *
              <Input name="date" type="date" defaultValue={notice?.date ?? "2026-11-18"} required />
            </label>
          </div>
          <label className="checkbox-field">
            <input type="checkbox" name="published" defaultChecked={notice?.published ?? false} />
            {t("Publish now")}
          </label>
          {error && (
            <p role="alert" className="field-error">
              {t("Please complete the required fields.")}
            </p>
          )}
          <div className="form-actions">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              {t("Cancel")}
            </Button>
            <Button type="submit">
              <Check />
              {t("Save notice")}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
