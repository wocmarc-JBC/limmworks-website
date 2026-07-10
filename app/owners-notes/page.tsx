/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notes } from "../lib/site";

export const metadata: Metadata = {
  title: "Owner's Notes | Renovation Planning Singapore",
  description: "Practical renovation notes from LIMM Works on landed homes, condo rules, materials, waterproofing, storage and project preparation.",
  alternates: { canonical: "/owners-notes" },
};

export default function OwnersNotesPage() {
  return (
    <>
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
              <div className="note-index-image"><img src={note.image} alt="" width="1920" height="1200" loading={index > 1 ? "lazy" : "eager"} /></div>
              <div className="note-index-copy"><span>{note.category} · {note.readTime}</span><h2>{note.title}</h2><p>{note.excerpt}</p><strong>Read Owner&apos;s Note ↗</strong></div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
