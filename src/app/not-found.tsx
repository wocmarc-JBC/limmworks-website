import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold text-[var(--limm-clay)]">404</p>
        <h1 className="mt-3 text-4xl font-semibold text-[var(--limm-ink)]">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-[var(--limm-muted)]">
          The page may have moved, or the route has not been added yet.
        </p>
        <Link
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--limm-ink)] px-4 py-2.5 text-sm font-semibold text-white"
          href="/"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
