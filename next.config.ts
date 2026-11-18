import type { NextConfig } from "next";

const legacyRoutes = [
  ["/portfolio", "/projects"],
  ["/blog", "/owners-notes"],
  ["/post/wet-kitchen-extension-landed-homes-singapore", "/owners-notes/wet-kitchen-extension-landed-home-singapore"],
  ["/our-designers", "/about"],
  ["/landed-a-a", "/landed-aa-works"],
  ["/post/what-is-a-a-works-for-landed-homes-in-singapore", "/landed-aa-works"],
  ["/post/why-in-house-carpentry-trade-teams-matter-renovation", "/carpentry-storage"],
  ["/post/landed-renovation-vs-a-a-works-what-homeowners-should-know", "/owners-notes/landed-renovation-vs-aa-works-difference"],
  ["/post/what-to-prepare-before-renovation-quote-singapore", "/owners-notes/prepare-before-starting-renovation"],
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRoutes.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
