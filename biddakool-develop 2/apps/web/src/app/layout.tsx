import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { PanelProvider } from "@/components/panel/provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Self-hosted via next/font (no Google Fonts request at runtime).
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

// TODO(domain): replace with the real production domain before launch.
export const METADATA_BASE_URL = "https://biddakool.example";

export const metadata: Metadata = {
  metadataBase: new URL(METADATA_BASE_URL),
  title: {
    default: "Biddakool — Empowering Education",
    template: "%s — Biddakool",
  },
  description:
    "One connected education management platform for schools, colleges, universities, medical colleges, madrasas, and training centers in Bangladesh.",
  applicationName: "Biddakool",
  authors: [{ name: "Biddakool" }],
  keywords: [
    "education management",
    "school management software",
    "Bangladesh",
    "student information system",
    "attendance",
    "exam results",
    "fee collection",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Biddakool",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable}`}>
      <body>
        {/* Panel state (language + demo edits) lives in this client context so it
            survives client-side navigation, mirroring the TanStack root route. */}
        <PanelProvider>
          {children}
          <Toaster position="bottom-right" />
        </PanelProvider>
      </body>
    </html>
  );
}
