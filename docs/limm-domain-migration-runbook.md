# LIMM Works Domain Migration Runbook

This runbook prepares the later switch from the current Wix live site to the custom LIMM Works Vercel site. It is a rehearsal document only. Do not connect `limmworks.com`, change DNS, alter Wix, add Vercel domain aliases, or switch any production domain without explicit Marcus approval.

## Current State

- Wix remains the public live site for the LIMM Works domain.
- The approved Vercel production candidate is live at `https://limmworks-website.vercel.app`.
- The exact Vercel deployment URL is `https://limmworks-website-dv9wg2p87-limmworks.vercel.app`.
- Production candidate commit: `dd5dc219243a5f718c6c90e2d122abbcfdf801c3`.
- Production candidate tag: `v1.2-limm-production-candidate`.
- `limmworks.com` and `www.limmworks.com` are not connected to the Vercel project.
- No DNS changes have been made as part of this rehearsal.
- Current Vercel production aliases are Vercel-generated aliases only:
  - `https://limmworks-website.vercel.app`
  - `https://limmworks-website-limmworks.vercel.app`
  - `https://limmworks-website-wocmarc-3761-limmworks.vercel.app`

## Site URL Findings

The site URL handling is already centralized through `src/data/site.ts`.

| Purpose | File | Current handling | Current deployed result | Recommended launch value |
| --- | --- | --- | --- | --- |
| Base site URL | `src/data/site.ts` | `getSiteUrl()` checks `NEXT_PUBLIC_SITE_URL`, then `VERCEL_URL`, then `siteConfig.eventualProductionUrl` | Vercel injects `VERCEL_URL`, so metadata resolves to `https://limmworks-website-dv9wg2p87-limmworks.vercel.app` | Set `NEXT_PUBLIC_SITE_URL=https://www.limmworks.com` for production launch |
| Future production default | `src/data/site.ts` | `siteConfig.eventualProductionUrl: "https://www.limmworks.com"` | Used only when neither `NEXT_PUBLIC_SITE_URL` nor `VERCEL_URL` exists | Keep as `https://www.limmworks.com` |
| Canonical URLs | `src/lib/seo.ts`, `src/app/layout.tsx` | Page metadata uses `absoluteUrl(path)` or Next metadata relative to `metadataBase` | Deployment URL | `https://www.limmworks.com/...` |
| Sitemap URLs | `src/app/sitemap.ts` | Each route uses `absoluteUrl(path)` | Deployment URL | `https://www.limmworks.com/...` |
| Robots sitemap reference | `src/app/robots.ts` | `sitemap: absoluteUrl("/sitemap.xml")` and `host: getSiteUrl()` | Deployment URL | `https://www.limmworks.com/sitemap.xml` |
| Open Graph URLs | `src/lib/seo.ts`, `src/app/layout.tsx` | OG page URL and OG images use `absoluteUrl(...)` or `metadataBase` | Deployment URL | `https://www.limmworks.com/...` |
| Twitter card images | `src/lib/seo.ts`, `src/app/layout.tsx` | Images use `absoluteUrl(image)` or `metadataBase` | Deployment URL | `https://www.limmworks.com/...` |
| JSON-LD schema URLs | `src/lib/schema.ts` | Organization, LocalBusiness, WebSite, WebPage, Service, BreadcrumbList and Article schema use `absoluteUrl(...)` | Deployment URL | `https://www.limmworks.com/...` |
| Hreflang / language alternates | `src/lib/seo.ts`, `src/app/layout.tsx` | English only: `en-SG` | Deployment URL | `https://www.limmworks.com/...` |

## Domain-Ready Site URL Strategy

Use `NEXT_PUBLIC_SITE_URL` as the approved launch switch.

Recommended production launch setting:

```text
NEXT_PUBLIC_SITE_URL=https://www.limmworks.com
```

Why this works:

