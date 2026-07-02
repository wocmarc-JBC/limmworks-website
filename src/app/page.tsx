import type { Metadata } from "next";
import { ArrowRight, BookOpen, Images, MessageCircle, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { GalleryCard } from "@/components/gallery-card";
import { JsonLd } from "@/components/json-ld";
import { MotionSection } from "@/components/motion-section";
import { OwnerNoteCard } from "@/components/owner-note-card";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { galleryCategories } from "@/data/gallery";
import { ownerNotes } from "@/data/owners-notes";
import { services } from "@/data/services";
import { getWhatsappHref, siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Residential, Landed & Commercial Renovation",
  description:
    "LIMM Works helps homeowners and businesses in Singapore plan practical renovation works with clearer scope, coordination and site execution.",
  path: "/",
});

const quickAnswers = [
  {
    question: "What does LIMM Works do?",
    answer:
      "LIMM Works Pte Ltd supports residential, landed and commercial renovation in Singapore with practical planning, coordination and execution.",
  },
  {
    question: "Does LIMM handle landed A&A works?",
    answer:
      "LIMM Works can review landed A&A scopes such as extensions, car porch, rear kitchen, side-yard and facade works, subject to proper site and approval checks where applicable.",
  },
  {
    question: "What should homeowners send before a project review?",
    answer:
      "Send the floor plan, site photos, property type, rough scope, budget range, preferred timeline and any management or approval documents already available.",
  },
  {
    question: "What affects renovation scope and timeline?",
    answer:
      "Site condition, property type, access, management rules, approval needs, material lead time, fabrication details and wet works can affect scope and timing.",
  },
  {
    question: "What is the difference between landed renovation and A&A?",
    answer:
      "Landed renovation may improve the existing home, while A&A usually changes the property more deeply through additions or alterations that may need further review.",
  },
  {
    question: "What approval or management checks may be needed?",
    answer:
      "Checks vary by property and scope. Condos may have management rules, HDB works may need permit awareness and landed A&A may need professional or authority review.",
  },
  {
    question: "Does LIMM support condo, HDB and commercial projects?",
    answer:
      "Yes. LIMM Works supports condo renovation, HDB renovation and commercial interiors alongside landed renovation and practical carpentry works.",
  },
];

const whyWorkWithLimm = [
  "Practical project review before scope is treated as fixed.",
  "Clearer coordination across renovation, carpentry, wet works and finishes.",
  "Landed renovation and A&A awareness without overpromising feasibility.",
  "Warm, professional communication around site condition and requirements.",
];

const sendChecklist = [
  "Floor plan or existing layout",
  "Current site photos and known issues",
  "Property type and estate or building rules",
  "Rough renovation scope and priorities",
  "Budget range and preferred timeline",
  "Any approvals, drawings or management notes already available",
];

