import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { MotionSection } from "@/components/motion-section";
import { OwnerNoteCard } from "@/components/owner-note-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { ownerNotes } from "@/data/owners-notes";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Owner's Notes",
  description:
    "Preview Owner's Notes articles for LIMM Works, covering renovation preparation, condo rules, landed A&A, kitchen, bathroom and carpentry planning.",
  path: "/owners-notes",
});

export default function OwnersNotesPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "Owner's Notes",
          "Preview renovation planning notes from LIMM Works.",
          "/owners-notes",
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Owner's Notes", path: "/owners-notes" },
        ])}
      />
      <PageHero
        body="Practical starter notes for homeowners and businesses. These drafts are editable preview content and are not presented as migrated Wix articles."
        eyebrow="Owner's Notes"
        image="/projects/limm-real/processed/hero-renovation-planning.png"
        imageAlt="Renovation planning notes preview"
        title="Owner's Notes"
      />
      <MotionSection className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Starter article system"
            title="Six practical drafts, ready for Marcus review."
            body="The structure is ready for real article migration later. Current content is preview copy aligned with LIMM's SEO and GEO direction."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ownerNotes.map((note) => (
              <OwnerNoteCard key={note.slug} note={note} />
            ))}
          </div>
        </div>
      </MotionSection>
    </>
  );
}
