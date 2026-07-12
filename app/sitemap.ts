import type { MetadataRoute } from "next";
import { notes, projects, services, site } from "./lib/site";

const siteLaunchDate = new Date("2026-07-11T00:00:00+08:00");
const businessDetailsUpdateDate = new Date("2026-07-12T00:00:00+08:00");

function imageUrls(paths: string[]) {
  return [...new Set(paths)].map((path) => `${site.domain}${path}`);
}

const homepageImages = imageUrls([
  "/projects/landed-open-plan-living.jpg",
  "/projects/landed-glass-entry.jpg",
  "/projects/condo-tv-feature-wall.jpg",
  "/projects/commercial-dining-fitout.jpg",
]);

const projectIndexImages = imageUrls(projects.map((project) => project.image));
const noteIndexImages = imageUrls(notes.map((note) => note.image));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.domain, lastModified: businessDetailsUpdateDate, changeFrequency: "weekly", priority: 1, images: homepageImages },
    ...Object.values(services).map((service) => ({
      url: `${site.domain}/${service.slug}`,
      lastModified: siteLaunchDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
      images: imageUrls([service.image, projects[service.projectIndex].image]),
    })),
    { url: `${site.domain}/projects`, lastModified: siteLaunchDate, changeFrequency: "monthly", priority: 0.85, images: projectIndexImages },
    ...projects.map((project) => ({
      url: `${site.domain}/projects/${project.slug}`,
      lastModified: siteLaunchDate,
      changeFrequency: "monthly" as const,
      priority: 0.75,
      images: imageUrls([project.image, ...projects.filter((item) => item.slug !== project.slug).slice(0, 3).map((item) => item.image)]),
    })),
    { url: `${site.domain}/residential`, lastModified: siteLaunchDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.domain}/owners-notes`, lastModified: siteLaunchDate, changeFrequency: "weekly", priority: 0.8, images: noteIndexImages },
    ...notes.map((note) => ({ url: `${site.domain}/owners-notes/${note.slug}`, lastModified: siteLaunchDate, changeFrequency: "monthly" as const, priority: 0.7, images: imageUrls([note.image]) })),
    { url: `${site.domain}/contact`, lastModified: businessDetailsUpdateDate, changeFrequency: "monthly", priority: 0.8, images: imageUrls(["/projects/landed-dining-kitchen.jpg"]) },
    { url: `${site.domain}/about`, lastModified: siteLaunchDate, changeFrequency: "yearly", priority: 0.65, images: imageUrls(["/projects/landed-dining-kitchen.jpg"]) },
  ];
}
