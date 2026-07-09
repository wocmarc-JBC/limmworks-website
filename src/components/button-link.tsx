import Link from "next/link";
import type { ReactNode } from "react";
import type { AnalyticsEventName } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "ghost";
  className?: string;
  external?: boolean;
  trackingEvent?: AnalyticsEventName;
  trackingLocation?: string;
  trackingLabel?: string;
  trackingServiceSlug?: string;
  trackingSource?: string;
};

const variants = {
  primary:
    "border border-[var(--limm-brass)] bg-[var(--limm-brass)] text-white shadow-[0_14px_30px_rgba(173,128,68,0.24)] hover:bg-[var(--limm-brass-dark)] hover:border-[var(--limm-brass-dark)]",
  secondary:
    "border border-[var(--limm-line)] bg-[var(--limm-paper)] text-[var(--limm-ink)] shadow-sm hover:border-[var(--limm-brass)] hover:bg-white",
  dark: "border border-[var(--limm-ink)] bg-[var(--limm-ink)] text-white shadow-[0_14px_30px_rgba(31,38,31,0.18)] hover:bg-[var(--limm-olive)] hover:border-[var(--limm-olive)]",
  ghost:
    "border border-white/42 bg-white/10 text-white shadow-sm hover:bg-white hover:text-[var(--limm-ink)]",
};

export function ButtonLink({
  href,
  children,
  icon,
  variant = "primary",
  className,
  external,
  trackingEvent,
  trackingLocation,
  trackingLabel,
  trackingServiceSlug,
  trackingSource,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition",
    variants[variant],
    className,
  );

  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  );

  const trackingProps = trackingEvent
    ? {
        "data-analytics-event": trackingEvent,
        "data-analytics-location": trackingLocation,
        "data-analytics-label": trackingLabel,
        "data-analytics-service-slug": trackingServiceSlug,
        "data-analytics-source": trackingSource,
      }
    : {};

  if (
    external ||
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return (
      <a
        className={classes}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        {...trackingProps}
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...trackingProps}>
      {content}
    </Link>
  );
}
