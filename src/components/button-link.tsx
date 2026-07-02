import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "ghost";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "border border-[var(--limm-brass)] bg-[var(--limm-brass)] text-white hover:bg-[var(--limm-clay)] hover:border-[var(--limm-clay)]",
  secondary:
    "border border-[var(--limm-line)] bg-[var(--limm-paper)] text-[var(--limm-ink)] hover:border-[var(--limm-brass)] hover:bg-white",
  dark: "border border-[var(--limm-ink)] bg-[var(--limm-ink)] text-white hover:bg-[var(--limm-olive)] hover:border-[var(--limm-olive)]",
  ghost:
    "border border-white/45 bg-white/10 text-white hover:bg-white hover:text-[var(--limm-ink)]",
};

export function ButtonLink({
  href,
  children,
  icon,
  variant = "primary",
  className,
  external,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors",
    variants[variant],
    className,
  );

  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  );

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        className={classes}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}
