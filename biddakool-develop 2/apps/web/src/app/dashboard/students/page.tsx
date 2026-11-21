import type { Metadata } from "next";
import { StudentsRoute } from "@/components/panel/pages";
import { panelMetadata } from "@/lib/panel/metadata";

export const metadata: Metadata = panelMetadata("Students", "/dashboard/students");

// The page prerenders fully: the ?q= reader (useSearchParams) is deferred
// until after mount inside StudentsRoute, so no Suspense boundary is needed
// here and the segment always renders a non-empty shell (ADR-012 follow-up:
// instant-navigation validation, docs/messages/instant-unrendered-segment).
export default function Page() {
  return <StudentsRoute />;
}
