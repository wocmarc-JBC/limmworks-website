import { ArrowRight, ClipboardCheck, MessageCircle } from "lucide-react";
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
          className="pointer-events-none object-cover object-[center_54%]"
          fill
          priority
          sizes="100vw"
          src={image}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,38,31,0.94),rgba(31,38,31,0.70),rgba(31,38,31,0.28))]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--limm-ink)] to-transparent" />
      </div>
      <div className="mx-auto grid min-h-[62svh] w-full max-w-7xl items-end gap-8 px-4 py-14 sm:px-6 md:py-[4.5rem] lg:grid-cols-[1fr_360px] lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[var(--limm-sage)]">{eyebrow}</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight md:text-[4rem]">
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
        <div className="hidden rounded-lg border border-white/18 bg-white/10 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur md:block">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white/12 text-[var(--limm-gold-soft)]">
              <ClipboardCheck aria-hidden="true" size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">For a useful review</p>
              <p className="text-xs text-white/66">Prepare practical project context.</p>
            </div>
          </div>
          <div className="mt-5 grid gap-2 text-sm text-white/78">
            <p>Floor plan or existing layout</p>
            <p>Site photos and rough scope</p>
            <p>Budget range and preferred timing</p>
          </div>
        </div>
      </div>
    </section>
  );
}
