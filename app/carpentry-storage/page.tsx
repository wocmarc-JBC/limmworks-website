import { ServicePage } from "../components/service-page";
import { createServiceMetadata } from "../lib/metadata";
import { services } from "../lib/site";

const data = services["carpentry-storage"];

export const metadata = createServiceMetadata(data);

export default function CarpentryStoragePage() { return <ServicePage data={data} />; }
