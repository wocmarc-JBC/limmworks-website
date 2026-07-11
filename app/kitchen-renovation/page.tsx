import { ServicePage } from "../components/service-page";
import { createServiceMetadata } from "../lib/metadata";
import { services } from "../lib/site";

const data = services["kitchen-renovation"];

export const metadata = createServiceMetadata(data);

export default function KitchenRenovationPage() { return <ServicePage data={data} />; }
