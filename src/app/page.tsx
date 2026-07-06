import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Images,
  MessageCircle,
  Send,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { GalleryCard } from "@/components/gallery-card";
import { JsonLd } from "@/components/json-ld";
import { MotionSection } from "@/components/motion-section";
import { OwnerNoteCard } from "@/components/owner-note-card";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { projectImages } from "@/data/assets";
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

const reviewPillars = [
  {
    title: "Project review first",
    body: "Floor plans, site photos and rough scope help shape a more useful discussion before details are fixed.",
  },
  {
    title: "Property-specific planning",
    body: "Condo rules, HDB requirements, landed site condition and commercial access are reviewed as part of the scope.",
  },
  {
    title: "Coordinated site execution",
    body: "Wet works, carpentry, finishes, protection and sequencing are considered together instead of as separate fragments.",
  },
];

const sendChecklist = [
  "Floor plan or existing layout",
  "Current site photos and known issues",
  "Property type and estate or building rules",
  "Rough renovation scope and priorities",
  "Budget range and preferred timeline",
  "Any approvals, drawings or management notes already available",
];

const heroTrustMarkers = [
  "Landed & A&A scope review",
  "Condo and HDB rule awareness",
  "Kitchen, bathroom and carpentry coordination",
  "Commercial fit-out support",
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
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Image
            alt="Warm renovation planning interior for LIMM Works"
            className="pointer-events-none object-cover object-[center_52%]"
            fill
            priority
            sizes="100vw"
            src={projectImages.homeHero}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,38,31,0.88),rgba(31,38,31,0.60),rgba(31,38,31,0.18),rgba(31,38,31,0.04))]" />
          <div className="absolute inset-y-0 left-0 w-[68%] bg-[radial-gradient(circle_at_20%_48%,rgba(31,38,31,0.78),rgba(31,38,31,0.30)_54%,transparent_80%)]" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[rgba(31,38,31,0.92)] to-transparent" />
        </div>
        <div className="mx-auto flex min-h-[76svh] w-full max-w-7xl items-center px-4 py-14 sm:px-6 md:min-h-[84svh] lg:px-8">
          <div className="max-w-4xl [text-shadow:0_2px_28px_rgba(0,0,0,0.28)]">
            <p className="inline-flex rounded-full border border-white/22 bg-white/12 px-3 py-1 text-sm font-semibold text-[var(--limm-sage)] backdrop-blur">
              LIMM Works Pte Ltd
            </p>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight md:text-[4.75rem]">
              Renovation planning for homes, landed properties and commercial spaces.
            </h1>
            <p className="mt-5 text-2xl font-semibold text-white md:text-3xl">
              Planned properly. Built with care.
            </p>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-white/82 md:text-lg">
              Share your floor plan, site photos and rough scope. LIMM Works
              reviews the site context, coordination needs and practical
              renovation path before works move too far.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href={getWhatsappHref()}
                icon={<MessageCircle aria-hidden="true" size={18} />}
              >
                WhatsApp LIMM Works
              </ButtonLink>
              <ButtonLink
                href="/contact"
                icon={<ClipboardCheck aria-hidden="true" size={18} />}
                variant="ghost"
              >
                Start Project Review
              </ButtonLink>
              <ButtonLink
                href="/gallery"
                icon={<Images aria-hidden="true" size={18} />}
                variant="ghost"
              >
                View Our Works
              </ButtonLink>
            </div>
            <div className="mt-8 grid max-w-4xl gap-2.5 text-sm text-white/84 sm:grid-cols-2 lg:grid-cols-4">
              {heroTrustMarkers.map((item) => (
                <div
                  className="flex min-h-14 items-center gap-2 rounded-md border border-white/16 bg-white/10 px-3 py-2 backdrop-blur"
                  key={item}
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="shrink-0 text-[var(--limm-gold-soft)]"
                    size={16}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            className="mx-0"
            eyebrow="About LIMM Works"
            title="A more considered renovation process, grounded in site reality."
            body="LIMM Works is for homeowners and businesses who want clearer planning, better coordination and responsible advice before site works move too far."
          />
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
            {reviewPillars.map((item, index) => (
              <div
                className="rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-5 shadow-sm"
                key={item.title}
              >
                <p className="text-sm font-semibold text-[var(--limm-clay)]">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-[var(--limm-ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--limm-muted)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[var(--limm-paper)] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Core services"
            title="Service pages shaped around the way renovation decisions are made."
            body="Each service area keeps the discussion practical: property type, site condition, daily use, approvals or management rules, and the next useful information to send."
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
              alt="Landed renovation and A&A works"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              src={projectImages.landed}
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
            body="Different property types bring different constraints. LIMM's service structure gives each audience a practical page instead of forcing every project into one generic renovation story."
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

      <MotionSection className="bg-[var(--limm-paper)] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              className="mx-0"
              eyebrow="Project Gallery"
              title="Real project visuals, grouped by the way owners review scope."
              body="Browse selected landed, condo/HDB, kitchen/bathroom, carpentry/storage and commercial references. The gallery is a visual starting point for the project review, not a package catalogue."
            />
            <ButtonLink
              href="/gallery"
              icon={<ArrowRight aria-hidden="true" size={18} />}
              variant="secondary"
            >
              Open Gallery
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.18fr_0.82fr]">
            <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-[var(--limm-line)] bg-[var(--limm-ink)] shadow-[var(--limm-shadow)]">
              <Image
                alt="LIMM Works landed home renovation interior reference"
                className="object-cover object-[center_58%]"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                src={projectImages.landed}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(31,38,31,0.76)] via-[rgba(31,38,31,0.18)] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                <p className="text-sm font-semibold text-[var(--limm-gold-soft)]">
                  Featured visual reference
                </p>
                <h3 className="mt-3 max-w-xl text-2xl font-semibold leading-tight md:text-3xl">
                  Use project photos to discuss scope, sequencing and finish direction.
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/78">
                  Send your own site photos with the references that feel relevant.
                  LIMM can then review the practical renovation context.
                </p>
              </div>
            </div>
            <div className="grid gap-5">
              {galleryCategories.slice(0, 3).map((item) => (
                <GalleryCard item={item} key={item.slug} />
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              className="mx-0"
              eyebrow="Owner's Notes"
              title="Practical renovation notes for homeowners and businesses."
              body="Owner's Notes help owners ask better questions around management rules, landed A&A, waterproofing, storage and project preparation."
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
