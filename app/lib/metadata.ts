import type { Metadata } from "next";
import type { ServicePageData } from "./site";

export function createServiceMetadata(data: ServicePageData): Metadata {
  const title = data.metaTitle.replace(" | LIMM Works", "");

  return {
    title,
    description: data.metaDescription,
    alternates: { canonical: `/${data.slug}` },
    openGraph: {
      type: "website",
      title: data.metaTitle,
      description: data.metaDescription,
      url: `/${data.slug}`,
      images: [{ url: data.image, alt: data.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
      images: [data.image],
    },
  };
}
