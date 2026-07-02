import type { Metadata } from "next";
import { GalleryCard } from "@/components/gallery-card";
import { JsonLd } from "@/components/json-ld";
import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { galleryCategories } from "@/data/gallery";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Gallery",
  description:
    "Preview gallery categories for LIMM Works renovation projects, including landed, condo, HDB, kitchen, bathroom, carpentry, commercial and site progress.",
  path: "/gallery",
  image: "/projects/limm-real/processed/landed-renovation.png",
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "Gallery",
          "LIMM Works renovation gallery preview categories.",
          "/gallery",
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <PageHero
        body="Project categories are prepared for real LIMM photos. Current visuals are preview placeholders and can be replaced through the documented image folders."
        eyebrow="Gallery"
        image="/projects/limm-real/processed/landed-renovation.png"
        imageAlt="LIMM Works gallery preview"
        title="Project gallery preview"
      />
      <MotionSection className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Replaceable project visuals"
            title="Six categories for real project proof."
            body="Use the same category structure when LIMM project photos are ready: landed, condo/HDB, kitchen/bathroom, carpentry/storage, commercial and site progress."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {galleryCategories.map((item) => (
              <GalleryCard item={item} key={item.slug} />
            ))}
          </div>
        </div>
      </MotionSection>
      <section className="bg-[var(--limm-cream)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-6">
          <h2 className="text-2xl font-semibold text-[var(--limm-ink)]">
            Image replacement paths
          </h2>
          <p className="mt-3 text-sm leading-6 text-[var(--limm-muted)]">
            Store incoming real photos in <code>public/projects/limm-real/raw/</code>,
            export web-ready versions to <code>public/projects/limm-real/processed/</code>,
            then update the static gallery data if filenames change.
          </p>
        </div>
      </section>
    </>
  );
}
