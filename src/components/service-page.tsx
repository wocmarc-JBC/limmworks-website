import { BookOpen, CheckCircle2, Images, Send } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { JsonLd } from "@/components/json-ld";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import type { Service } from "@/data/services";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/schema";

const serviceProfiles: Record<
  string,
  {
    heroPosition: string;
    scopeEyebrow: string;
    scopeTitle: string;
    scopeBody: string;
  }
> = {
  "landed-renovation": {
    heroPosition: "center 56%",
    scopeEyebrow: "Landed scope profile",
    scopeTitle: "Older landed homes need a fuller site read before scope is fixed.",
    scopeBody:
      "Layout, drainage, roofline, waterproofing, access and family routines should be reviewed together so the renovation plan starts from the real property condition.",
  },
  "landed-aa-works": {
    heroPosition: "center 48%",
    scopeEyebrow: "A&A scope profile",
    scopeTitle: "Extensions and alterations need careful review before works move ahead.",
    scopeBody:
      "Car porch, side-yard, rear kitchen, facade and roofline ideas should be checked against site condition and relevant professional or approval requirements where applicable.",
  },
  "condo-renovation": {
    heroPosition: "center 50%",
    scopeEyebrow: "Condo scope profile",
    scopeTitle: "Condo works are shaped by management rules as much as interior choices.",
    scopeBody:
      "Lift booking, common-area protection, working hours, access and paperwork can affect sequencing before kitchen, bathroom, flooring or carpentry works begin.",
  },
  "hdb-renovation": {
    heroPosition: "center 50%",
    scopeEyebrow: "HDB scope profile",
    scopeTitle: "HDB upgrades work best when permit awareness starts early.",
    scopeBody:
      "Kitchen, bathroom, storage and general interior works should be reviewed with HDB requirements, neighbour impact, access and practical household use in view.",
  },
  "commercial-renovation": {
    heroPosition: "center 58%",
    scopeEyebrow: "Commercial scope profile",
    scopeTitle: "Commercial interiors need fit-out planning around business operations.",
    scopeBody:
      "Access, handover timing, storage, display, landlord requirements and working windows should be aligned so site works support the business rather than disrupt it unnecessarily.",
  },
  "kitchen-renovation": {
    heroPosition: "center 58%",
    scopeEyebrow: "Kitchen scope profile",
    scopeTitle: "Kitchen planning should follow real cooking habits and service needs.",
    scopeBody:
      "Dry and wet kitchen decisions work better when appliance dimensions, sink and hob positions, ventilation, storage and service access are reviewed together.",
  },
  "bathroom-renovation": {
    heroPosition: "center 54%",
    scopeEyebrow: "Bathroom scope profile",
    scopeTitle: "Wet-area quality depends on details planned before finishes.",
    scopeBody:
      "Waterproofing awareness, drainage falls, sanitary fittings, ventilation, access panels and sequencing should be reviewed before tile and fixture choices dominate the scope.",
  },
  "carpentry-storage": {
    heroPosition: "center 48%",
    scopeEyebrow: "Carpentry scope profile",
    scopeTitle: "Measured built-ins need usage, dimensions and hardware clarity.",
    scopeBody:
      "Cabinets, wardrobes, TV consoles and storage work best when actual contents, appliance clearances, sockets, hardware and inside layout are confirmed before fabrication.",
  },
};

