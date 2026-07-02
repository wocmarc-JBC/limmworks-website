import type { MetadataRoute } from "next";
import { ownerNotes } from "@/data/owners-notes";
import { services } from "@/data/services";
import { absoluteUrl } from "@/data/site";

const staticRoutes = ["/", "/gallery", "/owners-notes", "/about", "/contact"];
const lastModified = new Date("2026-07-02");

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = services.map((service) => service.path);
  const noteRoutes = ownerNotes.map((note) => `/owners-notes/${note.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...noteRoutes].map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.includes("owners-notes/") ? 0.55 : 0.75,
  }));
}
