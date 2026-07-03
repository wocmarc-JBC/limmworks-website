# LIMM Photo Intake Checklist

Use these folders for LIMM project photo intake and web-ready image output.

## Source Photo Folders

- `public/projects/limm-real/raw/landed/`
- `public/projects/limm-real/raw/condo-hdb/`
- `public/projects/limm-real/raw/kitchen-bathroom/`
- `public/projects/limm-real/raw/carpentry-storage/`
- `public/projects/limm-real/raw/commercial/`
- `public/projects/limm-real/raw/site-progress/`

## Web-Ready Folders

- `public/projects/limm-real/processed/landed/`
- `public/projects/limm-real/processed/condo-hdb/`
- `public/projects/limm-real/processed/kitchen-bathroom/`
- `public/projects/limm-real/processed/carpentry-storage/`
- `public/projects/limm-real/processed/commercial/`
- `public/projects/limm-real/processed/site-progress/`

## What Marcus Should Add

- Landed: facade, car porch, backyard, roofline, wet kitchen, layout progress.
- Condo/HDB: completed interiors, storage, flooring, kitchen, bathroom, protection.
- Kitchen/Bathroom: dry kitchen, wet kitchen, fittings, ventilation, waterproofing stages.
- Carpentry/Storage: wardrobes, kitchen cabinets, TV consoles, shoe cabinets, storage cabinets.
- Commercial: office, retail, pantry, display, counters, fit-out, handover condition.
- Site Progress: protection, sequencing, works in progress, clean handover details.

## Preferred Orientation

- Homepage and service heroes: landscape, 16:9, at least 1600x900.
- Gallery cards: landscape, 4:3 or 16:9, at least 1200px wide.
- Detail crops: landscape preferred; portrait can be used only if it crops cleanly.

## Minimum Photo Count

- Homepage hero: 1 strong image.
- Homepage sections: 3 to 6 supporting images.
- Each service page: 1 strong category image.
- Gallery: 3 to 6 images per category for a useful first review.
- Site progress: at least 6 images showing protection, sequencing and completion.

## Do Not Use

- Photos with visible addresses, unit numbers, car plates or private documents.
- People or faces without clearance.
- Low-resolution, blurry or heavily filtered images.
- Images with third-party logos, fake awards or promotional text overlays.
- Photos that show unsafe work conditions or messy handover states.

## Replacement Flow

1. Add original files to the correct `raw/` category folder.
2. Export web-ready files to the matching `processed/` category folder.
3. Update `src/data/assets.ts` with the selected filenames.
4. Update alt text in `src/data/gallery.ts` and `src/data/services.ts` when real projects are selected.
