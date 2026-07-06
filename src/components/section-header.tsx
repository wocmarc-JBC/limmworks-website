import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  body,
  className,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold text-[var(--limm-clay)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold leading-tight text-[var(--limm-ink)] md:text-[2.65rem]">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 text-pretty text-base leading-7 text-[var(--limm-muted)] md:text-lg">
          {body}
        </p>
      ) : null}
    </div>
  );
}
