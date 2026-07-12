import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd, SectionHeading } from "./components/site-chrome";
import { assetUrl, notes, projects, site, whatsappHref } from "./lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const mainServices = [
  { number: "01", title: "Landed renovation", text: "Older terrace and semi-detached homes reviewed around layout, water, roofline, access and family use.", href: "/landed-renovation", image: assetUrl("/projects/landed-open-plan-living.jpg") },
  { number: "02", title: "Landed A&A works", text: "Extensions, rear kitchens, car porches, side yards and facade changes with required checks identified early.", href: "/landed-aa-works", image: assetUrl("/projects/landed-glass-entry.jpg") },
  { number: "03", title: "Condo renovation", text: "Interior works planned together with management rules, protection, access, wet works and fabrication.", href: "/condo-renovation", image: assetUrl("/projects/condo-tv-feature-wall.jpg") },
  { number: "04", title: "Commercial renovation", text: "Office, retail and selected fit-outs shaped around building access, operations and handover.", href: "/commercial-renovation", image: assetUrl("/projects/commercial-dining-fitout.jpg") },
];

const focusedServices = [
  { title: "HDB renovation", text: "Resale and new flats reviewed around current requirements, wet works, services and storage.", href: "/hdb-renovation" },
  { title: "Kitchen renovation", text: "Workflow, appliances, carpentry and service access resolved before fabrication.", href: "/kitchen-renovation" },
  { title: "Bathroom renovation", text: "Waterproofing, drainage, layout and fittings coordinated below the visible finish.", href: "/bathroom-renovation" },
  { title: "Carpentry & storage", text: "Built-ins shaped around real contents, site dimensions, hardware and maintenance access.", href: "/carpentry-storage" },
];

