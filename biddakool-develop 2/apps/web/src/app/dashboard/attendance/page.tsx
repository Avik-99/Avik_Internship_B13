import type { Metadata } from "next";
import { AttendancePage } from "@/components/panel/pages";
import { panelMetadata } from "@/lib/panel/metadata";

export const metadata: Metadata = panelMetadata("Attendance", "/dashboard/attendance");

export default function Page() {
  return <AttendancePage />;
}
