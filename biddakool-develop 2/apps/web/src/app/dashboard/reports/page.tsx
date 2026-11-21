import type { Metadata } from "next";
import { SimplePage } from "@/components/panel/pages";
import { panelMetadata } from "@/lib/panel/metadata";

export const metadata: Metadata = panelMetadata("Reports", "/dashboard/reports");

export default function Page() {
  return <SimplePage kind="reports" />;
}
