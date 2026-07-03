import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { getWhatsappHref } from "@/data/site";

export function PageHero({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  ctaHref,
  ctaLabel = "Start Project Review",
}: {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--limm-ink)] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          alt={imageAlt}
          className="pointer-events-none object-cover"
          fill
          priority
          sizes="100vw"
          src={image}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,38,31,0.92),rgba(31,38,31,0.62),rgba(31,38,31,0.2))]" />
      </div>
      <div className="mx-auto flex min-h-[54svh] w-full max-w-7xl items-end px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[var(--limm-sage)]">{eyebrow}</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-white/82 md:text-lg">
            {body}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={ctaHref ?? getWhatsappHref()}
              icon={<MessageCircle aria-hidden="true" size={18} />}
            >
              {ctaLabel}
            </ButtonLink>
            <ButtonLink
              href="/gallery"
              icon={<ArrowRight aria-hidden="true" size={18} />}
              variant="ghost"
            >
              View Our Works
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
