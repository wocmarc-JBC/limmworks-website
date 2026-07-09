export const analyticsEvents = [
  "whatsapp_click",
  "contact_form_whatsapp_click",
  "start_project_review_click",
  "send_floor_plan_cta_click",
  "email_click",
  "phone_click",
] as const;

export type AnalyticsEventName = (typeof analyticsEvents)[number];

export type AnalyticsEventParams = {
  location?: string;
  page_path?: string;
  cta_label?: string;
  service_slug?: string;
  event_source?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const googleAdsConversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID;
const googleAdsLeadLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL;

const allowedParamKeys = [
  "location",
  "page_path",
  "cta_label",
  "service_slug",
  "event_source",
] as const;

function isGoogleAdsConversionId(value: string | undefined) {
  return Boolean(value && /^AW-\d+$/i.test(value));
}

export function isAnalyticsEventName(value: string): value is AnalyticsEventName {
  return analyticsEvents.includes(value as AnalyticsEventName);
}

function cleanValue(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed ? trimmed.slice(0, 120) : undefined;
}

function buildSafeParams(params: AnalyticsEventParams = {}) {
  const safeParams: Record<string, string> = {};

  for (const key of allowedParamKeys) {
    const value =
      key === "page_path"
        ? cleanValue(params.page_path) ?? window.location.pathname
        : cleanValue(params[key]);

    if (value) {
      safeParams[key] = value;
    }
  }

  return safeParams;
}

export function trackEvent(eventName: AnalyticsEventName, params: AnalyticsEventParams = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const safeParams = buildSafeParams(params);

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...safeParams,
    });
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, safeParams);

    if (
      eventName === "contact_form_whatsapp_click" &&
      isGoogleAdsConversionId(googleAdsConversionId) &&
      googleAdsLeadLabel
    ) {
      window.gtag("event", "conversion", {
        send_to: `${googleAdsConversionId}/${googleAdsLeadLabel}`,
      });
    }
  }
}
