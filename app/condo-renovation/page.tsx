import type { Metadata } from "next";
import { ServicePage } from "../components/service-page";
import { services } from "../lib/site";
const data = services["condo-renovation"];
export const metadata: Metadata = { title: data.metaTitle.replace(" | LIMM Works", ""), description: data.metaDescription, alternates: { canonical: `/${data.slug}` } };
export default function Page() { return <ServicePage data={data} />; }
