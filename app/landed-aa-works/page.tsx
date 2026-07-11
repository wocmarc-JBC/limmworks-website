import { ServicePage } from "../components/service-page";
import { createServiceMetadata } from "../lib/metadata";
import { services } from "../lib/site";
const data = services["landed-aa-works"];
export const metadata = createServiceMetadata(data);
export default function Page() { return <ServicePage data={data} />; }
