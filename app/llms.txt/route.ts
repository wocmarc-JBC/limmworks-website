import { notes, projects, services, site } from "../lib/site";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    "> Singapore renovation company focused on practical planning, coordinated site execution, landed homes, residential interiors and selected commercial fit-outs.",
    "",
    `Official website: ${site.domain}`,
    `Contact: ${site.email} | ${site.phoneDisplay}`,
    `Office: ${site.address.display}`,
    `Project enquiries: ${site.domain}/contact`,
    "",
    "## Core services",
    "",
    ...Object.values(services).map((service) => `- [${service.metaTitle.replace(" | LIMM Works", "")}](${site.domain}/${service.slug}): ${service.metaDescription}`),
    "",
    "## Completed LIMM Works projects",
    "",
    ...projects.map((project) => `- [${project.title}](${site.domain}/projects/${project.slug}): ${project.description}`),
    "",
    "## Owner's Notes",
    "",
    ...notes.map((note) => `- [${note.title}](${site.domain}/owners-notes/${note.slug}): ${note.excerpt}`),
    "",
    "## Important context",
    "",
    "- LIMM Works serves Singapore.",
    "- The website presents real completed LIMM Works project photos.",
    "- Renovation scope, feasibility, approvals, programme and cost depend on the actual property and site conditions.",
    "- Owner's Notes are general planning guidance and do not replace property-specific professional or authority checks.",
    "- Start an initial project review by sharing the property type, floor plan, current site photos, rough scope, budget range and preferred timeline.",
    "",
    `Sitemap: ${site.domain}/sitemap.xml`,
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
      "x-content-type-options": "nosniff",
    },
  });
}
