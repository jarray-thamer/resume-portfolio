import { Logo } from "@/components/Logo";
import { cn } from "@/utils/cn";

export function Header({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "group flex items-center mx-auto h-16 py-12 border-b px-2 sm:px-6 ",
        className
      )}
    >
      <a
        href="https://www.thamerwebs.com"
        target="_blank"
        className="flex items-center gap-2 overflow-hidden select-none"
      >
        <span className="relative z-1 shrink-0">
          <Logo className="size-20 text-accent" />
        </span>

        <span className="font-bold font-patrick text-[1.5925rem]  tracking-[0.025em] text-[#6f80e9] uppercase">
          Jarray Thamer |
          <br />
          Crafting Digital Experiences
        </span>
      </a>
    </header>
  );
}
