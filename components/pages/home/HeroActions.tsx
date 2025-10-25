"use client";

import { useHotkeys } from "react-hotkeys-hook";
import { BaseButton } from "@/components/ui/BaseButton";
import { links } from "@/data/links";
import IconWhatsapp from "@/components/icons/IconWhatsapp";

export function HomeHeroActions() {
  useHotkeys("d", () => {
    window.open(links.social.whatsapp, "_blank");
  });

  useHotkeys("e", () => {
    const a = document.createElement("a");
    a.href = `mailto:${links.email}`;
    a.style.display = "none";

    document.body.appendChild(a);

    a.click();
    a.remove();
  });

  return (
    <div className="md:flex items-start gap-4">
      <BaseButton
        className="min-w-33 mb-4 md:mb-0"
        hotkey="D"
        variant="primary"
        asChild
      >
        <a href={links.social.whatsapp} target="_blank">
          Quick DM via <IconWhatsapp />
        </a>
      </BaseButton>

      <BaseButton hotkey="E" variant="secondary" asChild>
        <a href={`mailto:${links.email}`}>Send an email</a>
      </BaseButton>
    </div>
  );
}
