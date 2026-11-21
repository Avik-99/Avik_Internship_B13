import type { Metadata } from "next";
import { NoticesPage } from "@/components/panel/pages";
import { panelMetadata } from "@/lib/panel/metadata";

export const metadata: Metadata = panelMetadata("Notices", "/dashboard/notices");

export default function Page() {
  return <NoticesPage />;
}
