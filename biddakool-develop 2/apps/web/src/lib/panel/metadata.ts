import type { Metadata } from "next";

// Next.js port of the TanStack app's panelHead(): per-page panel metadata.
// The title is absolute ("%s — Biddakool Institute") because a layout's
// title.template only applies to child segments, not its own-segment page.
// The dashboard layout still carries the template as a fallback and noindex;
// each page owns its title, description, and canonical URL.
export function panelMetadata(title: string, path: string): Metadata {
  const name = `${title} — Biddakool Institute`;
  const description = `${title} for Biddakool Demo School. A fictional institute workspace preview.`;
  return {
    title: { absolute: name },
    description,
    alternates: { canonical: path },
    openGraph: { title: name, description, url: path },
  };
}
