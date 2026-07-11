import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, SectionHeading } from "../components/site-chrome";
import { services, site } from "../lib/site";

const residentialSlugs = ["landed-renovation", "landed-aa-works", "condo-renovation", "hdb-renovation", "kitchen-renovation", "bathroom-renovation", "carpentry-storage"];

export const metadata: Metadata = {
  title: "Residential Renovation Singapore",
  description: "Explore LIMM Works landed, condo, HDB, kitchen, bathroom and built-in storage renovation services in Singapore.",
  alternates: { canonical: "/residential" },
  openGraph: { type: "website", title: "Residential Renovation Singapore | LIMM Works", description: "Explore LIMM Works landed, condo, HDB, kitchen, bathroom and built-in storage renovation services in Singapore.", url: "/residential", images: [{ url: services["landed-renovation"].image, alt: services["landed-renovation"].imageAlt }] },
  twitter: { card: "summary_large_image", title: "Residential Renovation Singapore | LIMM Works", description: "Explore LIMM Works residential renovation services in Singapore.", images: [services["landed-renovation"].image] },
};

export default function ResidentialPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${site.domain}/residential#collection`,
        name: "Residential renovation services in Singapore",
        description: metadata.description,
        url: `${site.domain}/residential`,
        about: { "@id": `${site.domain}/#organization` },
        isPartOf: { "@id": `${site.domain}/#website` },
        mainEntity: { "@type": "ItemList", numberOfItems: residentialSlugs.length, itemListElement: residentialSlugs.map((slug, index) => ({ "@type": "ListItem", position: index + 1, name: services[slug].metaTitle.replace(" | LIMM Works", ""), url: `${site.domain}/${slug}` })) },
      }} />
      <section className="page-hero"><div className="shell page-hero-grid"><div><span className="eyebrow eyebrow-light">Residential renovation</span><h1>Start with the property and the work that needs coordinating.</h1></div><div><p>Landed homes, condos and HDB flats bring different site conditions, rules and planning priorities. Choose the closest service page, then share the actual plan and photos.</p><Link className="button button-gold" href="/contact">Start project review</Link></div></div></section>
      <section className="section section-cream"><div className="shell"><SectionHeading eyebrow="Residential services" title="Focused guidance for the real scope." text="Each page explains the planning checks, connected trades and information that make the first enquiry more useful." /><div className="service-grid">{residentialSlugs.map((slug, index) => { const service = services[slug]; return <Link className="service-card" href={`/${service.slug}`} key={slug}><div className="service-card-body"><span>0{index + 1}</span><h3>{service.metaTitle.replace(" | LIMM Works", "")}</h3><p>{service.metaDescription}</p><strong>Review service ↗</strong></div></Link>; })}</div></div></section>
    </>
  );
}
