import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { projectPath, projects } from "@/data/projects";
import { absoluteUrl } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

async function getProject({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return project;
}

export async function generateMetadata(props: Props) {
  const project = await getProject(props);
  return buildMetadata({
    title: project.title + " | Singapore Renovation Project",
    description: project.description,
    path: projectPath(project.slug),
    image: project.image,
  });
}

export default async function ProjectPage(props: Props) {
  const project = await getProject(props);
  const path = projectPath(project.slug);

  return (
    <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd data={{
        ...webPageSchema(project.title, project.description, path),
        "@context": "https://schema.org",
        "@type": "ItemPage",
        primaryImageOfPage: {
          "@type": "ImageObject",
          contentUrl: absoluteUrl(project.image),
          caption: project.alt,
        },
      }} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Completed projects", path: "/projects" },
        { name: project.title, path },
      ])} />
      <Link href="/projects" className="text-sm underline">All completed projects</Link>
      <p className="mt-6 text-sm font-semibold text-[var(--limm-olive)]">{project.category} · Singapore</p>
      <h1 className="mt-2 text-4xl font-semibold text-[var(--limm-ink)]">{project.title}</h1>
      <p className="mt-4 text-lg text-[var(--limm-muted)]">Completed by LIMM Works Pte Ltd. {project.description}</p>
      <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-lg sm:aspect-video">
        <Image fill preload src={project.image} alt={project.alt} sizes="(min-width: 1024px) 960px, 100vw" className="object-cover" />
      </div>
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Planning considerations</h2>
        <div className="mt-4 grid gap-5 md:grid-cols-3">
          {project.planningFocus.map(({ title, text }) => (
            <div key={title} className="rounded-lg border border-[var(--limm-line)] p-5">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--limm-muted)]">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="mt-10 flex flex-wrap gap-5">
        <Link href={project.servicePath} className="underline">{project.category} services</Link>
        <Link href="/contact#project-review" className="underline">Request an initial project review</Link>
      </div>
    </article>
  );
}
