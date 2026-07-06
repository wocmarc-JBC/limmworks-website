import type { Metadata } from "next";
import { MessageCircle, Send } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { GalleryCard } from "@/components/gallery-card";
import { JsonLd } from "@/components/json-ld";
import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { projectImages } from "@/data/assets";
import { galleryCategories } from "@/data/gallery";
import { getWhatsappHref } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Project Gallery",
  description:
    "Selected renovation, site context and interior works references from LIMM Works.",
  path: "/gallery",
  image: projectImages.galleryOverview,
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "Project Gallery",
          "Selected renovation, site context and interior works references from LIMM Works.",
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
        body="Selected real project visuals for discussing renovation direction, scope, sequencing and practical details with LIMM Works."
        eyebrow="Project Gallery"
        image={projectImages.galleryOverview}
        imageAlt="LIMM Works project gallery"
        title="Project references for a clearer renovation review."
      />
      <MotionSection className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Project categories"
            title="Use these references to explain what matters in your own space."
            body="The gallery is grouped by practical renovation conversations: property type, detail-heavy areas, storage, commercial fit-out and site context. Send the relevant references with your own floor plan and site photos."
          />
          <div className="mt-8 grid gap-4 rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-5 shadow-sm md:grid-cols-3">
            {[
              "Compare layout and storage needs.",
              "Point out finishes or details you prefer.",
              "Share your own site photos for context.",
            ].map((item) => (
              <p className="text-sm font-medium leading-6 text-[var(--limm-ink)]" key={item}>
                {item}
              </p>
            ))}
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {galleryCategories.map((item) => (
              <GalleryCard item={item} key={item.slug} />
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-lg border border-[var(--limm-line)] bg-[var(--limm-ink)] p-6 text-white shadow-[var(--limm-shadow)] md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold text-[var(--limm-sage)]">
                Ready to discuss your project?
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/76">
                Send LIMM your floor plan, current site photos, rough scope and
                any gallery references that feel close to your intended direction.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={getWhatsappHref()}
                icon={<MessageCircle aria-hidden="true" size={18} />}
              >
                WhatsApp LIMM Works
              </ButtonLink>
              <ButtonLink
                href="/contact"
                icon={<Send aria-hidden="true" size={18} />}
                variant="ghost"
              >
                Start Project Review
              </ButtonLink>
            </div>
          </div>
        </div>
      </MotionSection>
    </>
  );
}
