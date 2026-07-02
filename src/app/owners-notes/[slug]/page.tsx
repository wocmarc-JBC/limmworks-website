import type { Metadata } from "next";
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

  return (
    <>
      <JsonLd data={webPageSchema(note.title, note.description, `/owners-notes/${note.slug}`)} />
      <JsonLd data={articleSchema(note)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Owner's Notes", path: "/owners-notes" },
          { name: note.title, path: `/owners-notes/${note.slug}` },
        ])}
      />
      <article className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold text-[var(--limm-clay)]">
            {note.category} / Preview draft
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight text-[var(--limm-ink)] md:text-5xl">
            {note.title}
          </h1>
          <p className="mt-5 text-pretty text-lg leading-8 text-[var(--limm-muted)]">
            {note.description}
          </p>
          <p className="mt-4 text-sm text-[var(--limm-muted)]">
            Updated {note.date} / {note.readingTime}
          </p>
          <div className="mt-8 rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-5 text-sm leading-6 text-[var(--limm-muted)]">
            Preview Owner&apos;s Notes content. This article is editable starter copy
            and is not claimed as migrated from the current Wix website.
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
        </div>
      </article>
    </>
  );
}
