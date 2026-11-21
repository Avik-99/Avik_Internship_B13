import type { Metadata } from "next";
import { SimplePage } from "@/components/panel/pages";
import { panelMetadata } from "@/lib/panel/metadata";

export const metadata: Metadata = panelMetadata("Settings", "/dashboard/settings");

export default function Page() {
  return <SimplePage kind="settings" />;
}
