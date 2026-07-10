import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "../components/site-chrome";
import { services } from "../lib/site";

const residentialSlugs = ["landed-renovation", "landed-aa-works", "condo-renovation", "hdb-renovation", "kitchen-renovation", "bathroom-renovation", "carpentry-storage"];

export const metadata: Metadata = {
  title: "Residential Renovation Singapore",
  description: "Explore LIMM Works landed, condo, HDB, kitchen, bathroom and built-in storage renovation services in Singapore.",
  alternates: { canonical: "/residential" },
};

export default function ResidentialPage() {
  return (
    <>
      <section className="page-hero"><div className="shell page-hero-grid"><div><span className="eyebrow eyebrow-light">Residential renovation</span><h1>Start with the property and the work that needs coordinating.</h1></div><div><p>Landed homes, condos and HDB flats bring different site conditions, rules and planning priorities. Choose the closest service page, then share the actual plan and photos.</p><Link className="button button-gold" href="/contact">Start project review</Link></div></div></section>
      <section className="section section-cream"><div className="shell"><SectionHeading eyebrow="Residential services" title="Focused guidance for the real scope." text="Each page explains the planning checks, connected trades and information that make the first enquiry more useful." /><div className="service-grid">{residentialSlugs.map((slug, index) => { const service = services[slug]; return <Link className="service-card" href={`/${service.slug}`} key={slug}><div className="service-card-body"><span>0{index + 1}</span><h3>{service.metaTitle.replace(" | LIMM Works", "")}</h3><p>{service.metaDescription}</p><strong>Review service ↗</strong></div></Link>; })}</div></div></section>
    </>
  );
}
