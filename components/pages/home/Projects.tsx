import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import projects from "@/data/projects";

export function Projects() {
  return (
    <section className="@container/projects">
      <SectionTitle
        heading="Projects"
        text="These are my personal projects, both past and ongoing:"
      />

      <ul className="grid gap-3 @lg/projects:grid-cols-2">
        {projects.map((project) => (
          <li key={project.name}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
