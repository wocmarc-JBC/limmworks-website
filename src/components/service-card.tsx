import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="overflow-hidden rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          alt={service.imageAlt}
          className="object-cover transition duration-500 hover:scale-[1.03]"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          src={service.image}
        />
      </div>
      <div className="p-5">
        <p className="text-sm font-semibold text-[var(--limm-clay)]">
          {service.eyebrow}
        </p>
        <h3 className="mt-3 text-xl font-semibold text-[var(--limm-ink)]">
          <Link href={service.path}>{service.title}</Link>
        </h3>
        <p className="mt-3 text-sm leading-6 text-[var(--limm-muted)]">
          {service.summary}
        </p>
        <Link
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--limm-ink)] hover:text-[var(--limm-clay)]"
          href={service.path}
        >
          Review service
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </article>
  );
}
