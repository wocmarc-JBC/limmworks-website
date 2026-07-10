/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "../../components/site-chrome";
import { notes, notesBySlug, site, whatsappHref } from "../../lib/site";

export function generateStaticParams() { return notes.map((note) => ({ slug: note.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const note = notesBySlug[slug];
  if (!note) return {};
  return { title: note.title, description: note.excerpt, alternates: { canonical: `/owners-notes/${slug}` }, openGraph: { title: note.title, description: note.excerpt, images: [{ url: note.image }] } };
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = notesBySlug[slug];
  if (!note) notFound();
  const sameCategory = notes.filter((item) => item.slug !== note.slug && item.category === note.category);
  const related = [...sameCategory, ...notes.filter((item) => item.slug !== note.slug && item.category !== note.category)].slice(0, 2);

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [{ "@type": "Article", headline: note.title, description: note.excerpt, image: `${site.domain}${note.image}`, author: { "@type": "Organization", name: site.name }, publisher: { "@type": "Organization", name: site.name }, mainEntityOfPage: `${site.domain}/owners-notes/${note.slug}` }, { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: site.domain }, { "@type": "ListItem", position: 2, name: "Owner's Notes", item: `${site.domain}/owners-notes` }, { "@type": "ListItem", position: 3, name: note.title, item: `${site.domain}/owners-notes/${note.slug}` }] }] }} />
      <article>
        <header className="article-hero">
          <div className="shell article-hero-inner"><span className="eyebrow eyebrow-light">{note.category} · {note.readTime}</span><h1>{note.title}</h1><p>{note.excerpt}</p></div>
          <img src={note.image} alt="" width="1920" height="1200" />
          <div className="article-hero-overlay" />
        </header>
        <div className="shell article-layout">
          <aside><span>Owner&apos;s Notes</span><p>General renovation planning guidance. Actual scope depends on the property, site condition and required checks.</p><Link className="text-link" href={note.serviceHref}>Review related service ↗</Link></aside>
          <div className="article-body">
            {note.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
            <div className="article-cta"><h2>Use the note as a starting point.</h2><p>Send the floor plan, site photos and rough scope for an initial project review.</p><a className="button button-gold" href={whatsappHref(`Owner's Note: ${note.title}`)}>WhatsApp LIMM Works</a></div>
          </div>
        </div>
      </article>
      <section className="section section-notes"><div className="shell"><div className="section-heading"><div><span className="eyebrow">Continue reading</span><h2>Related Owner&apos;s Notes.</h2></div></div><div className="notes-grid notes-grid-compact">{related.map((item) => <Link className="note-card" href={`/owners-notes/${item.slug}`} key={item.slug}><span>{item.category} · {item.readTime}</span><h3>{item.title}</h3><p>{item.excerpt}</p><strong>Read note ↗</strong></Link>)}</div></div></section>
    </>
  );
}
