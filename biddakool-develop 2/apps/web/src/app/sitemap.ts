import type { MetadataRoute } from "next";
import { METADATA_BASE_URL } from "./layout";

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO(domain): replace METADATA_BASE_URL with the real domain before launch.
  return [
    {
      url: METADATA_BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${METADATA_BASE_URL}/login`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
