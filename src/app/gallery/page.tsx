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
  title: "Gallery",
  description:
    "Gallery categories for LIMM Works renovation projects, including landed, condo, HDB, kitchen, bathroom, carpentry, commercial and site progress.",
  path: "/gallery",
  image: projectImages.galleryOverview,
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "Gallery",
          "LIMM Works renovation gallery categories.",
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
        body="Project categories are prepared for approved LIMM photos, with current visuals organized by renovation type for easy review."
        eyebrow="Gallery"
        image={projectImages.galleryOverview}
        imageAlt="LIMM Works renovation gallery"
        title="Project gallery"
      />
      <MotionSection className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Project categories"
            title="Six categories for LIMM project proof."
            body="Use the same category structure when LIMM project photos are ready: landed, condo/HDB, kitchen/bathroom, carpentry/storage, commercial and site progress."
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