export default function Home() {
  const whatsapp = whatsappHref("Homepage", "I can share my property type, floor plan, site photos and rough renovation scope.");

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "HomeAndConstructionBusiness",
            "@id": `${site.domain}/#organization`,
            name: site.name,
            alternateName: site.shortName,
            legalName: site.name,
            url: site.domain,
            description: "Singapore renovation company focused on practical planning, coordinated site execution, landed homes, residential interiors and selected commercial fit-outs.",
            logo: {
              "@type": "ImageObject",
              url: `${site.domain}/brand/limm-mark-gold.svg`,
              contentUrl: `${site.domain}/brand/limm-mark-gold.svg`,
              width: 466,
              height: 512,
            },
            image: `${site.domain}/opengraph-image`,
            foundingDate: "2016",
            telephone: `+${site.phone}`,
            email: site.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: site.address.streetAddress,
              addressLocality: site.address.addressLocality,
              postalCode: site.address.postalCode,
              addressCountry: site.address.addressCountry,
            },
            areaServed: { "@type": "Country", name: "Singapore" },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: `+${site.phone}`,
              email: site.email,
              contactType: "sales",
              areaServed: "SG",
              availableLanguage: ["English"],
            },
            sameAs: [site.instagram, site.facebook],
            knowsAbout: ["Landed renovation", "Additions and alterations", "Condo renovation", "HDB renovation", "Kitchen renovation", "Bathroom renovation", "Carpentry and built-in storage", "Commercial renovation"],
          },
          {
            "@type": "WebSite",
            "@id": `${site.domain}/#website`,
            name: site.name,
            alternateName: site.shortName,
            url: site.domain,
            publisher: { "@id": `${site.domain}/#organization` },
            inLanguage: "en-SG",
          },
          {
            "@type": "WebPage",
            "@id": `${site.domain}/#webpage`,
            name: "Landed, Residential & Commercial Renovation",
            url: site.domain,
            isPartOf: { "@id": `${site.domain}/#website` },
            about: { "@id": `${site.domain}/#organization` },
            inLanguage: "en-SG",
          },
        ],
      }} />

      <section className="home-hero">
        <Image className="home-hero-image" src={assetUrl("/projects/landed-open-plan-living.jpg")} alt="Completed landed home with connected living and kitchen planning" width={1920} height={1200} sizes="100vw" preload />
        <div className="home-hero-overlay" />
        <div className="shell hero-content">
          <span className="eyebrow eyebrow-light">LIMM Works Pte Ltd · Singapore</span>
          <h1>Landed renovation and practical interiors, planned around the real site.</h1>
          <p>For landed homes, condos and selected commercial spaces. Share your floor plan and site photos for an initial project review.</p>
          <div className="hero-actions">
            <a className="button button-gold" href={whatsapp}>WhatsApp your floor plan</a>
            <Link className="button button-ghost-light" href="/projects">View completed work</Link>
          </div>
          <div className="hero-proof">
            <div><strong>Since 2016</strong><span>Singapore renovation company</span></div>
            <div><strong>Landed focus</strong><span>Terrace, semi-D and older homes</span></div>
            <div><strong>Practical review</strong><span>Plans, photos, site and scope first</span></div>
          </div>
        </div>
      </section>

      <section className="section section-intro">
        <div className="shell intro-grid">
          <span className="large-index">01</span>
          <div><span className="eyebrow">About LIMM Works</span><h2>A more considered renovation process, grounded in site reality.</h2></div>
          <div><p>LIMM Works is for homeowners and businesses who want clearer scope, better coordination and responsible advice before works move too far.</p><Link className="text-link" href="/contact">How the project review works <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="shell">
          <SectionHeading eyebrow="Core services" title="Property-specific pages, not one generic renovation story." text="The strongest route starts with the property type and the site constraints that actually shape the work." />
          <div className="service-grid">
            {mainServices.map((service) => (
              <Link href={service.href} className="service-card" key={service.href}>
                <div className="service-card-image"><Image src={service.image} alt="" width={1920} height={1200} sizes="(max-width: 820px) 100vw, 50vw" /></div>
                <div className="service-card-body"><span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><strong>Review service ↗</strong></div>
              </Link>
            ))}
          </div>
          <div className="focused-services">
            {focusedServices.map((service) => <Link href={service.href} key={service.href}><span>Focused service</span><h3>{service.title}</h3><p>{service.text}</p><strong>Review service ↗</strong></Link>)}
          </div>
        </div>
      </section>

      <section className="section section-dark landed-focus">
        <div className="shell landed-focus-grid">
          <div className="landed-focus-copy">
            <span className="eyebrow eyebrow-gold">Smaller landed homes, planned properly</span>
            <h2>Old landed homes need more than a finish-led conversation.</h2>
            <p>Layout, drainage, roofline, waterproofing, access and family routines should be reviewed together before the scope is treated as fixed.</p>
            <div className="hero-actions"><Link className="button button-gold" href="/landed-renovation">Explore landed renovation</Link><Link className="button button-ghost-light" href="/landed-aa-works">Review A&A works</Link></div>
          </div>
          <div className="landed-focus-image"><Image src={assetUrl("/projects/landed-open-plan-living.jpg")} alt="Bright landed home open-plan living and kitchen" width={1920} height={1200} sizes="(max-width: 820px) 100vw, 45vw" /></div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading eyebrow="Selected completed work" title="Real LIMM Works projects, with the practical decisions kept visible." text="Every photo shown is from a real completed LIMM Works project. Use them to show what feels relevant to your own property." action={{ label: "View all projects", href: "/projects" }} />
          <div className="project-grid">
            {projects.slice(0, 3).map((project) => (
              <Link className="project-card" href={`/projects/${project.slug}`} key={project.title}>
                <div className="project-card-image"><Image src={project.image} alt={project.alt} width={1920} height={1200} sizes="(max-width: 820px) 100vw, 33vw" /></div>
                <span>{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><strong className="project-card-link">View planning details ↗</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-process">
        <div className="shell">
          <SectionHeading eyebrow="Initial project review" title="A better first conversation starts with better context." text="No package selling. Share what is known now, and use the first review to identify what still needs checking." />
          <div className="process-grid">
            <article><span>01</span><h3>Send plans and photos</h3><p>Share the property type, floor plan, current site photos, known issues and rough scope.</p></article>
            <article><span>02</span><h3>Review the real constraints</h3><p>Site condition, access, management rules, approval needs and household priorities are surfaced.</p></article>
            <article><span>03</span><h3>Shape the working scope</h3><p>Priorities, sequencing, missing information and the right next step are clarified before detailed costing.</p></article>
          </div>
        </div>
      </section>

      <section className="section section-notes">
        <div className="shell">
          <SectionHeading eyebrow="Owner's Notes" title="Practical renovation guidance before works begin." text="Use these notes to prepare better questions around site conditions, management rules, wet works and scope." action={{ label: "View all notes", href: "/owners-notes" }} />
          <div className="notes-grid">
            {notes.slice(0, 3).map((note) => <Link className="note-card" href={`/owners-notes/${note.slug}`} key={note.slug}><span>{note.category} · {note.readTime}</span><h3>{note.title}</h3><p>{note.excerpt}</p><strong>Read note ↗</strong></Link>)}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner">
          <div><span className="eyebrow eyebrow-light">Contact LIMM Works</span><h2>We&apos;d love to help create your dream home.</h2></div>
          <div><p>Start with the floor plan, current site photos and a rough description of what you want to change.</p><a className="button button-gold" href={whatsapp}>WhatsApp your project details</a></div>
        </div>
      </section>
    </>
  );
}
