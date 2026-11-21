// All names and institutions are fictional. .example emails and masked phones are non-contactable.
export const classes = ["Class 8", "Class 9", "Class 10", "HSC 1st Year", "MBBS"];
export type Student = {
  id: string;
  name: string;
  banglaName: string;
  dob: string;
  gender: string;
  className: string;
  section: string;
  roll: string;
  guardian: string;
  phone: string;
  address: string;
  status: "Active" | "Inactive";
  due: number;
};
const names = [
  "Ayesha Siddika",
  "মোঃ রফিকুল ইসলাম",
  "Nafisa Jahan",
  "Arif Hasan",
  "সুমাইয়া আক্তার",
  "Tanvir Ahmed",
  "Farhana Noor",
  "মাহির রহমান",
  "Nusrat Tasnim",
  "Raihan Kabir",
  "সাদিয়া ইসলাম",
  "Samiul Haque",
  "Jannatul Ferdous",
  "মেহেদী হাসান",
  "Tahsin Rahman",
  "Ishrat Jahan",
  "সাফওয়ান আলী",
  "Maliha Chowdhury",
];
export const mockStudents: Student[] = names.map((name, i) => ({
  id: `BDS-${String(1001 + i)}`,
  name,
  banglaName: /[\u0980-\u09FF]/.test(name) ? name : "",
  dob: `${2009 - (i % 5)}-03-${String(10 + (i % 18)).padStart(2, "0")}`,
  gender: i % 2 ? "Male" : "Female",
  className: classes[i % 5] ?? "Class 8",
  section: i % 2 ? "B" : "A",
  roll: String(i + 1),
  guardian: ["Shahana Begum (sample)", "মোঃ কামাল (নমুনা)", "Nasima Akter (sample)"][i % 3] ?? "",
  phone: `01XXX-XX${String(100 + i)}`,
  address:
    ["Mirpur, Dhaka (sample)", "Panchlaish, Chattogram (sample)", "Zindabazar, Sylhet (sample)"][
      i % 3
    ] ?? "",
  status: i === 8 ? "Inactive" : "Active",
  due: [2400, 1800, 3200, 4500, 6800][i % 5] ?? 0,
}));
export type Collection = {
  id: string;
  studentId: string;
  student: string;
  date: string;
  amount: number;
  method: "Cash" | "Online";
  collector: string;
};
export const mockCollections: Collection[] = mockStudents.slice(0, 9).map((s, i) => ({
  id: `RCP-2026-${String(1201 + i)}`,
  studentId: s.id,
  student: s.name,
  date: `2026-11-${String(10 + i).padStart(2, "0")}`,
  amount: [1200, 1800, 2000][i % 3] ?? 1200,
  method: i % 3 === 0 ? "Online" : "Cash",
  collector: "Demo Administrator",
}));
export type Exam = {
  id: string;
  name: string;
  term: string;
  className: string;
  start: string;
  end: string;
  status: "Draft" | "Completed" | "Published";
};
export const mockExams: Exam[] = [
  {
    id: "EX-01",
    name: "Mid-term assessment",
    term: "Second term",
    className: "Class 8",
    start: "2026-11-10",
    end: "2026-11-14",
    status: "Completed",
  },
  {
    id: "EX-02",
    name: "Annual examination",
    term: "Final term",
    className: "Class 9",
    start: "2026-11-22",
    end: "2026-11-28",
    status: "Draft",
  },
  {
    id: "EX-03",
    name: "HSC progress test",
    term: "Second term",
    className: "HSC 1st Year",
    start: "2026-11-25",
    end: "2026-11-27",
    status: "Draft",
  },
  {
    id: "EX-04",
    name: "First professional assessment",
    term: "First term",
    className: "MBBS",
    start: "2026-10-18",
    end: "2026-10-23",
    status: "Published",
  },
  {
    id: "EX-05",
    name: "Term assessment",
    term: "First term",
    className: "Class 10",
    start: "2026-10-02",
    end: "2026-10-07",
    status: "Completed",
  },
];
export type Notice = {
  id: string;
  title: string;
  body: string;
  audience: "All" | "Students" | "Guardians" | "Staff";
  date: string;
  published: boolean;
};
export const mockNotices: Notice[] = [
  {
    id: "NT-01",
    title: "Mid-term examination schedule",
    body: "The fictional mid-term exam timetable is available. Students should review their class schedule.",
    audience: "Students",
    date: "2026-11-18",
    published: true,
  },
  {
    id: "NT-02",
    title: "অভিভাবক–শিক্ষক সভা",
    body: "এটি একটি নমুনা নোটিশ। আগামী সভায় শিক্ষার্থীদের অগ্রগতি নিয়ে আলোচনা হবে।",
    audience: "Guardians",
    date: "2026-11-17",
    published: true,
  },
  {
    id: "NT-03",
    title: "November fee reminder",
    body: "Sample reminder: please check outstanding dues through your institution portal.",
    audience: "All",
    date: "2026-11-16",
    published: true,
  },
  {
    id: "NT-04",
    title: "Staff planning session",
    body: "Fictional staff planning session for the coming academic term.",
    audience: "Staff",
    date: "2026-11-19",
    published: false,
  },
  {
    id: "NT-05",
    title: "Campus activity day",
    body: "Sample activity day announcement. Details will be shared after planning.",
    audience: "All",
    date: "2026-11-20",
    published: false,
  },
];
export type AttendanceMark = "Present" | "Absent" | "Late";
export type AttendanceRecord = {
  id: string;
  className: string;
  date: string;
  present: number;
  absent: number;
  late: number;
  marks: Record<string, AttendanceMark>;
};
export const mockAttendance: AttendanceRecord[] = [
  {
    id: "AT-01",
    className: "Class 8",
    date: "2026-11-17",
    present: 3,
    absent: 1,
    late: 0,
    marks: {},
  },
  {
    id: "AT-02",
    className: "Class 9",
    date: "2026-11-17",
    present: 3,
    absent: 0,
    late: 1,
    marks: {},
  },
  {
    id: "AT-03",
    className: "Class 10",
    date: "2026-11-16",
    present: 3,
    absent: 0,
    late: 0,
    marks: {},
  },
];
export const mockAttendanceTrend = [
  { week: "Week 1", rate: 88 },
  { week: "Week 2", rate: 92 },
  { week: "Week 3", rate: 90 },
  { week: "Week 4", rate: 95 },
];
export const mockFeeTrend = [
  { month: "Jun", amount: 11200 },
  { month: "Jul", amount: 14800 },
  { month: "Aug", amount: 12600 },
  { month: "Sep", amount: 18300 },
  { month: "Oct", amount: 16700 },
];
export const mockSchedules = [
  {
    id: "SC-01",
    time: "09:00 – 09:45",
    subject: "Mathematics",
    className: "Class 8",
    teacher: "Farida Akter (sample)",
    room: "Room 201",
    date: "2026-11-18",
  },
  {
    id: "SC-02",
    time: "10:00 – 10:45",
    subject: "বাংলা",
    className: "Class 9",
    teacher: "মোঃ নাসির (নমুনা)",
    room: "Room 203",
    date: "2026-11-18",
  },
  {
    id: "SC-03",
    time: "11:00 – 11:45",
    subject: "Physics",
    className: "HSC 1st Year",
    teacher: "Imran Hasan (sample)",
    room: "Science lab",
    date: "2026-11-18",
  },
  {
    id: "SC-04",
    time: "12:00 – 12:45",
    subject: "Anatomy",
    className: "MBBS",
    teacher: "Dr. Nabila Noor (sample)",
    room: "Lab 02",
    date: "2026-11-18",
  },
  {
    id: "SC-05",
    time: "14:00 – 14:45",
    subject: "English",
    className: "Class 10",
    teacher: "Farida Akter (sample)",
    room: "Room 204",
    date: "2026-11-19",
  },
];
export const mockStaff = [
  {
    id: "EMP-001",
    name: "Farida Akter (sample)",
    role: "Teacher",
    program: "Secondary",
    location: "Dhaka",
    status: "Active",
  },
  {
    id: "EMP-002",
    name: "মোঃ নাসির (নমুনা)",
    role: "Teacher",
    program: "Secondary",
    location: "Chattogram",
    status: "Active",
  },
  {
    id: "EMP-003",
    name: "Imran Hasan (sample)",
    role: "Teacher",
    program: "Higher secondary",
    location: "Dhaka",
    status: "Active",
  },
  {
    id: "EMP-004",
    name: "Dr. Nabila Noor (sample)",
    role: "Teacher",
    program: "Medical",
    location: "Sylhet",
    status: "Active",
  },
  {
    id: "EMP-005",
    name: "Sadia Rahman (sample)",
    role: "Administrator",
    program: "Administration",
    location: "Dhaka",
    status: "Active",
  },
  {
    id: "EMP-006",
    name: "Kamal Uddin (sample)",
    role: "Accounts officer",
    program: "Administration",
    location: "Dhaka",
    status: "Inactive",
  },
];
export const mockAcademics = [
  {
    id: "PR-01",
    program: "Secondary",
    className: "Class 8",
    duration: "1 year",
    coordinator: "Farida Akter (sample)",
    status: "Active",
  },
  {
    id: "PR-02",
    program: "Secondary",
    className: "Class 9",
    duration: "1 year",
    coordinator: "মোঃ নাসির (নমুনা)",
    status: "Active",
  },
  {
    id: "PR-03",
    program: "Secondary",
    className: "Class 10",
    duration: "1 year",
    coordinator: "Farida Akter (sample)",
    status: "Active",
  },
  {
    id: "PR-04",
    program: "Higher secondary",
    className: "HSC 1st Year",
    duration: "2 years",
    coordinator: "Imran Hasan (sample)",
    status: "Active",
  },
  {
    id: "PR-05",
    program: "Medical",
    className: "MBBS",
    duration: "5 years",
    coordinator: "Dr. Nabila Noor (sample)",
    status: "Active",
  },
];
export const mockReports = [
  {
    id: "RP-01",
    report: "Student enrollment",
    period: "Academic year 2026",
    updated: "2026-11-18",
    status: "Ready",
  },
  {
    id: "RP-02",
    report: "Class attendance summary",
    period: "November 2026",
    updated: "2026-11-18",
    status: "Ready",
  },
  {
    id: "RP-03",
    report: "Fee collection summary",
    period: "November 2026",
    updated: "2026-11-18",
    status: "Ready",
  },
  {
    id: "RP-04",
    report: "Outstanding dues",
    period: "November 2026",
    updated: "2026-11-18",
    status: "Ready",
  },
  {
    id: "RP-05",
    report: "Exam performance",
    period: "Second term",
    updated: "2026-11-14",
    status: "Ready",
  },
];
export const mockSettings = [
  {
    id: "SET-01",
    setting: "Institution name",
    value: "Biddakool Demo School",
    category: "Institution details",
  },
  { id: "SET-02", setting: "Academic year", value: "2026", category: "Academics" },
  { id: "SET-03", setting: "Default language", value: "English / Bangla", category: "Language" },
  { id: "SET-04", setting: "Currency", value: "BDT (৳)", category: "Fees" },
  { id: "SET-05", setting: "Collection methods", value: "Cash / Online", category: "Fees" },
  {
    id: "SET-06",
    setting: "Campus location",
    value: "Dhaka (fictional)",
    category: "Institution details",
  },
];
