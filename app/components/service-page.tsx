import Image from "next/image";
import Link from "next/link";
import { notesBySlug, projects, ServicePageData, site, whatsappHref } from "../lib/site";
import { JsonLd, SectionHeading } from "./site-chrome";

export function ServicePage({ data }: { data: ServicePageData }) {
  const project = projects[data.projectIndex];
  const related = data.relatedNotes.map((slug) => notesBySlug[slug]).filter(Boolean);
  const whatsapp = whatsappHref(data.title, `I am enquiring about ${data.eyebrow.toLowerCase()}. I can share my floor plan, site photos and rough scope.`);

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            "@id": `${site.domain}/${data.slug}#service`,
            name: data.metaTitle.replace(" | LIMM Works", ""),
            serviceType: data.serviceTypes,
            provider: { "@id": `${site.domain}/#organization` },
            areaServed: { "@type": "Country", name: "Singapore" },
            url: `${site.domain}/${data.slug}`,
            description: data.metaDescription,
            mainEntityOfPage: { "@id": `${site.domain}/${data.slug}#webpage` },
            audience: { "@type": "Audience", audienceType: "Homeowners in Singapore" },
          },
          {
            "@type": "WebPage",
            "@id": `${site.domain}/${data.slug}#webpage`,
            name: data.metaTitle.replace(" | LIMM Works", ""),
            url: `${site.domain}/${data.slug}`,
            description: data.metaDescription,
            primaryImageOfPage: { "@type": "ImageObject", contentUrl: `${site.domain}${data.image}` },
            mainEntity: { "@id": `${site.domain}/${data.slug}#service` },
            about: { "@id": `${site.domain}/#organization` },
            inLanguage: "en-SG",
          },
          {
            "@type": "FAQPage",
            mainEntity: data.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
              { "@type": "ListItem", position: 2, name: data.metaTitle.replace(" | LIMM Works", ""), item: `${site.domain}/${data.slug}` },
            ],
          },
        ],
      }} />

      <section className="service-hero">
        <Image className="service-hero-image" src={data.image} alt={data.imageAlt} width={1920} height={1200} sizes="100vw" preload />
        <div className="service-hero-overlay" />
        <div className="shell service-hero-content">
          <span className="eyebrow eyebrow-light">{data.eyebrow}</span>
          <h1>{data.title}</h1>
          <p>{data.intro}</p>
          <div className="hero-actions">
            <a className="button button-gold" href={whatsapp}>WhatsApp your floor plan</a>
            <Link className="button button-ghost-light" href="/projects">View real project visuals</Link>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="shell intro-grid">
          <span className="large-index">01</span>
          <div>
            <span className="eyebrow">Our approach</span>
            <h2>{data.positioning}</h2>
          </div>
          <p>The first conversation is more useful when the site context and household or business priorities are visible before details are fixed.</p>
        </div>
      </section>

      <section className="section section-cream">
        <div className="shell">
          <SectionHeading eyebrow="Scope" title={data.scopeTitle} text="The exact work depends on the property, but these are the connected areas that usually shape the review." />
          <div className="scope-grid">
            {data.scope.map((item, index) => (
              <article className="scope-card" key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {data.decisionGuide && (
        <section className="section service-decision-section">
          <div className="shell">
            <SectionHeading eyebrow={data.decisionGuide.eyebrow} title={data.decisionGuide.title} text={data.decisionGuide.intro} />
            <div className="decision-grid">
              {data.decisionGuide.items.map((item, index) => (
                <article key={item.title}>
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="decision-cta">
              <div><h3>{data.decisionGuide.ctaTitle}</h3><p>{data.decisionGuide.ctaText}</p></div>
              <a className="button button-dark" href={whatsapp}>WhatsApp plans and photos</a>
            </div>
          </div>
        </section>
      )}

      <section className="section section-dark">
        <div className="shell split-content">
          <div>
            <span className="eyebrow eyebrow-gold">Planning checks</span>
            <h2>{data.checksTitle}</h2>
            <p>{data.checksIntro}</p>
          </div>
          <ul className="check-list">
            {data.checks.map((check) => <li key={check}><span aria-hidden="true">✓</span>{check}</li>)}
          </ul>
        </div>
      </section>

      {data.planningFactors && (
        <section className="section section-cream">
          <div className="shell planning-factor-layout">
            <div className="planning-factor-heading">
              <span className="eyebrow">{data.planningFactors.eyebrow}</span>
              <h2>{data.planningFactors.title}</h2>
              <p>{data.planningFactors.intro}</p>
            </div>
            <div className="planning-factor-list">
              {data.planningFactors.items.map((item, index) => (
                <article key={item.title}>
                  <span>0{index + 1}</span>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="shell project-feature">
          <div className="project-feature-image"><Image src={project.image} alt={project.alt} width={1920} height={1200} sizes="(max-width: 820px) 100vw, 55vw" /></div>
          <div className="project-feature-copy">
            <span className="eyebrow">Completed LIMM Works project · {project.category}</span>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <Link className="text-link" href={`/projects/${project.slug}`}>View this completed project <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      {data.officialGuidance && (
        <section className="section official-guidance-section">
          <div className="shell official-guidance-layout">
            <div>
              <span className="eyebrow">Official guidance</span>
              <h2>{data.officialGuidance.title}</h2>
              <p>{data.officialGuidance.intro}</p>
              <small>Official requirements can change. Links below point to the current official pages and open in a new tab.</small>
            </div>
            <div className="official-resource-list">
              {data.officialGuidance.resources.map((resource) => (
                <a href={resource.href} target="_blank" rel="noreferrer" key={resource.href}>
                  <span>{resource.source}</span>
                  <h3>{resource.title}</h3>
                  <p>{resource.text}</p>
                  <strong>Open official guidance ↗</strong>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section section-cream">
        <div className="shell">
          <SectionHeading eyebrow="Initial project review" title="A clearer path from first message to working scope." text="The process stays cautious where the site or requirements need deeper checks, while keeping the next practical decision visible." />
          <div className="process-grid">
            {data.process.map((item) => <article key={item.step}><span>{item.step}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell faq-layout">
          <div><span className="eyebrow">Frequently asked</span><h2>Questions to settle early.</h2></div>
          <div className="faq-list">
            {data.faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="section section-notes">
        <div className="shell">
          <SectionHeading eyebrow="Owner's Notes" title="Read before the first review." action={{ label: "View all notes", href: "/owners-notes" }} />
          <div className="notes-grid notes-grid-compact">
            {related.map((note) => (
              <Link className="note-card" href={`/owners-notes/${note.slug}`} key={note.slug}>
                <span>{note.category} · {note.readTime}</span><h3>{note.title}</h3><p>{note.excerpt}</p><strong>Read note ↗</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner">
          <div><span className="eyebrow eyebrow-light">Start with practical context</span><h2>Send the floor plan and current site photos.</h2></div>
          <div><p>Include the property type, rough scope, known issues, budget range and preferred timeline.</p><a className="button button-gold" href={whatsapp}>Start project review</a></div>
        </div>
      </section>
    </>
  );
}
