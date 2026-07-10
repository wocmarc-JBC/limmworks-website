import { notFound, permanentRedirect } from "next/navigation";
import { services } from "../../lib/site";

export function generateStaticParams() { return Object.keys(services).map((slug) => ({ slug })); }

export default async function LegacyServiceRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!services[slug]) notFound();
  permanentRedirect(`/${slug}`);
}
