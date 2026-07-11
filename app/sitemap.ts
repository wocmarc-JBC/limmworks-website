import type { MetadataRoute } from "next";
import { notes, projects, services, site } from "./lib/site";

const siteLaunchDate = new Date("2026-07-11T00:00:00+08:00");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.domain, lastModified: siteLaunchDate, changeFrequency: "weekly", priority: 1 },
    ...Object.values(services).map((service) => ({ url: `${site.domain}/${service.slug}`, lastModified: siteLaunchDate, changeFrequency: "monthly" as const, priority: 0.9 })),
    { url: `${site.domain}/projects`, lastModified: siteLaunchDate, changeFrequency: "monthly", priority: 0.85 },
    ...projects.map((project) => ({ url: `${site.domain}/projects/${project.slug}`, lastModified: siteLaunchDate, changeFrequency: "monthly" as const, priority: 0.75 })),
    { url: `${site.domain}/residential`, lastModified: siteLaunchDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.domain}/owners-notes`, lastModified: siteLaunchDate, changeFrequency: "weekly", priority: 0.8 },
    ...notes.map((note) => ({ url: `${site.domain}/owners-notes/${note.slug}`, lastModified: siteLaunchDate, changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: `${site.domain}/contact`, lastModified: siteLaunchDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.domain}/about`, lastModified: siteLaunchDate, changeFrequency: "yearly", priority: 0.65 },
  ];
}
