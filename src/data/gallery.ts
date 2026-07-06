import { projectImages } from "@/data/assets";

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
    title: "Landed / A&A",
    slug: "landed-aa",
    description:
      "Landed interior, entry and layout references for discussing renovation flow, extensions and A&A scope review.",
    image: projectImages.landed,
    imageAlt: "Completed landed home interior with open living and kitchen planning",
    tags: ["Landed", "A&A", "Layout"],
  },
  {
    title: "Condo / HDB",
    slug: "condo-hdb",
    description:
      "Condo and HDB references for compact storage, practical finishes, built-ins and daily-use planning.",
    image: projectImages.condo,
    imageAlt: "Condo interior TV feature wall and living area finish",
    tags: ["Condo", "HDB", "Interior"],
  },
  {
    title: "Kitchen / Bathroom",
    slug: "kitchen-bathroom",
    description:
      "Kitchen cabinet, countertop and bathroom wet-area references for storage, workflow and maintenance discussion.",
    image: projectImages.kitchen,
    imageAlt: "Kitchen renovation with light wood cabinets and island counter",
    tags: ["Kitchen", "Bathroom", "Wet works"],
  },
  {
    title: "Carpentry / Storage",
    slug: "carpentry-storage",
    description:
      "Wardrobe, cabinet and built-in storage references for measured carpentry, hardware and inside-layout planning.",
    image: projectImages.carpentry,
    imageAlt: "Carpentry and storage work with built-in wardrobe run",
    tags: ["Carpentry", "Built-ins", "Storage"],
  },
  {
    title: "Commercial",
    slug: "commercial",
    description:
      "Commercial interior references for dining, retail, storage, counters and business fit-out coordination.",
    image: projectImages.commercial,
    imageAlt: "Commercial dining fit-out with tables, counters and ceiling services",
    tags: ["Commercial", "Fit-out", "Coordination"],
  },
  {
    title: "Planning & Site Context",
    slug: "planning-site-context",
    description:
      "Site condition, protection and planning references for discussing access, sequencing and renovation constraints.",
    image: projectImages.contact,
    imageAlt: "Renovation site context with protection materials and planning references",
    tags: ["Site context", "Protection", "Planning"],
  },
];
