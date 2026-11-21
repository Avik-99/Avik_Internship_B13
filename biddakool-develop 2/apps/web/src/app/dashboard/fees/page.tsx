import type { Metadata } from "next";
import { FeesPage } from "@/components/panel/pages";
import { panelMetadata } from "@/lib/panel/metadata";

export const metadata: Metadata = panelMetadata("Fees", "/dashboard/fees");

export default function Page() {
  return <FeesPage />;
}
