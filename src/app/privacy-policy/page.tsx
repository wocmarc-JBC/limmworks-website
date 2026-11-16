import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How LIMM Works uses personal data submitted with renovation enquiries.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-9 px-4 py-16 sm:px-6 sm:py-24">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Privacy Policy</h1>
        <p>This notice explains how {siteConfig.name} handles personal data you share when you enquire about renovation services.</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Information we collect</h2>
        <p>When you send us an enquiry through a Meta lead form, our website, WhatsApp or email, we may receive your name, contact details, property type, scope of work, estimated budget, key collection date or preferred start date. We also receive any plans, photos or other details you choose to share with us.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">How we use and share it</h2>
        <p>We use your details to review your project, reply to your enquiry, request information needed for the review, and arrange a call, site visit or quotation where appropriate. We may follow up by phone, WhatsApp or email about the project you asked us to review.</p>
        <p>Our team may use form, messaging, hosting and customer-management services to receive, store and respond to enquiries. Meta processes information collected through its platforms under its own <a className="underline" href="https://www.facebook.com/privacy/policy/">Privacy Policy</a>.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Retention</h2>
        <p>We keep enquiry data for as long as needed to respond to your enquiry and for related business or legal purposes.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Privacy requests</h2>
        <p>To ask about how we use your personal data, request access or correction, or withdraw consent for future use, contact us at <a className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Tell us which enquiry your request relates to so we can locate it.</p>
      </section>
    </article>
  );
}
