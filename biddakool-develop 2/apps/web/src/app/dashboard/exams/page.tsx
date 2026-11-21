import type { Metadata } from "next";
import { ExamsPage } from "@/components/panel/pages";
import { panelMetadata } from "@/lib/panel/metadata";

export const metadata: Metadata = panelMetadata("Exams", "/dashboard/exams");

export default function Page() {
  return <ExamsPage />;
}
