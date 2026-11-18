import type { Metadata } from "next";
import Link from "next/link";
import { ServicePage } from "@/components/service-page";
import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getService("landed-aa-works")!;

export const metadata: Metadata = buildMetadata({
  title: service.title,
  description: service.metaDescription,
  path: service.path,
  image: service.image,
});

export default function LandedAaWorksPage() {
  return (
    <ServicePage service={service}>
      <Link className="underline" href="/owners-notes/wet-kitchen-extension-landed-home-singapore">
        Read the rear wet kitchen extension guide
      </Link>
    </ServicePage>
  );
}
