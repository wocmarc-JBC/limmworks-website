# LIMM Works Google Ads, GA4 and GTM Tracking Migration

This document covers the tracking foundation added before the LIMM Works DNS switch. It does not change Google Ads campaigns, campaign budgets, campaign status, Wix, DNS or domain settings.

## Current Tracking Foundation

Branch: `v1.4-tracking-foundation-preview`

The site now supports optional GTM, GA4 and Google Ads tracking through environment variables. No fake IDs are hardcoded. If tracking IDs are missing, the site builds and works normally without loading GTM or gtag.

Supported environment variables:

```text
NEXT_PUBLIC_GTM_ID
NEXT_PUBLIC_GA_MEASUREMENT_ID
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID
NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL
```

Current Vercel env status:

- `NEXT_PUBLIC_SITE_URL=https://www.limmworks.com` exists for Production.
- Real GTM / GA4 / Google Ads IDs still need to be provided before tracking can go live.

## Recommended Route

Use Google Tag Manager if Marcus has or can create a GTM container.

Preferred setup:

1. Add `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX` in Vercel.
2. Configure GA4 and Google Ads conversion tags inside GTM.
3. Use the website's pushed `dataLayer` events as GTM triggers.
4. Keep Google Ads campaigns paused until Tag Assistant and Google Ads conversion status are verified.

Direct gtag fallback:

1. Add `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX` if GA4 should load directly.
2. Add `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXXX` if Google Ads should load directly.
3. Add `NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL=...` for the primary lead conversion.
4. Use this path only if GTM is not being used.

## IDs Marcus Must Provide

For GTM:

- GTM container ID: `GTM-XXXXXXX`
- GA4 Measurement ID or confirmation that GA4 is configured inside GTM
- Google Ads conversion ID: `AW-XXXXXXXXXX`
- Google Ads conversion label for the primary lead conversion
- Existing Wix/GTM conversion action names and trigger rules, if available
- Google Ads account/customer ID for documentation, if Marcus wants it recorded

For direct gtag:

- GA4 Measurement ID: `G-XXXXXXXXXX`
- Google Ads conversion ID: `AW-XXXXXXXXXX`
- Google Ads lead conversion label

## Implemented Events

The central tracking helper is in `src/lib/analytics.ts`.

Implemented safe event names:

- `whatsapp_click`
- `contact_form_whatsapp_click`
- `start_project_review_click`
- `send_floor_plan_cta_click`
- `email_click`
- `phone_click`

The click listener is in `src/components/analytics-click-listener.tsx`.

Event behavior:

- Pushes events to `window.dataLayer` when available.
- Sends `gtag("event", ...)` when `window.gtag` is available.
- Sends a direct Google Ads `conversion` event for `contact_form_whatsapp_click` only when both direct Google Ads env vars are present.
- Does not block navigation or WhatsApp links.
- Does not send personal data.

Safe parameters only:

- `location`
- `page_path`
- `cta_label`
- `service_slug`
- `event_source`

Never send:

- visitor name
- contact number
- property address
- generated WhatsApp message
- rough scope text
- budget text
- floor plan contents
- site photo contents

## Event Coverage

Covered CTA areas:

- Header WhatsApp CTA
- Mobile menu WhatsApp CTA
- Sticky desktop/mobile WhatsApp CTA
- Homepage WhatsApp CTA
- Homepage Start Project Review CTA
- Homepage bottom WhatsApp and Start Project Review CTA
- Service page hero WhatsApp CTA
- Service page related Send Details CTA
- Shared CTA band WhatsApp CTA
- Shared CTA band Send Floor Plan and Site Photos CTA
- Gallery WhatsApp and Start Project Review CTA
- Contact page WhatsApp CTA
- Contact page email click
- Contact form Start Project Review / generated enquiry button
- Contact form WhatsApp button
- Footer WhatsApp click
- Footer email click
- Future `tel:` links through automatic fallback

## Conversion Recommendation

Recommended primary Google Ads conversion:

- `contact_form_whatsapp_click`

