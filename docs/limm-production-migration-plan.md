# LIMM Production Migration Plan

This document is for the LIMM Works custom website only.

The current Wix site remains live until Marcus gives explicit approval to switch. The custom website is still preview-only. Do not connect `limmworks.com`, change DNS, replace Wix, assign production aliases or deploy production without Marcus approval.

## Current State

- Live public site: current Wix website.
- Custom site repo: `https://github.com/wocmarc-JBC/limmworks-website.git`.
- Vercel project: `limmworks-website`.
- Current preview branch: `v0.6-production-readiness-preview`.
- Confirmed WhatsApp: `+65 8989 8278`.
- Required WhatsApp link format: `https://wa.me/6589898278?text=...`.
- Production domain planned for later: `limmworks.com`.

## Pre-Switch Checklist

- Marcus approves the final page copy, service positioning and Owner's Notes.
- Marcus approves the selected real project photos and confirms no client privacy issue is visible.
- Marcus confirms official WhatsApp, email, Instagram and business details.
- Marcus confirms whether the custom site should replace Wix completely or run alongside it during a short transition.
- `npm run lint`, `npm run typecheck` and `npm run build` pass on the final branch.
- Desktop and mobile screenshot QA pass with no broken images, console errors, huge blank sections or visible preview/draft/internal wording.
- Sitemap and robots output are checked on the preview deployment.
- Contact form generates the correct WhatsApp enquiry text.
- All WhatsApp links use `https://wa.me/6589898278?text=...`.
- No JBC, Command Centre or unrelated project references appear.
- Current Wix content that must remain live is backed up or documented.

## Vercel Domain Setup Steps

Do these only after Marcus approves the switch.

1. In Vercel, open project `limmworks-website`.
2. Confirm the latest approved commit is deployed as a production deployment.
3. Add `limmworks.com` and `www.limmworks.com` to the Vercel project domains.
4. Confirm which host should be canonical, likely `https://www.limmworks.com`.
5. Set redirect behavior so the non-canonical host redirects to the canonical host.
6. Confirm SSL certificates are issued and active in Vercel.
7. Confirm the site loads on both apex and `www` before announcing the switch.

## DNS Migration Steps

Do these only after Marcus approves the switch and Vercel domain instructions are visible.

1. Record the current Wix DNS records before changing anything.
2. Lower DNS TTL ahead of migration if the DNS provider allows it.
3. Add or update the Vercel-required DNS records for the apex domain.
4. Add or update the Vercel-required DNS record for `www`.
5. Do not remove email-related DNS records such as MX, SPF, DKIM or DMARC unless Marcus separately approves.
6. Wait for DNS propagation and verify in Vercel domain settings.
7. Test `https://limmworks.com`, `https://www.limmworks.com`, `/sitemap.xml`, `/robots.txt`, `/contact` and key service pages.
8. Keep the Wix rollback details available until the custom site is confirmed stable.

## Google Search Console And Sitemap Steps

1. Add or verify the approved canonical domain in Google Search Console.
2. Submit `https://www.limmworks.com/sitemap.xml` after the domain is live.
3. Confirm `robots.txt` points to the production sitemap.
4. Use URL inspection for the homepage, service pages, gallery, contact and Owner's Notes.
5. Check indexing and crawl reports after launch.
6. Keep the old Wix property available for comparison during the migration window.

## Rollback Plan

If the custom site has a serious issue after launch:

1. Revert DNS records to the saved Wix values, or remove the Vercel domain assignment if DNS is still pointed to Vercel.
2. Confirm the Wix site loads again on the public domain.
3. Keep the Vercel deployment available for debugging without production alias changes.
4. Document the issue, affected URLs and rollback time.
5. Reattempt launch only after the issue is fixed and Marcus re-approves.

## Marcus Approval Required Before Switching

- Final approval of all visible copy and page structure.
- Final approval of real photos and privacy review.
- Final approval of WhatsApp-first contact flow and contact form text.
- Final approval of the canonical domain choice.
- Final approval to change DNS away from Wix.
- Final approval to assign `limmworks.com` or `www.limmworks.com` to Vercel.
- Final approval to deploy or promote the production version.

No domain switch, Wix replacement, Vercel production alias change or DNS change should happen without explicit Marcus approval.
