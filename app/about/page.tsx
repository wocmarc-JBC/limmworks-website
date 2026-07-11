import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd, SectionHeading } from "../components/site-chrome";
import { assetUrl, site, whatsappHref } from "../lib/site";

export const metadata: Metadata = {
  title: "About Us | Renovation Planning Singapore",
  description: "Meet LIMM Works, a Singapore renovation and project-planning company focused on practical scope, coordinated site work and clear first reviews.",
  alternates: { canonical: "/about" },
  openGraph: { type: "website", title: "About LIMM Works | Renovation Planning Singapore", description: "Meet LIMM Works, a Singapore renovation and project-planning company focused on practical scope, coordinated site work and clear first reviews.", url: "/about", images: [{ url: "/projects/landed-dining-kitchen.jpg", alt: "Completed home interior by LIMM Works" }] },
  twitter: { card: "summary_large_image", title: "About LIMM Works | Renovation Planning Singapore", description: "Practical renovation planning and coordinated site work in Singapore.", images: ["/projects/landed-dining-kitchen.jpg"] },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "AboutPage", "@id": `${site.domain}/about#webpage`, name: "About LIMM Works", url: `${site.domain}/about`, about: { "@id": `${site.domain}/#organization` }, isPartOf: { "@id": `${site.domain}/#website` }, inLanguage: "en-SG" }} />
      <section className="about-hero">
        <Image src={assetUrl("/projects/landed-dining-kitchen.jpg")} alt="Warm completed home interior by LIMM Works" width={1920} height={1200} sizes="100vw" preload />
        <div className="about-hero-overlay" />
        <div className="shell about-hero-content"><span className="eyebrow eyebrow-light">About LIMM Works</span><h1>Practical planning. Coordinated renovation works.</h1><p>For homeowners and businesses who value clearer scope, responsible advice and site realities kept visible before works move too far.</p><div className="hero-actions"><a className="button button-gold" href={whatsappHref("About page")}>Start project review</a><Link className="button button-ghost-light" href="/projects">View completed work</Link></div></div>
      </section>

      <section className="section section-tight"><div className="shell intro-grid"><span className="large-index">01</span><div><span className="eyebrow">Positioning</span><h2>Renovation planning, not only interior styling.</h2></div><p>LIMM Works connects the visible design with the wet works, services, access, sequencing and property requirements that shape the finished space.</p></div></section>

      <section className="section section-cream"><div className="shell"><SectionHeading eyebrow="How LIMM works" title="The site and the intended use lead the conversation." text="Different properties need different questions. The process stays practical and cautious where deeper checks are required." /><div className="scope-grid"><article className="scope-card"><span>01</span><h3>Property-specific review</h3><p>Landed condition, condo or HDB requirements, commercial access and the way the space needs to work are surfaced early.</p></article><article className="scope-card"><span>02</span><h3>Connected scope</h3><p>Layout, wet works, services, finishes, carpentry, protection and site sequencing are reviewed as connected decisions.</p></article><article className="scope-card"><span>03</span><h3>Early site preparation</h3><p>LIMM&apos;s own demolition team supports hacking, site preparation and early-stage coordination where it forms part of the agreed project.</p></article><article className="scope-card"><span>04</span><h3>Clear next steps</h3><p>The first review identifies what can move forward, what information is missing and what requires a site or professional check.</p></article></div></div></section>

      <section className="section section-dark"><div className="shell split-content"><div><span className="eyebrow eyebrow-gold">What to expect</span><h2>Warm communication without overpromising.</h2><p>Scope, timing and feasibility depend on the actual property. The aim is to give each decision enough context before it becomes expensive to change.</p></div><ul className="check-list"><li><span>✓</span>Plans and site photos before a useful first review</li><li><span>✓</span>Constraints and missing information surfaced early</li><li><span>✓</span>Practical coordination across trades and property rules</li><li><span>✓</span>Details confirmed before fabrication and closing-up</li></ul></div></section>

      <section className="final-cta"><div className="shell final-cta-inner"><div><span className="eyebrow eyebrow-light">Contact LIMM Works</span><h2>We&apos;d love to help create your dream home.</h2></div><div><p>Send the floor plan, site photos, rough scope, budget range and preferred timing for an initial project review.</p><Link className="button button-gold" href="/contact">Prepare project details</Link></div></div></section>
    </>
  );
}
