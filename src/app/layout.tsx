import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyWhatsapp } from "@/components/sticky-whatsapp";
import { AnalyticsClickListener } from "@/components/analytics-click-listener";
import { TrackingScripts } from "@/components/tracking-scripts";
import { brandAssets } from "@/data/assets";
import { siteConfig, getSiteUrl } from "@/data/site";
import { getExistingPublicAsset } from "@/lib/public-assets";
import { baseGraphSchema } from "@/lib/schema";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const favicon = getExistingPublicAsset(brandAssets.favicon);
const socialPreview = getExistingPublicAsset(brandAssets.socialPreview);

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  icons: favicon
    ? {
        icon: favicon,
        shortcut: favicon,
        apple: favicon,
      }
    : undefined,
  alternates: {
    canonical: "/",
    languages: {
      "en-SG": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: socialPreview ?? brandAssets.socialPreview,
        width: 1200,
        height: 630,
        alt: "LIMM Works logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [socialPreview ?? brandAssets.socialPreview],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col pb-24 antialiased md:pb-0">
        <TrackingScripts />
        <AnalyticsClickListener />
        <JsonLd data={baseGraphSchema()} />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <StickyWhatsapp />
      </body>
    </html>
  );
}
