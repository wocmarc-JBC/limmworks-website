export const site = {
  name: "LIMM Works Pte Ltd",
  shortName: "LIMM Works",
  phoneDisplay: "+65 8989 8278",
  phone: "6589898278",
  email: "limmworks@gmail.com",
  instagram: "https://www.instagram.com/limmworks/",
  facebook: "https://www.facebook.com/limmworks/",
  domain: "https://www.limmworks.com",
};

export const assetOrigin = "";

export function assetUrl(path: string) {
  return `${assetOrigin}${path}`;
}

export function whatsappHref(source: string, detail?: string) {
  const lines = [
    "Hello LIMM Works, I would like to start an initial project review.",
    detail ?? "I can share my floor plan, site photos and rough scope.",
    `Website page: ${source}`,
  ];

  return `https://wa.me/${site.phone}?text=${encodeURIComponent(lines.join("\n\n"))}`;
}

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Landed", href: "/landed-renovation" },
  { label: "A&A Works", href: "/landed-aa-works" },
  { label: "Condo", href: "/condo-renovation" },
  { label: "HDB", href: "/hdb-renovation" },
  { label: "Commercial", href: "/commercial-renovation" },
  { label: "Projects", href: "/projects" },
  { label: "Owner's Notes", href: "/owners-notes" },
  { label: "About", href: "/about" },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
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
    image: assetUrl("/projects/landed-open-plan-living.jpg"),
    alt: "Completed landed home with open living and kitchen planning",
    description:
      "A brighter, connected family space shaped around daily movement, storage and the relationship between living, dining and kitchen areas.",
    tags: ["Layout", "Kitchen", "Family living"],
    planningFocus: [
      { title: "Connected daily flow", text: "The living, dining and kitchen zones can be discussed as one sequence rather than as three isolated rooms." },
      { title: "Storage in the background", text: "Built-ins and kitchen storage support the open space without becoming the main visual feature." },
      { title: "Light and sightlines", text: "The reference helps owners discuss brightness, views across the ground floor and how the household uses the shared space." },
    ],
    usefulFor: ["Ground-floor layout conversations", "Kitchen and living coordination", "Family circulation and storage priorities"],
  },
  {
    slug: "landed-entry-glazing-works",
    title: "Landed entry and glazing works",
    category: "Landed & A&A",
    image: assetUrl("/projects/landed-glass-entry.jpg"),
    alt: "Landed home entry with glass doors and sheltered transition",
    description:
      "Entry, glazing and external-transition details considered together with access, weather exposure and the existing house condition.",
    tags: ["Entry", "Glazing", "External works"],
    planningFocus: [
      { title: "Inside–outside transition", text: "Entry, shelter and glazing should be considered together with the way people arrive and move into the home." },
      { title: "Weather-exposed details", text: "External junctions, water paths and maintenance access need attention beyond the visible glass and frame finishes." },
      { title: "Existing-house connection", text: "The reference is useful for discussing how new-looking work meets the proportions and conditions of an existing landed property." },
    ],
    usefulFor: ["Entry and facade discussions", "Glazing and sheltered transitions", "External-detail coordination"],
  },
  {
    slug: "condo-feature-wall-living-interior",
    title: "Condo feature wall and living interior",
    category: "Condo renovation",
    image: assetUrl("/projects/condo-tv-feature-wall.jpg"),
    alt: "Condo living room with flush television and timber feature wall",
    description:
      "A measured interior treatment that coordinates electrical points, wall finishes, built-ins and viewing comfort without overloading the space.",
    tags: ["Living room", "Electrical", "Finishes"],
    planningFocus: [
      { title: "Services before finishes", text: "Power, data, ventilation and equipment positions should be coordinated before a clean wall treatment is fabricated." },
      { title: "Balanced proportions", text: "The wall, display and surrounding furniture need to sit comfortably within the room instead of making it feel smaller." },
      { title: "Maintenance access", text: "A flush appearance should still allow equipment, cables and concealed services to be reached when necessary." },
    ],
    usefulFor: ["TV wall and built-in planning", "Electrical coordination", "Calm material palettes"],
  },
  {
    slug: "kitchen-workflow-built-in-storage",
    title: "Kitchen workflow and built-in storage",
    category: "Kitchen renovation",
    image: assetUrl("/projects/kitchen-light-wood-cabinets.jpg"),
    alt: "Light wood kitchen cabinets with island and integrated appliances",
    description:
      "Cabinet layout, appliance dimensions, service access and worktop planning aligned before fabrication and installation.",
    tags: ["Carpentry", "Appliances", "Workflow"],
    planningFocus: [
      { title: "Appliance-led dimensions", text: "Models, clearances and service points should be confirmed before cabinet and worktop details are released." },
      { title: "Preparation and cleaning flow", text: "The relationship between storage, sink, cooking and worktop zones should reflect real household routines." },
      { title: "Usable cabinet interiors", text: "Internal drawers, tall storage and access matter as much as the laminate and door profile visible from outside." },
    ],
    usefulFor: ["Kitchen workflow discussions", "Appliance and carpentry coordination", "Island and storage planning"],
  },
  {
    slug: "bathroom-wet-area-coordination",
    title: "Bathroom wet-area coordination",
    category: "Bathroom renovation",
    image: assetUrl("/projects/bathroom-vanity-wide.jpg"),
    alt: "Completed bathroom vanity and shower area",
    description:
      "Waterproofing, drainage, sanitary fittings, access and ventilation reviewed before the visible finishes are finalised.",
    tags: ["Waterproofing", "Drainage", "Fittings"],
    planningFocus: [
      { title: "Wet-zone layout", text: "Vanity, shower, circulation and door clearances should be resolved together before finishes are selected." },
      { title: "Work below the tiles", text: "Preparation, falls, penetrations and waterproofing transitions shape long-term performance even though they disappear at handover." },
      { title: "Cleaning and access", text: "Fitting positions and storage should remain practical to clean, inspect and maintain." },
    ],
    usefulFor: ["Bathroom layout discussions", "Wet-work sequencing", "Vanity and fitting coordination"],
  },
  {
    slug: "commercial-dining-fitout",
    title: "Commercial dining fit-out",
    category: "Commercial renovation",
    image: assetUrl("/projects/commercial-dining-fitout.jpg"),
    alt: "Completed commercial dining fit-out with counters and seating",
    description:
      "A practical fit-out approach shaped around customer flow, back-of-house needs, building access and handover requirements.",
    tags: ["Fit-out", "Operations", "Handover"],
    planningFocus: [
      { title: "Customer and staff movement", text: "Front-of-house circulation and back-of-house needs should be reviewed against the intended operating pattern." },
      { title: "Building constraints", text: "Loading, work windows, protection and management requirements can change the fit-out sequence." },
      { title: "Handover readiness", text: "Finishes, services, outstanding items and operational setup need a clear path toward the agreed opening or handover date." },
    ],
    usefulFor: ["Customer-flow conversations", "Commercial fit-out sequencing", "Building-access and handover planning"],
  },
];

export const projectsBySlug = Object.fromEntries(projects.map((project) => [project.slug, project]));

export type ServicePageData = {
  slug: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  serviceTypes?: string[];
  image: string;
  imageAlt: string;
  intro: string;
  positioning: string;
  scopeTitle: string;
  scope: { title: string; text: string }[];
  checksTitle: string;
  checksIntro: string;
  checks: string[];
  process: { step: string; title: string; text: string }[];
  faq: { question: string; answer: string }[];
  decisionGuide?: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; text: string }[];
    ctaTitle: string;
    ctaText: string;
  };
  planningFactors?: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; text: string }[];
  };
  officialGuidance?: {
    title: string;
    intro: string;
    resources: { title: string; text: string; href: string }[];
  };
  projectIndex: number;
  relatedNotes: string[];
};