Why:

- It fires when a visitor has reached the contact form and clicks through to send project details on WhatsApp.
- It is stronger than a general WhatsApp click because the visitor has interacted with the enquiry flow.

Fallback primary conversion:

- `whatsapp_click`

Use this only if Marcus wants all WhatsApp clicks counted as leads.

Recommended secondary events:

- `start_project_review_click`
- `send_floor_plan_cta_click`
- `email_click`
- `phone_click` if a clickable phone link is added

## Public URL Map

The current Vercel sitemap exposes these future live URLs:

- `https://www.limmworks.com`
- `https://www.limmworks.com/gallery`
- `https://www.limmworks.com/owners-notes`
- `https://www.limmworks.com/about`
- `https://www.limmworks.com/contact`
- `https://www.limmworks.com/landed-renovation`
- `https://www.limmworks.com/landed-aa-works`
- `https://www.limmworks.com/condo-renovation`
- `https://www.limmworks.com/hdb-renovation`
- `https://www.limmworks.com/commercial-renovation`
- `https://www.limmworks.com/kitchen-renovation`
- `https://www.limmworks.com/bathroom-renovation`
- `https://www.limmworks.com/carpentry-storage`
- `https://www.limmworks.com/owners-notes/prepare-before-starting-renovation`
- `https://www.limmworks.com/owners-notes/condo-renovation-management-rules-planning`
- `https://www.limmworks.com/owners-notes/landed-renovation-vs-aa-works-difference`
- `https://www.limmworks.com/owners-notes/kitchen-renovation-storage-workflow-details`
- `https://www.limmworks.com/owners-notes/bathroom-renovation-waterproofing-layout-coordination`
- `https://www.limmworks.com/owners-notes/carpentry-storage-before-fabrication`

## Old URL and Google Ads Landing URL Risk

Before DNS switch, Marcus should check Google Ads and Wix for current landing URLs.

- If both Performance Max campaigns point only to the homepage, migration risk is lower.
- If ads point to old Wix service URLs, matching redirects should be created before DNS switch.
- If Performance Max Final URL expansion is enabled, all important replacement pages must load and avoid 404.
- If old Wix blog/article URLs exist, map them to Owner's Notes or relevant service pages.

Recommended preparation:

1. Export top landing pages from Google Ads.
2. Export top pages from Wix analytics or Google Search Console.
3. Map every old URL to the closest new URL.
4. Add redirects before DNS switch if any old paths differ.
5. QA redirects on the Vercel candidate before changing DNS.

## QA After IDs Are Added

Run:

```powershell
npm run lint
npm run typecheck
npm run build
$env:SCREENSHOT_DIR="qa\screenshots\limm-google-ads-tracking"
npm run qa:playwright -- https://limmworks-website.vercel.app
```

Manual tracking QA:

- Use Google Tag Assistant or GTM Preview.
- Confirm GTM or gtag loads only when env IDs are present.
- Confirm GA4 receives `page_view`.
- Click header WhatsApp and confirm `whatsapp_click`.
- Submit/generate contact form message, click WhatsApp and confirm `contact_form_whatsapp_click`.
- Click Start Project Review and confirm `start_project_review_click`.
- Click Send Floor Plan and Site Photos and confirm `send_floor_plan_cta_click`.
- Click email links and confirm `email_click`.
- Confirm no event payload contains personal data.
- Confirm Google Ads conversion fires only on the approved primary conversion.

## DNS Switch Guidance

DNS switch is safer if Google Ads campaigns remain paused until tracking is verified.

If Google Ads campaigns are active or will restart immediately after launch, tracking should be configured and tested before DNS switch.

Recommended next step for Marcus:

1. Provide GTM container ID or direct GA4 / Google Ads IDs.
2. Provide Google Ads conversion label for the lead conversion.
3. Confirm whether `contact_form_whatsapp_click` is the primary conversion.
4. Confirm whether old Wix landing URLs need redirects.
5. Keep campaigns paused until Tag Assistant and Google Ads conversion status are checked.

