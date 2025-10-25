import { tv } from "tailwind-variants";
import { cn } from "@/utils/cn";
import type { VariantProps } from "tailwind-variants";

const projectStatusVariants = tv({
  base: "flex items-center px-2.5 h-5 rounded-full font-medium text-xs capitalize",
  variants: {
    status: {
      active: "bg-green-100 text-green-800",
      offline: "bg-gray-100 text-gray-800",
      maintenance: "bg-yellow-100 text-yellow-800",
      going: "bg-blue-100 text-blue-800",
    },
  },
  defaultVariants: {
    status: "active",
  },
});

type ProjectStatusVariants = VariantProps<typeof projectStatusVariants>;

interface ProjectStatusProps {
  className?: string;
  status: ProjectStatusVariants["status"];
}

export function ProjectStatus({ status, className }: ProjectStatusProps) {
  return (
    <span className={cn(projectStatusVariants({ status }), className)}>
      {status}
    </span>
  );
}
