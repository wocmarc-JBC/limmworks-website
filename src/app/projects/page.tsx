import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { projectPath, projects } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

const title = "Completed Renovation Projects in Singapore";
const description = "See completed LIMM Works renovations in Singapore, including landed homes, condo interiors, kitchens, bathrooms and commercial fit-outs.";

export const metadata = buildMetadata({ title, description, path: "/projects" });

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Completed projects", path: "/projects" },
      ])} />
      <h1 className="text-4xl font-semibold text-[var(--limm-ink)]">{title}</h1>
      <p className="mt-4 max-w-3xl text-lg text-[var(--limm-muted)]">{description}</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link className="overflow-hidden rounded-lg border border-[var(--limm-line)] shadow-sm hover:border-[var(--limm-brass)]" key={project.slug} href={projectPath(project.slug)}>
            <div className="relative aspect-[4/3]">
              <Image fill src={project.image} alt={project.alt} className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
            </div>
            <div className="p-5">
              <p className="text-sm text-[var(--limm-olive)]">{project.category}</p>
              <h2 className="mt-2 text-xl font-semibold text-[var(--limm-ink)]">{project.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--limm-muted)]">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <Link href="/gallery" className="mt-8 inline-block underline">Browse the full project gallery</Link>
    </section>
  );
}
