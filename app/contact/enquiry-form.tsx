"use client";

import { FormEvent, useState } from "react";

const phone = "6589898278";

export function EnquiryForm() {
  const [propertyType, setPropertyType] = useState("");
  const [area, setArea] = useState("");
  const [scope, setScope] = useState("");
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      "Hello LIMM Works, I would like to start an initial project review.",
      `Property type: ${propertyType || "Not confirmed"}`,
      `Estate / general area: ${area || "Not provided"}`,
      `Rough scope: ${scope || "I will explain in WhatsApp"}`,
      `Preferred timeline: ${timeline || "Flexible / not confirmed"}`,
      `Budget range: ${budget || "Not sure yet"}`,
      "I can send the floor plan and current site photos in WhatsApp.",
      "Website page: Contact form",
    ].join("\n");
    const analyticsWindow = window as typeof window & { gtag?: (...args: unknown[]) => void };
    const analyticsDetails = {
      method: "WhatsApp",
      source: "contact_form",
      property_type: propertyType || "unknown",
      page_path: window.location.pathname,
    };
    analyticsWindow.gtag?.("event", "generate_lead", analyticsDetails);
    analyticsWindow.gtag?.("event", "whatsapp_project_review", analyticsDetails);
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="enquiry-form" onSubmit={submit}>
      <div className="form-heading"><span className="eyebrow">Initial project review</span><h2>Prepare the first WhatsApp message.</h2><p>Fill what you know now. Exact property address and detailed information can follow later.</p></div>
      <label>Property type<select value={propertyType} onChange={(event) => setPropertyType(event.target.value)}><option value="">Select property type</option><option>Landed</option><option>Condo</option><option>HDB</option><option>Commercial</option><option>Other</option></select></label>
      <label>Estate or general area<input value={area} onChange={(event) => setArea(event.target.value)} placeholder="For example: Serangoon / River Valley" /></label>
      <label className="form-full">What would you like to change?<textarea value={scope} onChange={(event) => setScope(event.target.value)} placeholder="Describe the main rooms, works, problems or priorities" rows={5} /></label>
      <label>Preferred timeline<input value={timeline} onChange={(event) => setTimeline(event.target.value)} placeholder="For example: Q4 2026" /></label>
      <label>Estimated budget<select value={budget} onChange={(event) => setBudget(event.target.value)}><option value="">Not sure yet</option><option>Below S$50K</option><option>S$50K–S$100K</option><option>S$100K–S$200K</option><option>S$200K–S$400K</option><option>Above S$400K</option></select></label>
      <div className="form-full form-action"><p>Floor plans and photos can be attached after WhatsApp opens.</p><button className="button button-gold" type="submit">Continue to WhatsApp</button></div>
    </form>
  );
}
