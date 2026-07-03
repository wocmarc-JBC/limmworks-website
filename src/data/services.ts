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
};

const planningSteps = [
  "Send the floor plan, site photos, property type and rough scope.",
  "Review site condition, usage needs, access constraints and likely coordination items.",
  "Clarify scope, practical sequencing, management rules or approval checks where applicable.",
  "Align on next steps before detailed costing, fabrication or site works proceed.",
];

const landedNotice =
  "Landed renovation and A&A works may require checks depending on site condition, existing structure, property type and relevant approval requirements. Necessary professional review or submission should be completed before works proceed where applicable.";

export const services: Service[] = [
  {
    slug: "landed-renovation",
    title: "Landed Renovation",
    navTitle: "Landed Renovation",
    path: "/landed-renovation",
    eyebrow: "Landed home renovation planning",
    summary:
      "Practical renovation planning for old landed homes, inter-terrace houses, semi-detached homes and larger family properties where structure, water, roofline and site access matter.",
    metaDescription:
      "LIMM Works plans landed renovation in Singapore with practical scope review for layout, kitchens, bathrooms, facade, drainage, waterproofing and site coordination.",
    image: projectImages.landed,
    imageAlt: "Landed home renovation scene with refreshed facade and car porch",
    focus: [
      "Old landed homes, inter-terrace, semi-detached and landed family houses.",
      "Layout improvement, bathroom and kitchen reconfiguration and better daily flow.",
      "Wet kitchen extension, backyard, side-yard, car porch and shelter considerations.",
      "Facade refresh, roofline, drainage and waterproofing awareness.",
      "Practical planning before works start so scope, site access and sequencing are clearer.",
    ],
    uniqueSection: {
      eyebrow: "Older landed homes",
      title: "Layout upgrades need drainage, roofline and water details in view.",
      body: "For older landed properties, the useful renovation conversation starts before finishes. Existing site falls, roof junctions, wet areas and daily flow should be reviewed together.",
      points: [
        "Check visible drainage paths, roofline junctions and waterproofing-sensitive areas early.",
        "Review layout improvement around family routines, light, ventilation and movement through the home.",
        "Plan wet kitchen, backyard, car porch and side-yard needs with access and sequencing in mind.",
      ],
    },
    considerations: [
      "Existing structure and site condition can affect feasibility and sequencing.",
      "Drainage, waterproofing and roofline details should be reviewed early.",
      "Access, neighbours, protection and material movement need practical coordination.",
      "Approval or professional review may be needed depending on the scope.",
    ],
    reviewSteps: planningSteps,
    safeNotice: landedNotice,
    faqs: [
      {
        question: "Can LIMM Works review older landed homes?",
        answer:
          "Yes. The initial project review can look at age, layout, visible site condition, intended scope and likely checks before a clearer renovation plan is prepared.",
      },
      {
        question: "Can landed renovation include kitchen or bathroom changes?",
        answer:
          "Yes. Kitchens, bathrooms, storage and layout changes can be reviewed together, subject to site condition, structure, waterproofing and approval needs where applicable.",
      },
      {
        question: "Can feasibility be confirmed from photos alone?",
        answer:
          "Photos and floor plans help with early discussion, but feasibility depends on the actual site, existing structure and any required professional or authority checks.",
      },
    ],
    answers: [
      {
        question: "What is landed renovation?",
        answer:
          "Landed renovation covers interior and exterior improvement works for landed homes, including layout, kitchens, bathrooms, facade, drainage, waterproofing and site coordination.",
      },
      {
        question: "What affects landed renovation scope and timeline?",
        answer:
          "Existing structure, site access, waterproofing, roofline, drainage, material lead time and approval requirements can all affect scope and timing.",
      },
    ],
  },
  {
    slug: "landed-aa-works",
    title: "Landed A&A Works",
    navTitle: "Landed A&A Works",
    path: "/landed-aa-works",
    eyebrow: "Additions and alterations",
    summary:
      "A practical review path for additions and alterations such as small extensions, car porch changes, rear kitchen works, side-yard upgrades and facade changes.",
    metaDescription:
      "LIMM Works supports landed A&A works in Singapore with practical scope review for extensions, car porch, wet kitchen, facade, drainage and approval awareness.",
    image: projectImages.landedAa,
    imageAlt: "Landed A&A renovation scene with car porch and facade works",
    focus: [
      "Additions and alterations for landed homes where existing structure and authority requirements matter.",
      "Small extensions, wet kitchen or rear extension planning and side-yard works.",
      "Car porch, balcony, shelter and facade change considerations.",
      "Drainage, waterproofing and roofline awareness before works proceed.",
      "Practical scope review before design, submission or site execution decisions.",
    ],
    uniqueSection: {
      eyebrow: "Additions and alterations",
      title: "Small extensions still need careful review before works move ahead.",
      body: "A&A planning often touches the existing building in ways that are more involved than a simple interior refresh, especially around car porch, side-yard and rear works.",
      points: [
        "Review small extensions, rear kitchen works, side-yard upgrades and car porch changes as connected scopes.",
        "Surface drainage, waterproofing, roofline and structural considerations before committing to details.",
        "Allow for professional review or submission where the property and proposed works require it.",
      ],
    },
    considerations: [
      "A&A feasibility cannot be confirmed without proper review.",
      "Professional input or submissions may be needed depending on scope.",
      "Structural, waterproofing and drainage implications should be surfaced early.",
      "Neighbours, site access and construction sequencing need careful coordination.",
    ],
    reviewSteps: planningSteps,
    safeNotice: landedNotice,
    faqs: [
      {
        question: "Does LIMM handle landed A&A works?",
        answer:
          "LIMM Works can help review and coordinate practical landed A&A scopes, while required professional checks or submissions should be completed where applicable.",
      },
      {
        question: "Is approval guaranteed for A&A works?",
        answer:
          "No. Approval depends on property details, proposed works and relevant requirements. Any needed review or submission should happen before works proceed.",
      },
      {
        question: "What should owners prepare for an A&A review?",
        answer:
          "Share the floor plan, site photos, desired changes, known defects and any previous plans or approvals so the review can start with better context.",
      },
    ],
    answers: [
      {
        question: "What is the difference between landed renovation and A&A?",
        answer:
          "Landed renovation may focus on interior and repair works, while A&A usually involves additions or alterations to the existing property that may require deeper checks.",
      },
      {
        question: "What approval or management checks may be needed?",
        answer:
          "Checks vary by property and scope. Structural changes, extensions, drainage, facade works and other items may require professional review or authority submission.",
      },
    ],
  },
  {
    slug: "condo-renovation",
    title: "Condo Renovation",
    navTitle: "Condo Renovation",
    path: "/condo-renovation",
    eyebrow: "Condo interior works",
    summary:
      "Condo renovation planning with attention to management rules, working hours, protection, access and coordination across kitchen, bathroom, flooring, electrical and carpentry works.",
    metaDescription:
      "Condo renovation in Singapore by LIMM Works, with practical planning for management rules, lift protection, floor protection, kitchen, bathroom and carpentry works.",
    image: projectImages.condo,
    imageAlt: "Condo renovation scene with storage and warm modern interior",
    focus: [
      "Management rules, working hours, deposits, insurance and access planning where applicable.",
      "Lift, corridor and floor protection before materials and works move through the site.",
      "Kitchen, bathroom, carpentry, flooring, electrical and painting coordination.",
      "Practical interior upgrades for everyday living, storage and maintainability.",
      "Clear scope alignment before fabrication or wet works begin.",
    ],
    uniqueSection: {
      eyebrow: "Condo coordination",
      title: "Management rules and common-area protection shape the programme.",
      body: "Condo renovation is not just about the unit interior. Lift booking, protection requirements, working hours and paperwork can affect how smoothly site works proceed.",
      points: [
        "Review management renovation rules, permitted working hours and submission requirements.",
        "Plan lift, corridor, floor and common-area protection before deliveries and debris movement.",
        "Check deposit, insurance and access requirements where the condominium applies them.",
      ],
    },
    considerations: [
      "Each condominium may have different renovation rules and submission requirements.",
      "Protection, debris movement and delivery timing should be planned before site works.",
      "Hacking, wet works and noisy works may need additional management checks.",
      "Material and fixture lead times can affect scheduling.",
    ],
    reviewSteps: planningSteps,
    faqs: [
      {
        question: "What should condo owners send first?",
        answer:
          "Send the floor plan, management renovation guide if available, site photos, intended scope and preferred timing for an initial project review.",
      },
      {
        question: "Can condo renovation include carpentry and bathrooms?",
        answer:
          "Yes. Carpentry, kitchen, bathroom, flooring, electrical and painting scopes can be reviewed together for better sequencing.",
      },
      {
        question: "Do all condos have the same rules?",
        answer:
          "No. Management rules, working hours, protection, deposits and paperwork vary by condominium.",
      },
    ],
    answers: [
      {
        question: "What affects condo renovation planning?",
        answer:
          "Management rules, lift access, working hours, protection requirements, wet works, deliveries and material lead times affect planning.",
      },
      {
        question: "Does LIMM support condo renovation in Singapore?",
        answer:
          "Yes. LIMM Works supports condo interior renovation with practical planning, coordination and execution for residential units.",
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
    imageAlt: "HDB renovation scene with compact storage and neutral finishes",
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
    imageAlt: "Commercial renovation scene with practical office and retail interior",
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
    imageAlt: "Kitchen renovation scene with warm cabinetry and countertop planning",
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
    imageAlt: "Bathroom renovation planning scene with tile and sanitary fitting details",
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
    imageAlt: "Carpentry and storage scene with built-in wardrobes and cabinets",
    focus: [
      "Kitchen cabinets, wardrobes, TV consoles, shoe cabinets and storage cabinets.",
      "Commercial cabinets, counters, display and practical back-of-house storage.",
      "Measurement, layout confirmation, material selection and fabrication coordination.",
      "Hardware, internal compartments, access and daily-use planning.",
      "Installation details and final checks before handover.",
    ],
    uniqueSection: {
      eyebrow: "Measured built-ins",
      title: "Good carpentry starts with usage, dimensions and hardware choices.",
      body: "Built-ins should be planned around what the owner needs to store, how often items are accessed and what surrounding services or appliances need clearance.",
      points: [
        "Confirm measurements, internal layout, hardware and daily usage before fabrication.",
        "Plan kitchen cabinets, wardrobes, TV consoles, shoe cabinets and storage cabinets around actual contents.",
        "Coordinate switches, sockets, access panels, appliances and wall conditions before drawings are signed off.",
      ],
    },
    considerations: [
      "Final measurements should be taken after relevant site works are ready.",
      "Appliances, switches, sockets and access panels should be coordinated early.",
      "Internal storage planning matters as much as exterior cabinet finish.",
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
          "Confirm dimensions, materials, hardware, internal layout, appliance clearances, sockets, access panels and finish details.",
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
