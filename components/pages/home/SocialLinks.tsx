import IconWhatsapp from "@/components/icons/IconWhatsapp";
import { SectionTitle } from "@/components/SectionTitle";
import { links } from "@/data/links";
import {
  ExternalLinkIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";

const socialLinks = [
  {
    label: "LinkedIn",
    icon: LinkedinIcon,
    href: links.social.linkedin,
    color: "text-[#0a66c2]",
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: links.social.github,
    color: "text-[#181717]",
  },
  {
    label: "Whatsapp",
    icon: IconWhatsapp,
    href: links.social.whatsapp,
    color: "text-[#25D366]",
  },
  {
    label: "instagram",
    icon: InstagramIcon,
    href: links.social.instagram,
    color: "text-[#E4405F]",
  },
];

export function HomeSocials() {
  return (
    <section>
      <SectionTitle
        heading="Find me on"
        text="You can find me on the following social platforms:"
      />

      <ul className="flex flex-wrap items-center gap-2.5">
        {socialLinks.map((link) => (
          <li className="group" key={link.label}>
            <a
              className="inline-flex items-center gap-2 px-2.5 h-6 bg-zinc-100 rounded-full outline-none font-medium text-xs text-secondary transition-all hover:bg-zinc-200/75 focus:ring-3 focus:ring-zinc-200"
              href={link.href}
              target="_blank"
            >
              <link.icon
                className={`shrink-0 size-4 group-first:size-3.5 ${link.color}`}
              />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
