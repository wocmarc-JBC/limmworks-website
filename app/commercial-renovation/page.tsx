import { ServicePage } from "../components/service-page";
import { createServiceMetadata } from "../lib/metadata";
import { services } from "../lib/site";
const data = services["commercial-renovation"];
export const metadata = createServiceMetadata(data);
export default function Page() { return <ServicePage data={data} />; }
