import Image from "next/image";
import type { GalleryCategory } from "@/data/gallery";

export function GalleryCard({ item }: { item: GalleryCategory }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] shadow-[var(--limm-shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-[var(--limm-brass)] hover:shadow-[var(--limm-shadow)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          alt={item.imageAlt}
          className="object-cover transition duration-700 group-hover:scale-[1.035]"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          src={item.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(31,38,31,0.28)] via-transparent to-transparent opacity-90" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold text-[var(--limm-ink)]">{item.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-[var(--limm-muted)]">
          {item.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              className="rounded-md border border-[var(--limm-line)] bg-white px-2.5 py-1 text-xs font-medium text-[var(--limm-olive)]"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
