# LIMM Asset Replacement Guide

This guide keeps brand and project-photo replacement scoped to the LIMM Works preview repo. Do not connect `limmworks.com`, change DNS or replace the current Wix site as part of asset replacement.

## Brand Assets

Drop official brand files into `public/brand/` using these filenames:

- `limm-logo-light.png`
- `limm-logo-dark.png`
- `limm-icon.png`
- `favicon.png`

The site checks these files at build time:

- Header logo: uses `limm-logo-dark.png` first, then `limm-logo-light.png`, then `limm-icon.png`.
- Favicon: uses `favicon.png` when present.
- Fallback: if the official files are missing, the clean `LW` mark remains.

Logo and favicon paths are centralized in `src/data/assets.ts`.

## Folder Structure

- `public/projects/limm-real/raw/`
  - Store original photos from LIMM here.
  - Keep source filenames descriptive.
  - Do not reference raw files directly from pages.

- `public/projects/limm-real/processed/`
  - Store web-ready images used by `next/image`.
  - Current filenames:
    - `hero-renovation-planning.png`
    - `landed-renovation.png`
    - `condo-hdb-interior.png`
    - `kitchen-bathroom.png`
    - `carpentry-storage.png`
    - `commercial-interior.png`
    - `site-progress.png`

## Replacement Steps

1. Add real source photos into `public/projects/limm-real/raw/`.
2. Export processed images as `.jpg`, `.png` or `.webp` into `public/projects/limm-real/processed/`.
3. Reuse the current filenames when possible so page code does not need to change.
4. If filenames change, update:
   - `src/data/assets.ts`
   - `src/data/gallery.ts`
   - `src/data/services.ts`
   - `src/app/page.tsx`
   - any page hero that references a replaced image
5. Update alt text in the same data files so it describes the real project accurately.

## Recommended Image Specs

- Hero: 1600x900 or larger, landscape.
- Gallery cards: 1200x900 or larger, 4:3 landscape.
- Keep faces, addresses, unit numbers, license plates and private client details out of public photos unless cleared.
- Avoid adding text, logos, watermarks or fake awards into images.

## Current Asset Status

- Brand files are not yet supplied, so the site uses the `LW` fallback mark.
- Project visuals are temporary review assets. Replace them with approved LIMM project photos before launch.
