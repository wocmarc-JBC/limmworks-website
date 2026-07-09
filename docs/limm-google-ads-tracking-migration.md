# LIMM Works Google Ads, GA4 and GTM Tracking Migration

This audit prepares tracking migration from the current Wix site to the custom LIMM Works Vercel site before DNS switch. It does not change Google Ads campaigns, campaign budgets, campaign status, Wix, DNS, or domain settings.

## Current Tracking Audit

Checked on branch `v1.4-google-ads-tracking-preview` against the LIMM Works website source and Vercel project environment.

| Tracking item | Current status | Notes |
| --- | --- | --- |
| Google Tag Manager | Missing | No `GTM-...`, `googletagmanager.com`, `dataLayer` or GTM snippet found. |
| Google tag / gtag | Missing | No `gtag(...)`, `gtag.js`, GA4 measurement script or Google Ads tag found. |
| GA4 Measurement ID | Missing | No `G-XXXXXXXXXX` ID found in source or Vercel env. |
| Google Ads conversion ID | Missing | No `AW-XXXXXXXXXX` ID found in source or Vercel env. |
| Google Ads conversion labels | Missing | No conversion labels found in source or Vercel env. |
| WhatsApp click events | Missing | WhatsApp CTAs link correctly to `https://wa.me/6589898278?text=...`, but no analytics event fires. |
| Contact form WhatsApp event | Missing | The contact form generates a WhatsApp enquiry link, but no conversion event fires on the WhatsApp click. |
| Start Project Review event | Missing | Buttons and anchors exist, but no analytics event fires. |
| Phone click event | Not implemented | No `tel:` links are currently present. Add tracking only if phone links are introduced. |
| Email click event | Missing | `mailto:` links exist, but no analytics event fires. |
| Tracking env vars | Missing except site URL | Vercel Production env currently has `NEXT_PUBLIC_SITE_URL=https://www.limmworks.com`. No GTM, GA4 or Google Ads env vars are present. |

Vercel project analytics may exist separately, but that does not replace GA4 or Google Ads conversion tracking.

## Tracking Readiness Decision

Tracking is not ready for DNS switch if existing Google Ads lead attribution must be preserved.

The new Vercel site can load and receive leads, but Google Ads / GA4 conversion tracking is currently absent. If DNS is switched before tracking is implemented and tested, Google Ads campaigns may continue spending while lead conversion reporting drops or becomes incomplete.

## IDs Marcus Must Provide

Do not invent these values.

Required if using Google Tag Manager:

- GTM container ID: `GTM-XXXXXXX`
- GA4 Measurement ID inside GTM, or confirmation that GA4 is already configured in the GTM container
- Google Ads conversion ID: `AW-XXXXXXXXXX`
- Google Ads conversion label for the primary lead conversion
- Google Ads account/customer ID for documentation, if Marcus wants it recorded
- Existing Wix/GTM conversion action names and trigger rules, if available

Required if using direct Google tag / gtag instead:

- GA4 Measurement ID: `G-XXXXXXXXXX`
- Google Ads conversion ID: `AW-XXXXXXXXXX`
- Google Ads conversion label for WhatsApp/form lead conversion
- Any secondary conversion labels for phone, email or project review clicks

Recommended primary conversion action name:

- `LIMM Works - Qualified WhatsApp Enquiry`

Recommended secondary conversion action names:

- `LIMM Works - WhatsApp CTA Click`
- `LIMM Works - Start Project Review Click`
- `LIMM Works - Email Click`
- `LIMM Works - Phone Click` if a clickable phone link is added later

## Recommended Implementation Approach

Use Google Tag Manager unless Marcus confirms the existing Wix setup only uses direct gtag.

Why GTM is recommended:

- Easier migration from Wix if the existing site already uses GTM.
- Google Ads and GA4 conversion triggers can be adjusted without redeploying the website.
- Click events can be sent to one `dataLayer` API from the Next.js site.
- Google Ads conversion tags can be mapped in GTM using the official conversion ID and labels.

Direct gtag is acceptable only if Marcus wants the leanest setup and has the exact GA4 / Google Ads IDs and labels ready.

## Proposed Environment Variables

For GTM:

