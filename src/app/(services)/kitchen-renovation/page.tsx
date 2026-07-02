import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getService("kitchen-renovation")!;

export const metadata: Metadata = buildMetadata({
  title: service.title,
  description: service.metaDescription,
  path: service.path,
  image: service.image,
});

export default function KitchenRenovationPage() {
  return <ServicePage service={service} />;
}
