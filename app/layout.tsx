import type { Metadata } from "next";
import "./globals.css";
import { EnquiryAnalytics } from "./components/enquiry-analytics";
import { Footer, Header, MobileWhatsApp } from "./components/site-chrome";
import { site } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Landed, Residential & Commercial Renovation | LIMM Works",
    template: "%s | LIMM Works",
  },
  description:
    "LIMM Works plans practical landed, residential and commercial renovation in Singapore with clearer scope, coordination and site execution.",
  openGraph: {
    title: "Landed, Residential & Commercial Renovation | LIMM Works",
    description: "Planned properly. Built with care.",
    url: site.domain,
    siteName: site.name,
    locale: "en_SG",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "LIMM Works Pte Ltd — Planned properly. Built with care." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landed, Residential & Commercial Renovation | LIMM Works",
    description: "Planned properly. Built with care.",
    images: ["/opengraph-image"],
  },
  icons: { icon: "/brand/favicon.svg", shortcut: "/brand/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-SG">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: "window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};",
        }} />
        <script async src="/analytics-config.js" />
      </head>
      <body>
        <EnquiryAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileWhatsApp />
      </body>
    </html>
  );
}
