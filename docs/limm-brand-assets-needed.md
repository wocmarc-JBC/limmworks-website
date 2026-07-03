# LIMM Brand Assets Needed

Add these official brand files to `public/brand/` before final brand review.

| File | Purpose | Ideal Dimensions | Used In |
| --- | --- | --- | --- |
| `limm-logo-light.png` | Light logo for dark backgrounds | 1200x300 PNG, transparent background | Footer, dark sections, fallback if dark logo is unavailable |
| `limm-logo-dark.png` | Dark logo for light backgrounds | 1200x300 PNG, transparent background | Header, navigation, primary brand display |
| `limm-icon.png` | Square icon mark | 512x512 PNG, transparent background | Header fallback, footer fallback, social/avatar use |
| `favicon.png` | Browser favicon | 512x512 PNG, square | Metadata favicon, browser tab icon |

Current status: the official files are missing, so the site uses the clean `LW` fallback mark.

Implementation note: brand paths are centralized in `src/data/assets.ts`, and file existence is checked at build time.
