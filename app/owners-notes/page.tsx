import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "../components/site-chrome";
import { notes, site } from "../lib/site";

export const metadata: Metadata = {
  title: "Owner's Notes | Renovation Planning Singapore",
  description: "Practical renovation notes from LIMM Works on landed homes, condo rules, materials, waterproofing, storage and project preparation.",
  alternates: { canonical: "/owners-notes" },
  openGraph: { type: "website", title: "Owner's Notes | Renovation Planning Singapore", description: "Practical renovation notes from LIMM Works on landed homes, condo rules, materials, waterproofing, storage and project preparation.", url: "/owners-notes", images: [{ url: notes[0].image }] },
  twitter: { card: "summary_large_image", title: "Owner's Notes | Renovation Planning Singapore", description: "Practical renovation planning guidance from LIMM Works.", images: [notes[0].image] },
};

export default function OwnersNotesPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${site.domain}/owners-notes#collection`,
        name: "LIMM Works Owner's Notes",
        description: metadata.description,
        url: `${site.domain}/owners-notes`,
        isPartOf: { "@id": `${site.domain}/#website` },
        about: { "@id": `${site.domain}/#organization` },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: notes.length,
          itemListElement: notes.map((note, index) => ({ "@type": "ListItem", position: index + 1, name: note.title, url: `${site.domain}/owners-notes/${note.slug}` })),
        },
      }} />
      <section className="page-hero page-hero-notes">
        <div className="shell page-hero-grid">
          <div><span className="eyebrow eyebrow-light">Owner&apos;s Notes</span><h1>Practical renovation guidance before works begin.</h1></div>
          <div><p>Clearer questions around site condition, management rules, wet works, storage and hidden details lead to a more useful project review.</p><Link className="button button-ghost-light" href="/contact">Start project review</Link></div>
        </div>
      </section>

      <section className="section">
        <div className="shell notes-index">
          {notes.map((note, index) => (
            <Link className={`note-index-card ${index === 0 ? "note-index-card-featured" : ""}`} href={`/owners-notes/${note.slug}`} key={note.slug}>
              <div className="note-index-image"><Image src={note.image} alt="" width={1920} height={1200} sizes={index === 0 ? "(max-width: 820px) 100vw, 58vw" : "(max-width: 820px) 100vw, 21vw"} /></div>
              <div className="note-index-copy"><span>{note.category} · {note.readTime}</span><h2>{note.title}</h2><p>{note.excerpt}</p><strong>Read Owner&apos;s Note ↗</strong></div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