export function ServicePage({ service }: { service: Service }) {
  const quickAnswerAudience =
    service.slug === "commercial-renovation" ? "businesses" : "homeowners";
  const profile = serviceProfiles[service.slug];

  return (
    <>
      <JsonLd data={webPageSchema(service.title, service.metaDescription, service.path)} />
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: service.title, path: service.path },
        ])}
      />
      <PageHero
        body={service.summary}
        eyebrow={service.eyebrow}
        image={service.image}
        imageAlt={service.imageAlt}
        imagePosition={profile?.heroPosition}
        serviceSlug={service.slug}
        title={service.title}
      />
      <MotionSection className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            className="mx-0"
            eyebrow={profile?.scopeEyebrow ?? "Scope review"}
            title={
              profile?.scopeTitle ??
              "Planned around site condition, property rules and practical use."
            }
            body={
              profile?.scopeBody ??
              "A renovation scope becomes clearer when the property type, site condition, access, approval needs and daily-use requirements are reviewed together."
            }
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {service.focus.map((item) => (
              <div
                className="rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-5 shadow-sm"
                key={item}
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mb-3 text-[var(--limm-olive)]"
                  size={20}
                />
                <p className="text-sm leading-6 text-[var(--limm-ink)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>
      <MotionSection className="bg-[var(--limm-cream)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            className="mx-0"
            eyebrow={service.uniqueSection.eyebrow}
            title={service.uniqueSection.title}
            body={service.uniqueSection.body}
          />
          <div className="grid gap-4">
            {service.uniqueSection.points.map((point) => (
              <div
                className="rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-5 shadow-sm"
                key={point}
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mb-3 text-[var(--limm-olive)]"
                  size={20}
                />
                <p className="text-sm leading-6 text-[var(--limm-ink)]">{point}</p>
              </div>
            ))}
            {service.uniqueSection.note ? (
              <p className="rounded-lg border border-[var(--limm-line)] bg-white p-5 text-sm leading-6 text-[var(--limm-muted)]">
                {service.uniqueSection.note}
              </p>
            ) : null}
          </div>
        </div>
      </MotionSection>
      <MotionSection className="bg-[var(--limm-paper)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              className="mx-0"
              eyebrow="Planning considerations"
              title="Details to settle before works move too far."
            />
            {service.safeNotice ? (
              <p className="mt-6 rounded-lg border border-[var(--limm-line)] bg-white p-5 text-sm leading-6 text-[var(--limm-muted)]">
                {service.safeNotice}
              </p>
            ) : null}
          </div>
          <ol className="grid gap-4">
            {service.considerations.map((item, index) => (
              <li className="flex gap-4" key={item}>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[var(--limm-sage)] text-sm font-semibold text-[var(--limm-ink)]">
                  {index + 1}
                </span>
                <p className="pt-1 text-sm leading-6 text-[var(--limm-muted)]">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </MotionSection>
      <MotionSection className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            className="mx-0"
            eyebrow="Initial project review"
            title="What to send before a review."
            body="The first conversation works better when LIMM can see the property, the intended scope and the practical constraints."
          />
          <div className="grid gap-4">
            {service.reviewSteps.map((step, index) => (
              <div
                className="rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-5 shadow-sm"
                key={step}
              >
                <p className="text-sm font-semibold text-[var(--limm-clay)]">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--limm-ink)]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>
      <MotionSection className="bg-[var(--limm-ink)] px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-[var(--limm-sage)]">
              Related planning paths
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight md:text-4xl">
              Review {service.title} with the right project context.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/74 md:text-base">
              Use gallery references and Owner&apos;s Notes to prepare a clearer
              first message, then send LIMM your floor plan, site photos and
              rough scope through WhatsApp.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <ButtonLink
              href="/gallery"
              icon={<Images aria-hidden="true" size={18} />}
              variant="ghost"
            >
              Project Gallery
            </ButtonLink>
            <ButtonLink
              href="/owners-notes"
              icon={<BookOpen aria-hidden="true" size={18} />}
              variant="ghost"
            >
              Owner&apos;s Notes
            </ButtonLink>
            <ButtonLink
              href="/contact"
              icon={<Send aria-hidden="true" size={18} />}
              trackingEvent="start_project_review_click"
              trackingLabel="Send Details"
              trackingLocation="service_related_paths"
              trackingServiceSlug={service.slug}
              variant="primary"
            >
              Send Details
            </ButtonLink>
          </div>
        </div>
      </MotionSection>
      <MotionSection className="bg-[var(--limm-cream)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Quick answers"
            title={`${service.title} questions ${quickAnswerAudience} often ask`}
            body="Concise answers for search, AI results and early project planning."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {service.answers.map((answer) => (
              <article
                className="rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-5"
                key={answer.question}
              >
                <h3 className="text-lg font-semibold text-[var(--limm-ink)]">
                  {answer.question}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--limm-muted)]">
                  {answer.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>
      <MotionSection className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            className="mx-0"
            eyebrow="FAQ"
            title="Practical renovation questions"
          />
          <FaqList faqs={service.faqs} />
        </div>
      </MotionSection>
      <CtaBand serviceSlug={service.slug} />
    </>
  );
}
