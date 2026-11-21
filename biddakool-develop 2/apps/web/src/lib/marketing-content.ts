import { z } from "zod";

export const navigation = [
  ["Features", "features"],
  ["Who it’s for", "institutions"],
  ["Portals", "portals"],
  ["How it works", "how-it-works"],
  ["FAQ", "faq"],
] as const;

export const institutionTypes = [
  "School",
  "College",
  "University",
  "Medical college",
  "Madrasa",
  "Training center",
] as const;

export const demoSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  institution: z.string().trim().min(2, "Please enter your institution’s name."),
  type: z.enum(institutionTypes, {
    errorMap: () => ({ message: "Please choose an institution type." }),
  }),
  contact: z
    .string()
    .trim()
    .refine(
      (value) => z.string().email().safeParse(value).success || /^\+?[\d\s()-]{7,20}$/.test(value),
      "Enter a valid email address or phone number.",
    ),
  message: z.string().trim().max(2000, "Please keep your message under 2,000 characters."),
});

export const features = [
  {
    title: "Students & Admissions",
    text: "From the first application to graduation, keep every student record in one place.",
    icon: "students",
    tone: "blue",
  },
  {
    title: "Attendance",
    text: "Take attendance in moments. Keep staff and guardians in the loop.",
    icon: "attendance",
    tone: "green",
  },
  {
    title: "Exams & Results",
    text: "Plan exams, enter marks, and publish results without the spreadsheet shuffle.",
    icon: "exams",
    tone: "gold",
  },
  {
    title: "Fees & Receipts",
    text: "Track dues, collect fees, and issue receipts with a clear financial trail.",
    icon: "fees",
    tone: "rose",
  },
  {
    title: "Timetables & Scheduling",
    text: "Bring classes, teachers, and exam schedules together, without the conflicts.",
    icon: "schedule",
    tone: "green",
  },
  {
    title: "Notices & Calendar",
    text: "Share the right updates and important dates with your whole institution.",
    icon: "notices",
    tone: "gold",
  },
  {
    title: "Reports",
    text: "Turn everyday records into a clearer picture of your institution’s progress.",
    icon: "reports",
    tone: "rose",
  },
  {
    title: "Settings & Configuration",
    text: "Make the platform fit your programs, academic terms, and way of working.",
    icon: "settings",
    tone: "blue",
  },
] as const;

export const portals = [
  {
    title: "Administrator",
    label: "A clearer view of everything.",
    text: "Manage admissions, collect fees, publish results, and keep daily operations moving.",
    tasks: ["Manage students and staff", "Collect fees and issue receipts", "Publish exam results"],
    icon: "admin",
  },
  {
    title: "Teacher",
    label: "More teaching. Less paperwork.",
    text: "Stay on top of your classes, take attendance, and enter marks in one place.",
    tasks: ["Take class attendance", "Enter and review marks", "Check your teaching schedule"],
    icon: "teacher",
  },
  {
    title: "Student",
    label: "Your education, at a glance.",
    text: "Keep up with courses, attendance, results, and notices through your own portal.",
    tasks: [
      "See courses and timetables",
      "Track attendance and results",
      "Read institution notices",
    ],
    icon: "student",
  },
  {
    title: "Guardian",
    label: "Stay close to their progress.",
    text: "See your child’s attendance, results, and outstanding fees without a trip to the office.",
    tasks: ["View your child’s results", "Check attendance updates", "Review fees and receipts"],
    icon: "guardian",
  },
] as const;

export const faqs = [
  [
    "Is our institution’s data kept separate?",
    "Yes. Biddakool is designed as a multi-tenant platform: each institution’s data is isolated, and access is based on the user’s role. We can walk you through security and access controls during your demo.",
  ],
  [
    "What types of institutions can use Biddakool?",
    "Schools, colleges, universities, medical colleges, madrasas, and training centers. These are adaptable configurations of one platform, not separate products.",
  ],
  [
    "Does Biddakool support Bangla?",
    "Yes. The platform supports a Bangla and English experience for your institution and its users. This public website is currently in English.",
  ],
  [
    "What does getting started involve?",
    "We begin with a demo, then work with you to configure academic years, programs, and user accounts. Setup timing depends on your institution’s requirements and the records you need to bring over.",
  ],
  [
    "Who gets a portal account?",
    "Administrators, teachers, students, and guardians can have their own accounts, with access suited to their role. Your institution decides who should be invited.",
  ],
  [
    "How much does Biddakool cost?",
    "Pricing is being finalized. Request a demo or contact us to discuss your institution’s needs; no pricing or commitment is required to explore the platform.",
  ],
] as const;
