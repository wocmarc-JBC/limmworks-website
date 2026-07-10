import type { Metadata } from "next";
import { ServicePage } from "../components/service-page";
import { services } from "../lib/site";
const data = services["landed-aa-works"];
export const metadata: Metadata = { title: data.metaTitle.replace(" | LIMM Works", ""), description: data.metaDescription, alternates: { canonical: `/${data.slug}` } };
export default function Page() { return <ServicePage data={data} />; }
