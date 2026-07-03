export const siteConfig = {
  name: "LIMM Works Pte Ltd",
  shortName: "LIMM Works",
  tagline: "Residential, Landed & Commercial Renovation",
  description:
    "LIMM Works Pte Ltd supports residential, landed and commercial renovation in Singapore with practical planning, coordination and site execution.",
  eventualProductionUrl: "https://www.limmworks.com",
  email: "limmworks@gmail.com",
  instagram: "https://www.instagram.com/limmworks/",
  whatsapp: {
    display: "[INSERT LIMM WHATSAPP NUMBER]",
    e164: "",
    fallbackPath: "/contact#project-review",
  },
  location: {
    locality: "Singapore",
    country: "SG",
  },
  keywords: [
    "renovation contractor Singapore",
    "landed renovation Singapore",
    "landed A&A works Singapore",
    "condo renovation Singapore",
    "HDB renovation Singapore",
    "kitchen renovation Singapore",
    "bathroom renovation Singapore",
    "carpentry works Singapore",
    "commercial renovation Singapore",
    "renovation planning Singapore",
  ],
};

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Owner's Notes", href: "/owners-notes" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  const vercel = process.env.VERCEL_URL;

  if (explicit) {
    return explicit.replace(/\/$/, "");
  }

  if (vercel) {
    return `https://${vercel}`.replace(/\/$/, "");
  }

  return siteConfig.eventualProductionUrl;
}

export function absoluteUrl(path = "/") {
  const base = getSiteUrl();

  if (path === "/") {
    return base;
  }

  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getWhatsappHref(message?: string) {
  if (!siteConfig.whatsapp.e164) {
    return siteConfig.whatsapp.fallbackPath;
  }

  const base = `https://wa.me/${siteConfig.whatsapp.e164.replace(/[^\d]/g, "")}`;

  if (!message) {
    return base;
  }

  return `${base}?text=${encodeURIComponent(message)}`;
}

export function getWhatsappLabel() {
  return siteConfig.whatsapp.e164 ? siteConfig.whatsapp.display : "to be confirmed";
}
