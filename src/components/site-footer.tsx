import { Camera, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { serviceNav } from "@/data/services";
import { getWhatsappHref, getWhatsappLabel, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--limm-line)] bg-[var(--limm-ink)] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_1.4fr_0.9fr] lg:px-8">
        <div>
          <p className="text-xl font-semibold">{siteConfig.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/72">
            {siteConfig.tagline}. Practical planning, coordination and site
            execution for homes and businesses in Singapore.
          </p>
          <div className="mt-5 grid gap-2 text-sm text-white/78">
            <a className="inline-flex items-center gap-2 hover:text-white" href={getWhatsappHref()}>
              <MessageCircle aria-hidden="true" size={17} />
              WhatsApp: {getWhatsappLabel()}
            </a>
            <a className="inline-flex items-center gap-2 hover:text-white" href={`mailto:${siteConfig.email}`}>
              <Mail aria-hidden="true" size={17} />
              {siteConfig.email}
            </a>
            <a
              className="inline-flex items-center gap-2 hover:text-white"
              href={siteConfig.instagram}
              rel="noreferrer"
              target="_blank"
            >
              <Camera aria-hidden="true" size={17} />
              Instagram portfolio
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Services</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {serviceNav.map((item) => (
              <Link
                className="text-sm text-white/72 hover:text-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Explore</p>
          <div className="mt-4 grid gap-2">
            <Link className="text-sm text-white/72 hover:text-white" href="/gallery">
              Gallery
            </Link>
            <Link className="text-sm text-white/72 hover:text-white" href="/owners-notes">
              Owner&apos;s Notes
            </Link>
            <Link className="text-sm text-white/72 hover:text-white" href="/about">
              About
            </Link>
            <Link className="text-sm text-white/72 hover:text-white" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/12 px-4 py-4 text-center text-xs text-white/58">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
