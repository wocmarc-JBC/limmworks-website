"use client";

import { useEffect } from "react";
import {
  type AnalyticsEventName,
  type AnalyticsEventParams,
  isAnalyticsEventName,
  trackEvent,
} from "@/lib/analytics";

function inferEvent(link: HTMLAnchorElement): AnalyticsEventName | undefined {
  const href = link.href;

  if (href.startsWith("https://wa.me/")) {
    return "whatsapp_click";
  }

  if (href.startsWith("mailto:")) {
    return "email_click";
  }

  if (href.startsWith("tel:")) {
    return "phone_click";
  }

  return undefined;
}

function getTrackingTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) {
    return null;
  }

  return target.closest<HTMLElement>(
    "[data-analytics-event],a[href^='https://wa.me/'],a[href^='mailto:'],a[href^='tel:']",
  );
}

function getEventName(target: HTMLElement): AnalyticsEventName | undefined {
  const explicitEvent = target.dataset.analyticsEvent;

  if (explicitEvent && isAnalyticsEventName(explicitEvent)) {
    return explicitEvent;
  }

  if (target instanceof HTMLAnchorElement) {
    return inferEvent(target);
  }

  return undefined;
}

function getParams(target: HTMLElement): AnalyticsEventParams {
  return {
    location: target.dataset.analyticsLocation,
    cta_label:
      target.dataset.analyticsLabel ?? target.textContent?.replace(/\s+/g, " ").trim(),
    service_slug: target.dataset.analyticsServiceSlug,
    event_source: target.dataset.analyticsSource ?? "website_click",
  };
}

export function AnalyticsClickListener() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = getTrackingTarget(event.target);

      if (!target) {
        return;
      }

      const eventName = getEventName(target);

      if (!eventName) {
        return;
      }

      trackEvent(eventName, getParams(target));
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
