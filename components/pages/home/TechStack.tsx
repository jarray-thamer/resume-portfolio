import { SectionTitle } from "@/components/SectionTitle";
import { LogoBetterAuth } from "@/components/icons/tech/IconBetterAuth";
import { LogoExpress } from "@/components/icons/tech/IconExpress";
import { LogoFigma } from "@/components/icons/tech/IconFigma";
import { LogoGit } from "@/components/icons/tech/IconGit";
import { LogoGitHub } from "@/components/icons/tech/IconGitHub";
import { LogoJavascript } from "@/components/icons/tech/IconJavascript";
import { LogoMongoDb } from "@/components/icons/tech/IconMongoDb";
import { LogoNextjs } from "@/components/icons/tech/IconNextJs";
import { LogoNode } from "@/components/icons/tech/IconNode";
import { LogoPostgres } from "@/components/icons/tech/IconPostgres";
import { LogoPostman } from "@/components/icons/tech/IconPostman";
import { LogoPrisma } from "@/components/icons/tech/IconPrisma";
import IconReact from "@/components/icons/tech/IconReact";
import { LogoShadcnUi } from "@/components/icons/tech/IconShadcn";
import { LogoTailwind } from "@/components/icons/tech/IconTailwind";
import { LogoTypescript } from "@/components/icons/tech/IconTypescript";
const techStack = [
  {
    label: "React",
    icon: IconReact,
  },
  {
    label: "Next.js",
    icon: LogoNextjs,
  },
  {
    label: "TypeScript",
    icon: LogoTypescript,
  },
  {
    label: "JavaScript",
    icon: LogoJavascript,
  },
  {
    label: "MongoDB",
    icon: LogoMongoDb,
  },
  {
    label: "Tailwind",
    icon: LogoTailwind,
  },
  {
    label: "Better Auth",
    icon: LogoBetterAuth,
  },
  {
    label: "Git",
    icon: LogoGit,
  },
  {
    label: "Github",
    icon: LogoGitHub,
  },
  {
    label: "Node",
    icon: LogoNode,
  },
  {
    label: "Postgres",
    icon: LogoPostgres,
  },
  {
    label: "Prisma",
    icon: LogoPrisma,
  },
  {
    label: "Express",
    icon: LogoExpress,
  },
  {
    label: "Postman",
    icon: LogoPostman,
  },
  {
    label: "shadcn/ui",
    icon: LogoShadcnUi,
  },
  {
    label: "Figma",
    icon: LogoFigma,
  },
];

export function HomeTechStack() {
  return (
    <section>
      <SectionTitle
        heading="Tech stack"
        text="The tech stack I am comfortable with."
      />

      <ul className="flex flex-wrap items-center gap-2.5">
        {techStack.map((item) => (
          <li
            className="inline-flex items-center gap-2 px-2.5 h-6 bg-zinc-100 rounded-full outline-none font-[450] text-xs text-secondary"
            key={item.label}
          >
            <item.icon className="shrink-0 size-3.5" />
            {item.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
