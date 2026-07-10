"use client";

import { useEffect } from "react";

type GoogleTagWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

function cleanLabel(value: string) {
  return value.replace(/\s+/g, " ").trim().slice(0, 100);
}

export function EnquiryAnalytics() {
  useEffect(() => {
    function trackWhatsAppClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>('a[href*="wa.me/"]');
      if (!link) return;

      const analyticsWindow = window as GoogleTagWindow;
      const source = cleanLabel(link.dataset.analyticsSource || link.textContent || "WhatsApp link");
      const details = {
        method: "WhatsApp",
        source,
        page_path: window.location.pathname,
      };

      analyticsWindow.gtag?.("event", "generate_lead", details);
      analyticsWindow.gtag?.("event", "whatsapp_click", details);
    }

    document.addEventListener("click", trackWhatsAppClick, { capture: true });
    return () => document.removeEventListener("click", trackWhatsAppClick, { capture: true });
  }, []);

  return null;
}
