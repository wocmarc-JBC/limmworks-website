export type OwnerNote = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
  resources?: { title: string; href: string }[];
  relatedService?: { title: string; href: string };
  sections: {
    heading: string;
    body: string[];
  }[];
};

export const ownerNotes: OwnerNote[] = [
  {
    slug: "wet-kitchen-extension-landed-home-singapore",
    category: "Landed & A&A",
    title: "Wet Kitchen Extension for a Landed Home in Singapore",
    description: "What to check before extending a rear wet kitchen, from the approved footprint and structure to roof junctions, drainage and ventilation.",
    date: "2026-07-12",
    readingTime: "5 min read",
    relatedService: { title: "Landed additions and alterations", href: "/landed-aa-works" },
    resources: [
      {
        title: "URA guidance for landed home renovations",
        href: "https://www.ura.gov.sg/guidelines/property-and-business-owners/property/renovating-private-residential-property/land-titled-residential/",
      },
      {
        title: "URA additions and alterations criteria for terrace houses",
        href: "https://www.ura.gov.sg/guidelines/development-control/development-control-handbooks/residential/terrace/additions-alterations/",
      },
    ],
    sections: [
      {
        heading: "The short answer: treat it as an extension before treating it as a kitchen",
        body: [
          "A wet-kitchen extension can affect the approved building footprint, gross floor area, external walls, structure, roof, drainage and neighbour-facing conditions. Cabinet layout matters, but it comes after the route for the added space is understood.",
          "Start with the approved and existing plans, current rear-yard condition and the outcome the household needs. Ask whether the proposal is internal reorganisation, an addition within the applicable rules, or a larger alteration requiring a different professional and approval route.",
        ],
      },
      {
        heading: "Compare the proposed space with the approved house",
        body: [
          "URA states that enlarging or relocating rooms within a landed house may not require planning permission in the examples and conditions it describes. Check proposed enclosures and extensions separately against the approved plans.",
          "For terrace-house A&A, URA's current criteria consider additional gross floor area, external-wall replacement, structural changes, roof works and the prevailing building envelope. A Qualified Person should check the real proposal and property records where the work goes beyond an interior layout change.",
        ],
      },
      {
        heading: "Resolve the connection between new and existing structure",
        body: [
          "The rear wall, existing columns and beams, floor slab, foundations and the proposed opening all affect how the extension meets the house. A wide opening for an indoor-outdoor kitchen cannot be assumed to be a finishing decision.",
          "Record which elements are retained, removed or newly supported. Structural feasibility and temporary-work needs should be established before the roof, glazing or cabinet set-out is treated as final.",
        ],
      },
      {
        heading: "Design the roof and weather junction as one system",
        body: [
          "An extension creates edges where new roof work meets an older wall, roof or upper-storey facade. Falls, flashings, gutters, downpipes, penetrations and maintenance access need coordinated details.",
          "Photograph existing stains, ponding, overflowing gutters and low points before work starts. New ceilings or cabinets should not conceal an unresolved water path.",
        ],
      },
      {
        heading: "Map rainwater, kitchen wastewater and floor levels early",
        body: [
          "Show existing drains, downpipes, sanitary points, inspection access, external ground levels and the intended sink or floor-trap positions. The project team can then identify which routes must be checked and which technical requirements may apply.",
          "The finished floor, threshold and external falls should be reviewed together so routine washing or heavy rain does not create an avoidable backflow, ponding or step problem at the new junction.",
        ],
      },
      {
        heading: "Coordinate heat, ventilation, gas and electrical loads",
        body: [
          "Confirm the actual hob, hood, ovens, refrigerators, freezers, water heaters and other heavy-use appliances. Their power, ventilation, clearance and service-access needs affect the wall, ceiling and cabinet plan.",
          "A wet kitchen that is partially enclosed also needs a plan for extracting heat and odours and supplying replacement air. Equipment specifications and the applicable professional or authority requirements should govern the solution.",
        ],
      },
      {
        heading: "Plan access, neighbours and temporary household use",
        body: [
          "Rear extensions can involve excavation, structural work, roofing, wet trades and debris movement in a constrained area. Identify how workers and materials reach the rear, what must be protected, and whether the existing kitchen or services remain usable during each stage.",
          "For the first review, send the approved and existing plans, rear and side photographs, known drainage or leak issues, the appliances to be used, desired enclosure, budget range and target timing. That gives the project team enough information to identify the feasibility checks.",
        ],
      },
    ],
  },
  {
    slug: "prepare-before-starting-renovation",
    title: "What Homeowners Should Prepare Before Starting a Renovation",
    description:
      "A practical checklist for floor plans, photos, property details, budget range, timing and rough scope before an initial project review.",
    date: "2026-07-02",
    readingTime: "4 min read",
    category: "Project Planning",
    sections: [
      {
        heading: "Start with usable information",
        body: [
          "A floor plan, current site photos and a rough scope help the project review move beyond general conversation. They show the property type, current layout, visible conditions and the parts of the home that need attention.",
          "For landed homes, exterior photos, roofline concerns, drainage issues and any known leaks are useful. For condos and HDB flats, management or HDB requirements should be shared if already available.",
        ],
      },
      {
        heading: "Clarify priorities before choosing finishes",
        body: [
          "Finishes matter, but renovation planning usually starts with usage needs, site condition, sequencing and constraints. Storage, ventilation, waterproofing, service access and appliance dimensions should be discussed before detailed selection.",
        ],
      },
      {
        heading: "Keep the first review practical",
        body: [
          "A good first review should clarify what needs deeper checking, what can be priced more clearly later and what information is still missing. It should not overpromise feasibility from photos alone.",
        ],
      },
    ],
  },
  {
    slug: "condo-renovation-management-rules-planning",
    title: "Condo Renovation in Singapore: Management Rules, Protection and Planning",
    description:
      "What condo owners should consider around management rules, lift protection, working hours and practical interior coordination.",
    date: "2026-07-02",
    readingTime: "5 min read",
    category: "Condo Renovation",
    sections: [
      {
        heading: "Management rules shape the work",
        body: [
          "Condominiums often have renovation forms, working hours, deposit requirements, insurance requests, lift booking processes and protection rules. These details affect scheduling and should be reviewed before works start.",
        ],
      },
      {
        heading: "Protection is part of planning",
        body: [
          "Lift, corridor and floor protection need to be arranged so materials, debris and workers can move through shared areas responsibly. This is not decorative; it is part of site coordination.",
        ],
      },
      {
        heading: "Sequence trades clearly",
        body: [
          "Kitchen, bathroom, flooring, electrical, painting and carpentry works should be sequenced in a way that reduces rework. Appliance dimensions and built-in details should be confirmed before fabrication.",
        ],
      },
    ],
  },
  {
    slug: "landed-renovation-vs-aa-works-difference",
    title: "Landed Renovation vs Landed A&A Works: What Is the Difference?",
    description:
      "A plain-English distinction between landed renovation and additions and alterations, with approval and site-condition awareness.",
    date: "2026-07-02",
    readingTime: "5 min read",
    category: "Landed & A&A",
    sections: [
      {
        heading: "Renovation improves the existing home",
        body: [
          "Landed renovation may focus on interior improvements, kitchen and bathroom changes, finishes, repairs, carpentry, facade refresh and practical layout upgrades within the existing property condition.",
        ],
      },
      {
        heading: "A&A changes the property more deeply",
        body: [
          "Additions and alterations can include extensions, car porch changes, rear kitchen works, balcony or side-yard changes and other scopes that may affect structure, drainage, roofline or authorities' requirements.",
        ],
      },
      {
        heading: "Review comes before certainty",
        body: [
          "Feasibility depends on the actual site, existing structure, property type and required checks. Proper professional review or submission should be completed before works proceed where applicable.",
        ],
      },
    ],
  },
  {
    slug: "kitchen-renovation-storage-workflow-details",
    title: "Kitchen Renovation Planning: Storage, Workflow and Practical Details",
    description:
      "A practical guide to storage, appliance dimensions, countertop choices, service access and cooking workflow.",
    date: "2026-07-02",
    readingTime: "4 min read",
    category: "Kitchen Renovation",
    sections: [
      {
        heading: "Plan around real usage",
        body: [
          "A kitchen should be planned around actual cooking habits, cleaning routines, appliance sizes, storage needs and service access. A beautiful kitchen that blocks maintenance or wastes storage will become frustrating quickly.",
        ],
      },
      {
        heading: "Confirm appliance dimensions early",
        body: [
          "Hob, hood, oven, fridge, washer, sink and dishwasher dimensions can affect cabinet layout and countertop cuts. These should be confirmed before fabrication.",
        ],
      },
      {
        heading: "Balance finish and durability",
        body: [
          "Countertops, laminates, hardware and cabinet organization systems should be chosen with cleaning, heat, moisture and daily use in mind.",
        ],
      },
    ],
  },
  {
    slug: "bathroom-renovation-waterproofing-layout-coordination",
    title: "Bathroom Renovation Planning: Waterproofing, Layout and Site Coordination",
    description:
      "Important bathroom renovation considerations around wet works, drainage, fittings, ventilation and site protection.",
    date: "2026-07-02",
    readingTime: "4 min read",
    category: "Bathroom Renovation",
    sections: [
      {
        heading: "Wet areas need careful planning",
        body: [
          "Bathroom works should be reviewed with waterproofing, drainage, sanitary fitting positions and ventilation in mind. These items affect long-term maintenance more than surface finishes alone.",
        ],
      },
      {
        heading: "Layout changes are not always simple",
        body: [
          "Moving fixtures may affect drainage, structure, property rules and approval needs. The actual site should be reviewed before assuming layout changes are straightforward.",
        ],
      },
      {
        heading: "Confirm details before works proceed",
        body: [
          "Tile direction, vanity dimensions, mixer type, access panels, lighting and storage should be confirmed before site work and installation sequencing are locked in.",
        ],
      },
    ],
  },
  {
    slug: "carpentry-storage-before-fabrication",
    title: "Carpentry and Storage Planning: What to Confirm Before Fabrication",
    description:
      "What to settle before carpentry fabrication, including measurements, inside storage, hardware, sockets and access panels.",
    date: "2026-07-02",
    readingTime: "4 min read",
    category: "Carpentry",
    sections: [
      {
        heading: "Measure at the right time",
        body: [
          "Carpentry depends on accurate site measurement. Final dimensions should be checked when surrounding works are ready enough for reliable fabrication.",
        ],
      },
      {
        heading: "Plan inside the cabinets",
        body: [
          "Cabinet compartments, drawer heights, wardrobe hanging space, shoe storage, appliance clearances and access panels should be planned before exterior finishes are finalised.",
        ],
      },
      {
        heading: "Coordinate services",
        body: [
          "Switches, sockets, lighting, plumbing access and ventilation should be coordinated with built-ins so the finished storage remains usable and maintainable.",
        ],
      },
    ],
  },
];

export function getOwnerNote(slug: string) {
  return ownerNotes.find((note) => note.slug === slug);
}
