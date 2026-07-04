export const brandAssets = {
  useOfficialLogo: true,
  logoLight: "/brand/limm-logo-light.png",
  logoDark: "/brand/limm-logo-dark.png",
  icon: "/brand/limm-icon.png",
  favicon: "/brand/favicon.png",
  socialPreview: "/brand/limm-social-preview.png",
} as const;

const processedProjectBase = "/projects/limm-real/processed";

export const projectPhotoFolders = {
  raw: {
    landed: "/projects/limm-real/raw/landed/",
    condoHdb: "/projects/limm-real/raw/condo-hdb/",
    kitchenBathroom: "/projects/limm-real/raw/kitchen-bathroom/",
    carpentryStorage: "/projects/limm-real/raw/carpentry-storage/",
    commercial: "/projects/limm-real/raw/commercial/",
    siteProgress: "/projects/limm-real/raw/site-progress/",
  },
  processed: {
    landed: `${processedProjectBase}/landed/`,
    condoHdb: `${processedProjectBase}/condo-hdb/`,
    kitchenBathroom: `${processedProjectBase}/kitchen-bathroom/`,
    carpentryStorage: `${processedProjectBase}/carpentry-storage/`,
    commercial: `${processedProjectBase}/commercial/`,
    siteProgress: `${processedProjectBase}/site-progress/`,
  },
} as const;

const projectImageSlots = {
  homeHero: "landed/landed-dining-kitchen.jpg",
  landed: "landed/landed-open-plan-living.jpg",
  landedAa: "landed/landed-glass-entry.jpg",
  condo: "condo-hdb/condo-tv-feature-wall.jpg",
  hdb: "condo-hdb/hdb-kitchen-green-cabinets.jpg",
  commercial: "commercial/commercial-dining-fitout.jpg",
  kitchen: "kitchen-bathroom/kitchen-light-wood-cabinets.jpg",
  bathroom: "kitchen-bathroom/bathroom-vanity-wide.jpg",
  carpentry: "carpentry-storage/carpentry-wardrobe-run.jpg",
  galleryOverview: "landed/landed-dining-kitchen.jpg",
  about: "landed/landed-open-plan-living.jpg",
  contact: "site-progress.png",
} as const;

function processedImage(filename: string) {
  return `${processedProjectBase}/${filename}`;
}

// Page layouts read from this map only; swap filenames here when real project
// photos are processed for web use.
export const projectImages = {
  homeHero: processedImage(projectImageSlots.homeHero),
  landed: processedImage(projectImageSlots.landed),
  landedAa: processedImage(projectImageSlots.landedAa),
  condo: processedImage(projectImageSlots.condo),
  hdb: processedImage(projectImageSlots.hdb),
  commercial: processedImage(projectImageSlots.commercial),
  kitchen: processedImage(projectImageSlots.kitchen),
  bathroom: processedImage(projectImageSlots.bathroom),
  carpentry: processedImage(projectImageSlots.carpentry),
  galleryOverview: processedImage(projectImageSlots.galleryOverview),
  about: processedImage(projectImageSlots.about),
  contact: processedImage(projectImageSlots.contact),
} as const;
