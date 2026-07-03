export const brandAssets = {
  useOfficialLogo: false,
  logoLight: "/brand/limm-logo-light.png",
  logoDark: "/brand/limm-logo-dark.png",
  icon: "/brand/limm-icon.png",
  favicon: "/brand/favicon.png",
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
  homeHero: "hero-renovation-planning.png",
  landed: "landed-renovation.png",
  landedAa: "landed-renovation.png",
  condo: "condo-hdb-interior.png",
  hdb: "condo-hdb-interior.png",
  commercial: "commercial-interior.png",
  kitchen: "kitchen-bathroom.png",
  bathroom: "kitchen-bathroom.png",
  carpentry: "carpentry-storage.png",
  galleryOverview: "landed-renovation.png",
  about: "hero-renovation-planning.png",
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