export const services: Record<string, ServicePageData> = {
  "landed-renovation": {
    slug: "landed-renovation",
    eyebrow: "Older landed homes · Inter-terrace · Semi-detached",
    title: "Landed house renovation, planned around the real condition of the property.",
    metaTitle: "Landed House Renovation Singapore | LIMM Works",
    metaDescription:
      "Practical landed house renovation in Singapore for older terrace and semi-detached homes, with layout, roofline, drainage, waterproofing and site coordination in view.",
    serviceTypes: ["Landed house renovation", "Terrace house renovation", "Semi-detached house renovation"],
    image: assetUrl("/projects/landed-open-plan-living.jpg"),
    imageAlt: "Completed landed home with open living and kitchen planning",
    intro:
      "A landed renovation should begin with the existing house, not a finish board. LIMM reviews the layout, visible site condition, water-sensitive areas, access and family priorities before the scope is treated as fixed.",
    positioning:
      "Smaller landed homes, planned properly. The aim is to improve daily living while keeping structural, drainage, roofline and sequencing realities visible from the start.",
    scopeTitle: "A connected review of the whole landed home",
    scope: [
      {
        title: "Layout and family flow",
        text: "Kitchen and bathroom reconfiguration, circulation, light, ventilation, storage and the way different generations use the home.",
      },
      {
        title: "Wet and external areas",
        text: "Roof junctions, visible drainage paths, waterproofing-sensitive areas, backyard conditions, side yards and exposed transitions.",
      },
      {
        title: "Interior coordination",
        text: "Wet works, flooring, electrical, plumbing, carpentry, finishes and protection sequenced as one project rather than separate fragments.",
      },
      {
        title: "Site access and neighbours",
        text: "Material movement, debris, working space, protection and neighbour impact considered before the programme is committed.",
      },
    ],
    checksTitle: "What should be surfaced before the scope is locked",
    checksIntro:
      "Photos and plans are useful for the first conversation, but an older landed home often needs a fuller site read before feasibility, programme and costing can be discussed responsibly.",
    checks: [
      "Known leaks, dampness, roofline junctions and drainage concerns",
      "Existing structure, past alterations and areas that may need professional review",
      "Wet kitchen, backyard, car porch, side-yard and facade intentions",
      "Household routines, elderly or children needs, storage and work-from-home use",
      "Access, protection, temporary living arrangements and intended timeline",
    ],
    process: [
      { step: "01", title: "Share the property context", text: "Send the floor plan, current photos, known issues, rough scope, budget range and preferred timeline." },
      { step: "02", title: "Review the existing house", text: "LIMM identifies visible constraints, missing information and the parts of the scope that need deeper checks." },
      { step: "03", title: "Shape a practical scope", text: "Layout, wet works, external items, finishes and sequencing are aligned before detailed costing moves ahead." },
      { step: "04", title: "Confirm the next stage", text: "Site review, required professional input, costing and the working programme are discussed in the right order." },
    ],
    faq: [
      { question: "Can LIMM review an older landed house?", answer: "Yes. The first review can consider the age, layout, visible site condition, intended works and likely coordination or professional checks before a clearer scope is prepared." },
      { question: "Can we renovate without rebuilding the entire house?", answer: "Often, yes, but the sensible path depends on the existing structure, defects, intended changes and budget. A site review is needed before assuming renovation is the right route." },
      { question: "Can kitchen, bathroom and external works be planned together?", answer: "Yes. For landed homes this is usually preferable because drainage, services, access and sequencing can affect several areas at the same time." },
      { question: "How much does a landed house renovation cost in Singapore?", answer: "There is no responsible standard figure without a defined scope and a read of the existing house. Cost is shaped by condition, floor area, retained work, structural or external changes, roof and drainage needs, services, finishes, access and the approval route. LIMM starts with plans, photos and priorities before detailed costing." },
      { question: "How long does a landed renovation take?", answer: "The programme depends on the extent of work, investigations, design decisions, professional input, approvals where required, material lead times and site access. An interior-focused renovation and an A&A project should not be assigned the same generic timeline." },
      { question: "Can the family stay in the house during renovation?", answer: "That depends on the work. Limited, isolated works may sometimes be planned around occupancy, but extensive hacking, rewiring, plumbing, wet works or external construction can make continued occupation impractical or unsafe. This should be decided from the actual sequence and protection plan." },
    ],
    decisionGuide: {
      eyebrow: "Property type",
      title: "Terrace and semi-detached homes need different planning emphasis.",
      intro: "The same renovation brief can behave differently once the house form, exposed boundaries, access and previous alterations are understood.",
      items: [
        { title: "Inter-terrace houses", text: "Daylight, ventilation, shared party walls, narrow access and the sequence of ground-floor kitchen or bathroom changes deserve early attention." },
        { title: "Corner terrace houses", text: "The exposed side, openings, side-yard use, weather protection and surface drainage can add a second set of external conditions to resolve." },
        { title: "Semi-detached houses", text: "Side access, indoor-outdoor flow, roof edges, facade work and the relationship to the adjoining house shape both design and construction planning." },
        { title: "Older or previously altered homes", text: "Approved plans, visible cracks or leaks, concealed services and earlier extensions help show what can be retained and what needs deeper review." },
      ],
      ctaTitle: "Not sure whether the brief is renovation or A&A?",
      ctaText: "Send the existing plan, current photos and intended changes. The first review can separate interior renovation from work that may need a different professional or approval route.",
    },
    planningFactors: {
      eyebrow: "Cost and programme",
      title: "What actually moves the landed renovation budget and timeline.",
      intro: "Online averages combine very different houses and scopes. These are the practical drivers that should be established before a number or completion date is treated as reliable.",
      items: [
        { title: "Existing condition", text: "Age, previous alterations, leaks, roof condition, wiring, plumbing and concealed defects can change how much preparation or replacement is sensible." },
        { title: "Extent of change", text: "Retaining a workable layout is different from relocating wet areas, opening walls, changing the roofline or adding external work." },
        { title: "Approvals and professional input", text: "Structural, planning or technical questions may require drawings, investigations, a Qualified Person or authority review before construction sequencing is fixed." },
        { title: "Access and long-lead decisions", text: "Neighbour-sensitive work, protection, debris movement, appliances, fittings, glazing and carpentry release dates all affect the working programme." },
      ],
    },
    officialGuidance: {
      title: "Check the current rules against the actual proposal.",
      intro: "URA distinguishes between landed works that may not require planning permission and proposals that do. These official resources are useful starting points, but they do not replace project-specific advice from the relevant professional.",
      resources: [
        { title: "URA: Land-titled residential", text: "Examples of common internal and external works and whether planning permission may be required.", href: "https://www.ura.gov.sg/guidelines/property-and-business-owners/property/renovating-private-residential-property/land-titled-residential/" },
        { title: "URA: Landed Housing e-Advisor", text: "A quick visual check for selected alterations to bungalow, semi-detached and terrace houses.", href: "https://www.ura.gov.sg/guidelines/property-and-business-owners/property/renovating-private-residential-property/landed-housing-e-advisor/" },
      ],
    },
    projectIndex: 0,
    relatedNotes: ["landed-renovation-vs-aa-works-difference", "hidden-renovation-materials-singapore"],
  },
  "landed-aa-works": {
    slug: "landed-aa-works",
    eyebrow: "Extensions · Car porch · Rear kitchen · Side-yard",
    title: "Landed A&A works with feasibility, approvals and site condition considered early.",
    metaTitle: "Landed A&A Works Singapore | LIMM Works",
    metaDescription:
      "Practical landed A&A scope review in Singapore for extensions, rear kitchens, car porches, side yards, facade, roofline, drainage and related works.",
    serviceTypes: ["Landed additions and alterations", "Landed A&A works", "Terrace house additions and alterations"],
    image: assetUrl("/projects/landed-glass-entry.jpg"),
    imageAlt: "Landed home entry and glazing works",
    intro:
      "Additions and alterations (A&A) can look simple on a floor plan while touching structure, drainage, waterproofing, facade or authority requirements in practice. LIMM starts with the existing property and the intended change before promising a construction path.",
    positioning:
      "The focus is practical improvement for existing landed homes: additional usable space, better daily flow and more resolved external areas, with proper professional review where the scope requires it.",
    scopeTitle: "Common A&A conversations we can review",
    scope: [
      { title: "Rear and wet-kitchen works", text: "Rear extensions, wet kitchens, service areas and the relationship between new works, existing drainage and roof junctions." },
      { title: "Car porch and shelter changes", text: "Shelters, gates, access, surface falls, drainage, vehicle movement and the connection back to the main house." },
      { title: "Side-yard and balcony changes", text: "Usable-area improvements with attention to weather exposure, waterproofing, neighbours and the existing building envelope." },
      { title: "Facade and opening changes", text: "Glazing, doors, windows, facade refreshes and other external changes reviewed against actual site and approval needs." },
    ],
    checksTitle: "A&A review comes before certainty",
    checksIntro:
      "The required architect, engineer, qualified person or authority submission depends on the property and proposed works. These roles should be identified clearly rather than hidden inside vague promises.",
    checks: [
      "Existing drawings, previous approvals and known alterations",
      "Structural elements affected by the intended work",
      "Planning, building, drainage or other technical requirements",
      "Roofline, waterproofing and connection between new and existing work",
      "Site access, neighbours, temporary protection and construction sequencing",
    ],
    process: [
      { step: "01", title: "Describe the intended change", text: "Share the existing plan, site photos, desired extension or alteration, and what the new space needs to achieve." },
      { step: "02", title: "Identify feasibility questions", text: "LIMM surfaces structural, planning, drainage, roofline and access questions that need to be resolved." },
      { step: "03", title: "Coordinate required input", text: "Where applicable, professional review and submissions are arranged before the construction scope is treated as approved." },
      { step: "04", title: "Build the working scope", text: "Design intent, construction details, cost drivers and programme are aligned for the next stage." },
    ],
    faq: [
      { question: "What is the difference between renovation and A&A?", answer: "Renovation may improve the existing house without deeply changing the building, while A&A can add or alter areas in ways that affect structure, external form or authority requirements." },
      { question: "Can approval be confirmed from photos?", answer: "No. Photos and plans support an initial discussion, but approval and feasibility depend on the property, proposed work and required professional or authority checks." },
      { question: "Does every small extension need the same submission?", answer: "No. Requirements vary with the scope and property. The correct route should be established from the actual proposal rather than assumed from size alone." },
      { question: "What should I prepare for an initial A&A review?", answer: "Share the existing and approved plans if available, current site photos, the intended addition or alteration, known leaks or drainage issues, household priorities, budget range and preferred timing. Previous approval records are especially useful for an older or already-altered house." },
      { question: "Can LIMM quote A&A works from a floor plan alone?", answer: "A plan can support an initial discussion, but a reliable construction scope normally needs the existing condition, structural and approval questions, specifications, access and key details to be understood. Missing assumptions should be identified before detailed costing." },
      { question: "How long do landed A&A works take?", answer: "There is no single responsible duration for all A&A projects. The programme depends on design development, investigations, professional appointments, submissions and approvals where required, structural and drainage scope, procurement, site access and construction sequencing." },
    ],
    decisionGuide: {
      eyebrow: "Choose the right route",
      title: "Interior renovation, A&A and reconstruction are not interchangeable.",
      intro: "The label affects the checks, professional team and programme. It should follow the actual proposal—not be chosen because one route sounds faster or cheaper.",
      items: [
        { title: "Interior-focused renovation", text: "Work largely within the approved house can still involve serious coordination, but may not alter the building form, add gross floor area or trigger the same planning route as an extension." },
        { title: "Additions & Alterations", text: "A&A may include additions or changes to the existing landed house, provided the proposal remains within URA's prevailing A&A criteria and other applicable requirements." },
        { title: "Reconstruction", text: "A proposal that falls outside URA's A&A criteria, adds a storey or changes the landed housing form is treated differently and requires the corresponding professional and approval route." },
        { title: "Project-specific assessment", text: "Approved GFA, external walls, structural changes, roof works, the existing envelope and previous approvals all matter; the visible size of an extension alone is not enough." },
      ],
      ctaTitle: "Start with feasibility, not a construction promise.",
      ctaText: "Send the approved or existing plan, site photos and the alteration you want. LIMM can identify the questions that need to be resolved before the working scope is fixed.",
    },
    planningFactors: {
      eyebrow: "Cost and programme",
      title: "The main drivers behind an A&A budget and timeline.",
      intro: "A rear kitchen, car-porch change and additional storey are fundamentally different projects. These factors explain why a generic online rate or duration is rarely decision-ready.",
      items: [
        { title: "Approved versus existing condition", text: "Available plans, previous additions and non-conforming or undocumented work can affect the information and professional review needed first." },
        { title: "Structure and ground conditions", text: "Openings, columns, beams, slabs, foundations and the way new work meets the existing house can change both design and construction scope." },
        { title: "Roof, drainage and weathering", text: "Extensions create junctions. Roof falls, waterproofing, stormwater paths, platform levels and exposed boundaries need coordinated details." },
        { title: "Submission and construction sequence", text: "Professional appointments, authority review, neighbour-sensitive work, temporary protection, procurement and site access shape the realistic programme." },
      ],
    },
    officialGuidance: {
      title: "Use the prevailing URA criteria—not a simplified 50% slogan.",
      intro: "URA's current A&A criteria consider additional GFA, external-wall replacement, structural changes, roof works and attic additions. Proposals outside those criteria, an added storey or a change in landed housing form are treated as reconstruction.",
      resources: [
        { title: "URA: A&A criteria for terrace houses", text: "Current additions-and-alterations criteria and treatment of proposals that become reconstruction.", href: "https://www.ura.gov.sg/guidelines/development-control/development-control-handbooks/residential/terrace/additions-alterations/" },
        { title: "URA: A&A criteria for semi-detached houses", text: "The corresponding prevailing criteria for semi-detached landed housing.", href: "https://www.ura.gov.sg/guidelines/development-control/development-control-handbooks/residential/semi-detached-houses/additions-alterations/" },
        { title: "URA: Land-titled residential", text: "A homeowner-oriented overview of common landed alterations and planning-permission examples.", href: "https://www.ura.gov.sg/guidelines/property-and-business-owners/property/renovating-private-residential-property/land-titled-residential/" },
      ],
    },
    projectIndex: 1,
    relatedNotes: ["landed-renovation-vs-aa-works-difference", "prepare-before-starting-renovation"],
  },
  "condo-renovation": {
    slug: "condo-renovation",
    eyebrow: "Resale condo · New condo · Interior upgrades",
    title: "Condo renovation with management requirements and daily use planned together.",
    metaTitle: "Condo Renovation Singapore | LIMM Works",
    metaDescription:
      "Condo renovation in Singapore with MCST requirements, protection, access, kitchen, bathroom, carpentry, electrical and practical interior coordination in view.",
    image: assetUrl("/projects/condo-tv-feature-wall.jpg"),
    imageAlt: "Completed condo living room feature wall",
    intro:
      "A condo renovation is shaped by more than the unit interior. Management forms, deposits, insurance, working hours, lift bookings and common-area protection can all affect the programme before wet works or fabrication begin.",
    positioning:
      "LIMM plans the interior around the household while keeping building rules, deliveries, protection and trade coordination visible from the beginning.",
    scopeTitle: "A more complete condo renovation scope",
    scope: [
      { title: "New and resale condo planning", text: "Selective upgrades for new units or fuller reconfiguration and replacement works for older resale homes." },
      { title: "Kitchen and bathrooms", text: "Wet works, plumbing, waterproofing, fittings, appliances, ventilation, cabinetry and countertop coordination." },
      { title: "Carpentry and storage", text: "Wardrobes, kitchen cabinets, TV walls, shoe storage and internal layouts planned around real contents and service access." },
      { title: "Finishes and services", text: "Flooring, painting, ceilings, lighting, switches, sockets and other items sequenced to reduce rework." },
    ],
    checksTitle: "Management requirements belong at the start",
    checksIntro:
      "Each condominium can have different rules. The management renovation guide should be reviewed alongside the design and scope, not after contractors and delivery dates are already fixed.",
    checks: [
      "Renovation application, deposit and insurance requirements",
      "Permitted working hours and noisy-work restrictions",
      "Lift booking, loading access and common-area protection",
      "Hacking, wet works and changes requiring additional checks",
      "Appliance lead times, final measurements and fabrication dates",
    ],
    process: [
      { step: "01", title: "Send the plan and management guide", text: "Share the floor plan, current photos, intended works and the condominium renovation rules if available." },
      { step: "02", title: "Separate must-do from nice-to-have", text: "Existing conditions, daily needs, storage, services and finishes are prioritised before the budget is spread too thin." },
      { step: "03", title: "Coordinate site requirements", text: "Applications, protection, deliveries, wet works and fabrication are built into the programme." },
      { step: "04", title: "Confirm details before fabrication", text: "Measurements, appliances, sockets, fittings and internal cabinet layouts are settled before production." },
    ],
    faq: [
      { question: "Do all condos have the same renovation rules?", answer: "No. Working hours, deposits, insurance, lift booking, protection and submission requirements vary by condominium." },
      { question: "Can LIMM coordinate a full resale condo renovation?", answer: "Yes. Kitchen, bathrooms, flooring, electrical, painting, ceilings and carpentry can be reviewed and sequenced as one scope." },
      { question: "When should appliances be confirmed?", answer: "Key appliance models and dimensions should be confirmed before carpentry drawings and countertop details are finalised." },
    ],
    projectIndex: 2,
    relatedNotes: ["condo-renovation-management-rules-planning", "prepare-before-starting-renovation"],
  },
  "hdb-renovation": {
    slug: "hdb-renovation",
    eyebrow: "Resale flat · New flat · Practical interior works",
    title: "HDB renovation with permits, timing and everyday use kept visible.",
    metaTitle: "HDB Renovation Singapore | LIMM Works",
    metaDescription:
      "Practical HDB renovation in Singapore for resale and new flats, with permit awareness, wet works, services, carpentry and household priorities coordinated early.",
    image: assetUrl("/projects/hdb-kitchen-green-cabinets.jpg"),
    imageAlt: "Completed HDB kitchen with green cabinets and practical storage",
    intro:
      "An HDB renovation works best when the intended layout, permitted work, existing condition and household priorities are reviewed together. Decisions around hacking, wet areas, services and built-ins should be sequenced before site work begins.",
    positioning:
      "The aim is a practical home that uses the available space well, with the applicable HDB requirements and contractor responsibilities made visible early in the discussion.",
    scopeTitle: "A connected review of the flat and the intended works",
    scope: [
      { title: "Layout and existing condition", text: "Current walls, floors, wet areas, services and retained items reviewed against the household's priorities." },
      { title: "Kitchen and bathrooms", text: "Plumbing, waterproofing, fittings, ventilation, appliances, cabinetry and worktop decisions coordinated in sequence." },
      { title: "Storage and built-ins", text: "Wardrobes, kitchen cabinets, entry storage and living-room built-ins planned around real contents and access." },
      { title: "Finishes and services", text: "Flooring, ceilings, lighting, sockets, painting and other trades aligned to reduce avoidable rework." },
    ],
    checksTitle: "Confirm the rules before committing to the programme",
    checksIntro:
      "The applicable renovation requirements depend on the block, flat and intended works. The current HDB guidance and permit path should be checked against the actual scope.",
    checks: [
      "Existing floor plan, flat condition and items to retain",
      "Works that may require approval or an authorised contractor",
      "Permitted work periods and neighbour-sensitive activities",
      "Wet-area, services and hacking constraints",
      "Appliance lead times, measurements and fabrication dates",
    ],
    process: [
      { step: "01", title: "Share the plan and current photos", text: "Include the flat type, intended works, known issues, priorities, budget range and preferred timing." },
      { step: "02", title: "Separate essential and optional work", text: "Site condition, services, wet areas and daily needs are prioritised before finish selections spread the budget too thin." },
      { step: "03", title: "Check scope dependencies", text: "Permit-sensitive work, measurements, deliveries and trade sequencing are placed in the right order." },
      { step: "04", title: "Confirm details before fabrication", text: "Appliances, sockets, internal storage layouts, fittings and material junctions are resolved before production." },
    ],
    faq: [
      { question: "Does every HDB renovation need the same permits?", answer: "No. Requirements depend on the flat and the proposed works. The current HDB rules should be checked against the actual scope before work is confirmed." },
      { question: "Can LIMM review a resale flat with older finishes and services?", answer: "Yes. Current photos, the floor plan and known issues help the first review identify retained items, replacement priorities and areas that need a site check." },
      { question: "When should carpentry measurements be taken?", answer: "Final measurements should be taken when the surrounding site condition is ready enough for reliable fabrication and after key appliance details are confirmed." },
    ],
    projectIndex: 3,
    relatedNotes: ["hdb-renovation-permits-rules-planning", "renovation-quotation-comparison-scope-exclusions"],
  },
  "kitchen-renovation": {
    slug: "kitchen-renovation",
    eyebrow: "Layout · Appliances · Carpentry · Services",
    title: "Kitchen renovation planned around cooking, storage and service access.",
    metaTitle: "Kitchen Renovation Singapore | LIMM Works",
    metaDescription:
      "Kitchen renovation in Singapore with workflow, storage, appliances, carpentry, plumbing, electrical, ventilation and maintenance access coordinated before fabrication.",
    image: assetUrl("/projects/kitchen-light-wood-cabinets.jpg"),
    imageAlt: "Completed light wood kitchen with island and integrated appliances",
    intro:
      "A kitchen should be planned from the inside out: cooking habits, appliance models, worktop use, storage contents and service points first; finishes and door profiles after the working arrangement makes sense.",
    positioning:
      "Practical kitchen planning keeps plumbing, electrical, ventilation, appliance clearances and cabinet interiors connected so a clean finish does not hide avoidable compromises.",
    scopeTitle: "The kitchen is one coordinated system",
    scope: [
      { title: "Workflow and layout", text: "Preparation, cooking, washing, storage and movement reviewed around the household's actual routines." },
      { title: "Appliances and services", text: "Models, dimensions, ventilation, sockets, isolators, water points and access confirmed before detailed fabrication." },
      { title: "Cabinet interiors", text: "Drawers, tall storage, corners, bins, cleaning supplies and frequently used items planned as carefully as the exterior." },
      { title: "Worktops and junctions", text: "Material thickness, support, cut-outs, wall finishes, sealing and transitions coordinated with the surrounding works." },
    ],
    checksTitle: "Resolve the working details before production",
    checksIntro:
      "Kitchen delays and awkward compromises often come from decisions made after fabrication has started. Key models, dimensions and service positions should be recorded early.",
    checks: [
      "Cooking habits, household size and dry or wet kitchen needs",
      "Confirmed appliance models, clearances and ventilation requirements",
      "Existing plumbing, gas or electrical conditions where relevant",
      "Internal storage contents, drawer heights and corner access",
      "Maintenance access behind removable panels and inside cabinets",
    ],
    process: [
      { step: "01", title: "Map the way the kitchen is used", text: "Share the current layout, pain points, cooking pattern, appliance list and storage priorities." },
      { step: "02", title: "Coordinate the service plan", text: "Power, water, drainage, ventilation and access are aligned with the proposed cabinet layout." },
      { step: "03", title: "Confirm models and internals", text: "Appliances, fittings, cabinet interiors, worktop and hardware choices are recorded before release." },
      { step: "04", title: "Measure and fabricate in sequence", text: "Final site conditions, measurements, production and installation are coordinated with the surrounding trades." },
    ],
    faq: [
      { question: "Should appliances be bought before carpentry is designed?", answer: "Key models and dimensions should be confirmed before detailed carpentry and worktop drawings are finalised, even if delivery is arranged later." },
      { question: "Can an existing kitchen layout always be changed?", answer: "Not always. Drainage, ventilation, services, structure and property rules can limit a proposed move. The actual site needs to be reviewed." },
      { question: "Can the kitchen remain visually simple and still be maintainable?", answer: "Yes. Clean detailing can be planned together with removable panels, accessible valves, sockets and other service points." },
    ],
    projectIndex: 3,
    relatedNotes: ["kitchen-renovation-storage-workflow-details", "aircon-electrical-carpentry-coordination"],
  },
  "bathroom-renovation": {
    slug: "bathroom-renovation",
    eyebrow: "Waterproofing · Drainage · Layout · Fittings",
    title: "Bathroom renovation with the hidden wet works planned first.",
    metaTitle: "Bathroom Renovation Singapore | LIMM Works",
    metaDescription:
      "Bathroom renovation in Singapore with layout, waterproofing, drainage, plumbing, ventilation, sanitary fittings and maintenance access coordinated before finishes.",
    image: assetUrl("/projects/bathroom-vanity-wide.jpg"),
    imageAlt: "Completed bathroom vanity, shower and wet area",
    intro:
      "Tiles and sanitary fittings are the visible layer. Preparation, drainage falls, waterproofing transitions, penetrations and service access are the parts that need to be resolved before the finish closes them in.",
    positioning:
      "A practical bathroom balances water management, safe movement, usable clearances, ventilation, storage and cleaning—not only the material palette.",
    scopeTitle: "Wet-area decisions that need to work together",
    scope: [
      { title: "Layout and clearance", text: "Shower, WC, vanity, door swing, screens and circulation reviewed against actual site dimensions." },
      { title: "Waterproofing and drainage", text: "Preparation, falls, outlets, junctions and penetrations coordinated before the visible surfaces are completed." },
      { title: "Plumbing and ventilation", text: "Pipe condition, fitting positions, water points, ventilation and access considered with the intended layout." },
      { title: "Fittings and storage", text: "Mixers, sanitary ware, mirrors, lighting, niches and cabinets aligned with maintenance and everyday use." },
    ],
    checksTitle: "A new layout must be tested against the real wet area",
    checksIntro:
      "Moving fixtures can affect drainage, floor levels, structure and property requirements. Feasibility should be checked before the new arrangement is treated as fixed.",
    checks: [
      "Existing leaks, dampness, drainage or pipe concerns",
      "Proposed changes to WC, basin, shower or floor levels",
      "Door, screen and sanitary-fitting clearances",
      "Ventilation, lighting, sockets and water-heater coordination",
      "Testing and trade sequence before surfaces are closed",
    ],
    process: [
      { step: "01", title: "Review the existing wet area", text: "Share photos, dimensions, known defects, intended layout and the fittings under consideration." },
      { step: "02", title: "Check layout feasibility", text: "Drainage, levels, penetrations, clearances and property requirements are surfaced before details are fixed." },
      { step: "03", title: "Coordinate below the finish", text: "Plumbing, preparation, waterproofing and testing are sequenced ahead of tiling and installation." },
      { step: "04", title: "Confirm visible details", text: "Tile set-out, sanitary fittings, screens, vanity, lighting and accessories are aligned with the site dimensions." },
    ],
    faq: [
      { question: "Can the WC or shower be moved anywhere?", answer: "No. Drainage, structure, levels and property requirements can restrict fixture moves. The actual wet area needs to be reviewed." },
      { question: "When should the shower screen be measured?", answer: "Final measurements should be taken after the surrounding surfaces are sufficiently complete and the actual opening is known." },
      { question: "Is waterproofing visible at handover?", answer: "Most of it is not, which is why the preparation, application, transitions and testing sequence should be discussed before finishes cover the work." },
    ],
    projectIndex: 4,
    relatedNotes: ["bathroom-renovation-waterproofing-layout-coordination", "hidden-renovation-materials-singapore"],
  },
  "carpentry-storage": {
    slug: "carpentry-storage",
    eyebrow: "Wardrobes · Built-ins · Kitchen cabinets · Storage",
    title: "Carpentry and storage planned around real contents and clearances.",
    metaTitle: "Carpentry & Built-In Storage Singapore | LIMM Works",
    metaDescription:
      "Built-in carpentry and storage planning in Singapore for wardrobes, kitchens, living rooms and entry areas, with measurements, hardware, services and access coordinated before fabrication.",
    image: assetUrl("/projects/carpentry-wardrobe-run.jpg"),
    imageAlt: "Completed full-height wardrobe and built-in storage run",
    intro:
      "Good carpentry begins before laminate selection. What needs to be stored, how often it is used, the available clearances and the services behind the built-in should shape the internal layout and final measurements.",
    positioning:
      "The goal is built-in work that feels calm on the outside, works hard on the inside and can be installed without hiding essential access or creating avoidable site adjustments.",
    scopeTitle: "From storage contents to fabrication details",
    scope: [
      { title: "Internal organisation", text: "Hanging lengths, drawers, shelves, shoes, appliances and daily items mapped before the outer elevation is approved." },
      { title: "Site measurements", text: "Floor, wall, ceiling and surrounding-finish conditions checked at the right stage before production." },
      { title: "Hardware and materials", text: "Hinges, runners, handles, lift-up systems, edge details and material direction recorded clearly." },
      { title: "Services and access", text: "Sockets, switches, valves, ventilation, equipment and access panels coordinated with the built-in." },
    ],
    checksTitle: "Fabrication should follow confirmed site information",
    checksIntro:
      "Drawing approval is a useful control point. Internal layouts, materials, hardware, appliances, service access and final dimensions should be settled before production begins.",
    checks: [
      "Items to store and the way each cabinet will be used",
      "Final site dimensions and surrounding finish build-up",
      "Appliance, equipment and ventilation requirements",
      "Switches, sockets, plumbing valves and maintenance access",
      "Hardware, material direction, handles and opening clearances",
    ],
    process: [
      { step: "01", title: "List the storage requirements", text: "Share what needs to fit, what is used daily and which areas currently feel difficult." },
      { step: "02", title: "Coordinate the surrounding works", text: "Services, appliances, walls, floors and ceilings are reviewed before final measurements." },
      { step: "03", title: "Approve the inside and outside", text: "Internal layouts, elevations, materials, hardware and access details are confirmed together." },
      { step: "04", title: "Fabricate and install", text: "Production and site installation follow the approved information, with final adjustments kept controlled." },
    ],
    faq: [
      { question: "Why not measure carpentry at the start of renovation?", answer: "Surrounding walls, floors, ceilings and services may still change. Final measurement should happen when the site condition is reliable enough for fabrication." },
      { question: "Can sockets be hidden inside a cabinet?", answer: "They can be coordinated into selected built-ins, but equipment, heat, ventilation and safe maintenance access need to be considered first." },
      { question: "Should the internal layout appear on the drawing?", answer: "Yes. Shelves, drawers, hanging space, hardware and important clearances should be recorded before fabrication." },
    ],
    projectIndex: 2,
    relatedNotes: ["carpentry-storage-before-fabrication", "aircon-electrical-carpentry-coordination"],
  },
  "commercial-renovation": {
    slug: "commercial-renovation",
    eyebrow: "Office · Retail · Selected commercial fit-outs",
    title: "Commercial renovation planned around access, operations and handover.",
    metaTitle: "Commercial Renovation Singapore | LIMM Works",
    metaDescription:
      "Commercial renovation and practical fit-out support in Singapore for offices, retail and selected business spaces, with access, building rules and handover in view.",
    image: assetUrl("/projects/commercial-dining-fitout.jpg"),
    imageAlt: "Completed commercial dining interior fit-out",
    intro:
      "Commercial works need the renovation scope and the way the business operates to be considered together. Access, landlord requirements, working windows, deliveries and the handover date can be as important as the finishes.",
    positioning:
      "LIMM supports practical office, retail and selected commercial scopes where programme, coordination and clear handover expectations matter.",
    scopeTitle: "Fit-out support shaped around the business",
    scope: [
      { title: "Office interiors", text: "Partitions, meeting spaces, workstations, pantry, lighting, electrical and practical coordination around the workplace." },
      { title: "Retail and customer areas", text: "Display, counters, circulation, storage, back-of-house needs and finishes planned around day-to-day operations." },
      { title: "Building requirements", text: "Landlord or management submissions, access, loading, protection, work windows and delivery restrictions reviewed early." },
      { title: "Handover and reinstatement", text: "Programme planning around tenancy obligations, opening dates, defects, documentation and reinstatement where relevant." },
    ],
    checksTitle: "Protect the opening or handover date",
    checksIntro:
      "A commercial programme should show decision deadlines, approvals, material lead times and building restrictions—not only the first day of site work.",
    checks: [
      "Landlord, building management and fit-out requirements",
      "Permitted working hours, night work and noisy-work windows",
      "Loading access, deliveries, protection and debris movement",
      "Services, fire-safety or professional coordination where applicable",
      "Material lead times, operational continuity and handover obligations",
    ],
    process: [
      { step: "01", title: "Review the tenancy context", text: "Share the plan, landlord guide, intended use, scope, access constraints and target handover date." },
      { step: "02", title: "Map approvals and dependencies", text: "Submissions, service coordination, building rules and long-lead decisions are placed into the programme." },
      { step: "03", title: "Align scope with operations", text: "Front-of-house, back-of-house, storage, access and working windows are reviewed together." },
      { step: "04", title: "Manage toward handover", text: "Site sequencing, inspections, outstanding items and the final handover path are kept visible." },
    ],
    faq: [
      { question: "Can LIMM work around building restrictions?", answer: "Yes, subject to the actual building rules and scope. Access, protection, loading and working windows should be reviewed before the programme is committed." },
      { question: "Can night work be considered?", answer: "Where the building permits it, night or restricted-hour works can be planned into the scope and costing. The management requirements need to be confirmed first." },
      { question: "Does LIMM handle reinstatement?", answer: "Selected reinstatement scopes can be reviewed alongside the tenancy obligations, existing condition and required handover standard." },
    ],
    projectIndex: 5,
    relatedNotes: ["commercial-renovation-access-handover-reinstatement", "renovation-timeline-sequencing-lead-times"],
  },
};

