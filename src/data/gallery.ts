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
      "Landed home interior, entry and layout references for renovation and A&A planning discussions.",
    image: projectImages.landed,
    imageAlt: "Completed landed home interior with open living and kitchen planning",
    tags: ["Landed", "A&A", "Layout"],
  },
  {
    title: "Condo / HDB",
    slug: "condo-hdb",
    description:
      "Condo and HDB interior references for compact storage, finishes and practical daily use.",
    image: projectImages.condo,
    imageAlt: "Condo interior TV feature wall and living area finish",
    tags: ["Condo", "HDB", "Interior"],
  },
  {
    title: "Kitchen / Bathroom",
    slug: "kitchen-bathroom",
    description:
      "Kitchen cabinet, countertop and bathroom wet-area references for practical renovation planning.",
    image: projectImages.kitchen,
    imageAlt: "Kitchen renovation with light wood cabinets and island counter",
    tags: ["Kitchen", "Bathroom", "Wet works"],
  },
  {
    title: "Carpentry / Storage",
    slug: "carpentry-storage",
    description:
      "Wardrobe, cabinet and built-in storage references for measured carpentry discussions.",
    image: projectImages.carpentry,
    imageAlt: "Carpentry and storage work with built-in wardrobe run",
    tags: ["Carpentry", "Built-ins", "Storage"],
  },
  {
    title: "Commercial",
    slug: "commercial",
    description:
      "Commercial interior references for dining, retail and business fit-out coordination.",
    image: projectImages.commercial,
    imageAlt: "Commercial dining fit-out with tables, counters and ceiling services",
    tags: ["Commercial", "Fit-out", "Coordination"],
  },
  {
    title: "Site Progress",
    slug: "site-progress",
    description:
      "Protection, sequencing and coordination references for renovation work in progress.",
    image: projectImages.contact,
    imageAlt: "Renovation site progress with protection and coordination",
    tags: ["Progress", "Protection", "Coordination"],
  },
];
