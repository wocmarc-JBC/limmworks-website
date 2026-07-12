import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "../../components/site-chrome";
import { notes, notesBySlug, site, whatsappHref } from "../../lib/site";

export function generateStaticParams() { return notes.map((note) => ({ slug: note.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const note = notesBySlug[slug];
  if (!note) return {};
  return {
    title: note.title,
    description: note.excerpt,
    alternates: { canonical: `/owners-notes/${slug}` },
    openGraph: {
      type: "article",
      title: note.title,
      description: note.excerpt,
      url: `/owners-notes/${slug}`,
      images: [{ url: note.image }],
      ...(note.publishedDate ? { publishedTime: note.publishedDate, modifiedTime: note.publishedDate } : {}),
    },
    twitter: { card: "summary_large_image", title: note.title, description: note.excerpt, images: [note.image] },
  };
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = notesBySlug[slug];
  if (!note) notFound();
  const relatedServices = note.relatedServices ?? [{ label: "Review related service", href: note.serviceHref }];
  const sameCategory = notes.filter((item) => item.slug !== note.slug && item.category === note.category);
  const related = [...sameCategory, ...notes.filter((item) => item.slug !== note.slug && item.category !== note.category)].slice(0, 2);
  const publishedLabel = note.publishedDate
    ? new Intl.DateTimeFormat("en-SG", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Singapore" }).format(new Date(note.publishedDate))
    : null;

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [{ "@type": "Article", headline: note.title, description: note.excerpt, image: `${site.domain}${note.image}`, author: { "@id": `${site.domain}/#organization` }, publisher: { "@id": `${site.domain}/#organization` }, mainEntityOfPage: `${site.domain}/owners-notes/${note.slug}`, isPartOf: { "@id": `${site.domain}/owners-notes#collection` }, citation: note.officialResources?.map((resource) => resource.href), about: relatedServices.map((service) => ({ "@id": `${site.domain}${service.href}#service`, "@type": "Service", name: service.label })), inLanguage: "en-SG", ...(note.publishedDate ? { datePublished: note.publishedDate, dateModified: note.publishedDate } : {}) }, { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: site.domain }, { "@type": "ListItem", position: 2, name: "Owner's Notes", item: `${site.domain}/owners-notes` }, { "@type": "ListItem", position: 3, name: note.title, item: `${site.domain}/owners-notes/${note.slug}` }] }] }} />
      <article>
        <header className="article-hero">
          <div className="shell article-hero-inner"><span className="eyebrow eyebrow-light">{note.category} · {note.readTime}{publishedLabel && <> · <time dateTime={note.publishedDate}>Published {publishedLabel}</time></>}</span><h1>{note.title}</h1><p>{note.excerpt}</p></div>
          <Image src={note.image} alt="" width={1920} height={1200} sizes="100vw" preload />
          <div className="article-hero-overlay" />
        </header>
        <div className="shell article-layout">
          <aside>
            <span>Owner&apos;s Notes</span>
            <p>General renovation planning guidance. Actual scope depends on the property, site condition and required checks.</p>
            <div className="article-service-links">
              {relatedServices.map((service) => <Link className="text-link" href={service.href} key={service.href}>{service.label} ↗</Link>)}
            </div>
          </aside>
          <div className="article-body">
            {note.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
            {note.officialResources && (
              <section className="article-resource-section">
                <span className="eyebrow eyebrow-gold">Official references</span>
                <h2>Check the current official guidance against the proposal.</h2>
                <p>These links support the planning points explained above. Requirements can change and the official pages should be checked again when the project scope is developed.</p>
                <div className="article-resource-list">
                  {note.officialResources.map((resource) => (
                    <a href={resource.href} target="_blank" rel="noreferrer" key={resource.href}>
                      <strong>{resource.title}</strong>
                      <span>{resource.text}</span>
                      <em>Open official guidance ↗</em>
                    </a>
                  ))}
                </div>
              </section>
            )}
            <div className="article-cta"><h2>Use the note as a starting point.</h2><p>Send the floor plan, site photos and rough scope for an initial project review.</p><a className="button button-gold" href={whatsappHref(`Owner's Note: ${note.title}`)}>WhatsApp LIMM Works</a></div>
          </div>
        </div>
      </article>
      <section className="section section-notes"><div className="shell"><div className="section-heading"><div><span className="eyebrow">Continue reading</span><h2>Related Owner&apos;s Notes.</h2></div></div><div className="notes-grid notes-grid-compact">{related.map((item) => <Link className="note-card" href={`/owners-notes/${item.slug}`} key={item.slug}><span>{item.category} · {item.readTime}</span><h3>{item.title}</h3><p>{item.excerpt}</p><strong>Read note ↗</strong></Link>)}</div></div></section>
    </>
  );
}
