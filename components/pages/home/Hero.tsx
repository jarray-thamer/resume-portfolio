import IconFlagTunis from "@/components/icons/IconFlagTunis";
import IconReact from "@/components/icons/tech/IconReact";
import Image from "next/image";
import { HomeHeroActions } from "./HeroActions";
import { LogoNextjs } from "@/components/icons/tech/IconNextJs";

const Hero = () => {
  return (
    <section>
      <div className="mb-4 w-32 h-32 rounded-full overflow-hidden inline-block">
        <Image
          src="/me2.png"
          width={1440}
          height={1880}
          draggable={false}
          alt="Jarray Thamer"
          className="object-cover w-full h-full scale-[120%]"
        />
      </div>
      <h1 className="mb-4 font-sans font-semibold text-[1.375rem] leading-7 tracking-[0.02em]">
        Hey, I&apos;m{" "}
        <span className="border-b-[0.09375rem] border-current text-accent">
          Jarray Thamer
        </span>
        !
      </h1>
      <div className="mb-5 text-md leading-[1.75] space-y-1.75">
        <p>
          <span className="sm:inline-block sm:mb-1.75">
            A full-stack developer based in Sousse,{" "}
            <span className="hidden sm:inline-flex sm:items-center sm:gap-1.5">
              Tunisia
              <IconFlagTunis className="shrink-0 w-12 h-8 rounded-xs drop-shadow-[0_0_1px_rgba(0,0,0,0.1)]" />
            </span>
          </span>
          <br className="hidden sm:block" />
          I&nbsp;specialize in building modern web applications using{" "}
          <span className="inline-block bg-gray-700/10 rounded-md px-1.75">
            <LogoNextjs className="inline-block mr-1.75 -mt-0.75 size-4" />
            Next.js
          </span>{" "}
          and the{" "}
          <span className="inline-block bg-[#58C4DC]/10 rounded-md px-1.75">
            <IconReact className="inline-block mr-1.75 -mt-0.75 size-5" />
            React
          </span>{" "}
          ecosystem.
        </p>

        <p>
          I focus on crafting scalable products with clean code, high
          performance, and great attention to detail.
        </p>
      </div>

      <HomeHeroActions />

      <p className="relative flex items-center gap-2 mt-4 pl-5 text-xs text-tertiary">
        <span className="absolute left-0 top-1/2 size-3.5 -translate-y-1/2 rounded-full bg-green-500 border-4 border-green-100 animate-ping" />
        <span className="absolute left-0 top-1/2 size-3.5 -translate-y-1/2 rounded-full bg-green-500 border-4 border-green-100 " />
        Always happy to discuss new projects or collaborations.
      </p>
    </section>
  );
};

export default Hero;
