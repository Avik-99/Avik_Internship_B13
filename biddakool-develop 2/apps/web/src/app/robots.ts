import type { MetadataRoute } from "next";
import { METADATA_BASE_URL } from "./layout";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // The institute panel is a demo behind sign-in; keep crawlers out.
        disallow: ["/dashboard"],
      },
    ],
    sitemap: `${METADATA_BASE_URL}/sitemap.xml`,
  };
}
