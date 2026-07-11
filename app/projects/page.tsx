import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects, site, whatsappHref } from "../lib/site";
import { JsonLd, SectionHeading } from "../components/site-chrome";

export const metadata: Metadata = {
  title: "Renovation Projects Singapore",
  description: "Explore real completed LIMM Works projects across landed, condo, kitchen, bathroom, carpentry and commercial renovation in Singapore.",
  alternates: { canonical: "/projects" },
  openGraph: { type: "website", title: "Renovation Projects Singapore | LIMM Works", description: "Explore real completed LIMM Works projects across landed, condo, kitchen, bathroom, carpentry and commercial renovation in Singapore.", url: "/projects", images: [{ url: projects[0].image, alt: projects[0].alt }] },
  twitter: { card: "summary_large_image", title: "Renovation Projects Singapore | LIMM Works", description: "Explore real completed LIMM Works renovation projects in Singapore.", images: [projects[0].image] },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${site.domain}/projects#collection`,
        name: "Completed renovation projects by LIMM Works",
        description: metadata.description,
        url: `${site.domain}/projects`,
        isPartOf: { "@id": `${site.domain}/#website` },
        about: { "@id": `${site.domain}/#organization` },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: projects.length,
          itemListElement: projects.map((project, index) => ({ "@type": "ListItem", position: index + 1, name: project.title, url: `${site.domain}/projects/${project.slug}` })),
        },
      }} />
      <section className="page-hero page-hero-projects">
        <div className="shell page-hero-grid">
          <div><span className="eyebrow eyebrow-light">Real completed LIMM Works projects</span><h1>Completed work should explain more than a style.</h1></div>
          <div><p>Explore real LIMM Works projects across landed homes, residential interiors and commercial spaces. Then share your own floor plan and site photos so the review starts from the real property.</p><a className="button button-gold" href={whatsappHref("Projects page")}>WhatsApp your project</a></div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading eyebrow="Completed projects" title="Residential, landed and commercial work by LIMM Works." text="Every photo shown is from a real completed LIMM Works project. Use the planning notes to identify ideas relevant to your own property." />
          <div className="project-gallery">
            {projects.map((project, index) => (
              <article className={`gallery-project ${index % 3 === 0 ? "gallery-project-wide" : ""}`} key={project.title}>
                <Link className="gallery-project-image" href={`/projects/${project.slug}`}><Image src={project.image} alt={project.alt} width={1920} height={1200} sizes={index % 3 === 0 ? "(max-width: 820px) 100vw, 65vw" : "(max-width: 820px) 100vw, 50vw"} /></Link>
                <div className="gallery-project-copy"><span>{project.category}</span><h2><Link href={`/projects/${project.slug}`}>{project.title}</Link></h2><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><Link className="text-link" href={`/projects/${project.slug}`}>View planning details <span aria-hidden="true">↗</span></Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="shell project-context">
          <div><span className="eyebrow">How to use the gallery</span><h2>Point out what matters in your own space.</h2></div>
          <div className="context-list">
            <p><strong>01</strong> Compare the layout, circulation or storage approach.</p>
            <p><strong>02</strong> Mark finishes and details that feel relevant.</p>
            <p><strong>03</strong> Share current photos so the site condition stays visible.</p>
            <p><strong>04</strong> Explain what the household or business needs to improve.</p>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner"><div><span className="eyebrow eyebrow-light">Planning something similar?</span><h2>Start with your own site, not a package.</h2></div><div><p>Send the floor plan, current photos and the completed projects that feel closest to your intended direction.</p><Link className="button button-gold" href="/contact">Prepare project details</Link></div></div>
      </section>
    </>
  );
}
