import type { Metadata } from "next";
import { ServicePage } from "../components/service-page";
import { services } from "../lib/site";

const data = services["bathroom-renovation"];

export const metadata: Metadata = {
  title: data.metaTitle.replace(" | LIMM Works", ""),
  description: data.metaDescription,
  alternates: { canonical: `/${data.slug}` },
  openGraph: { title: data.metaTitle, description: data.metaDescription, images: [{ url: data.image }] },
};

export default function BathroomRenovationPage() { return <ServicePage data={data} />; }
