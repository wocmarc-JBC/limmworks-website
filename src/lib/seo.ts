import type { Metadata } from "next";
import { brandAssets } from "@/data/assets";
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
  image = brandAssets.socialPreview,
}: MetadataInput): Metadata {
  const isBrandPreview = image === brandAssets.socialPreview;

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
          width: isBrandPreview ? 1200 : 1600,
          height: isBrandPreview ? 630 : 900,
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
