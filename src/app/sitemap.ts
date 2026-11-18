import type { MetadataRoute } from "next";
import { ownerNotes } from "@/data/owners-notes";
import { projectPath, projects } from "@/data/projects";
import { services } from "@/data/services";
import { absoluteUrl } from "@/data/site";

const staticRoutes = ["/", "/gallery", "/projects", "/owners-notes", "/about", "/contact", "/privacy-policy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((path) => ({ url: absoluteUrl(path) })),
    ...services.map((service) => ({ url: absoluteUrl(service.path) })),
    ...ownerNotes.map((note) => ({
      url: absoluteUrl(`/owners-notes/${note.slug}`),
      lastModified: note.date,
    })),
    ...projects.map((project) => ({
      url: absoluteUrl(projectPath(project.slug)),
      images: [absoluteUrl(project.image)],
    })),
  ];
}
