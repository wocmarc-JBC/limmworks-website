import { ChevronDown, MessageCircle } from "lucide-react";
import Link from "next/link";
import { serviceNav } from "@/data/services";
import { getWhatsappHref, primaryNav } from "@/data/site";
import { ButtonLink } from "@/components/button-link";
import { MobileMenu } from "@/components/mobile-menu";
import { SiteLogo } from "@/components/site-logo";

export function SiteHeader() {
  const topLevel = primaryNav.filter((item) => item.label !== "Home");

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--limm-line)] bg-[rgba(248,242,232,0.92)] backdrop-blur">
      <div className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <SiteLogo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <Link
            className="rounded-md px-3 py-2 text-sm font-medium text-[var(--limm-ink)] hover:bg-white"
            href="/"
          >
            Home
          </Link>
          <div className="group relative">
            <button
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-[var(--limm-ink)] hover:bg-white"
              type="button"
            >
              Services
              <ChevronDown aria-hidden="true" size={16} />
            </button>
            <div className="invisible absolute left-0 top-full w-72 translate-y-2 border border-[var(--limm-line)] bg-[var(--limm-paper)] p-2 opacity-0 shadow-xl transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {serviceNav.map((item) => (
                <Link
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-[var(--limm-ink)] hover:bg-[var(--limm-cream)]"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {topLevel.map((item) => (
            <Link
              className="rounded-md px-3 py-2 text-sm font-medium text-[var(--limm-ink)] hover:bg-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink
            href={getWhatsappHref()}
            icon={<MessageCircle aria-hidden="true" size={18} />}
            variant="dark"
          >
            WhatsApp
          </ButtonLink>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
