import { CheckCircle2 } from "lucide-react";
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

export function ServicePage({ service }: { service: Service }) {
  const quickAnswerAudience =
    service.slug === "commercial-renovation" ? "businesses" : "homeowners";

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
        title={service.title}
      />
      <MotionSection className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            className="mx-0"
            eyebrow="Scope review"
            title="Planned around site condition, property rules and practical use."
            body="A renovation scope becomes clearer when the property type, site condition, access, approval needs and daily-use requirements are reviewed together."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {service.focus.map((item) => (
              <div
                className="rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-5"
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
                className="rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-5"
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
                className="rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-5"
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
      <CtaBand />
    </>
  );
}
