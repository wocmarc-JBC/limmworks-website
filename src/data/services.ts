import { projectImages } from "@/data/assets";

export type FaqItem = {
  question: string;
  answer: string;
};

export type AnswerItem = {
  question: string;
  answer: string;
};

export type ServiceDetailSection = {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  note?: string;
};

export type HomeownerGuide = {
  title: string;
  scopeTitle: string;
  quoteTitle: string;
  enquiryItems: string[];
  links: { label: string; href: string }[];
  updated: string;
};

export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  path: string;
  eyebrow: string;
  summary: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  focus: string[];
  uniqueSection: ServiceDetailSection;
  considerations: string[];
  reviewSteps: string[];
  safeNotice?: string;
  faqs: FaqItem[];
  answers: AnswerItem[];
  homeownerGuide?: HomeownerGuide;
};

const planningSteps = [
  "Send the floor plan, site photos, property type and rough scope.",
  "Review site condition, usage needs, access constraints and likely coordination items.",
  "Clarify scope, practical sequencing, management rules or approval checks where applicable.",
  "Align on next steps before detailed costing, fabrication or site works proceed.",
];

const uraLandedHomes =
  "https://www.ura.gov.sg/guidelines/property-and-business-owners/property/renovating-private-residential-property/land-titled-residential/";
const uraTerraceAa =
  "https://www.ura.gov.sg/guidelines/development-control/development-control-handbooks/residential/terrace/additions-alterations/";

