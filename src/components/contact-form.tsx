"use client";

import { Check, Clipboard, MessageCircle, Send } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { getWhatsappHref } from "@/data/site";

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
  "min-h-12 w-full rounded-md border border-[var(--limm-line)] bg-white px-3.5 py-2.5 text-sm text-[var(--limm-ink)] outline-none transition focus:border-[var(--limm-brass)]";

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
      className="scroll-mt-28 rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-5 shadow-[var(--limm-shadow-soft)] md:scroll-mt-32 md:p-8"
      id="project-review"
      onSubmit={onSubmit}
    >
      <div className="mb-6 border-b border-[var(--limm-line)] pb-6">
        <p className="text-sm font-semibold text-[var(--limm-clay)]">
          Initial project review form
        </p>
        <h2 className="mt-2 text-2xl font-semibold leading-tight text-[var(--limm-ink)]">
          Prepare a WhatsApp enquiry with the key project details.
        </h2>
        <p className="mt-3 text-sm leading-6 text-[var(--limm-muted)]">
          Fill what you know now. The generated message can be sent directly to
          LIMM Works through WhatsApp.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-5">
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
      <div className="mt-6 rounded-lg border border-[var(--limm-gold-soft)] bg-white p-4 text-sm leading-6 text-[var(--limm-muted)]">
        Attach floor plans and site photos in WhatsApp after generating the
        enquiry text. Clear photos of existing conditions are useful for the
        first review.
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[var(--limm-ink)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(31,38,31,0.18)] transition hover:bg-[var(--limm-olive)]"
          href={whatsappHref}
        >
          <MessageCircle aria-hidden="true" size={18} />
          WhatsApp LIMM Works
        </a>
      </div>
      <label className="mt-6 grid gap-2 text-sm font-medium text-[var(--limm-ink)]">
        Generated Enquiry Text
        <textarea
          className={`${fieldClass} min-h-52 bg-white font-mono text-xs leading-5`}
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />
      </label>
    </form>
  );
}
