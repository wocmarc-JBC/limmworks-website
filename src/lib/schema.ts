import type { OwnerNote } from "@/data/owners-notes";
import type { FaqItem, Service } from "@/data/services";
import { brandAssets } from "@/data/assets";
import { absoluteUrl, hasConfirmedWhatsapp, siteConfig } from "@/data/site";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function baseGraphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), localBusinessSchema(), websiteSchema()],
  };
}

export function organizationSchema() {
  const contactPoint = {
    "@type": "ContactPoint",
    contactType: "Project review",
    email: siteConfig.email,
    areaServed: "SG",
    availableLanguage: ["English"],
    ...(hasConfirmedWhatsapp() ? { telephone: siteConfig.whatsapp.display } : {}),
  };

  return {
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl(brandAssets.logoDark),
    email: siteConfig.email,
    sameAs: [siteConfig.instagram],
    contactPoint: [contactPoint],
  };
}

export function localBusinessSchema() {
  return {
    "@type": "LocalBusiness",
    "@id": absoluteUrl("/#localbusiness"),
    name: siteConfig.name,
    url: absoluteUrl("/"),
    image: absoluteUrl(brandAssets.socialPreview),
    email: siteConfig.email,
    ...(hasConfirmedWhatsapp() ? { telephone: siteConfig.whatsapp.display } : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.locality,
      addressCountry: siteConfig.location.country,
    },
    areaServed: {
      "@type": "Country",
      name: "Singapore",
    },
    priceRange: "$$",
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    url: absoluteUrl("/"),
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
    inLanguage: "en-SG",
  };
}

export function webPageSchema(title: string, description: string, path: string) {
  return {
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: {
      "@id": absoluteUrl("/#website"),
    },
    about: {
      "@id": absoluteUrl("/#organization"),
    },
    inLanguage: "en-SG",
  };
}

export function serviceSchema(service: Service) {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(service.path)}#service`,
    name: service.title,
    description: service.summary,
    provider: {
      "@id": absoluteUrl("/#organization"),
    },
    areaServed: {
      "@type": "Country",
      name: "Singapore",
    },
    serviceType: service.title,
    url: absoluteUrl(service.path),
  };
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema(note: OwnerNote) {
  return {
    "@type": "Article",
    headline: note.title,
    description: note.description,
    datePublished: note.date,
    dateModified: note.date,
    author: {
      "@id": absoluteUrl("/#organization"),
    },
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
    mainEntityOfPage: absoluteUrl(`/owners-notes/${note.slug}`),
    inLanguage: "en-SG",
  };
}
