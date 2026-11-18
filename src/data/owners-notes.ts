export type OwnerNote = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  readingTime: string;
  category: string;
  resources?: { title: string; href: string }[];
  relatedLinks?: { title: string; href: string }[];
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
    relatedLinks: [
      { title: "Landed additions and alterations services", href: "/landed-aa-works" },
      { title: "Landed renovation, A&A and reconstruction explained", href: "/owners-notes/landed-renovation-vs-aa-works-difference" },
    ],
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
    title: "Condo Renovation Checklist and MCST Rules in Singapore",
    description:
      "What to ask condo management before renovation, including forms, deposits, hacking hours, lift protection and the order of works.",
    date: "2026-07-02",
    updated: "2026-11-18",
    readingTime: "4 min read",
    category: "Condo Renovation",
    relatedLinks: [
      { title: "Condo renovation services", href: "/condo-renovation" },
      { title: "Completed condo feature wall and living interior", href: "/projects/condo-feature-wall-living-interior" },
    ],
    resources: [
      {
        title: "BCA Strata Management Guides",
        href: "https://www1.bca.gov.sg/home-and-building-owners/condo-strata/mcst-strata-management/strata-management-guides/",
      },
    ],
    sections: [
      {
        heading: "Get the current rules before you set a start date",
        body: [
          "Ask your condominium management office or management corporation (MCST) for the renovation form and current by-laws. Give them the unit’s proposed scope so they can tell you what documents to send, who signs the application and when work may start.",
          "Ask about filing lead times, deposit and refund conditions, any administration charges, required insurance and worker registration. Confirm which items the owner pays directly and which the contractor has included in the quote.",
        ],
      },
      {
        heading: "Check hacking and shared property before committing to the layout",
        body: [
          "Get the available unit plans and mark changes to walls, floor finishes, wet areas and services. If the proposal touches structure, windows, the façade or shared services, ask management what it needs and obtain any necessary professional assessment and authority approval before starting.",
          "Discuss noisy-work hours separately from general working hours. Some developments have more restrictive windows for hacking and drilling, which may affect delivery and disposal bookings.",
        ],
      },
      {
        heading: "Book the service lift and plan how materials move",
        body: [
          "Confirm loading bay and service-lift access, booking requirements, protection for doors, lifts and corridors, and approved times for deliveries and debris collection. Check access dimensions before ordering large panels, worktops or appliances.",
          "Record the shared areas that need protection and who will arrange removal and any handover inspection. Keep the approval, booking details and condition photos with the project records.",
        ],
      },
      {
        heading: "Sequence the rooms, services and carpentry",
        body: [
          "For a resale condo, decide what stays before pricing demolition. Check older plumbing, electrical points, floor levels and wet areas before finalising the scope, with allowances for conditions that can only be seen after opening up.",
          "Confirm appliance specifications and electrical or plumbing positions before site measurement for built-ins. Allow time for waterproofing and any testing in scope before tiling. Measure cabinetry against the finished site where the work requires it.",
        ],
      },
      {
        heading: "What to send for an initial project review",
        body: [
          "Send your floor plan, room photos, list of works, MCST renovation pack, key collection date and target move-in date. For a quote comparison, check the same scope for hacking, disposal, protection, waterproofing, allowances, fixtures, hardware, exclusions and who pays any management charges.",
        ],
      },
    ],
  },
  {
    slug: "landed-renovation-vs-aa-works-difference",
    title: "Landed Renovation, A&A and Reconstruction in Singapore",
    description:
      "Compare interior upgrades, landed additions and alterations, and reconstruction. Learn what to check against approved plans before engaging a contractor.",
    date: "2026-07-02",
    updated: "2026-11-18",
    readingTime: "4 min read",
    category: "Landed & A&A",
    relatedLinks: [
      { title: "Renovation services for existing landed homes", href: "/landed-renovation" },
      { title: "Landed additions and alterations services", href: "/landed-aa-works" },
      { title: "Rear wet-kitchen extension guide", href: "/owners-notes/wet-kitchen-extension-landed-home-singapore" },
    ],
    resources: [
      {
        title: "URA guidance for renovating land-titled homes",
        href: "https://www.ura.gov.sg/guidelines/property-and-business-owners/property/renovating-private-residential-property/land-titled-residential/",
      },
      {
        title: "URA additions and alterations criteria for terrace houses",
        href: "https://www.ura.gov.sg/guidelines/development-control/development-control-handbooks/residential/terrace/additions-alterations/",
      },
      {
        title: "URA additions and alterations criteria for semi-detached houses",
        href: "https://www.ura.gov.sg/guidelines/development-control/development-control-handbooks/residential/semi-detached-houses/additions-alterations/",
      },
    ],
    sections: [
      {
        heading: "Renovating the existing home",
        body: [
          "A kitchen or bathroom upgrade, new carpentry or a ground-floor refresh can often be scoped inside the existing house. Review where services run, what is being retained, and whether any proposed opening or wall removal needs qualified assessment.",
          "URA gives examples of internal room changes that may be exempt from planning permission where its conditions are met. Check the structural, building and technical requirements that apply to your actual scope.",
        ],
      },
      {
        heading: "Additions and alterations",
        body: [
          "A rear wet-kitchen extension, side-yard enclosure or altered car porch may change the approved footprint or connect to existing walls, roofs and drains. Start with approved plans to establish what already has permission and what the new work would change.",
          "URA assesses terrace-house A&A across several criteria, including additional gross floor area, external walls, structural changes and roofing. Ask a Qualified Person to review the whole proposal where required and identify the relevant approvals.",
        ],
      },
      {
        heading: "When URA treats the work as reconstruction",
        body: [
          "URA treats a proposal as reconstruction if it falls outside the applicable A&A criteria. An additional storey or a change to the landed housing form is also treated as reconstruction under the terrace-house criteria.",
          "If you are considering a large change, establish the classification and appointment of the appropriate professionals before finalising the construction scope or timeline.",
        ],
      },
      {
        heading: "How to compare scopes and quotes",
        body: [
          "Mark the intended changes on both the approved and current plans. Show the areas being added, removed or retained. Document access, visible leaks, drainage and any uncertainty around previous building works.",
          "Ask which construction, preparation, disposal, waterproofing and reinstatement items are included. Confirm whether professional fees, applications and investigation are included, separately priced or still to be determined.",
        ],
      },
    ],
  },
  {
    slug: "wall-hacking-renovation-singapore-checks-approvals",
    title: "Wall Hacking in Singapore Condos and Landed Homes",
    description:
      "Check approved plans, wall type, shared services and any necessary management or professional approvals before opening up a wall.",
    date: "2026-07-12",
    updated: "2026-11-18",
    readingTime: "4 min read",
    category: "Planning & Approvals",
    relatedLinks: [
      { title: "Condo renovation and MCST checklist", href: "/owners-notes/condo-renovation-management-rules-planning" },
      { title: "Landed home renovation services", href: "/landed-renovation" },
      { title: "Landed additions and alterations services", href: "/landed-aa-works" },
    ],
    resources: [
      {
        title: "BCA Structural Plan submission",
        href: "https://www1.bca.gov.sg/safety-and-standards/applications-and-licenses/structural-plan-submission/",
      },
      {
        title: "BCA Strata Management Guides",
        href: "https://www1.bca.gov.sg/home-and-building-owners/condo-strata/mcst-strata-management/strata-management-guides/",
      },
      {
        title: "URA guidance for renovating land-titled homes",
        href: "https://www.ura.gov.sg/guidelines/property-and-business-owners/property/renovating-private-residential-property/land-titled-residential/",
      },
    ],
    sections: [
      {
        heading: "Identify the wall and check its surroundings",
        body: [
          "Show the intended opening on the available approved plans, together with photos of both sides of the wall. The project team needs to check how the wall was built, what it supports and whether wiring, water pipes or shared services run through or near it.",
          "Flag the area for professional assessment where wall type or structural impact is uncertain. Confirm what can be priced and whether investigation, protection, service diversion and reinstatement need separate allowances.",
        ],
      },
      {
        heading: "For a condo, check the MCST renovation requirements",
        body: [
          "Send the marked-up plan and proposed scope to the management office and ask what documents and approvals it requires. Shared services and structural elements may involve common property. Confirm the applicable management and professional checks before scheduling any work.",
          "Ask about permitted hacking hours, service-lift booking, debris removal and protection for shared areas. These details can change how the work is sequenced.",
        ],
      },
      {
        heading: "For a landed house, check the approved scope and structure",
        body: [
          "Review the approved layout, the proposed opening and whether it connects to an extension or affects the external walls or structure. URA’s landed-home guidance explains when planning permission may apply. BCA’s structural submission guidance explains who can apply for structural-plan approval where it is needed.",
          "Ask who will confirm the wall, coordinate any required submissions and specify how the affected floor, ceiling, finishes and services will be made good.",
        ],
      },
      {
        heading: "What to include in a quote request",
        body: [
          "Share the property type, available plans, marked wall or opening, photos from both sides and any management or authority documents you have. Ask the contractor to identify confirmed work, items that depend on further checks and how any variation will be agreed.",
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
