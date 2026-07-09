import { MessageCircle, Send } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { getWhatsappHref } from "@/data/site";

export function CtaBand({
  title = "Start with an initial project review.",
  body = "Send the floor plan, site photos, property type, rough scope, budget range and preferred timeline so the review can start with practical context.",
  serviceSlug,
}: {
  title?: string;
  body?: string;
  serviceSlug?: string;
}) {
  return (
    <section className="border-y border-white/10 bg-[var(--limm-olive)] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight">{title}</h2>
          <p className="mt-3 text-sm leading-6 text-white/78 md:text-base">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink
            href={getWhatsappHref()}
            icon={<MessageCircle aria-hidden="true" size={18} />}
            trackingEvent="whatsapp_click"
            trackingLabel="WhatsApp LIMM Works"
            trackingLocation="cta_band"
            trackingServiceSlug={serviceSlug}
            variant="primary"
          >
            WhatsApp LIMM Works
          </ButtonLink>
          <ButtonLink
            href="/contact"
            icon={<Send aria-hidden="true" size={18} />}
            trackingEvent="send_floor_plan_cta_click"
            trackingLabel="Send Floor Plan and Site Photos"
            trackingLocation="cta_band"
            trackingServiceSlug={serviceSlug}
            variant="ghost"
          >
            Send Floor Plan and Site Photos
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
