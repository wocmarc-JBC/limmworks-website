import type { FaqItem } from "@/data/services";

export function FaqList({ faqs }: { faqs: FaqItem[] }) {
  return (
    <div className="grid gap-3">
      {faqs.map((faq) => (
        <details
          className="group rounded-lg border border-[var(--limm-line)] bg-[var(--limm-paper)] p-5"
          key={faq.question}
        >
          <summary className="cursor-pointer text-base font-semibold text-[var(--limm-ink)]">
            {faq.question}
          </summary>
          <p className="mt-3 text-sm leading-6 text-[var(--limm-muted)]">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
