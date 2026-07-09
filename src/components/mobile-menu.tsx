"use client";

import { ChevronRight, Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { serviceNav } from "@/data/services";
import { getWhatsappHref, primaryNav } from "@/data/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[var(--limm-line)] bg-[var(--limm-paper)] text-[var(--limm-ink)]"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
      </button>
      {open ? (
        <div className="fixed inset-x-0 top-[76px] z-50 max-h-[calc(100svh-76px)] overflow-y-auto border-b border-[var(--limm-line)] bg-[var(--limm-paper)] px-4 py-5 shadow-xl">
          <div className="grid gap-2">
            {primaryNav.map((item) => (
              <Link
                className="flex min-h-11 items-center justify-between rounded-md px-3 py-2 text-base font-semibold text-[var(--limm-ink)] hover:bg-[var(--limm-cream)]"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
                <ChevronRight aria-hidden="true" size={17} />
              </Link>
            ))}
          </div>
          <div className="mt-5 border-t border-[var(--limm-line)] pt-5">
            <p className="mb-2 text-sm font-semibold text-[var(--limm-clay)]">
              Services
            </p>
            <div className="grid gap-2">
              {serviceNav.map((item) => (
                <Link
                  className="flex min-h-11 items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-[var(--limm-ink)] hover:bg-[var(--limm-cream)]"
                  href={item.href}
                  key={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                  <ChevronRight aria-hidden="true" size={16} />
                </Link>
              ))}
            </div>
          </div>
          <a
            className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-[var(--limm-ink)] px-4 py-2.5 text-sm font-semibold text-white"
            data-analytics-event="whatsapp_click"
            data-analytics-label="WhatsApp LIMM Works"
            data-analytics-location="mobile_menu"
            href={getWhatsappHref()}
            onClick={() => setOpen(false)}
          >
            <MessageCircle aria-hidden="true" size={18} />
            WhatsApp LIMM Works
          </a>
        </div>
      ) : null}
    </div>
  );
}
