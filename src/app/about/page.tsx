import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { projectImages } from "@/data/assets";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "About LIMM Works Pte Ltd, a Singapore renovation, project planning and renovation works company for residential, landed and commercial spaces.",
  path: "/about",
});

const values = [
  "Premium but practical renovation advice.",
  "Clear planning before site works move too far.",
  "Coordination across property rules, trades and site realities.",
  "Warm professional communication without overpromising.",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "About LIMM Works",
          "About LIMM Works Pte Ltd and its renovation planning position.",
          "/about",
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        body="LIMM Works Pte Ltd is a Singapore renovation contractor for landed homes, A&A works, condos, HDB flats and commercial interiors. Singapore UEN 201613071M."
        eyebrow="About LIMM Works"
        image={projectImages.about}
        imageAlt="Warm renovation planning interior"
        title="Practical planning. Coordinated renovation works."
      />
      <MotionSection className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            className="mx-0"
            eyebrow="Positioning"
            title="Renovation planning and site execution"
            body="LIMM Works coordinates site preparation, hacking, electrical, plumbing, tiling and custom carpentry through in-house trade teams and its carpentry workshop."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div
                className="rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-5"
                key={value}
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mb-3 text-[var(--limm-olive)]"
                  size={20}
                />
                <p className="text-sm leading-6 text-[var(--limm-ink)]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>
      <section className="bg-[var(--limm-cream)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="How LIMM reviews work"
            title="Site condition and requirements shape the renovation plan."
            body="Different properties have different needs. Condo management rules, HDB permit awareness, landed structure, drainage, waterproofing and commercial access constraints should be surfaced early so the project can be reviewed responsibly."
          />
        </div>
      </section>
    </>
  );
}
