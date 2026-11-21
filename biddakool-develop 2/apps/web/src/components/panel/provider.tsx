"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import {
  mockStudents,
  mockCollections,
  mockExams,
  mockNotices,
  mockAttendance,
  type Student,
  type Collection,
  type Exam,
  type Notice,
  type AttendanceRecord,
} from "@/lib/panel/mock-data";
import { translate, type Language } from "@/lib/panel/copy";
import { canPublish, validateCollection } from "@/lib/panel/logic";

type PanelContextType = {
  language: Language;
  setLanguage: (value: Language) => void;
  t: (text: string) => string;
  students: Student[];
  collections: Collection[];
  exams: Exam[];
  notices: Notice[];
  attendance: AttendanceRecord[];
  addStudent: (student: Student) => void;
  saveAttendance: (record: AttendanceRecord) => void;
  collectFee: (studentId: string, amount: number, method: "Cash" | "Online") => Collection | null;
  publishExam: (id: string) => boolean;
  saveNotice: (notice: Notice) => void;
  reset: () => void;
};
const PanelContext = createContext<PanelContextType | null>(null);
export function PanelProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [students, setStudents] = useState(() => mockStudents.map((s) => ({ ...s })));
  const [collections, setCollections] = useState(() => mockCollections.map((c) => ({ ...c })));
  const [exams, setExams] = useState(() => mockExams.map((e) => ({ ...e })));
  const [notices, setNotices] = useState(() => mockNotices.map((n) => ({ ...n })));
  const [attendance, setAttendance] = useState(() => mockAttendance.map((a) => ({ ...a })));
  function reset() {
    setStudents(mockStudents.map((s) => ({ ...s })));
    setCollections(mockCollections.map((c) => ({ ...c })));
    setExams(mockExams.map((e) => ({ ...e })));
    setNotices(mockNotices.map((n) => ({ ...n })));
    setAttendance(mockAttendance.map((a) => ({ ...a })));
  }
  function collectFee(studentId: string, amount: number, method: "Cash" | "Online") {
    const student = students.find((s) => s.id === studentId);
    if (!student || !validateCollection(student, amount)) return null;
    const receipt: Collection = {
      id: `RCP-2026-${1210 + collections.length - 9}`,
      studentId,
      student: student.name,
      date: "2026-11-18",
      amount,
      method,
      collector: "Demo Administrator",
    };
    setCollections((old) => [receipt, ...old]);
    setStudents((old) =>
      old.map((s) =>
        s.id === studentId ? { ...s, due: Math.round((s.due - amount) * 100) / 100 } : s,
      ),
    );
    return receipt;
  }
  function publishExam(id: string) {
    const exam = exams.find((e) => e.id === id);
    if (!exam || !canPublish(exam)) return false;
    setExams((old) => old.map((e) => (e.id === id ? { ...e, status: "Published" } : e)));
    return true;
  }
  return (
    <PanelContext.Provider
      value={{
        language,
        setLanguage,
        t: (text) => translate(language, text),
        students,
        collections,
        exams,
        notices,
        attendance,
        addStudent: (student) => setStudents((old) => [student, ...old]),
        saveAttendance: (record) =>
          setAttendance((old) => [
            record,
            ...old.filter((a) => !(a.date === record.date && a.className === record.className)),
          ]),
        collectFee,
        publishExam,
        saveNotice: (notice) =>
          setNotices((old) =>
            old.some((n) => n.id === notice.id)
              ? old.map((n) => (n.id === notice.id ? notice : n))
              : [notice, ...old],
          ),
        reset,
      }}
    >
      {children}
    </PanelContext.Provider>
  );
}
export function usePanel() {
  const value = useContext(PanelContext);
  if (!value) throw new Error("PanelProvider is required");
  return value;
}
