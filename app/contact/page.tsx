/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { assetUrl, site, whatsappHref } from "../lib/site";
import { EnquiryForm } from "./enquiry-form";

export const metadata: Metadata = {
  title: "Start Project Review",
  description: "Send LIMM Works your floor plan, site photos, property type, rough scope and preferred timeline for an initial renovation project review.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <img src={assetUrl("/projects/landed-dining-kitchen.jpg")} alt="LIMM Works renovation planning reference" width="1920" height="1200" />
        <div className="contact-hero-overlay" />
        <div className="shell contact-hero-content"><span className="eyebrow eyebrow-light">Contact LIMM Works</span><h1>Start with the floor plan and current site photos.</h1><p>LIMM will review the practical context before advising the next useful step.</p></div>
      </section>
      <section className="section contact-section">
        <div className="shell contact-grid">
          <div className="contact-details">
            <span className="eyebrow">What to send</span><h2>A clearer first message leads to a better review.</h2><p>Share the property type, rough scope, known issues, budget range and preferred timeline. Exact information can be clarified as the conversation develops.</p>
            <a className="contact-method contact-method-primary" href={whatsappHref("Contact page")}><span>WhatsApp</span><strong>{site.phoneDisplay}</strong><small>Send plans, photos and rough scope</small></a>
            <a className="contact-method" href={`mailto:${site.email}`}><span>Email</span><strong>{site.email}</strong></a>
            <a className="contact-method" href={site.instagram} target="_blank" rel="noreferrer"><span>Portfolio</span><strong>Instagram @limmworks</strong></a>
            <div className="next-steps"><h3>What happens next</h3><p><strong>01</strong>LIMM reviews the property type, plans, photos and rough scope.</p><p><strong>02</strong>Missing details and required checks are identified before deeper costing.</p><p><strong>03</strong>The practical next stage is discussed around site condition, rules and timing.</p></div>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
