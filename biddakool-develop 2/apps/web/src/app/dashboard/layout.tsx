import type { Metadata } from "next";
import { PanelShell } from "@/components/panel/shell";

// The panel is a fictional demo workspace behind a client-side demo-session
// gate: keep it out of search indexes (robots.ts also disallows /dashboard).
// Child pages own their title/description/canonical via panelMetadata().
export const metadata: Metadata = {
  title: {
    default: "Dashboard — Biddakool Institute",
    template: "%s — Biddakool Institute",
  },
  robots: { index: false, follow: false },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PanelShell>{children}</PanelShell>;
}
