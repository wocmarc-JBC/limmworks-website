import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { MotionSection } from "@/components/motion-section";
import { OwnerNoteCard } from "@/components/owner-note-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { projectImages } from "@/data/assets";
import { ownerNotes } from "@/data/owners-notes";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Owner's Notes",
  description:
    "Owner's Notes from LIMM Works, covering renovation preparation, condo rules, landed A&A, kitchen, bathroom and carpentry planning.",
  path: "/owners-notes",
});

export default function OwnersNotesPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "Owner's Notes",
          "Practical renovation planning notes from LIMM Works.",
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
        body="Owner's Notes are practical renovation notes from LIMM Works to help homeowners and businesses understand planning, site conditions, scope and coordination before works begin."
        eyebrow="Owner's Notes"
        image={projectImages.homeHero}
        imageAlt="Renovation planning notes from LIMM Works"
        title="Owner's Notes"
      />
      <MotionSection className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Practical renovation guidance"
            title="Notes for clearer decisions before works begin."
            body="These articles help owners frame the right questions around property type, site condition, management rules, approvals, storage, wet works and coordination."
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
