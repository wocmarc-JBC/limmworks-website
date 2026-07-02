import Image from "next/image";
import type { GalleryCategory } from "@/data/gallery";

export function GalleryCard({ item }: { item: GalleryCategory }) {
  return (
    <article className="overflow-hidden rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          alt={item.imageAlt}
          className="object-cover transition duration-500 hover:scale-[1.03]"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          src={item.image}
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-[var(--limm-ink)]">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[var(--limm-muted)]">
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