```text
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

Optional documentation-only IDs if GTM manages tags:

```text
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
```

For direct gtag:

```text
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL=XXXXXXXXXXXXXXX
```

Only real IDs should be added to Vercel. Do not commit IDs directly into source code if they can be configured through Vercel environment variables.

## Event Plan

Events must not send personal data such as names, phone numbers, addresses, floor plans, rough scope text, budget notes or WhatsApp message content.

| Event | Trigger | Recommended status | Safe parameters |
| --- | --- | --- | --- |
| `page_view` | GA4 default page view | Standard analytics | page path, page title |
| `whatsapp_click` | Any general WhatsApp CTA click outside the contact form | Secondary conversion / GA4 event | page path, CTA text, component location |
| `contact_form_whatsapp_click` | Contact form generated WhatsApp button click | Primary conversion candidate | page path, form state completeness such as `has_property_type`, no entered values |
| `start_project_review_click` | Start Project Review buttons or links to `/contact` / `#project-review` | Secondary conversion / GA4 event | page path, CTA text, component location |
| `send_floor_plan_site_photos_click` | Send Floor Plan and Site Photos CTA | Secondary conversion / GA4 event | page path, component location |
| `email_click` | `mailto:` links in contact/footer | Secondary event | page path, component location |
| `phone_click` | Future `tel:` link if added | Secondary event | page path, component location |

Primary Google Ads conversion recommendation:

- Use `contact_form_whatsapp_click` as the strongest website conversion because the user has prepared project details and is clicking through to WhatsApp.

Fallback primary conversion:

- Use `whatsapp_click` if Marcus wants all WhatsApp clicks to count as leads.

## Site Actions That Need Event Coverage

Current source locations:

- Header WhatsApp button: `src/components/site-header.tsx`
- Mobile menu WhatsApp button: `src/components/mobile-menu.tsx`
- Sticky desktop/mobile WhatsApp CTA: `src/components/sticky-whatsapp.tsx`
- Homepage hero WhatsApp and Start Project Review CTAs: `src/app/page.tsx`
- Shared CTA band WhatsApp and Send Floor Plan and Site Photos buttons: `src/components/cta-band.tsx`
- Service page Start Project Review / contact CTAs: `src/components/service-page.tsx`
- Gallery WhatsApp and Start Project Review CTAs: `src/app/gallery/page.tsx`
- Contact page direct WhatsApp, email and Instagram links: `src/app/contact/page.tsx`
- Contact form generated WhatsApp button: `src/components/contact-form.tsx`
- Footer WhatsApp and email links: `src/components/site-footer.tsx`

## Current Public URL Map

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

## Old URL / Google Ads Landing URL Risk

Before DNS switch, Marcus should check Google Ads and Wix for current landing URLs.

Risk levels:

- If both Performance Max campaigns point only to the homepage, migration risk is lower.
- If ads point to old Wix service URLs, matching redirects must be created before DNS switch.
- If Performance Max Final URL expansion is enabled, all important replacement pages must load and avoid 404.
- If old Wix blog/article URLs exist, map them to Owner's Notes or relevant service pages.
- If Wix generated URLs use unusual paths, collect them from Google Ads landing page reports, Wix analytics and Google Search Console before switching.

Recommended redirect preparation:

- Export top landing pages from Google Ads.
- Export top pages from Wix analytics or Google Search Console.
- Map every old URL to the closest new URL.
- Add redirects before DNS switch if any old paths differ.
- QA redirects on the Vercel candidate before changing DNS.

## Data Privacy Rules

Do not send these values to GA4, GTM or Google Ads:

- visitor name
- contact number
- property address or estate detail
- generated WhatsApp enquiry text
- rough scope text
- floor plan contents
- site photo contents
- budget range if Marcus wants stricter privacy

Safe event parameters:

- event name
- page path
- CTA text
- component location
- service category or page category
- whether a contact form field is filled, without the actual value

## QA Plan After IDs Are Available

Implementation branch:

```text
v1.4-google-ads-tracking-preview
```

Validation commands:

```powershell
npm run lint
npm run typecheck
npm run build
$env:SCREENSHOT_DIR="qa\screenshots\limm-google-ads-tracking"
npm run qa:playwright -- https://limmworks-website.vercel.app
```

Manual browser checks:

- Use Tag Assistant or GTM Preview to confirm container loads.
- Confirm GA4 receives `page_view`.
- Click header WhatsApp and confirm `whatsapp_click`.
- Submit/generate contact form message, click WhatsApp, and confirm `contact_form_whatsapp_click`.
- Click Start Project Review and confirm `start_project_review_click`.
- Click Send Floor Plan and Site Photos and confirm the planned event.
- Click email links and confirm `email_click`.
- Confirm no event payload contains personal data.
- Confirm Google Ads conversion fires only on the approved primary conversion.

## DNS Switch Guidance

DNS switch is tracking-blocked until real IDs are provided, implemented and tested.

The domain can technically point to the Vercel site, but doing so before Google Ads / GA4 tracking is restored risks losing conversion attribution for the active Performance Max lead campaigns.

Recommended next step for Marcus:

1. Export or screenshot current Wix tracking setup.
2. Provide GTM container ID or direct Google tag / GA4 / Google Ads IDs.
3. Provide Google Ads conversion label for the lead conversion.
4. Confirm which action should be the primary conversion: contact-form WhatsApp click or all WhatsApp clicks.
5. Confirm whether old Wix landing URLs need redirects.

