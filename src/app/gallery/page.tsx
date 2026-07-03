import type { Metadata } from "next";
import { GalleryCard } from "@/components/gallery-card";
import { JsonLd } from "@/components/json-ld";
import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { projectImages } from "@/data/assets";
import { galleryCategories } from "@/data/gallery";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Project Gallery",
  description:
    "Selected renovation, site progress and interior works references from LIMM Works.",
  path: "/gallery",
  image: projectImages.galleryOverview,
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "Project Gallery",
          "Selected renovation, site progress and interior works references from LIMM Works.",
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
        body="Selected renovation, site progress and interior works references."
        eyebrow="Project Gallery"
        image={projectImages.galleryOverview}
        imageAlt="LIMM Works project gallery"
        title="Project Gallery"
      />
      <MotionSection className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Project categories"
            title="Renovation references across practical project types."
            body="Browse landed, condo/HDB, kitchen/bathroom, carpentry/storage, commercial and site progress references in one place."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {galleryCategories.map((item) => (
              <GalleryCard item={item} key={item.slug} />
            ))}
          </div>
        </div>
      </MotionSection>
    </>
  );
}