- `NEXT_PUBLIC_SITE_URL` already has first priority in `getSiteUrl()`.
- The Vercel deployment URL is not hardcoded across random files.
- Canonical URLs, sitemap URLs, robots references, Open Graph URLs, Twitter images and JSON-LD schema all route through the same `absoluteUrl()` helper or `metadataBase`.
- Preview and default Vercel production candidate deployments can continue using Vercel URLs until the custom domain launch is approved.

Launch caution:

- Set or confirm `NEXT_PUBLIC_SITE_URL=https://www.limmworks.com` in the Vercel project production environment before the final domain-live rebuild or promotion.
- After the setting is active, verify `sitemap.xml`, `robots.txt`, page source, OG tags and JSON-LD on `https://www.limmworks.com`.
- Do not rely on `VERCEL_URL` for the final live domain because it resolves to the immutable deployment host.

## Pre-Switch Checklist

Do not begin the live switch until all items are ready.

- Marcus gives explicit written approval to start domain migration.
- Take screenshots of current Wix DNS records.
- Record current Wix and Namecheap DNS settings in a dated note.
- Confirm access to the domain registrar or DNS manager.
- Confirm access to the Wix account and rollback path.
- Confirm access to the Vercel project `limmworks-website`.
- Confirm access to Google Search Console.
- Confirm who can approve rollback and who can execute rollback.
- Confirm final canonical domain choice: `https://www.limmworks.com`.
- Confirm `NEXT_PUBLIC_SITE_URL=https://www.limmworks.com` is ready to set for the Vercel production environment at launch.
- Run final QA against `https://limmworks-website.vercel.app`.

## Vercel Domain Setup Rehearsal

These steps are for later execution only.

1. Open Vercel project `limmworks-website`.
2. Add `limmworks.com` to the project domains only after Marcus approves.
3. Add `www.limmworks.com` to the project domains only after Marcus approves.
4. Set `https://www.limmworks.com` as the preferred canonical host.
5. Ensure the apex domain `https://limmworks.com` redirects to `https://www.limmworks.com` if supported by the final Vercel/domain setup.
6. Use only the exact DNS records shown by Vercel at domain setup time.
7. Do not guess A, CNAME, TXT, ALIAS or verification records.
8. Do not delete Wix DNS records until the existing records have been captured and the switch is approved.

## DNS Switch Rehearsal

DNS must be changed only after Marcus explicitly approves the live switch.

Before changing records:

- Capture screenshots of the current DNS zone.
- Export or manually copy all current DNS records where possible.
- Identify which records are Wix website records and which records are used for email or third-party services.
- Confirm no email, SPF, DKIM, DMARC, MX or unrelated service records will be changed.
- Confirm the exact records requested by Vercel for `limmworks.com` and `www.limmworks.com`.

During the switch:

- Add or update only the records required by Vercel.
- Preserve email and unrelated records.
- Wait for Vercel domain verification to pass.
- Check SSL issuance before declaring the launch complete.
- Do not provide or apply guessed DNS values.

After records are added:

- Verify `https://www.limmworks.com`.
- Verify `https://limmworks.com`.
- Confirm whether apex redirects to `www`.
- Confirm HTTPS certificate is active.
- Confirm the Vercel deployment has no login or protection shell.

## Canonical / SEO Switch

At launch, the SEO-facing URLs should resolve to the final domain.

- Site canonical should become `https://www.limmworks.com`.
- Sitemap URLs should use `https://www.limmworks.com`.
- `robots.txt` should reference `https://www.limmworks.com/sitemap.xml`.
- Open Graph URLs and images should use `https://www.limmworks.com`.
- Twitter card images should use `https://www.limmworks.com`.
- JSON-LD schema URLs should use `https://www.limmworks.com`.
- `en-SG` hreflang alternates should use `https://www.limmworks.com`.

Verification commands after domain launch:

```powershell
curl -L https://www.limmworks.com/robots.txt
curl -L https://www.limmworks.com/sitemap.xml
curl -L https://www.limmworks.com | Select-String "https://www.limmworks.com"
```

## Post-Switch Verification

Verify these URLs:

