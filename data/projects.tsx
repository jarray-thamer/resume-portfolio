import React from "react";
import { CarIcon, CatIcon, MicIcon } from "lucide-react"; // Adjust the import path
import { links } from "./links"; // Adjust the import path
import { ProjectStatusType } from "@/types/projectStatusTypes";

interface Project {
  name: string;
  description: string;
  status: ProjectStatusType;
  icon: React.ReactNode;
  link?: string;
}

const projects: Array<Project> = [
  {
    name: "Project Y",
    description: "My new project that I work on in stealth mode for now.",
    status: "active",
    icon: <CarIcon />,
  },
  {
    name: "Listing Cat",
    description: "Marketing database for startups and indie hackers.",
    status: "going",
    icon: <CatIcon />,
    link: links.projects.listingcat,
  },
  {
    name: "Bluesky Meter",
    description: "Realtime analytics for Bluesky social network.",
    status: "offline",
    icon: <MicIcon />,
    link: links.projects.blueskymeter,
  },
];

export default projects;
