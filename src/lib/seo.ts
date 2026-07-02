import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/data/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  image = "/projects/limm-real/processed/hero-renovation-planning.png",
}: MetadataInput): Metadata {
  return {
    title,
    description,
    keywords: siteConfig.keywords,
    alternates: {
      canonical: absoluteUrl(path),
      languages: {
        "en-SG": absoluteUrl(path),
      },
    },
    openGraph: {
      type: "website",
      locale: "en_SG",
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: absoluteUrl(image),
          width: 1600,
          height: 900,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
  };
}
