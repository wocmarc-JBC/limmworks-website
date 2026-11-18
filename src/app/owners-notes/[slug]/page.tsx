import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { ownerNotes, getOwnerNote } from "@/data/owners-notes";
import { buildMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return ownerNotes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = getOwnerNote(slug);

  if (!note) {
    return buildMetadata({
      title: "Owner's Note",
      description: "Owner's Notes from LIMM Works.",
      path: "/owners-notes",
    });
  }

  return buildMetadata({
    title: note.title,
    description: note.description,
    path: `/owners-notes/${note.slug}`,
  });
}

export default async function OwnerNotePage({ params }: Props) {
  const { slug } = await params;
  const note = getOwnerNote(slug);

  if (!note) {
    notFound();
  }

  const noteUrl = `/owners-notes/${note.slug}`;

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          webPageSchema(note.title, note.description, noteUrl),
          articleSchema(note),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Owner's Notes", path: "/owners-notes" },
            { name: note.title, path: noteUrl },
          ]),
        ],
      }} />
      <article className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold text-[var(--limm-clay)]">
            {note.category} / Owner&apos;s Notes
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight text-[var(--limm-ink)] md:text-5xl">
            {note.title}
          </h1>
          <p className="mt-5 text-pretty text-lg leading-8 text-[var(--limm-muted)]">
            {note.description}
          </p>
          <p className="mt-4 text-sm text-[var(--limm-muted)]">
            By LIMM Works · {note.updated ? "Updated" : "Published"}{" "}
            <time dateTime={note.updated ?? note.date}>{note.updated ?? note.date}</time> · {note.readingTime}
          </p>
          <div className="mt-8 rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-5 text-sm leading-6 text-[var(--limm-muted)]">
            These notes are general renovation planning guidance. Actual scope
            depends on property type, site condition, management rules and
            required checks.
          </div>
          <div className="mt-10 grid gap-10">
            {note.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold leading-tight text-[var(--limm-ink)]">
                  {section.heading}
                </h2>
                <div className="mt-4 grid gap-4">
                  {section.body.map((paragraph) => (
                    <p
                      className="text-base leading-8 text-[var(--limm-muted)]"
                      key={paragraph}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
          {note.resources?.length ? (
            <section className="mt-10">
              <h2 className="text-xl font-semibold text-[var(--limm-ink)]">Official guidance</h2>
              <ul className="mt-3 space-y-2">
                {note.resources.map(({ title, href }) => (
                  <li key={href}><a className="underline" href={href}>{title}</a></li>
                ))}
              </ul>
            </section>
          ) : null}
          {note.relatedLinks?.length ? (
            <nav aria-label="Related services and guides" className="mt-8">
              <h2 className="text-xl font-semibold">Related services and guides</h2>
              <ul className="mt-3 space-y-2">
                {note.relatedLinks.map(({ title, href }) => (
                  <li key={href}><Link className="underline" href={href}>{title}</Link></li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
      </article>
    </>
  );
}
