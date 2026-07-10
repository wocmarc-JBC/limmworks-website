/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { projects, whatsappHref } from "../lib/site";
import { SectionHeading } from "../components/site-chrome";

export const metadata: Metadata = {
  title: "Renovation Projects Singapore",
  description: "Explore real completed LIMM Works projects across landed, condo, kitchen, bathroom, carpentry and commercial renovation in Singapore.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
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
                <Link className="gallery-project-image" href={`/projects/${project.slug}`}><img src={project.image} alt={project.alt} width="1920" height="1200" loading={index > 1 ? "lazy" : "eager"} /></Link>
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
