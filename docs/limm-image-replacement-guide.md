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
  - Category folders:
    - `landed/`
    - `condo-hdb/`
    - `kitchen-bathroom/`
    - `carpentry-storage/`
    - `commercial/`
    - `site-progress/`

- `public/projects/limm-real/processed/`
  - Store web-ready images used by `next/image`.
  - Category folders mirror the `raw/` folders.
  - Current selected filenames:
    - `landed/landed-dining-kitchen.jpg`
    - `landed/landed-open-plan-living.jpg`
    - `landed/landed-glass-entry.jpg`
    - `landed/landed-living-room-context.jpg`
    - `condo-hdb/condo-tv-feature-wall.jpg`
    - `condo-hdb/hdb-kitchen-green-cabinets.jpg`
    - `condo-hdb/condo-bathroom-vanity.jpg`
    - `kitchen-bathroom/kitchen-light-wood-cabinets.jpg`
    - `kitchen-bathroom/kitchen-dark-island.jpg`
    - `kitchen-bathroom/bathroom-vanity-wide.jpg`
    - `kitchen-bathroom/bathroom-wet-area-window.jpg`
    - `carpentry-storage/carpentry-kitchen-island.jpg`
    - `carpentry-storage/carpentry-wardrobe-run.jpg`
    - `carpentry-storage/carpentry-room-storage.jpg`
    - `commercial/commercial-dining-fitout.jpg`
    - `commercial/commercial-counter-seating.jpg`
    - `commercial/commercial-dining-detail.jpg`
    - `site-progress.png`

## Replacement Steps

1. Add real source photos into `public/projects/limm-real/raw/`.
2. Export processed images as `.jpg`, `.png` or `.webp` into the matching `public/projects/limm-real/processed/` category folder.
3. Keep processed files in the category folder that matches the source category.
4. If filenames change, update:
   - `src/data/assets.ts`
   - `src/data/gallery.ts` for gallery alt text
   - `src/data/services.ts` for service hero alt text
5. Update alt text in the same data files so it describes the real project accurately.

## Asset Data System

Image paths are centralized in `src/data/assets.ts`.

- `projectPhotoFolders` documents the expected raw and processed folders.
- `projectImages` is the public map used by pages, services and gallery cards.
- Layout components should not need edits when real filenames are swapped.

## Recommended Image Specs

- Hero: 1600x900 or larger, landscape.
- Gallery cards: 1200x900 or larger, 4:3 landscape.
- Keep faces, addresses, unit numbers, license plates and private client details out of public photos unless cleared.
- Avoid adding text, logos, watermarks or fake awards into images.

## Current Asset Status

- Official brand files are present in `public/brand/`.
- v0.5 uses selected processed project photos for the homepage, service pages and gallery category cards where suitable.
- The site-progress category still needs real LIMM site-progress photos. Until those are supplied, the existing site-progress visual remains in place.
