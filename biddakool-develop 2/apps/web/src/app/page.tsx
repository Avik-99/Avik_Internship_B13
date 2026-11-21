import type { Metadata } from "next";
import { Landing } from "@/components/marketing/landing";
import { faqs } from "@/lib/marketing-content";
import { getYear } from "@/lib/year";
import { METADATA_BASE_URL } from "./layout";

export const metadata: Metadata = {
  // Absolute title: the root layout's title.template only applies to child
  // segments, not its own-segment page (same reason panelMetadata() uses
  // title.absolute), so the brand suffix is spelled out here.
  title: { absolute: "Empowering Education in Bangladesh — Biddakool" },
  description:
    "Bring admissions, attendance, exams, fees, and role-based portals together. Education management for every kind of institution in Bangladesh.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Biddakool — Empowering Education",
    description:
      "One institution. One connected platform. Explore education management built for Bangladesh.",
    url: "/",
  },
};

// Structured data: Organization + (single-item) SoftwareApplication graph and FAQPage
// built from the same content module the page renders.
const SITE_URL = METADATA_BASE_URL;
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Biddakool",
      slogan: "Empowering Education",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      description: "Multi-tenant education management platform for Bangladeshi institutions.",
      areaServed: "BD",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Biddakool",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: "Biddakool",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Education management",
      operatingPlatform: "Web application",
      description:
        "Education management platform for schools, colleges, universities, medical colleges, madrasas, and training centers: admissions, attendance, exams and results, fees and receipts, timetables, notices, and role-based portals.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
      // No pricing is published yet (commercial packaging is undecided); omit offers.
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default async function Home() {
  const year = await getYear();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Landing year={year} />
    </>
  );
}
