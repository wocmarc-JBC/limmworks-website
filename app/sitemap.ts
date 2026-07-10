import type { MetadataRoute } from "next";
import { notes, projects, services, site } from "./lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.domain, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...Object.values(services).map((service) => ({ url: `${site.domain}/${service.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 })),
    { url: `${site.domain}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    ...projects.map((project) => ({ url: `${site.domain}/projects/${project.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.75 })),
    { url: `${site.domain}/residential`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.domain}/owners-notes`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...notes.map((note) => ({ url: `${site.domain}/owners-notes/${note.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: `${site.domain}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.domain}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.65 },
  ];
}
