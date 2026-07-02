import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { getWhatsappHref } from "@/data/site";

export function StickyWhatsapp() {
  return (
    <div className="fixed bottom-4 right-4 z-40">
      <ButtonLink
        className="shadow-xl"
        href={getWhatsappHref()}
        icon={<MessageCircle aria-hidden="true" size={18} />}
        variant="dark"
      >
        WhatsApp LIMM Works
      </ButtonLink>
    </div>
  );
}
