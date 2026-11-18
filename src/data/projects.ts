import { projectImages } from "@/data/assets";

export type Project = {
  slug: string;
  title: string;
  category: string;
  servicePath: string;
  image: string;
  alt: string;
  description: string;
  tags: string[];
  planningFocus: { title: string; text: string }[];
  usefulFor: string[];
};

export const projects: Project[] = [
  {
    slug: "landed-living-kitchen-planning",
    title: "Landed living and kitchen planning",
    category: "Landed renovation",
    servicePath: "/landed-renovation",
    image: projectImages.landed,
    alt: "Completed landed home with open living and kitchen planning",
    description:
      "A brighter, connected family space shaped around daily movement, storage and the relationship between living, dining and kitchen areas.",
    tags: ["Layout", "Kitchen", "Family living"],
    planningFocus: [
      {
        title: "Connected daily flow",
        text: "The living, dining and kitchen zones can be discussed as one sequence rather than as three isolated rooms.",
      },
      {
        title: "Storage in the background",
        text: "Built-ins and kitchen storage support the open space without becoming the main visual feature.",
      },
      {
        title: "Light and sightlines",
        text: "The reference helps owners discuss brightness, views across the ground floor and how the household uses the shared space.",
      },
    ],
    usefulFor: ["Ground-floor layout conversations", "Kitchen and living coordination", "Family circulation and storage priorities"],
  },
  {
    slug: "landed-entry-glazing-works",
    title: "Landed entry and glazing works",
    category: "Landed & A&A",
    servicePath: "/landed-aa-works",
    image: projectImages.landedAa,
    alt: "Landed home entry with glass doors and sheltered transition",
    description:
      "Entry, glazing and external-transition details considered together with access, weather exposure and the existing house condition.",
    tags: ["Entry", "Glazing", "External works"],
    planningFocus: [
      {
        title: "Inside–outside transition",
        text: "Entry, shelter and glazing should be considered together with the way people arrive and move into the home.",
      },
      {
        title: "Weather-exposed details",
        text: "External junctions, water paths and maintenance access need attention beyond the visible glass and frame finishes.",
      },
      {
        title: "Existing-house connection",
        text: "The reference is useful for discussing how new-looking work meets the proportions and conditions of an existing landed property.",
      },
    ],
    usefulFor: ["Entry and facade discussions", "Glazing and sheltered transitions", "External-detail coordination"],
  },
  {
    slug: "condo-feature-wall-living-interior",
    title: "Condo feature wall and living interior",
    category: "Condo renovation",
    servicePath: "/condo-renovation",
    image: projectImages.condo,
    alt: "Condo living room with flush television and timber feature wall",
    description:
      "A measured interior treatment that coordinates electrical points, wall finishes, built-ins and viewing comfort without overloading the space.",
    tags: ["Living room", "Electrical", "Finishes"],
    planningFocus: [
      {
        title: "Services before finishes",
        text: "Power, data, ventilation and equipment positions should be coordinated before a clean wall treatment is fabricated.",
      },
      {
        title: "Balanced proportions",
        text: "The wall, display and surrounding furniture need to sit comfortably within the room instead of making it feel smaller.",
      },
      {
        title: "Maintenance access",
        text: "A flush appearance should still allow equipment, cables and concealed services to be reached when necessary.",
      },
    ],
    usefulFor: ["TV wall and built-in planning", "Electrical coordination", "Calm material palettes"],
  },
  {
    slug: "kitchen-workflow-built-in-storage",
    title: "Kitchen workflow and built-in storage",
    category: "Kitchen renovation",
    servicePath: "/kitchen-renovation",
    image: projectImages.kitchen,
    alt: "Light wood kitchen cabinets with island and integrated appliances",
    description:
      "Cabinet layout, appliance dimensions, service access and worktop planning aligned before fabrication and installation.",
    tags: ["Carpentry", "Appliances", "Workflow"],
    planningFocus: [
      {
        title: "Appliance-led dimensions",
        text: "Models, clearances and service points should be confirmed before cabinet and worktop details are released.",
      },
      {
        title: "Preparation and cleaning flow",
        text: "The relationship between storage, sink, cooking and worktop zones should reflect real household routines.",
      },
      {
        title: "Usable cabinet interiors",
        text: "Internal drawers, tall storage and access matter as much as the laminate and door profile visible from outside.",
      },
    ],
    usefulFor: ["Kitchen workflow discussions", "Appliance and carpentry coordination", "Island and storage planning"],
  },
  {
    slug: "bathroom-wet-area-coordination",
    title: "Bathroom wet-area coordination",
    category: "Bathroom renovation",
    servicePath: "/bathroom-renovation",
    image: projectImages.bathroom,
    alt: "Completed bathroom vanity and shower area",
    description:
      "Waterproofing, drainage, sanitary fittings, access and ventilation reviewed before the visible finishes are finalised.",
    tags: ["Waterproofing", "Drainage", "Fittings"],
    planningFocus: [
      {
        title: "Wet-zone layout",
        text: "Vanity, shower, circulation and door clearances should be resolved together before finishes are selected.",
      },
      {
        title: "Work below the tiles",
        text: "Preparation, falls, penetrations and waterproofing transitions shape long-term performance even though they disappear at handover.",
      },
      {
        title: "Cleaning and access",
        text: "Fitting positions and storage should remain practical to clean, inspect and maintain.",
      },
    ],
    usefulFor: ["Bathroom layout discussions", "Wet-work sequencing", "Vanity and fitting coordination"],
  },
  {
    slug: "commercial-dining-fitout",
    title: "Commercial dining fit-out",
    category: "Commercial renovation",
    servicePath: "/commercial-renovation",
    image: projectImages.commercial,
    alt: "Completed commercial dining fit-out with counters and seating",
    description:
      "A practical fit-out approach shaped around customer flow, back-of-house needs, building access and handover requirements.",
    tags: ["Fit-out", "Operations", "Handover"],
    planningFocus: [
      {
        title: "Customer and staff movement",
        text: "Front-of-house circulation and back-of-house needs should be reviewed against the intended operating pattern.",
      },
      {
        title: "Building constraints",
        text: "Loading, work windows, protection and management requirements can change the fit-out sequence.",
      },
      {
        title: "Handover readiness",
        text: "Finishes, services, outstanding items and operational setup need a clear path toward the agreed opening or handover date.",
      },
    ],
    usefulFor: ["Customer-flow conversations", "Commercial fit-out sequencing", "Building-access and handover planning"],
  },
];

export function projectPath(slug: string) {
  return `/projects/${slug}`;
}
