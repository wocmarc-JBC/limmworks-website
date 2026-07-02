import Link from "next/link";

export function SiteLogo() {
  return (
    <Link className="flex min-w-0 items-center gap-3" href="/">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--limm-ink)] text-sm font-semibold text-white">
        LW
      </span>
      <span className="min-w-0">
        <span className="block truncate text-base font-semibold text-[var(--limm-ink)]">
          LIMM Works
        </span>
        <span className="hidden text-xs text-[var(--limm-muted)] sm:block">
          Pte Ltd
        </span>
      </span>
    </Link>
  );
}
