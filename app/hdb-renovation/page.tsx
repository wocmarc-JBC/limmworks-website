import { ServicePage } from "../components/service-page";
import { createServiceMetadata } from "../lib/metadata";
import { services } from "../lib/site";

const data = services["hdb-renovation"];

export const metadata = createServiceMetadata(data);

export default function HdbRenovationPage() { return <ServicePage data={data} />; }
