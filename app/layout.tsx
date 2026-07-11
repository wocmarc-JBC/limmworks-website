import type { Metadata } from "next";
import "./globals.css";
import { EnquiryAnalytics } from "./components/enquiry-analytics";
import { Footer, Header, JsonLd, MobileWhatsApp } from "./components/site-chrome";
import { site } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  title: {
    default: "Landed, Residential & Commercial Renovation | LIMM Works",
    template: "%s | LIMM Works",
  },
  description:
    "LIMM Works plans practical landed, residential and commercial renovation in Singapore with clearer scope, coordination and site execution.",
  alternates: { canonical: "/" },
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
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: "window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};",
        }} />
        <script async src="/analytics-config.js" />
      </head>
      <body>
        <EnquiryAnalytics />
        <JsonLd data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["Organization", "LocalBusiness", "HomeAndConstructionBusiness"],
              "@id": `${site.domain}/#organization`,
              name: site.name,
              legalName: site.name,
              url: site.domain,
              logo: { "@type": "ImageObject", url: `${site.domain}/brand/limm-mark-gold.svg` },
              image: `${site.domain}/opengraph-image`,
              foundingDate: "2016",
              telephone: `+${site.phone}`,
              email: site.email,
              areaServed: { "@type": "Country", name: "Singapore" },
              priceRange: "$$",
              contactPoint: { "@type": "ContactPoint", telephone: `+${site.phone}`, contactType: "sales", areaServed: "SG", availableLanguage: ["English"] },
              sameAs: [site.instagram, site.facebook],
              knowsAbout: ["Landed renovation", "Additions and alterations", "Condo renovation", "HDB renovation", "Kitchen renovation", "Bathroom renovation", "Carpentry and built-in storage", "Commercial renovation"],
            },
            { "@type": "WebSite", "@id": `${site.domain}/#website`, name: site.name, url: site.domain, publisher: { "@id": `${site.domain}/#organization` }, inLanguage: "en-SG" },
          ],
        }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileWhatsApp />
      </body>
    </html>
  );
}
