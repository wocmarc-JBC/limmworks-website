import { Camera, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { brandAssets } from "@/data/assets";
import { serviceNav } from "@/data/services";
import { getWhatsappHref, getWhatsappLabel, siteConfig } from "@/data/site";
import { getExistingPublicAsset } from "@/lib/public-assets";

export function SiteFooter() {
  const footerLogo =
    getExistingPublicAsset(brandAssets.logoLight) ??
    getExistingPublicAsset(brandAssets.logoDark);
  const footerIcon = getExistingPublicAsset(brandAssets.icon);

  return (
    <footer className="border-t border-white/10 bg-[var(--limm-ink)] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_1.35fr_0.9fr] lg:px-8 lg:py-14">
        <div className="lg:pr-6">
          {footerLogo ? (
            <Image
              alt={siteConfig.name}
              className="h-24 w-auto object-contain sm:h-28"
              height={128}
              src={footerLogo}
              width={100}
            />
          ) : (
            <div className="flex items-center gap-3">
              {footerIcon ? (
                <Image
                  alt={siteConfig.name}
                  className="h-10 w-10 rounded-md object-contain"
                  height={40}
                  src={footerIcon}
                  width={40}
                />
              ) : null}
              <p className="text-xl font-semibold">{siteConfig.name}</p>
            </div>
          )}
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/74">
            {siteConfig.tagline}. Practical planning, coordination and site
            execution for homes and businesses in Singapore.
          </p>
          <div className="mt-6 grid gap-2.5 text-sm text-white/78">
            <a
              className="inline-flex items-center gap-2 hover:text-white"
              data-analytics-event="whatsapp_click"
              data-analytics-label="WhatsApp"
              data-analytics-location="footer"
              href={getWhatsappHref()}
            >
              <MessageCircle aria-hidden="true" size={17} />
              WhatsApp: {getWhatsappLabel()}
            </a>
            <a
              className="inline-flex items-center gap-2 hover:text-white"
              data-analytics-event="email_click"
              data-analytics-label="Email"
              data-analytics-location="footer"
              href={`mailto:${siteConfig.email}`}
            >
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
          <div className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
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
          <div className="mt-4 grid gap-2.5">
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
      <div className="border-t border-white/12 px-4 py-4 text-center text-xs text-white/60">
        Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
