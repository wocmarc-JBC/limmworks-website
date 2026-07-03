import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { getWhatsappHref } from "@/data/site";

export function StickyWhatsapp() {
  return (
    <>
      <div className="fixed bottom-4 right-4 z-40 hidden md:block">
        <ButtonLink
          className="shadow-xl"
          href={getWhatsappHref()}
          icon={<MessageCircle aria-hidden="true" size={18} />}
          variant="dark"
        >
          WhatsApp LIMM Works
        </ButtonLink>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--limm-line)] bg-[rgba(248,242,232,0.96)] px-4 py-3 shadow-[0_-8px_24px_rgba(17,24,39,0.12)] backdrop-blur md:hidden">
        <ButtonLink
          className="w-full shadow-lg"
          href={getWhatsappHref()}
          icon={<MessageCircle aria-hidden="true" size={18} />}
          variant="dark"
        >
          WhatsApp LIMM Works
        </ButtonLink>
      </div>
    </>
  );
}
