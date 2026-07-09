import type { Metadata } from "next";
import { Camera, Mail, MessageCircle } from "lucide-react";
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
        imageAlt="Renovation planning materials and site review references"
        imagePosition="center 46%"
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
                className="group rounded-lg border border-[var(--limm-ink)] bg-[var(--limm-ink)] p-5 font-semibold text-white shadow-[var(--limm-shadow-soft)] transition hover:bg-[var(--limm-olive)]"
                data-analytics-event="whatsapp_click"
                data-analytics-label="WhatsApp LIMM Works"
                data-analytics-location="contact_details"
                href={getWhatsappHref()}
              >
                <span className="flex items-center gap-2">
                  <MessageCircle aria-hidden="true" size={19} />
                  WhatsApp LIMM Works
                </span>
                <span className="mt-2 block text-xl text-[var(--limm-gold-soft)]">
                  {getWhatsappLabel()}
                </span>
                <span className="mt-2 block text-sm font-normal leading-6 text-white/72">
                  Send plans, site photos, rough scope and preferred timing for
                  an initial project review.
                </span>
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-4 hover:border-[var(--limm-brass)]"
                data-analytics-event="email_click"
                data-analytics-label="Email"
                data-analytics-location="contact_details"
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
              <div className="mt-4 grid gap-3">
                {[
                  "LIMM reviews the property type, photos and rough scope.",
                  "Missing details are clarified before deeper costing or scheduling.",
                  "Next steps are discussed around site condition, rules and timing.",
                ].map((item, index) => (
                  <div
                    className="flex gap-3 rounded-md border border-[var(--limm-line)] bg-white p-3"
                    key={item}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[var(--limm-sage)] text-xs font-semibold text-[var(--limm-ink)]">
                      {index + 1}
                    </span>
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
