export type GalleryCategory = {
  title: string;
  slug: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
};

export const galleryCategories: GalleryCategory[] = [
  {
    title: "Landed Renovation",
    slug: "landed-renovation",
    description:
      "Facade, car porch, kitchen, bathroom, drainage and layout-focused landed renovation references.",
    image: "/projects/limm-real/processed/landed-renovation.png",
    imageAlt: "Preview image for landed renovation works",
    tags: ["Landed", "Facade", "A&A awareness"],
  },
  {
    title: "Condo / HDB Interior",
    slug: "condo-hdb-interior",
    description:
      "Compact, practical interior upgrades with storage, finishes and management-aware planning.",
    image: "/projects/limm-real/processed/condo-hdb-interior.png",
    imageAlt: "Preview image for condo and HDB interior renovation",
    tags: ["Condo", "HDB", "Storage"],
  },
  {
    title: "Kitchen & Bathroom",
    slug: "kitchen-bathroom",
    description:
      "Wet and dry kitchen planning, bathroom wet area coordination and practical fixture details.",
    image: "/projects/limm-real/processed/kitchen-bathroom.png",
    imageAlt: "Preview image for kitchen and bathroom renovation works",
    tags: ["Kitchen", "Bathroom", "Wet works"],
  },
  {
    title: "Carpentry & Storage",
    slug: "carpentry-storage",
    description:
      "Built-ins, wardrobes, kitchen cabinets, consoles, shoe cabinets and commercial storage.",
    image: "/projects/limm-real/processed/carpentry-storage.png",
    imageAlt: "Preview image for carpentry and storage works",
    tags: ["Carpentry", "Built-ins", "Storage"],
  },
  {
    title: "Commercial Interior",
    slug: "commercial-interior",
    description:
      "Office, retail and commercial fit-out scopes with display, storage, pantry and access planning.",
    image: "/projects/limm-real/processed/commercial-interior.png",
    imageAlt: "Preview image for commercial interior renovation",
    tags: ["Office", "Retail", "Fit-out"],
  },
  {
    title: "Site Progress",
    slug: "site-progress",
    description:
      "Protection, sequencing and coordination details that make renovation work more controlled.",
    image: "/projects/limm-real/processed/site-progress.png",
    imageAlt: "Preview image for renovation site progress and protection",
    tags: ["Progress", "Protection", "Coordination"],
  },
];
