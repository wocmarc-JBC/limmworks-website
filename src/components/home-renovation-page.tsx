import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { projectPath, projects } from "@/data/projects";
import type { HomeownerGuide, Service } from "@/data/services";
import { absoluteUrl } from "@/data/site";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/schema";

export function HomeRenovationPage({
  service,
  guide,
  imagePosition,
}: {
  service: Service;
  guide: HomeownerGuide;
  imagePosition?: string;
}) {
  const project = projects.find((item) => item.servicePath === service.path);
  const questions = [...service.faqs, ...service.answers];
  const serviceEntity = serviceSchema(service);
  const breadcrumbId = absoluteUrl(service.path) + "#breadcrumbs";
  const checks = service.uniqueSection;

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            ...webPageSchema(guide.title, service.metaDescription, service.path),
            dateModified: guide.updated,
            mainEntity: { "@id": serviceEntity["@id"] },
            breadcrumb: { "@id": breadcrumbId },
            primaryImageOfPage: { "@type": "ImageObject", contentUrl: absoluteUrl(service.image) },
          },
          serviceEntity,
          {
            ...breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: service.title, path: service.path },
            ]),
            "@id": breadcrumbId,
          },
        ],
      }} />
      <PageHero
        body={service.summary}
        eyebrow={service.eyebrow}
        image={service.image}
        imageAlt={service.imageAlt}
        imagePosition={imagePosition}
        serviceSlug={service.slug}
        title={guide.title}
        reviewItems={guide.enquiryItems}
        secondaryAction={project && { href: "#completed-work", label: "See completed work" }}
      />
      <nav aria-label="On this page" className="border-b border-[var(--limm-line)] bg-[var(--limm-paper)]">
        <ul className="mx-auto flex max-w-7xl flex-wrap gap-x-7 gap-y-2 px-4 py-4 text-sm font-semibold text-[var(--limm-ink)] sm:px-6 lg:px-8">
          <li><a className="hover:underline" href="#scope">Scope</a></li>
          {project && <li><a className="hover:underline" href="#completed-work">Completed work</a></li>}
          <li><a className="hover:underline" href="#planning">Planning and approvals</a></li>
          <li><a className="hover:underline" href="#quote">Quotation</a></li>
          <li><a className="hover:underline" href="#questions">FAQs</a></li>
        </ul>
      </nav>
      <section id="scope" className="mx-auto grid max-w-7xl scroll-mt-32 gap-6 px-4 py-14 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">{guide.scopeTitle}</h2>
        <ul className="grid content-start gap-4 sm:grid-cols-2">
          {service.focus.map((item) => (
            <li className="border-l-2 border-[var(--limm-brass)] pl-4 leading-7 text-[var(--limm-muted)]" key={item}>{item}</li>
          ))}
        </ul>
      </section>
      {project && (
        <section id="completed-work" className="scroll-mt-32 bg-[var(--limm-cream)] px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-xl border border-[var(--limm-line)] bg-[var(--limm-paper)] lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[20rem]">
              <Image
                alt={project.alt}
                className="object-cover"
                fill
                sizes="(min-width: 1280px) 700px, (min-width: 1024px) 56vw, 100vw"
                src={project.image}
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-4 p-6 sm:p-9">
              <h2 className="text-sm font-semibold text-[var(--limm-olive)]">Completed project</h2>
              <h3 className="text-balance text-3xl font-semibold leading-tight">{project.title}</h3>
              <p className="leading-7 text-[var(--limm-muted)]">{project.description}</p>
              <Link className="inline-flex items-center gap-2 font-semibold underline underline-offset-4" href={projectPath(project.slug)}>
                View this project <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}
      <section id="planning" className="mx-auto grid max-w-7xl scroll-mt-32 gap-7 px-4 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:px-8">
        <div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">{checks.title}</h2>
          <p className="mt-4 leading-7 text-[var(--limm-muted)]">{checks.body}</p>
        </div>
        <div>
          <ul className="list-disc space-y-4 pl-5 leading-7 text-[var(--limm-muted)] marker:text-[var(--limm-olive)]">
            {checks.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
          <ul className="mt-6 space-y-2 text-sm font-semibold">
            {guide.links.map(({ href, label }) => (
              <li key={href}><Link className="underline underline-offset-4" href={href}>{label}</Link></li>
            ))}
          </ul>
        </div>
      </section>
      <section id="quote" className="scroll-mt-32 bg-[var(--limm-cream)] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight">{guide.quoteTitle}</h2>
            <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-[var(--limm-muted)] marker:text-[var(--limm-olive)]">
              {service.considerations.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight">How the project starts</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-[var(--limm-muted)] marker:font-semibold marker:text-[var(--limm-olive)]">
              {service.reviewSteps.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </div>
        </div>
      </section>
      <section id="questions" className="mx-auto grid max-w-7xl scroll-mt-32 gap-6 px-4 py-14 sm:px-6 lg:grid-cols-[0.65fr_1.35fr] lg:px-8">
        <h2 className="text-balance text-3xl font-semibold tracking-tight">{service.title} FAQs</h2>
        <FaqList faqs={questions} />
      </section>
      <CtaBand serviceSlug={service.slug} />
    </>
  );
}
