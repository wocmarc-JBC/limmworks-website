# limmworks-website

Production-quality preview website for LIMM Works Pte Ltd.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Motion
- next/image
- Static data files for services, gallery, FAQs and Owner's Notes
- SEO metadata, sitemap, robots and JSON-LD schema

## Local Commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
```

## Preview Rules

- This is a preview build only.
- Do not connect `limmworks.com`.
- Do not change DNS.
- Do not replace the current Wix website.
- Deploy to a Vercel preview URL first.
- Visible site footer must not show preview/domain warnings; keep those notes in internal docs.

## Content Notes

- WhatsApp number is confirmed as `+65 8989 8278`; WhatsApp links use `https://wa.me/6589898278?text=...`.
- Owner's Notes are practical renovation notes from LIMM Works to help homeowners and businesses understand planning, site conditions, scope and coordination before works begin.
- Project visuals are temporary preview visuals until approved LIMM project photos are supplied.
- Official brand assets are stored in `public/brand/` as `limm-logo-light.png`, `limm-logo-dark.png`, `limm-icon.png` and `favicon.png`.

See:

- `docs/limm-image-replacement-guide.md`
- `docs/limm-seo-geo-roadmap.md`
