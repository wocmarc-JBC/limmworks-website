import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "../../components/site-chrome";
import { projects, projectsBySlug, site, whatsappHref } from "../../lib/site";

const serviceByCategory: Record<string, string> = {
  "Landed renovation": "/landed-renovation",
  "Landed & A&A": "/landed-aa-works",
  "Condo renovation": "/condo-renovation",
  "Kitchen renovation": "/kitchen-renovation",
  "Bathroom renovation": "/bathroom-renovation",
  "Commercial renovation": "/commercial-renovation",
};

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsBySlug[slug];
  if (!project) return {};
  return {
    title: `${project.title} | Completed Renovation Project`,
    description: project.description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: { type: "website", title: project.title, description: project.description, url: `/projects/${slug}`, images: [{ url: project.image, alt: project.alt }] },
    twitter: { card: "summary_large_image", title: project.title, description: project.description, images: [project.image] },
  };
}

export default async function ProjectReferencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsBySlug[slug];
  if (!project) notFound();
  const relatedService = serviceByCategory[project.category] ?? "/contact";
  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [
        {
          "@type": "WebPage",
          "@id": `${site.domain}/projects/${project.slug}#webpage`,
          name: project.title,
          description: project.description,
          url: `${site.domain}/projects/${project.slug}`,
          primaryImageOfPage: { "@type": "ImageObject", contentUrl: `${site.domain}${project.image}`, caption: project.alt },
          isPartOf: { "@id": `${site.domain}/projects#collection` },
          about: { "@id": `${site.domain}/#organization` },
          inLanguage: "en-SG",
        },
        { "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
          { "@type": "ListItem", position: 2, name: "Projects", item: `${site.domain}/projects` },
          { "@type": "ListItem", position: 3, name: project.title, item: `${site.domain}/projects/${project.slug}` },
        ] },
      ] }} />

      <article>
        <header className="project-detail-hero">
          <Image src={project.image} alt={project.alt} width={1920} height={1200} sizes="100vw" preload />
          <div className="project-detail-overlay" />
          <div className="shell project-detail-hero-inner">
            <Link className="back-link" href="/projects">← All completed projects</Link>
            <span className="eyebrow eyebrow-light">{project.category}</span>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
        </header>

        <section className="section section-tight">
          <div className="shell project-detail-intro">
            <div>
              <span className="eyebrow">Completed by LIMM Works</span>
              <h2>Use the completed work to make your own brief more specific.</h2>
            </div>
            <div>
              <p>This is a real completed LIMM Works project. The planning notes highlight practical ideas visible in the finished space that may help shape the brief for your own property.</p>
              <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="section section-cream">
          <div className="shell">
            <div className="section-heading"><div><span className="eyebrow">Planning focus</span><h2>Details worth discussing before the scope is fixed.</h2></div><p>Bring these points back to the floor plan, existing condition and way the property needs to work.</p></div>
            <div className="project-focus-grid">
              {project.planningFocus.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="shell project-useful-grid">
            <div><span className="eyebrow eyebrow-gold">Useful for</span><h2>Reference points for your initial project review.</h2></div>
            <ul className="check-list">{project.usefulFor.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-heading"><div><span className="eyebrow">More completed work</span><h2>Continue through the LIMM Works projects.</h2></div><Link className="text-link" href={relatedService}>Review related service ↗</Link></div>
            <div className="project-grid">
              {related.map((item) => <Link className="project-card" href={`/projects/${item.slug}`} key={item.slug}><div className="project-card-image"><Image src={item.image} alt={item.alt} width={1920} height={1200} sizes="(max-width: 820px) 100vw, 33vw" /></div><span>{item.category}</span><h3>{item.title}</h3><p>{item.description}</p><strong className="project-card-link">View completed project ↗</strong></Link>)}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell final-cta-inner"><div><span className="eyebrow eyebrow-light">Planning something similar?</span><h2>Start with your own plan and site condition.</h2></div><div><p>Send the floor plan, current photos and what you want to improve. Mention this completed project if it helps explain the direction.</p><a className="button button-gold" href={whatsappHref(`Completed project: ${project.title}`, `I would like to discuss a project with some ideas from the completed ${project.title.toLowerCase()} project. I can share my floor plan and site photos.`)}>WhatsApp project details</a></div></div>
        </section>
      </article>
    </>
  );
}