export const services: Service[] = [
  {
    slug: "landed-renovation",
    title: "Landed Renovation",
    navTitle: "Landed Renovation",
    path: "/landed-renovation",
    eyebrow: "Terrace houses, semi-detached homes and bungalows",
    summary:
      "LIMM Works renovates existing landed homes in Singapore, from ground-floor layouts and wet areas to drainage, waterproofing and built-in carpentry.",
    metaDescription:
      "Renovate your Singapore landed home with LIMM Works. Get a site review for terrace, semi-detached and bungalow upgrades, with in-house trades and carpentry.",
    image: projectImages.landed,
    imageAlt: "Completed landed home with adjoining living, dining and kitchen areas",
    homeownerGuide: {
      title: "Landed House Renovation in Singapore",
      scopeTitle: "Renovation for existing landed homes",
      quoteTitle: "What affects a landed renovation quote",
      enquiryItems: [
        "Existing floor plans and house type",
        "Photos of areas to upgrade or repair",
        "Budget range and target move-in date",
      ],
      links: [
        { label: "Landed additions and alterations services", href: "/landed-aa-works" },
        { label: "Landed renovation, A&A and reconstruction explained", href: "/owners-notes/landed-renovation-vs-aa-works-difference" },
        { label: "Wall hacking and approval checks", href: "/owners-notes/wall-hacking-renovation-singapore-checks-approvals" },
        { label: "URA guidance for landed homes", href: uraLandedHomes },
      ],
      updated: "2026-11-18",
    },
    focus: [
      "Ground-floor layouts, kitchens, bathrooms and storage for terrace houses, semi-detached homes and bungalows.",
      "Hacking, electrical, plumbing and tiling coordinated with in-house teams and our carpentry workshop.",
      "Roof and façade repairs, waterproofing and drainage works, with the scope confirmed after a site review.",
      "Site protection and sequencing for occupied homes, narrow access and shared boundaries.",
    ],
    uniqueSection: {
      eyebrow: "Existing condition",
      title: "What to check in an older landed house",
      body: "The site review starts with the existing layout, rainwater routes, wet areas and access. These conditions determine which repairs should go into the scope before finish and carpentry decisions.",
      points: [
        "Check where rainwater travels at the roof, downpipes, yard and thresholds. Photograph active leaks and recurring ponding before opening up walls or floors.",
        "Map kitchens, bathrooms and electrical points against the intended layout. Check floor levels, usable access and routes for new services.",
        "Flag proposed openings or changes to load-bearing elements for qualified review. Bring any approved plans you have.",
      ],
    },
    considerations: [
      "How much of the home is being renovated, which rooms stay in use and whether the works will be phased.",
      "Condition of the existing roof, drainage, electrical and plumbing services, including what can be confirmed before opening up.",
      "What the quote covers for protection, disposal, waterproofing, supply allowances and reinstatement.",
      "Drawings, qualified professional fees or submissions to include separately if the scope requires them.",
    ],
    reviewSteps: [
      "Share the floor plan, affected rooms and photos of any leaks or visible defects.",
      "Review access, existing services and changes to the layout at the property.",
      "Agree the scope, exclusions, allowances and sequence before work starts.",
    ],
    faqs: [
      {
        question: "Can LIMM Works renovate the ground floor of an older terrace house?",
        answer:
          "Yes. LIMM Works can review the living, dining and kitchen layout together and plan the hacking, plumbing, electrical work, tiling and carpentry. The site review covers retained walls, drainage, access and any professional checks the proposed layout requires.",
      },
      {
        question: "Can we stay in the house while it is renovated?",
        answer:
          "It depends on the extent of hacking, dust and service shutdowns and whether the home can retain a safe route and a usable bathroom. LIMM Works can review phased areas and discuss when temporary accommodation should be planned.",
      },
      {
        question: "Can you give a landed renovation quote from a floor plan?",
        answer:
          "A floor plan and photos help define a preliminary scope. A detailed quote depends on measurements, access, what is being retained, and which hidden conditions or approval items need an allowance or a separate check.",
      },
    ],
    answers: [
      {
        question: "When should a landed renovation be reviewed as A&A?",
        answer:
          "Get early advice if the proposal extends the house, changes the roof or façade, or affects structural elements. A Qualified Person can check the approved plans and confirm the relevant requirements for the proposed works.",
      },
    ],
  },
  {
    slug: "landed-aa-works",
    title: "Landed A&A Works",
    navTitle: "Landed A&A Works",
    path: "/landed-aa-works",
    eyebrow: "Landed property additions and alterations",
    summary:
      "LIMM Works reviews and coordinates landed A&A projects in Singapore, including rear wet-kitchen extensions, car-porch changes, side-yard works and alterations to existing homes.",
    metaDescription:
      "Plan landed A&A works in Singapore with LIMM Works, from wet-kitchen extensions and car porches to approved scope, drainage and construction sequencing.",
    image: projectImages.landedAa,
    imageAlt: "Completed landed entry glazing and sheltered transition",
    homeownerGuide: {
      title: "Landed A&A Works in Singapore",
      scopeTitle: "Additions and alterations we can review",
      quoteTitle: "What affects an A&A quote",
      enquiryItems: [
        "Approved and existing floor plans",
        "Photos of the proposed extension area",
        "What you want to add, enclose or change",
      ],
      links: [
        { label: "Rear wet-kitchen extension guide", href: "/owners-notes/wet-kitchen-extension-landed-home-singapore" },
        { label: "Existing landed home renovation services", href: "/landed-renovation" },
        { label: "URA A&A criteria for terrace houses", href: uraTerraceAa },
      ],
      updated: "2026-11-18",
    },
    focus: [
      "Rear wet-kitchen extensions and changes where new work meets the existing house.",
      "Car-porch, shelter, side-yard, entry and façade alterations.",
      "Early construction review covering drainage, weather-facing junctions, site access and trade sequencing.",
      "Construction coordination against the agreed scope and professional drawings where required.",
    ],
    uniqueSection: {
      eyebrow: "Scope and approvals",
      title: "How to establish whether the works qualify as A&A",
      body: "Start by comparing the approved house with the proposed footprint, walls, roof and structure. For terrace houses, URA’s A&A criteria cover added floor area, wall replacement and structural changes, among other factors.",
      points: [
        "For rear and side extensions, identify the approved footprint, boundary conditions and where the proposed roof and drains would connect.",
        "Ask a Qualified Person to assess the proposal when professional review is needed. Establish who will prepare drawings, submit applications and coordinate structural input.",
        "Check early whether a proposal falls under reconstruction. URA treats an added storey or a change in landed housing form as reconstruction.",
      ],
    },
    considerations: [
      "Extent of demolition, structural work and the connection between new construction and the existing house.",
      "What is included for drainage, waterproofing, roof junctions, reinstatement and protection.",
      "Access for workers, materials and debris, especially at the rear of an inter-terrace house.",
      "Professional fees, application fees, investigations and other items priced separately from construction.",
    ],
    reviewSteps: [
      "Share approved plans, photos and a sketch of the area you want to change.",
      "Review access, existing conditions and which parts need qualified assessment.",
      "Use the confirmed work scope and required drawings to plan construction and sequence the trades.",
    ],
    faqs: [
      {
        question: "Can I enclose the rear yard to extend my wet kitchen?",
        answer:
          "That depends on the approved footprint, proposed enclosure, setbacks, structure and the relevant planning and building requirements. Gather the approved plans and photos so your project team can assess the proposal before pricing the extension.",
      },
      {
        question: "Who handles the drawings and approvals for landed A&A?",
        answer:
          "Where submissions are needed, the appropriate Qualified Person prepares or coordinates them. Ask who is appointed, which drawings and submissions are included, and which conditions the construction programme needs to allow for.",
      },
      {
        question: "When can LIMM Works price construction?",
        answer:
          "An initial review can identify the items likely to affect cost. Detailed pricing should use measured scope, site conditions and any required drawings, with allowances identified for work that can only be confirmed after investigation.",
      },
    ],
    answers: [
      {
        question: "What is the difference between A&A and reconstruction?",
        answer:
          "A&A is work to an existing landed home that meets the applicable URA criteria. Proposals outside those criteria may be treated as reconstruction. The assessment depends on the whole scope, including floor area, structure and changes to the building form.",
      },
    ],
  },
  {
    slug: "condo-renovation",
    title: "Condo Renovation",
    navTitle: "Condo Renovation",
    path: "/condo-renovation",
    eyebrow: "New and resale condominiums",
    summary:
      "LIMM Works renovates Singapore condos, coordinating hacking, waterproofing, electrical, plumbing, tiling and in-house carpentry around your development’s MCST rules.",
    metaDescription:
      "Condo renovation in Singapore for new and resale units. Plan kitchens, bathrooms, electrical and in-house carpentry around MCST rules with LIMM Works.",
    image: projectImages.condo,
    imageAlt: "Completed condo living room with timber feature wall and flush television",
    homeownerGuide: {
      title: "Condo Renovation Contractor in Singapore",
      scopeTitle: "Renovation for new and resale condos",
      quoteTitle: "What to check in a condo renovation quote",
      enquiryItems: [
        "Floor plan and current unit photos",
        "Condo renovation rules or MCST forms",
        "Key collection date and target move-in",
      ],
      links: [
        { label: "Condo renovation and MCST checklist", href: "/owners-notes/condo-renovation-management-rules-planning" },
        { label: "Wall hacking and approval checks", href: "/owners-notes/wall-hacking-renovation-singapore-checks-approvals" },
        { label: "Bathroom renovation and waterproofing", href: "/bathroom-renovation" },
        { label: "Built-in carpentry and storage", href: "/carpentry-storage" },
      ],
      updated: "2026-11-18",
    },
    focus: [
      "Resale condo renovations covering kitchens, bathrooms, flooring, electrical work and new built-ins.",
      "New condo upgrades such as wardrobes, storage, feature walls and lighting, with a plan for what to keep.",
      "Hacking, electrical, plumbing and tiling coordinated with in-house teams and our carpentry workshop.",
      "Working hours, lift bookings, protection and deliveries planned around your development’s renovation rules.",
    ],
    uniqueSection: {
      eyebrow: "MCST requirements",
      title: "Check management rules before scheduling works",
      body: "Ask your condominium management or MCST for its current renovation forms and by-laws. Confirm what it needs to review, when contractors can work and how materials and debris can move through common areas.",
      points: [
        "Confirm application lead time, documents, deposits, insurance and contractor access requirements with the management office.",
        "Check permitted hacking hours and reserve the service lift where required. Agree protection for corridors, lifts and doorways.",
        "Flag changes to walls, floor slabs, windows, façade or shared services early. Check any required management, professional or authority approvals before proceeding.",
      ],
    },
    considerations: [
      "Room-by-room list of what stays, what is removed and what the contractor supplies and installs.",
      "Hacking and disposal, protection, waterproofing and testing where in scope, plus reinstatement after works.",
      "Tile and fixture allowances, carpentry finishes, hardware and provision for actual appliance dimensions.",
      "How the quote handles MCST deposits and admin fees, and when additional work needs a written variation.",
    ],
    reviewSteps: [
      "Share the plan, photos, key collection date and any MCST documents you already have.",
      "Review the rooms, retained finishes, planned changes and management requirements at the unit.",
      "Plan protection and approvals, schedule hacking and wet works, then measure built-ins against site conditions.",
    ],
    faqs: [
      {
        question: "What should I ask my MCST before renovating my condo?",
        answer:
          "Ask for the current renovation form, permitted hours, restrictions on hacking and wet works, lift booking and protection rules, deposit requirements and any insurance or contractor documents needed. The rules can vary by development.",
      },
      {
        question: "Can I hack or move a wall in a resale condo?",
        answer:
          "The wall needs to be identified from the plans and site condition first. Structural elements and shared services can require management and professional review or authority approval. Confirm the route before any hacking is scheduled.",
      },
      {
        question: "Can LIMM Works do the kitchen, bathrooms and carpentry together?",
        answer:
          "Yes. LIMM Works can coordinate wet works, plumbing, electrical work, tiling and custom carpentry in one programme. The scope review establishes what to retain, where services need to move and when to measure for fabrication.",
      },
    ],
    answers: [
      {
        question: "What affects the timeline for a condo renovation?",
        answer:
          "Scope, available working hours, approval and lift-booking lead times, material availability and carpentry fabrication all affect the schedule. Opened-up conditions in resale units can affect the work once existing finishes are removed.",
      },
    ],
  },
  {
    slug: "hdb-renovation",
    title: "HDB Renovation",
    navTitle: "HDB Renovation",
    path: "/hdb-renovation",
    eyebrow: "HDB interior upgrades",
    summary:
      "Practical HDB renovation support for homeowners planning kitchen, bathroom, carpentry, storage, flooring, painting and general interior upgrades.",
    metaDescription:
      "HDB renovation in Singapore by LIMM Works, covering practical kitchen, bathroom, carpentry, storage, flooring, painting and approval awareness.",
    image: projectImages.hdb,
    imageAlt: "HDB kitchen cabinetry with compact storage planning",
    focus: [
      "Kitchen, bathroom, carpentry, storage, flooring, painting and practical interior upgrades.",
      "Space planning for storage, circulation and day-to-day household use.",
      "Permit or approval awareness where applicable to the work scope.",
      "Clear review of hacking, wet works and fixture changes before commitments.",
      "Practical finishing choices that balance budget, durability and maintenance.",
    ],
    uniqueSection: {
      eyebrow: "HDB requirements",
      title: "Permit awareness belongs at the start of the renovation review.",
      body: "HDB projects can involve straightforward interior upgrades, but hacking, wet works and certain changes still need the correct checks before site commitments are made.",
      points: [
        "Review kitchen, bathroom, storage, flooring and painting scopes against applicable HDB rules.",
        "Flag hacking, wet works and fixture changes for proper permit or approval awareness.",
        "Coordinate lift, corridor, debris movement and neighbour impact around the planned schedule.",
      ],
    },
    considerations: [
      "HDB rules and permit requirements depend on the proposed works.",
      "Hacking and wet area changes should be reviewed carefully before works begin.",
      "Neighbour, lift, corridor and debris movement planning matters.",
      "Built-ins should be confirmed after measurement and site checks.",
    ],
    reviewSteps: planningSteps,
    faqs: [
      {
        question: "Can LIMM review HDB kitchen and bathroom works?",
        answer:
          "Yes. LIMM Works can review HDB kitchen, bathroom and interior scopes with awareness of practical site and approval considerations.",
      },
      {
        question: "Can all HDB walls be hacked?",
        answer:
          "No. Hacking permissions depend on HDB requirements and actual wall or structural conditions. The scope should be checked before commitments are made.",
      },
      {
        question: "What makes HDB renovation planning smoother?",
        answer:
          "Clear floor plans, site photos, appliance choices, storage needs and budget range help shape a more useful project review.",
      },
    ],
    answers: [
      {
        question: "Does LIMM support HDB renovation?",
        answer:
          "Yes. LIMM Works supports practical HDB interior upgrades including kitchen, bathroom, carpentry, storage, flooring and painting.",
      },
      {
        question: "What approval checks may be needed for HDB renovation?",
        answer:
          "Requirements vary by scope. Hacking, wet works and certain changes may require checks or permits before works proceed.",
      },
    ],
  },
  {
    slug: "commercial-renovation",
    title: "Commercial Renovation",
    navTitle: "Commercial Renovation",
    path: "/commercial-renovation",
    eyebrow: "Office, retail and commercial interiors",
    summary:
      "Commercial interior renovation support for offices, retail and practical fit-out scopes where access, storage, display, pantry, timing and reinstatement needs may matter.",
    metaDescription:
      "Commercial renovation in Singapore by LIMM Works, supporting office, retail and commercial interior fit-out planning, storage, display and site coordination.",
    image: projectImages.commercial,
    imageAlt: "Commercial dining fit-out with tables, counters and ceiling services",
    focus: [
      "Office, retail and commercial interior planning with practical fit-out support.",
      "Storage, display shelving, pantry, counters, workstations and built-ins.",
      "Site access, building management rules and working hour coordination.",
      "Timeline planning around business operations, deliveries and handover needs.",
      "Reinstatement or fit-out support where relevant to the tenancy scope.",
    ],
    uniqueSection: {
      eyebrow: "Business continuity",
      title: "Commercial works need access, hours and operations planned together.",
      body: "Office and retail renovation should account for the way the business functions, including handover dates, deliveries, work windows and any landlord or building requirements.",
      points: [
        "Plan access, working hours and noisy works around building rules and business continuity.",
        "Coordinate storage, display, pantry, counters, office built-ins and back-of-house needs together.",
        "Review fit-out and reinstatement obligations where they are part of the tenancy scope.",
      ],
    },
    considerations: [
      "Commercial buildings and landlords may have different fit-out rules.",
      "Access, delivery timing and noisy works can affect sequencing.",
      "Operational continuity and handover expectations should be aligned early.",
      "Reinstatement, safety and compliance needs vary by tenancy and scope.",
    ],
    reviewSteps: planningSteps,
    faqs: [
      {
        question: "Does LIMM support office and retail renovation?",
        answer:
          "Yes. LIMM Works can review practical commercial interior scopes for offices, retail spaces and other business premises.",
      },
      {
        question: "Can built-in storage and display works be included?",
        answer:
          "Yes. Built-ins, counters, display, pantry and storage works can be coordinated as part of a broader commercial scope.",
      },
      {
        question: "What should businesses prepare?",
        answer:
          "Share floor plans, tenancy rules, business operating needs, handover dates, photos and rough scope for a more useful review.",
      },
    ],
    answers: [
      {
        question: "What does commercial renovation include?",
        answer:
          "It can include office, retail and commercial interior fit-out works such as storage, display, pantry, counters, partitions, finishes and coordination.",
      },
      {
        question: "What affects commercial renovation timelines?",
        answer:
          "Management rules, access, business operating needs, material lead time, approvals and handover requirements can affect timelines.",
      },
    ],
  },
  {
    slug: "kitchen-renovation",
    title: "Kitchen Renovation",
    navTitle: "Kitchen Renovation",
    path: "/kitchen-renovation",
    eyebrow: "Dry and wet kitchen planning",
    summary:
      "Kitchen renovation planning for storage, workflow, appliances, service access, ventilation, countertops, cabinets and coordination across trades.",
    metaDescription:
      "Kitchen renovation in Singapore by LIMM Works, covering dry and wet kitchen planning, storage, appliances, countertops, ventilation and coordination.",
    image: projectImages.kitchen,
    imageAlt: "Kitchen renovation with light wood cabinets and island counter",
    focus: [
      "Dry and wet kitchen planning based on cooking habits and household routines.",
      "Cabinet storage, appliance zones, countertop material and worktop height review.",
      "Sink, hob, hood, service access, ventilation and cleaning considerations.",
      "Electrical, plumbing, carpentry and countertop coordination.",
      "Measurement, fabrication and installation details before cabinets are produced.",
    ],
    uniqueSection: {
      eyebrow: "Kitchen workflow",
      title: "Dry and wet kitchen decisions should follow real cooking habits.",
      body: "A practical kitchen review links movement, appliance sizes, service points and storage so the finished kitchen works beyond the first impression.",
      points: [
        "Map dry and wet kitchen workflow around prep, cooking, cleaning and serving routines.",
        "Confirm appliance, sink, hob, hood and ventilation requirements before carpentry is fixed.",
        "Keep storage, countertop planning and service access visible during layout decisions.",
      ],
    },
    considerations: [
      "Appliance dimensions should be confirmed before carpentry fabrication.",
      "Wet works, service access and ventilation can affect layout decisions.",
      "Countertop and cabinet choices affect durability and maintenance.",
      "Storage should be planned around real cooking and cleaning habits.",
    ],
    reviewSteps: planningSteps,
    faqs: [
      {
        question: "What should I prepare for kitchen renovation?",
        answer:
          "Prepare a floor plan, photos, appliance list, cooking habits, storage issues and any must-keep items.",
      },
      {
        question: "Can LIMM plan dry and wet kitchens?",
        answer:
          "Yes. Dry and wet kitchen requirements can be reviewed with storage, ventilation, appliance and workflow needs in mind.",
      },
      {
        question: "When should appliances be confirmed?",
        answer:
          "Appliance dimensions should be confirmed before carpentry fabrication and countertop coordination.",
      },
    ],
    answers: [
      {
        question: "What affects kitchen renovation planning?",
        answer:
          "Storage needs, workflow, appliance dimensions, countertop choice, plumbing, ventilation and site access affect kitchen planning.",
      },
      {
        question: "Does LIMM do kitchen renovation in Singapore?",
        answer:
          "Yes. LIMM Works supports kitchen renovation planning, coordination and execution for residential and selected commercial spaces.",
      },
    ],
  },
  {
    slug: "bathroom-renovation",
    title: "Bathroom Renovation",
    navTitle: "Bathroom Renovation",
    path: "/bathroom-renovation",
    eyebrow: "Waterproofing-aware bathroom works",
    summary:
      "Bathroom renovation planning with attention to waterproofing, drainage, ventilation, sanitary fittings, site protection and practical layout decisions.",
    metaDescription:
      "Bathroom renovation in Singapore by LIMM Works, covering waterproofing awareness, drainage, sanitary fittings, ventilation, layout and coordination.",
    image: projectImages.bathroom,
    imageAlt: "Bathroom vanity, shower screen and sanitary fitting details",
    focus: [
      "Waterproofing awareness, drainage review and wet area coordination.",
      "Sanitary fittings, mixers, vanity, storage and ventilation planning.",
      "Practical layouts for daily use, cleaning and maintenance.",
      "Site protection, debris movement and sequencing for wet works.",
      "Coordination between tiling, plumbing, electrical and carpentry items.",
    ],
    uniqueSection: {
      eyebrow: "Wet area sequencing",
      title: "Waterproofing, drainage and maintenance access come before finishes.",
      body: "Bathroom renovation quality depends heavily on what is planned beneath and behind the visible surfaces, especially in wet areas.",
      points: [
        "Review waterproofing, drainage falls, ventilation and wet area sequencing before tile choices dominate.",
        "Coordinate sanitary fittings, mixers, vanity dimensions and maintenance access early.",
        "Plan plumbing, tiling, electrical and carpentry order so the wet area can be handed over cleanly.",
      ],
    },
    considerations: [
      "Waterproofing and drainage details should be reviewed before finishes are selected.",
      "Fitting dimensions, access panels and maintenance access matter.",
      "Wet works may require management or approval checks depending on property type.",
      "Ventilation, lighting and storage should be planned together.",
    ],
    reviewSteps: planningSteps,
    faqs: [
      {
        question: "Why is waterproofing important?",
        answer:
          "Bathroom wet areas need proper waterproofing awareness because leaks can create damage beyond the visible finish.",
      },
      {
        question: "Can bathroom layout be changed?",
        answer:
          "Some layout changes may be possible, but drainage, structure, property rules and approval needs should be reviewed before commitments.",
      },
      {
        question: "What should be confirmed before works?",
        answer:
          "Confirm sanitary fittings, tile direction, vanity dimensions, storage needs, lighting and ventilation requirements.",
      },
    ],
    answers: [
      {
        question: "What affects bathroom renovation scope?",
        answer:
          "Waterproofing, drainage, sanitary fitting locations, ventilation, tile selection, site protection and property rules affect scope.",
      },
      {
        question: "Does LIMM support bathroom renovation?",
        answer:
          "Yes. LIMM Works supports bathroom renovation planning and coordination with practical attention to wet area details.",
      },
    ],
  },
  {
    slug: "carpentry-storage",
    title: "Carpentry & Storage",
    navTitle: "Carpentry & Storage",
    path: "/carpentry-storage",
    eyebrow: "Built-ins for practical storage",
    summary:
      "Carpentry and storage works for kitchen cabinets, wardrobes, TV consoles, shoe cabinets, storage cabinets, commercial cabinets and measured built-ins.",
    metaDescription:
      "Carpentry works in Singapore by LIMM Works, covering kitchen cabinets, wardrobes, TV consoles, shoe cabinets, storage cabinets and commercial built-ins.",
    image: projectImages.carpentry,
    imageAlt: "Carpentry and storage work with built-in wardrobe run",
    focus: [
      "Kitchen cabinets, wardrobes, TV consoles, shoe cabinets and storage cabinets.",
      "Commercial cabinets, counters, display and practical back-of-house storage.",
      "Measurement, layout confirmation, material selection and fabrication coordination.",
      "Hardware, cabinet compartments, access and daily-use planning.",
      "Installation details and final checks before handover.",
    ],
    uniqueSection: {
      eyebrow: "Measured built-ins",
      title: "Good carpentry starts with usage, dimensions and hardware choices.",
      body: "Built-ins should be planned around what the owner needs to store, how often items are accessed and what surrounding services or appliances need clearance.",
      points: [
        "Confirm measurements, inside layout, hardware and daily usage before fabrication.",
        "Plan kitchen cabinets, wardrobes, TV consoles, shoe cabinets and storage cabinets around actual contents.",
        "Coordinate switches, sockets, access panels, appliances and wall conditions before drawings are signed off.",
      ],
    },
    considerations: [
      "Final measurements should be taken after relevant site works are ready.",
      "Appliances, switches, sockets and access panels should be coordinated early.",
      "Storage planning inside the cabinets matters as much as the exterior finish.",
      "Fabrication should proceed only after drawings and key details are confirmed.",
    ],
    reviewSteps: planningSteps,
    faqs: [
      {
        question: "What carpentry does LIMM support?",
        answer:
          "LIMM Works supports kitchen cabinets, wardrobes, TV consoles, shoe cabinets, storage cabinets and selected commercial built-ins.",
      },
      {
        question: "When are measurements taken?",
        answer:
          "Measurements should be confirmed when site conditions are ready enough for accurate fabrication details.",
      },
      {
        question: "What should be confirmed before fabrication?",
        answer:
          "Confirm dimensions, materials, hardware, inside layout, appliance clearances, sockets, access panels and finish details.",
      },
    ],
    answers: [
      {
        question: "What are carpentry and storage works?",
        answer:
          "They are measured built-in works such as cabinets, wardrobes, consoles, shoe storage, kitchen carpentry and commercial storage.",
      },
      {
        question: "Does LIMM handle residential and commercial carpentry?",
        answer:
          "Yes. LIMM Works can review residential and selected commercial carpentry scopes as part of renovation planning and execution.",
      },
    ],
  },
];

export const serviceNav = services.map((service) => ({
  label: service.navTitle,
  href: service.path,
}));

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