export default function Home() {
  const landedServices = services.filter((service) =>
    ["landed-renovation", "landed-aa-works"].includes(service.slug),
  );
  const residentialCommercial = services.filter((service) =>
    ["condo-renovation", "hdb-renovation", "commercial-renovation"].includes(service.slug),
  );
  const detailServices = services.filter((service) =>
    ["kitchen-renovation", "bathroom-renovation", "carpentry-storage"].includes(service.slug),
  );

  return (
    <>
      <JsonLd
        data={webPageSchema(
          "Residential, Landed & Commercial Renovation",
          siteConfig.description,
          "/",
        )}
      />
      <JsonLd data={faqSchema(quickAnswers)} />
      <section className="relative isolate overflow-hidden bg-[var(--limm-ink)] text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            alt="Warm renovation planning interior for LIMM Works"
            className="object-cover"
            fill
            priority
            sizes="100vw"
            src="/projects/limm-real/processed/hero-renovation-planning.png"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,38,31,0.94),rgba(31,38,31,0.67),rgba(31,38,31,0.16))]" />
        </div>
        <div className="mx-auto flex min-h-[82svh] w-full max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[var(--limm-sage)]">
              LIMM Works Pte Ltd
            </p>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight md:text-6xl">
              Residential, Landed & Commercial Renovation
            </h1>
            <p className="mt-4 text-2xl font-semibold text-white md:text-3xl">
              Planned Properly. Built with Care.
            </p>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-white/82 md:text-lg">
              LIMM Works helps homeowners and businesses plan practical renovation
              works with clearer scope, coordination and site execution.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={getWhatsappHref()}
                icon={<MessageCircle aria-hidden="true" size={18} />}
              >
                WhatsApp LIMM Works
              </ButtonLink>
              <ButtonLink
                href="/gallery"
                icon={<Images aria-hidden="true" size={18} />}
                variant="ghost"
              >
                View Our Works
              </ButtonLink>
              <ButtonLink
                href="/owners-notes"
                icon={<BookOpen aria-hidden="true" size={18} />}
                variant="ghost"
              >
                Read Owner&apos;s Notes
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            className="mx-0"
            eyebrow="About LIMM Works"
            title="Premium enough to be considered, practical enough to be useful."
            body="LIMM Works is positioned for homeowners and businesses who want a more considered renovation process: clearer planning, better coordination and grounded advice before site works move too far."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Residential and commercial renovation",
              "Condo, HDB and landed interior works",
              "Landed renovation and A&A scope review",
              "Kitchen, bathroom, carpentry and storage coordination",
            ].map((item) => (
              <div
                className="rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-5"
                key={item}
              >
                <p className="text-base font-semibold text-[var(--limm-ink)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[var(--limm-paper)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Core services"
            title="Renovation services built around planning, coordination and execution."
            body="LIMM Works is broader than a single-trade contractor. The preview site separates service pages clearly so each page can support search, AI answers and future project proof."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              alt="Landed renovation and A&A preview"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              src="/projects/limm-real/processed/landed-renovation.png"
            />
          </div>
          <div>
            <SectionHeader
              className="mx-0"
              eyebrow="Landed Renovation & A&A"
              title="A stronger landed focus, handled with proper caution."
              body="Old landed homes and A&A scopes can involve structure, roofline, drainage, waterproofing, facade, car porch and extension considerations. Site condition matters, and required professional review or submissions should happen before works proceed where applicable."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {landedServices.map((service) => (
                <Link
                  className="rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-5 transition hover:border-[var(--limm-brass)]"
                  href={service.path}
                  key={service.slug}
                >
                  <p className="text-lg font-semibold text-[var(--limm-ink)]">
                    {service.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--limm-muted)]">
                    {service.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--limm-clay)]">
                    View service
                    <ArrowRight aria-hidden="true" size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[var(--limm-cream)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Condo / HDB / Commercial"
            title="Interior renovation with property rules, access and daily use in mind."
            body="Different property types bring different constraints. LIMM's preview structure gives each audience a practical page instead of forcing every project into one generic renovation story."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {residentialCommercial.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Kitchen / Bathroom / Carpentry"
            title="The detail-heavy scopes that shape daily living."
            body="Storage, waterproofing, appliance dimensions, ventilation, service access and fabrication details often decide whether the finished renovation feels practical."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {detailServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[var(--limm-paper)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              className="mx-0"
              eyebrow="Project gallery preview"
              title="Visual categories ready for real LIMM project photos."
              body="Preview assets are organized so real raw and processed photos can replace them cleanly later."
            />
            <ButtonLink
              href="/gallery"
              icon={<ArrowRight aria-hidden="true" size={18} />}
              variant="secondary"
            >
              Open Gallery
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {galleryCategories.slice(0, 3).map((item) => (
              <GalleryCard item={item} key={item.slug} />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              className="mx-0"
              eyebrow="Owner's Notes preview"
              title="Practical renovation notes for homeowners and businesses."
              body="These are starter preview drafts, not migrated Wix articles. They are structured for future editing, SEO and AI-search answer coverage."
            />
            <ButtonLink
              href="/owners-notes"
              icon={<ArrowRight aria-hidden="true" size={18} />}
              variant="secondary"
            >
              Read Notes
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {ownerNotes.slice(0, 3).map((note) => (
              <OwnerNoteCard key={note.slug} note={note} />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[var(--limm-olive)] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold text-[var(--limm-sage)]">
              Why Work With LIMM
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight md:text-4xl">
              Clearer scope before better execution.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/78 md:text-base">
              Renovation decisions improve when practical constraints are visible
              early. LIMM&apos;s positioning is grounded in review, coordination and
              responsible site execution.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyWorkWithLimm.map((item) => (
              <div className="rounded-lg border border-white/18 bg-white/8 p-5" key={item}>
                <p className="text-sm leading-6 text-white/86">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            className="mx-0"
            eyebrow="What to Send Us"
            title="A better first review starts with better project context."
            body="A simple set of project inputs helps LIMM understand the property, scope and likely constraints before discussing next steps."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {sendChecklist.map((item) => (
              <div
                className="rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-5 text-sm font-medium text-[var(--limm-ink)]"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[var(--limm-cream)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Quick answers"
            title="Concise renovation answers for early planning."
            body="Short, direct answers help homeowners, search engines and AI assistants understand LIMM's services without keyword stuffing."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {quickAnswers.map((item) => (
              <article
                className="rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-5"
                key={item.question}
              >
                <h3 className="text-lg font-semibold text-[var(--limm-ink)]">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--limm-muted)]">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <section className="bg-[var(--limm-ink)] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[var(--limm-sage)]">
              Contact / WhatsApp
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight">
              Start the project review with plans and site photos.
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/76 md:text-base">
              Share practical context first. Scope, requirements and timing may
              vary depending on property, management rules and approval needs.
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
      </section>
    </>
  );
}
