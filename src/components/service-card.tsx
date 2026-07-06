import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] shadow-[var(--limm-shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-[var(--limm-brass)] hover:shadow-[var(--limm-shadow)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          alt={service.imageAlt}
          className="object-cover transition duration-700 group-hover:scale-[1.035]"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          src={service.image}
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[rgba(31,38,31,0.42)] to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-semibold text-[var(--limm-clay)]">
          {service.eyebrow}
        </p>
        <h3 className="mt-3 text-xl font-semibold text-[var(--limm-ink)]">
          <Link href={service.path}>{service.title}</Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-[var(--limm-muted)]">
          {service.summary}
        </p>
        <Link
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--limm-ink)] transition group-hover:text-[var(--limm-clay)]"
          href={service.path}
        >
          Review service
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </article>
  );
}
