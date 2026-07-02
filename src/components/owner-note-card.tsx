import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { OwnerNote } from "@/data/owners-notes";

export function OwnerNoteCard({ note }: { note: OwnerNote }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-5">
      <div className="flex items-center justify-between gap-3 text-xs font-medium text-[var(--limm-clay)]">
        <span>{note.category}</span>
        <span>{note.readingTime}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold leading-snug text-[var(--limm-ink)]">
        <Link href={`/owners-notes/${note.slug}`}>{note.title}</Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-[var(--limm-muted)]">
        {note.description}
      </p>
      <Link
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--limm-ink)] hover:text-[var(--limm-clay)]"
        href={`/owners-notes/${note.slug}`}
      >
        Read note
        <ArrowRight aria-hidden="true" size={16} />
      </Link>
    </article>
  );
}
