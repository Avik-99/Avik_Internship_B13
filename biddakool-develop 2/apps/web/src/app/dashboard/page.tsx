import type { Metadata } from "next";
import { DashboardHome } from "@/components/panel/home";
import { panelMetadata } from "@/lib/panel/metadata";

export const metadata: Metadata = panelMetadata("Dashboard", "/dashboard");

export default function DashboardPage() {
  return <DashboardHome />;
}
