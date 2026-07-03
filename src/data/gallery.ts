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
    title: "Landed Renovation",
    slug: "landed-renovation",
    description:
      "Facade, car porch, kitchen, bathroom, drainage and layout-focused landed renovation references.",
    image: projectImages.landed,
    imageAlt: "Landed renovation work with facade and car porch planning",
    tags: ["Landed", "Facade", "A&A awareness"],
  },
  {
    title: "Condo / HDB Interior",
    slug: "condo-hdb-interior",
    description:
      "Compact, practical interior upgrades with storage, finishes and management-aware planning.",
    image: projectImages.condo,
    imageAlt: "Condo and HDB interior renovation with practical storage",
    tags: ["Condo", "HDB", "Storage"],
  },
  {
    title: "Kitchen & Bathroom",
    slug: "kitchen-bathroom",
    description:
      "Wet and dry kitchen planning, bathroom wet area coordination and practical fixture details.",
    image: projectImages.kitchen,
    imageAlt: "Kitchen and bathroom renovation details with wet area planning",
    tags: ["Kitchen", "Bathroom", "Wet works"],
  },
  {
    title: "Carpentry & Storage",
    slug: "carpentry-storage",
    description:
      "Built-ins, wardrobes, kitchen cabinets, consoles, shoe cabinets and commercial storage.",
    image: projectImages.carpentry,
    imageAlt: "Carpentry and storage works with built-in cabinets",
    tags: ["Carpentry", "Built-ins", "Storage"],
  },
  {
    title: "Commercial Interior",
    slug: "commercial-interior",
    description:
      "Office, retail and commercial fit-out scopes with display, storage, pantry and access planning.",
    image: projectImages.commercial,
    imageAlt: "Commercial interior renovation with office and retail fit-out planning",
    tags: ["Office", "Retail", "Fit-out"],
  },
  {
    title: "Site Progress",
    slug: "site-progress",
    description:
      "Protection, sequencing and coordination details that make renovation work more controlled.",
    image: projectImages.contact,
    imageAlt: "Renovation site progress with protection and coordination",
    tags: ["Progress", "Protection", "Coordination"],
  },
];
