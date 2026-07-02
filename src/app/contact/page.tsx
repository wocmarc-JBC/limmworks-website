import type { Metadata } from "next";
import { Camera, Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { getWhatsappHref, siteConfig } from "@/data/site";
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
        body="Share the property type, rough scope, floor plan and site photos so LIMM can begin with practical renovation context."
        ctaHref="#project-review"
        ctaLabel="Start Project Review"
        eyebrow="Contact"
        image="/projects/limm-real/processed/site-progress.png"
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
              body="Scope and timing may vary depending on property, site condition, management rules and approval needs."
            />
            <div className="mt-8 grid gap-3 text-sm leading-6 text-[var(--limm-muted)]">
              <a
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-4 hover:border-[var(--limm-brass)]"
                href={getWhatsappHref()}
              >
                <MessageCircle aria-hidden="true" size={18} />
                WhatsApp: {siteConfig.whatsapp.display}
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
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
