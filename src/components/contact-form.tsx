"use client";

import { Check, Clipboard, MessageCircle, Send } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { getWhatsappHref, siteConfig } from "@/data/site";

type FormState = {
  name: string;
  contactNumber: string;
  propertyType: string;
  address: string;
  renovationType: string;
  budget: string;
  timeline: string;
  scope: string;
};

const initialState: FormState = {
  name: "",
  contactNumber: "",
  propertyType: "",
  address: "",
  renovationType: "",
  budget: "",
  timeline: "",
  scope: "",
};

const fieldClass =
  "min-h-11 w-full rounded-md border border-[var(--limm-line)] bg-white px-3 py-2 text-sm text-[var(--limm-ink)] outline-none transition focus:border-[var(--limm-brass)]";

const budgetOptions = [
  "Below $50K",
  "$50K-$100K",
  "$100K-$200K",
  "$200K-$400K",
  "Above $400K",
];

function buildMessage(values: FormState) {
  return [
    "Hello LIMM Works, I would like to start an initial project review.",
    "",
    `Name: ${values.name || "-"}`,
    `Contact Number: ${values.contactNumber || "-"}`,
    `Property Type: ${values.propertyType || "-"}`,
    `Property Address / Estate Area: ${values.address || "-"}`,
    `Renovation Type: ${values.renovationType || "-"}`,
    `Estimated Budget: ${values.budget || "-"}`,
    `Preferred Timeline: ${values.timeline || "-"}`,
    `Rough Scope: ${values.scope || "-"}`,
    "",
    "I can send the floor plan and site photos separately for review.",
  ].join("\n");
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [message, setMessage] = useState(buildMessage(initialState));
  const [copied, setCopied] = useState(false);
  const whatsappHref = useMemo(() => getWhatsappHref(message), [message]);

  function updateValue(name: keyof FormState, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setCopied(false);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(buildMessage(values));
  }

  async function copyMessage() {
    await navigator.clipboard.writeText(message);
    setCopied(true);
  }

  return (
    <form
      className="rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-5 shadow-sm md:p-6"
      id="project-review"
      onSubmit={onSubmit}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-[var(--limm-ink)]">
          Name
          <input
            className={fieldClass}
            name="name"
            onChange={(event) => updateValue("name", event.target.value)}
            value={values.name}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--limm-ink)]">
          Contact Number
          <input
            className={fieldClass}
            name="contactNumber"
            onChange={(event) => updateValue("contactNumber", event.target.value)}
            value={values.contactNumber}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--limm-ink)]">
          Property Type
          <select
            className={fieldClass}
            name="propertyType"
            onChange={(event) => updateValue("propertyType", event.target.value)}
            value={values.propertyType}
          >
            <option value="">Select property type</option>
            <option>Condo</option>
            <option>HDB</option>
            <option>Landed</option>
            <option>Commercial</option>
            <option>Other</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--limm-ink)]">
          Renovation Type
          <select
            className={fieldClass}
            name="renovationType"
            onChange={(event) => updateValue("renovationType", event.target.value)}
            value={values.renovationType}
          >
            <option value="">Select renovation type</option>
            <option>Landed Renovation</option>
            <option>Landed A&A Works</option>
            <option>Condo Renovation</option>
            <option>HDB Renovation</option>
            <option>Commercial Renovation</option>
            <option>Kitchen Renovation</option>
            <option>Bathroom Renovation</option>
            <option>Carpentry & Storage</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--limm-ink)] md:col-span-2">
          Property Address / Estate Area
          <input
            className={fieldClass}
            name="address"
            onChange={(event) => updateValue("address", event.target.value)}
            value={values.address}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--limm-ink)]">
          Estimated Budget
          <select
            className={fieldClass}
            name="budget"
            onChange={(event) => updateValue("budget", event.target.value)}
            value={values.budget}
          >
            <option value="">Select budget range</option>
            {budgetOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--limm-ink)]">
          Preferred Timeline
          <input
            className={fieldClass}
            name="timeline"
            onChange={(event) => updateValue("timeline", event.target.value)}
            value={values.timeline}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--limm-ink)] md:col-span-2">
          Rough Scope
          <textarea
            className={`${fieldClass} min-h-32 resize-y`}
            name="scope"
            onChange={(event) => updateValue("scope", event.target.value)}
            value={values.scope}
          />
        </label>
      </div>
      <div className="mt-5 rounded-lg border border-[var(--limm-line)] bg-white p-4 text-sm leading-6 text-[var(--limm-muted)]">
        File upload is not enabled in this preview. Attach floor plans and site
        photos separately in WhatsApp or email after generating the enquiry text.
      </div>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[var(--limm-brass)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--limm-clay)]"
          type="submit"
        >
          <Send aria-hidden="true" size={18} />
          Start Project Review
        </button>
        <button
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[var(--limm-line)] bg-white px-4 py-2.5 text-sm font-semibold text-[var(--limm-ink)] transition hover:border-[var(--limm-brass)]"
          onClick={copyMessage}
          type="button"
        >
          {copied ? <Check aria-hidden="true" size={18} /> : <Clipboard aria-hidden="true" size={18} />}
          {copied ? "Copied" : "Copy Enquiry Text"}
        </button>
        <a
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[var(--limm-ink)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--limm-olive)]"
          href={whatsappHref}
        >
          <MessageCircle aria-hidden="true" size={18} />
          WhatsApp LIMM Works
        </a>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-medium text-[var(--limm-ink)]">
        Generated Enquiry Text
        <textarea
          className={`${fieldClass} min-h-52 font-mono text-xs leading-5`}
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />
      </label>
      {!siteConfig.whatsapp.e164 ? (
        <p className="mt-3 text-xs leading-5 text-[var(--limm-muted)]">
          WhatsApp number pending: {siteConfig.whatsapp.display}. The enquiry
          text is ready to copy while the number is being confirmed.
        </p>
      ) : null}
    </form>
  );
}
