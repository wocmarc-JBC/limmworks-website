import { ServicePage } from "../components/service-page";
import { createServiceMetadata } from "../lib/metadata";
import { services } from "../lib/site";

const data = services["bathroom-renovation"];

export const metadata = createServiceMetadata(data);

export default function BathroomRenovationPage() { return <ServicePage data={data} />; }