- `https://www.limmworks.com`
- `https://limmworks.com`
- `https://www.limmworks.com/landed-renovation`
- `https://www.limmworks.com/landed-aa-works`
- `https://www.limmworks.com/condo-renovation`
- `https://www.limmworks.com/hdb-renovation`
- `https://www.limmworks.com/commercial-renovation`
- `https://www.limmworks.com/kitchen-renovation`
- `https://www.limmworks.com/bathroom-renovation`
- `https://www.limmworks.com/carpentry-storage`
- `https://www.limmworks.com/gallery`
- `https://www.limmworks.com/owners-notes`
- all Owner's Notes article URLs
- `https://www.limmworks.com/about`
- `https://www.limmworks.com/contact`
- `https://www.limmworks.com/sitemap.xml`
- `https://www.limmworks.com/robots.txt`

Pass conditions:

- Homepage, service pages, gallery, Owner's Notes and contact load.
- `https://limmworks.com` redirects or resolves correctly based on the approved setup.
- SSL certificate is active.
- `sitemap.xml` loads and uses `https://www.limmworks.com` URLs.
- `robots.txt` loads and points to `https://www.limmworks.com/sitemap.xml`.
- WhatsApp links still use `https://wa.me/6589898278?text=...`.
- Visible WhatsApp number remains `+65 8989 8278`.
- Contact form generates the correct WhatsApp enquiry text.
- No Vercel login shell appears.
- No broken images.
- No console errors.
- No JBC branding or links.
- No obvious placeholder, draft or internal copy.

## Google Search Console

After the domain resolves cleanly:

1. Verify the `https://www.limmworks.com` property if needed.
2. Submit `https://www.limmworks.com/sitemap.xml`.
3. Inspect `https://www.limmworks.com`.
4. Inspect important service URLs.
5. Inspect `https://www.limmworks.com/contact`.
6. Request indexing only after HTTPS, canonical tags, sitemap and robots are correct.
7. Keep the Wix property data for historical reference if available.

## Rollback Plan

Rollback should be approved by the named decision maker before changes are made, unless the site is clearly unavailable and Marcus has pre-approved emergency rollback.

Rollback path:

1. Restore the previous Wix or Namecheap DNS records from the captured screenshots/notes.
2. Remove or disable Vercel custom domain aliases if needed.
3. Confirm the Wix site resolves again.
4. Confirm SSL/HTTPS behavior after DNS propagation.
5. Keep the Vercel production candidate and tag `v1.2-limm-production-candidate` available for follow-up.
6. Document the time rollback started, records restored, and time the Wix site became available again.

DNS propagation caveat:

- DNS changes may take time to propagate.
- Some visitors may temporarily see different versions during propagation.
- Do not repeatedly change records while propagation is in progress unless rollback is approved.

## Dry-Run QA Commands

The existing QA script can test either the current Vercel candidate or the future custom domain.

Current production candidate:

```powershell
$env:SCREENSHOT_DIR="qa\screenshots\limm-domain-rehearsal-vercel"
npm run qa:playwright -- https://limmworks-website.vercel.app
```

Future domain after DNS switch:

```powershell
$env:SCREENSHOT_DIR="qa\screenshots\limm-domain-live"
npm run qa:playwright -- https://www.limmworks.com
```

The QA script checks:

- pages load
- service pages load
- gallery loads
- Owner's Notes index and articles load
- sitemap and robots load
- WhatsApp CTA text is present
- mobile sticky WhatsApp spacing
- contact form generated enquiry text
- no JBC contamination
- no public placeholder, draft, preview or internal wording
- no broken images
- no console errors
- JSON-LD parses
- screenshots are saved for desktop and mobile review

## Marcus Approval Items Before Switch

Marcus must approve:

- final launch timing
- final canonical domain: `https://www.limmworks.com`
- adding `limmworks.com` and `www.limmworks.com` to Vercel
- setting `NEXT_PUBLIC_SITE_URL=https://www.limmworks.com` for production
- DNS changes in Namecheap/Wix/DNS manager
- rollback decision maker and contact path
- Google Search Console submission after domain verification

