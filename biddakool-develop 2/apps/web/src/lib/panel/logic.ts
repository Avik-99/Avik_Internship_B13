import type { Student, AttendanceMark, Exam, Collection } from "./mock-data";
export function acceptsDemoCredentials(identity: string, password: string) {
  return identity.trim().length > 0 && password.length > 0;
}
export function summarizeAttendance(students: Student[], marks: Record<string, AttendanceMark>) {
  return students.reduce(
    (total, s) => {
      const mark = marks[s.id] ?? "Present";
      total[mark] += 1;
      return total;
    },
    { Present: 0, Absent: 0, Late: 0 },
  );
}
export function validateCollection(student: Student | undefined, amount: number) {
  return !!student && Number.isFinite(amount) && amount > 0 && amount <= student.due;
}
export function canPublish(exam: Exam) {
  return exam.status === "Completed";
}
export function gradeFor(marks: number) {
  if (marks >= 80) return "A+";
  if (marks >= 70) return "A";
  if (marks >= 60) return "A−";
  if (marks >= 50) return "B";
  if (marks >= 40) return "C";
  if (marks >= 33) return "D";
  return "F";
}
export function collectedThisMonth(collections: Collection[]) {
  return collections
    .filter((c) => c.date.startsWith("2026-11"))
    .reduce((sum, c) => sum + c.amount, 0);
}
export function money(amount: number, language: "en" | "bn" = "en") {
  return `৳ ${new Intl.NumberFormat(language === "bn" ? "bn-BD" : "en-BD", { maximumFractionDigits: 2 }).format(amount)}`;
}
export function filterRows<T>(rows: T[], search: string, text: (row: T) => string) {
  const query = search.trim().toLocaleLowerCase();
  return rows.filter((row) => text(row).toLocaleLowerCase().includes(query));
}
