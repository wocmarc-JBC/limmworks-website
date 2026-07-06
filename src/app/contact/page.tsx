import type { Metadata } from "next";
import { Camera, CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { projectImages } from "@/data/assets";
import { getWhatsappHref, getWhatsappLabel, siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact LIMM Works for an initial project review. Send floor plans, site photos, property type, rough scope, budget range and preferred timeline.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "Contact LIMM Works",
          "Start an initial renovation project review with LIMM Works.",
          "/contact",
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        body="Send your floor plan, site photos, property type and rough scope. LIMM will review the practical context before advising the next step."
        ctaHref="#project-review"
        ctaLabel="Start Project Review"
        eyebrow="Contact"
        image={projectImages.contact}
        imageAlt="Renovation site progress with protection and planning"
        title="Start Project Review"
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionHeader
              className="mx-0"
              eyebrow="What to send"
              title="Send floor plan and site photos with the first enquiry."
              body="Scope and timing may vary depending on property, site condition, management rules and approval needs. A clearer first message helps the review stay practical."
            />
            <div className="mt-8 grid gap-3 text-sm leading-6 text-[var(--limm-muted)]">
              <a
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--limm-brass)] bg-[var(--limm-paper)] p-4 font-semibold text-[var(--limm-ink)] shadow-sm hover:border-[var(--limm-brass-dark)]"
                href={getWhatsappHref()}
              >
                <MessageCircle aria-hidden="true" size={18} />
                WhatsApp: {getWhatsappLabel()}
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-4 hover:border-[var(--limm-brass)]"
                href={`mailto:${siteConfig.email}`}
              >
                <Mail aria-hidden="true" size={18} />
                {siteConfig.email}
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-4 hover:border-[var(--limm-brass)]"
                href={siteConfig.instagram}
                rel="noreferrer"
                target="_blank"
              >
                <Camera aria-hidden="true" size={18} />
                Instagram portfolio
              </a>
            </div>
            <div className="mt-8 rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-5 shadow-sm">
              <p className="text-sm font-semibold text-[var(--limm-clay)]">
                What happens next
              </p>
              <div className="mt-4 grid gap-4">
                {[
                  "LIMM reviews the property type, photos and rough scope.",
                  "Missing details are clarified before deeper costing or scheduling.",
                  "Next steps are discussed around site condition, rules and timing.",
                ].map((item) => (
                  <div className="flex gap-3" key={item}>
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-[var(--limm-olive)]"
                      size={18}
                    />
                    <p className="text-sm leading-6 text-[var(--limm-muted)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
