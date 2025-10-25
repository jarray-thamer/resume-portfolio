import { cn } from "@/utils/cn";
import { HeartIcon } from "lucide-react";

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "px-4 sm:px-8 sticky top-[100vh] flex flex-col items-center gap-3 mx-auto pt-6 pb-10 border-t border-layout-primary sm:flex-row sm:justify-between sm:gap-8 sm:pt-8 sm:pb-6 sm:border-none",
        className
      )}
    >
      <p className="group flex items-center gap-1.5 text-sm text-tertiary sm:text-xs">
        <span>&copy; {new Date().getFullYear()} Built with</span>
        <HeartIcon className="shrink-0 size-3 stroke-red-600 fill-red-600 will-change-transform transition-transform duration-300 group-hover:scale-120" />
        <span>by Thamer</span>
      </p>
    </footer>
  );
}