export type Note = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  image: string;
  serviceHref: string;
  relatedServices?: { label: string; href: string }[];
  officialResources?: {
    title: string;
    text: string;
    href: string;
  }[];
  sections: { heading: string; paragraphs: string[] }[];
};

export const notes: Note[] = [
  {
    slug: "prepare-before-starting-renovation",
    category: "Project planning",
    title: "What homeowners should prepare before starting a renovation",
    excerpt: "A practical checklist for floor plans, photos, priorities, budget, timing and known site constraints.",
    readTime: "6 min read",
    image: assetUrl("/projects/landed-dining-kitchen.jpg"),
    serviceHref: "/landed-renovation",
    sections: [
      { heading: "Start with information that can be used", paragraphs: ["A floor plan, current site photos and a rough scope move the first discussion beyond general ideas. They help show the property type, current layout, visible conditions and the areas that need attention.", "For landed homes, include exterior views, roofline concerns, drainage issues and known leaks. For condos, include the management renovation guide when it is available."] },
      { heading: "Clarify the household and priorities", paragraphs: ["Explain who will use the space, what does not work today and which improvements matter most. Children, elderly family members, pets, work-from-home needs, cooking habits and storage requirements can all change the right layout.", "Separate must-have work from optional upgrades. This helps prevent visual finishes from absorbing the budget before essential wet works, services or repairs are understood."] },
      { heading: "Share a realistic budget and timeline", paragraphs: ["A budget range helps the team test whether the intended scope and finish level can sit together. It is not a commitment to spend the maximum; it is a planning boundary.", "The preferred completion date should be discussed together with approvals, material lead times, fabrication, wet works and any period when the property must remain usable."] },
      { heading: "Use the first review to identify what is missing", paragraphs: ["A useful initial review should reveal which parts can be discussed immediately, which require a site visit and which may need professional or authority checks. It should not promise feasibility from photos alone."] },
    ],
  },
  {
    slug: "landed-renovation-vs-aa-works-difference",
    category: "Landed & A&A",
    title: "Landed renovation vs A&A works: what is the difference?",
    excerpt: "A practical guide to renovation, additions and alterations, reconstruction criteria and the checks landed homeowners should make before committing.",
    readTime: "8 min read",
    image: assetUrl("/projects/landed-glass-entry.jpg"),
    serviceHref: "/landed-aa-works",
    relatedServices: [
      { label: "Review landed renovation", href: "/landed-renovation" },
      { label: "Review landed A&A works", href: "/landed-aa-works" },
    ],
    officialResources: [
      {
        title: "URA: A&A criteria for terrace houses",
        text: "Current criteria covering additional GFA, external walls, structural changes, roof works, attics and reconstruction.",
        href: "https://www.ura.gov.sg/guidelines/development-control/development-control-handbooks/residential/terrace/additions-alterations/",
      },
      {
        title: "URA: A&A criteria for semi-detached houses",
        text: "The corresponding prevailing criteria for additions and alterations to semi-detached landed housing.",
        href: "https://www.ura.gov.sg/guidelines/development-control/development-control-handbooks/residential/semi-detached-houses/additions-alterations/",
      },
      {
        title: "URA: Land-titled residential",
        text: "A homeowner-oriented guide to examples of landed works and whether planning permission may be required.",
        href: "https://www.ura.gov.sg/guidelines/property-and-business-owners/property/renovating-private-residential-property/land-titled-residential/",
      },
    ],
    sections: [
      {
        heading: "Interior renovation is not automatically A&A",
        paragraphs: [
          "A landed renovation may focus on kitchens, bathrooms, flooring, carpentry, electrical and plumbing services, repairs and practical layout improvements within the approved house. It can still be complex, especially where an older home has leaks, previous alterations or outdated services.",
          "URA's land-titled residential guidance gives examples of works that may not require planning permission when stated conditions are met, including selected internal room changes and like-for-like roof reconstruction. That does not remove the need to check other building, structural, drainage or technical requirements against the actual work.",
        ],
      },
      {
        heading: "A&A is assessed against several criteria—not one percentage",
        paragraphs: [
          "Under URA's prevailing landed-housing criteria, an A&A proposal is assessed across several dimensions. These include the additional gross floor area, how much of the approved external walls are removed and replaced, the extent of structural change, whether roof work creates an additional storey, and the GFA increase where an attic is added.",
          "The familiar 50% shorthand is therefore incomplete. A proposal should be checked against every applicable criterion and the approved property records, not classified from the apparent size of one extension or from a contractor's label.",
        ],
      },
      {
        heading: "Some proposals are treated as reconstruction",
        paragraphs: [
          "URA states that proposals outside the A&A criteria are considered reconstruction. An increase in storey height, including roof work that creates an additional storey, or a change in landed housing form is also treated as reconstruction regardless of whether the proposal appears to remain below a single percentage threshold.",
          "This distinction affects the design and approval route. It should be identified before owners rely on a construction price, submission timeline or promise that the existing structure can simply be retained.",
        ],
      },
      {
        heading: "The approved house and the existing house must be compared",
        paragraphs: [
          "Older landed homes may contain earlier additions, roof changes or other work that is not obvious from a viewing or marketing floor plan. Approved plans and previous records help the project team compare what was authorised with what is physically present.",
          "The prevailing building envelope also matters. URA notes that new A&A works must comply with the envelope-control guidelines, and where an existing house already exceeds the permissible envelope, the new work must not further increase the building bulk and will be assessed on its merits.",
        ],
      },
      {
        heading: "Professional and authority checks follow the real scope",
        paragraphs: [
          "Structure, planning, building, drainage, fire-safety or other technical matters can require different professional input and submissions. The relevant architect, engineer, Qualified Person or authority path depends on the property and the work proposed.",
          "Photos are valuable for an initial conversation but cannot confirm approval. Feasibility should be developed from the plans, site condition and required professional checks before the construction scope is treated as settled.",
        ],
      },
      {
        heading: "Prepare the information that makes the first review useful",
        paragraphs: [
          "Share approved and existing plans when available, current interior and exterior photos, the addition or alteration you want, known leaks or drainage concerns, and any previous approval records. Explain the household outcome rather than only naming a room or extension.",
          "Include the budget range and preferred timing as planning boundaries. The first review should identify whether the brief is interior renovation, likely A&A or a more extensive route—and clearly list what must be checked next.",
        ],
      },
    ],
  },
  {
    slug: "condo-renovation-management-rules-planning",
    category: "Condo renovation",
    title: "Condo renovation: management rules, protection and planning",
    excerpt: "What to check around MCST submissions, deposits, insurance, working hours, lift access and protection.",
    readTime: "6 min read",
    image: assetUrl("/projects/condo-tv-feature-wall.jpg"),
    serviceHref: "/condo-renovation",
    sections: [
      { heading: "Management rules shape the programme", paragraphs: ["Condominiums commonly require renovation forms, deposits, insurance documents, contractor details, lift bookings and protection arrangements. The exact requirements vary by development.", "Read the management guide before confirming a start date. Restricted working hours or approval lead time can affect the sequence even when the interior design is already settled."] },
      { heading: "Protection is part of the renovation", paragraphs: ["Lift, corridor and floor protection allow workers, materials and debris to move through shared areas responsibly. It should be included in scope and programme rather than treated as an afterthought.", "Loading access, delivery sizes and waste-removal rules may also influence how materials are ordered and moved."] },
      { heading: "Sequence wet works and fabrication carefully", paragraphs: ["Kitchen, bathroom, flooring, electrical, painting and carpentry works need a clear sequence. Final measurements and appliance choices should not be rushed before surrounding works are ready.", "Hacking, wet works and changes to services may require additional checks. The site team should know which items depend on management acceptance before work begins."] },
      { heading: "Send the management guide with the floor plan", paragraphs: ["The most useful first enquiry includes the floor plan, current photos, rough scope, target timeline and the management renovation guide if it has already been obtained."] },
    ],
  },
  {
    slug: "hidden-renovation-materials-singapore",
    category: "Materials & safety",
    title: "Hidden renovation materials: pipes, wires, breakers and protection",
    excerpt: "The less-visible materials and coordination details that can affect safety, maintenance and long-term reliability.",
    readTime: "8 min read",
    image: assetUrl("/projects/bathroom-vanity-wide.jpg"),
    serviceHref: "/landed-renovation",
    sections: [
      { heading: "Visible finishes are only part of the renovation", paragraphs: ["Tiles, laminates and paint are easy to compare because owners can see them. Pipes, cables, breakers, waterproofing transitions, supports and access provisions are less visible but often more important to safety and maintenance.", "A quotation should describe significant hidden scope clearly enough for the owner to understand what is being replaced, retained or excluded."] },
      { heading: "Electrical details need coordination", paragraphs: ["Cable sizing, circuit protection, distribution-board condition, isolators, earthing and the location of sockets should match the intended appliances and usage. New points should not be added without considering the existing supply and circuit arrangement.", "Final positions also need to be coordinated with carpentry, appliances and access panels before fabrication."] },
      { heading: "Wet-area work depends on what is underneath", paragraphs: ["Waterproofing preparation, drainage falls, pipe condition and penetrations affect long-term performance. Finishes should not conceal unresolved leaks or inaccessible fittings.", "Owners should know how wet works, testing, tiling and sanitary installation are sequenced and what checks are required before surfaces are closed."] },
      { heading: "Protection and access remain important", paragraphs: ["Completed floors, common areas and retained fittings need protection during material movement and heavy work. Maintenance access should remain available after ceilings, cabinets and feature walls are installed.", "A practical review looks beyond the finished photograph and asks how the space will be inspected, repaired and used years later."] },
    ],
  },
  {
    slug: "kitchen-renovation-storage-workflow-details",
    category: "Kitchen renovation",
    title: "Kitchen planning: storage, workflow and practical details",
    excerpt: "Plan around cooking habits, appliance dimensions, service access, ventilation and cabinet organisation.",
    readTime: "6 min read",
    image: assetUrl("/projects/kitchen-light-wood-cabinets.jpg"),
    serviceHref: "/condo-renovation",
    sections: [
      { heading: "Plan around real cooking habits", paragraphs: ["Start with the way food is stored, prepared, cooked and cleaned up. The dry and wet zones, worktop space and movement between fridge, sink and hob should support the household rather than follow a generic arrangement."] },
      { heading: "Confirm appliances before fabrication", paragraphs: ["Fridge, oven, hob, hood, dishwasher, washer and small appliances affect cabinet openings, ventilation, power points and countertop cuts. Models and dimensions should be coordinated before production."] },
      { heading: "Design the inside of the cabinets", paragraphs: ["Drawer heights, corner access, tall storage, cleaning supplies, bins and frequently used items should be discussed before selecting only the exterior laminate."] },
      { heading: "Keep services maintainable", paragraphs: ["Plumbing joints, valves, sockets, ventilation and access panels should remain reachable after the kitchen is complete. A seamless appearance should not make future maintenance unnecessarily destructive."] },
    ],
  },
  {
    slug: "bathroom-renovation-waterproofing-layout-coordination",
    category: "Bathroom renovation",
    title: "Bathroom planning: waterproofing, layout and coordination",
    excerpt: "What needs to be resolved before tiles and sanitary fittings dominate the discussion.",
    readTime: "6 min read",
    image: assetUrl("/projects/bathroom-vanity-wide.jpg"),
    serviceHref: "/condo-renovation",
    sections: [
      { heading: "Wet-area quality begins below the finish", paragraphs: ["Preparation, waterproofing transitions, drainage falls and penetrations influence the long-term performance of the bathroom. These details should be understood before tile selection becomes the main focus."] },
      { heading: "Fixture moves are not always simple", paragraphs: ["Changing the WC, basin or shower position can affect drainage, structure, floor levels and property rules. The actual site needs to be reviewed before a new layout is assumed to be feasible."] },
      { heading: "Coordinate dimensions early", paragraphs: ["Vanity width, mixer type, shower-screen clearance, door swing, niches and storage should be confirmed together. Maintenance access and cleaning should remain practical."] },
      { heading: "Sequence the trades", paragraphs: ["Plumbing, waterproofing, testing, tiling, ceilings, electrical, carpentry and sanitary installation need a clear handover sequence to reduce damage and rework."] },
    ],
  },
  {
    slug: "carpentry-storage-before-fabrication",
    category: "Carpentry",
    title: "Carpentry and storage: what to confirm before fabrication",
    excerpt: "Measurements, inside layouts, hardware, sockets and access details that should be settled before production.",
    readTime: "6 min read",
    image: assetUrl("/projects/carpentry-wardrobe-run.jpg"),
    serviceHref: "/condo-renovation",
    sections: [
      { heading: "Measure at the right stage", paragraphs: ["Final dimensions should be taken when the surrounding site condition is ready enough for reliable fabrication. Measuring too early can create avoidable fillers, gaps or installation problems."] },
      { heading: "Plan what goes inside", paragraphs: ["Wardrobe hanging space, drawer heights, shoe storage, kitchen equipment and frequently used items should shape the internal layout. Exterior appearance is only half the design."] },
      { heading: "Coordinate services and clearances", paragraphs: ["Switches, sockets, plumbing access, ventilation, appliances and access panels need to be coordinated with built-ins before drawings are approved."] },
      { heading: "Confirm hardware and details", paragraphs: ["Hinges, runners, handles, lift-up systems, edge details and material direction influence cost, use and durability. These items should be recorded before fabrication begins."] },
    ],
  },
  {
    slug: "renovation-material-selection-guide",
    category: "Materials & finishes",
    title: "Renovation material selection: what to decide before works start",
    excerpt: "A practical order for confirming tiles, worktops, laminates, fittings, paint and long-lead items without rushing every choice at once.",
    readTime: "7 min read",
    image: assetUrl("/projects/landed-dining-kitchen.jpg"),
    serviceHref: "/landed-renovation",
    sections: [
      { heading: "Choose in the order the site needs information", paragraphs: ["Not every finish needs to be decided on the first day. Materials that affect layout, service points, fabrication or wet works should be confirmed before items that can be selected later without holding up the programme.", "Appliances, sanitary fittings, tiles, worktops and key built-in materials often influence dimensions and junctions. Paint colours and selected loose items may have more flexibility, depending on the programme."] },
      { heading: "Compare performance as well as appearance", paragraphs: ["Ask where the material will be used, how it is cleaned, what it meets and what level of wear or moisture it may face. A sample viewed under showroom lighting may behave differently across a large surface at home.", "Edge treatment, grout, sealant, slip resistance, maintenance and replacement availability can matter as much as colour and pattern."] },
      { heading: "Record the exact selection", paragraphs: ["A useful material record includes the supplier, product name or code, size, finish, quantity basis and the area where it will be installed. Similar-looking products are not always interchangeable.", "Physical samples, marked drawings and an agreed schedule reduce uncertainty when several trades are working from the same decisions."] },
      { heading: "Protect the programme from late changes", paragraphs: ["Check stock, delivery lead time and the last responsible decision date. A late substitution can affect dimensions, supports, adjacent finishes or installation sequence even when the replacement looks close to the original choice."] },
    ],
  },
  {
    slug: "renovation-quotation-comparison-scope-exclusions",
    category: "Cost & scope",
    title: "How to compare renovation quotations beyond the total price",
    excerpt: "Compare quantities, specifications, assumptions, exclusions and responsibilities so unlike scopes do not appear deceptively similar.",
    readTime: "8 min read",
    image: assetUrl("/projects/carpentry-wardrobe-run.jpg"),
    serviceHref: "/hdb-renovation",
    sections: [
      { heading: "Start by checking whether the scope is the same", paragraphs: ["Two totals are only comparable when they cover the same areas, quantities and level of work. One quotation may include disposal, protection, preparation or making-good while another leaves those items unstated.", "Mark each line as included, excluded, provisional or still unclear before comparing the price difference."] },
      { heading: "Look for measurable descriptions", paragraphs: ["Useful descriptions identify the location, approximate quantity, material or specification, and what preparation or installation is included. Vague lump-sum lines make it harder to understand what changes when the site condition becomes clearer.", "For hidden works, ask what is being replaced, retained, tested or excluded rather than relying only on a broad trade label."] },
      { heading: "Surface assumptions and owner-supplied items", paragraphs: ["Clarify who supplies appliances, lights, sanitary fittings, accessories and specialist items; who receives them; and who is responsible for missing parts, damage or incompatible dimensions.", "Also identify allowances that may move after selection and site conditions that cannot yet be priced firmly."] },
      { heading: "Use the comparison to improve the scope", paragraphs: ["The goal is not simply to force every quotation into the lowest total. A good comparison reveals missing decisions, different construction assumptions and risk that should be resolved before appointment."] },
    ],
  },
  {
    slug: "landed-roof-drainage-waterproofing-warning-signs",
    category: "Landed homes",
    title: "Landed homes: roof, drainage and waterproofing signs to document early",
    excerpt: "What owners can photograph and describe when leaks, dampness, ponding or exposed junctions may affect the renovation scope.",
    readTime: "7 min read",
    image: assetUrl("/projects/landed-glass-entry.jpg"),
    serviceHref: "/landed-renovation",
    sections: [
      { heading: "Document patterns, not only the latest stain", paragraphs: ["Photograph the affected area from close and wide angles, then note when it appears: during heavy rain, after wind-driven rain, after bathroom use or long after the weather clears. The timing can help narrow the areas that need inspection.", "Include the corresponding external wall, roof edge, balcony, gutter, downpipe or wet area when it is safe and practical to do so."] },
      { heading: "Watch the paths that water is meant to take", paragraphs: ["Blocked outlets, inadequate falls, overflowing gutters, disconnected downpipes and water trapped at junctions can move moisture away from the obvious source. New finishes should not be used to conceal an unresolved water path."] },
      { heading: "New and existing work need careful junctions", paragraphs: ["Extensions, shelters, glazing and facade changes create connections between new work and the existing building. Roof levels, flashings, penetrations, sealants and drainage routes should be considered as a system rather than isolated details."] },
      { heading: "Use the initial review to decide the next check", paragraphs: ["Photos support the first conversation, but persistent water ingress may require site investigation or specialist input before repair scope and finishes can be confirmed. Keep the recommendation proportionate to the actual condition."] },
    ],
  },
  {
    slug: "renovation-budget-contingency-older-homes",
    category: "Cost & scope",
    title: "Renovation budget and contingency for an older home",
    excerpt: "A planning approach that separates known scope, selections, provisional items and site-condition uncertainty.",
    readTime: "7 min read",
    image: assetUrl("/projects/landed-open-plan-living.jpg"),
    serviceHref: "/landed-renovation",
    sections: [
      { heading: "Separate the budget into useful parts", paragraphs: ["Keep the core construction scope, owner-supplied items, professional or submission costs, temporary arrangements and contingency visible as separate planning lines. This makes the trade-offs clearer than one undifferentiated maximum figure."] },
      { heading: "Older homes contain more unknowns", paragraphs: ["Past alterations, concealed services, water damage, uneven substrates and inaccessible areas may only become clear after surveys or opening-up. The response should be to identify uncertainty early, not to pretend every condition is known from photographs."] },
      { heading: "Protect essential work before upgrades", paragraphs: ["Prioritise safety, water management, services, wet works and necessary repairs before optional finishes absorb the available budget. Must-have, should-have and later-stage items can then be reviewed against the same working total."] },
      { heading: "Treat contingency as controlled money", paragraphs: ["A contingency is not an invitation to spend without explanation. Changes should still be described, priced and agreed against the remaining allowance so the owner can see the effect on other priorities."] },
    ],
  },
  {
    slug: "aircon-electrical-carpentry-coordination",
    category: "Services & carpentry",
    title: "Air-conditioning, electrical and carpentry coordination before fabrication",
    excerpt: "Resolve service routes, power points, drainage, equipment access and built-in clearances before cabinets and ceilings close the space.",
    readTime: "7 min read",
    image: assetUrl("/projects/condo-tv-feature-wall.jpg"),
    serviceHref: "/carpentry-storage",
    sections: [
      { heading: "Draw what will be hidden", paragraphs: ["Air-conditioning pipes and drains, electrical routes, sockets, isolators, data points and access panels can disappear behind ceilings or built-ins. Their intended locations should be coordinated on drawings before fabrication and closing-up."] },
      { heading: "Check equipment and maintenance clearances", paragraphs: ["Fan-coil units, condensate drains, distribution boards, drivers, routers and appliances need room for servicing and replacement. A flush panel is useful only when the person maintaining the equipment can actually remove it."] },
      { heading: "Match power and ventilation to the real appliance", paragraphs: ["Model numbers, loads, plug types, isolators, heat output and ventilation requirements can affect the cabinet and service plan. Generic placeholders should be replaced with confirmed information before production."] },
      { heading: "Hold a coordination check before release", paragraphs: ["Compare the carpentry, reflected-ceiling, air-conditioning and electrical information together. A short review at the right time can prevent cut-outs, surface trunking or inaccessible equipment later."] },
    ],
  },
  {
    slug: "renovation-timeline-sequencing-lead-times",
    category: "Project planning",
    title: "Renovation timeline: sequencing, approvals and lead times",
    excerpt: "Why the programme should show decisions and dependencies, not only the start and completion dates.",
    readTime: "7 min read",
    image: assetUrl("/projects/kitchen-light-wood-cabinets.jpg"),
    serviceHref: "/commercial-renovation",
    sections: [
      { heading: "A programme begins before site work", paragraphs: ["Applications, professional review, material selection, appliance confirmation and long-lead ordering can affect the start even when no one is yet working inside the property. These activities should be visible rather than treated as background administration."] },
      { heading: "Trades depend on completed information", paragraphs: ["Wet works, services, ceilings, painting, final measurements, carpentry, worktops and fittings follow a sequence. Starting one activity without the information or site condition it needs can create rework instead of saving time."] },
      { heading: "Show owner decision dates", paragraphs: ["The programme should identify when layouts, appliances, tiles, fittings, laminates and other important selections must be confirmed. A completion date is easier to protect when the last responsible decision dates are understood."] },
      { heading: "Plan the final stage as carefully as the first", paragraphs: ["Testing, cleaning, touch-ups, defect review, owner-supplied deliveries and handover preparation need time. Compressing every outstanding item into the final day makes the finish less predictable."] },
    ],
  },
  {
    slug: "site-photos-for-renovation-review",
    category: "Project preparation",
    title: "How to take useful site photos for a renovation review",
    excerpt: "A simple photo sequence that helps show layout, existing condition, services and problem areas before the first site discussion.",
    readTime: "5 min read",
    image: assetUrl("/projects/landed-dining-kitchen.jpg"),
    serviceHref: "/landed-renovation",
    sections: [
      { heading: "Begin with one continuous walk-through", paragraphs: ["Start at the entrance and photograph each room from more than one corner. Include doorways and connections between spaces so the images explain the layout instead of showing only isolated finishes."] },
      { heading: "Pair wide views with close details", paragraphs: ["For every leak, crack, damaged finish, pipe, distribution board or awkward junction, take one close photograph and another that shows where it sits in the room. Add a short note describing what happens and when."] },
      { heading: "Include the parts owners often omit", paragraphs: ["Photograph ceilings, service yards, external walls, roof edges visible from safe areas, drains, access routes, lift or stair constraints and items that must remain. For a condo, include the management renovation guide separately when available."] },
      { heading: "Send the plan with the photos", paragraphs: ["Mark the direction each important photograph faces on the floor plan if the property is complex. The combination helps the first review identify what can be discussed immediately and what still needs a site check."] },
    ],
  },
  {
    slug: "hdb-renovation-permits-rules-planning",
    category: "HDB renovation",
    title: "HDB renovation planning: permits, work rules and sequencing",
    excerpt: "A cautious first review of the flat, intended work and current HDB requirements before the programme is fixed.",
    readTime: "7 min read",
    image: assetUrl("/projects/hdb-kitchen-green-cabinets.jpg"),
    serviceHref: "/hdb-renovation",
    sections: [
      { heading: "Check the current requirements against the actual work", paragraphs: ["HDB renovation requirements can differ by work type. Hacking, replacement of finishes, changes in wet areas and other items should be checked against current guidance rather than assumed from another project.", "Use the existing floor plan and a clear scope list so permit-sensitive work can be identified early."] },
      { heading: "Plan around permitted work periods", paragraphs: ["Noisy work, deliveries, debris removal and neighbour-sensitive activities should be sequenced with the applicable work rules in mind. The programme should not assume every trade can operate at any hour."] },
      { heading: "Keep responsibilities clear", paragraphs: ["Clarify who prepares applications, which contractor qualifications are required for the relevant work, and what documents the owner needs to provide. Do this before the intended start date becomes a commitment."] },
      { heading: "Use official guidance as the control point", paragraphs: ["Requirements can change. The latest HDB information and the actual permit response should govern the project when they differ from past experience or general advice."] },
    ],
  },
  {
    slug: "commercial-renovation-access-handover-reinstatement",
    category: "Commercial renovation",
    title: "Commercial renovation: access, handover and reinstatement planning",
    excerpt: "Coordinate building rules, loading, work windows, operational needs and tenancy obligations around the real handover date.",
    readTime: "7 min read",
    image: assetUrl("/projects/commercial-dining-fitout.jpg"),
    serviceHref: "/commercial-renovation",
    sections: [
      { heading: "Start with the tenancy and building documents", paragraphs: ["The landlord or management fit-out guide, approved-use information, access procedures and reinstatement clauses can affect the design and programme. Review them with the floor plan and intended operations before treating the scope as fixed."] },
      { heading: "Map how work enters and leaves the building", paragraphs: ["Loading bays, lift dimensions, protection, security access, delivery booking, debris routes and permitted work windows can determine how materials and trades are sequenced."] },
      { heading: "Protect the operating requirement", paragraphs: ["Customer flow, staff movement, storage, back-of-house services and any need to remain partly operational should be described clearly. The construction plan needs to reflect the business, not only the empty unit."] },
      { heading: "Define what handover means", paragraphs: ["Testing, documentation, cleaning, outstanding items, landlord inspection and opening preparation should be included in the final stage. If reinstatement applies, record the required condition before works begin."] },
    ],
  },
];

export const notesBySlug = Object.fromEntries(notes.map((note) => [note.slug, note]));
