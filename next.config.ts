import type { NextConfig } from "next";

const legacyPostRedirects = [
  {
    source: "/post/carpentry-paint-materials-singapore-plywood-laminate-hardware-glue",
    destination: "https://www.limmworks.com/owners-notes/carpentry-storage-before-fabrication",
  },
  {
    source: "/post/commercial-renovation-singapore-what-to-plan-before-fit-out",
    destination: "https://www.limmworks.com/owners-notes/commercial-renovation-access-handover-reinstatement",
  },
  {
    source: "/post/condo-kitchen-renovation-singapore-layout-appliances-storage",
    destination: "https://www.limmworks.com/owners-notes/kitchen-renovation-storage-workflow-details",
  },
  {
    source: "/post/condo-renovation-singapore-what-to-check-before-works-start",
    destination: "https://www.limmworks.com/owners-notes/condo-renovation-management-rules-planning",
  },
  {
    source: "/post/discover-the-expertise-of-limm-works-renovations",
    destination: "https://www.limmworks.com/about",
  },
  {
    source: "/post/flooring-materials-singapore-renovation-tiles-vinyl-marble-wood",
    destination: "https://www.limmworks.com/owners-notes/renovation-material-selection-guide",
  },
  {
    source: "/post/home-renovation-timeline-singapore",
    destination: "https://www.limmworks.com/owners-notes/renovation-timeline-sequencing-lead-times",
  },
  {
    source: "/post/id-firm-vs-renovation-contractor-singapore",
    destination: "https://www.limmworks.com/about",
  },
  {
    source: "/post/kitchen-countertops-singapore-quartz-solid-surface-sintered-stone",
    destination: "https://www.limmworks.com/owners-notes/renovation-material-selection-guide",
  },
  {
    source: "/post/landed-renovation-vs-a-a-works-what-homeowners-should-know",
    destination: "https://www.limmworks.com/owners-notes/landed-renovation-vs-aa-works-difference",
  },
  {
    source: "/post/luxury-renovation-ideas-for-landed-properties-elevate-your-space-with-luxury-property-upgrades",
    destination: "https://www.limmworks.com/landed-renovation",
  },
  {
    source: "/post/renovation-material-selection-guide-singapore",
    destination: "https://www.limmworks.com/owners-notes/renovation-material-selection-guide",
  },
  {
    source: "/post/ultimate-landed-house-renovation-checklist-for-homeowners-in-singapore",
    destination: "https://www.limmworks.com/landed-renovation",
  },
  {
    source: "/post/wet-kitchen-extension-landed-homes-singapore",
    destination: "https://www.limmworks.com/landed-aa-works",
  },
  {
    source: "/post/what-is-a-a-works-for-landed-homes-in-singapore",
    destination: "https://www.limmworks.com/landed-aa-works",
  },
  {
    source: "/post/what-to-prepare-before-renovation-quote-singapore",
    destination: "https://www.limmworks.com/owners-notes/prepare-before-starting-renovation",
  },
  {
    source: "/post/why-in-house-carpentry-trade-teams-matter-renovation",
    destination: "https://www.limmworks.com/carpentry-storage",
  },
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...legacyPostRedirects.map((redirect) => ({ ...redirect, permanent: true })),
      {
        source: "/:path*",
        has: [{ type: "host", value: "limmworks.com" }],
        destination: "https://www.limmworks.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
