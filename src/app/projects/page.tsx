import type { Metadata } from "next";
import { PageTransition } from "@/components/ui/page-transition";
import { ProjectCard } from "@/components/ui/project-card";
import projects from "@/data/projects.json";

export const metadata: Metadata = {
  title: "Projects | Shrutik Meshram",
  description: "Things I've built and shipped",
  openGraph: {
    title: "Projects | Shrutik Meshram",
    description: "Things I've built and shipped",
  },
};

export default function Projects() {
  const publishedProjects = projects.filter((project) => project.published);
  const featuredProjects = publishedProjects.filter(
    (project) => project.featured,
  );
  const otherProjects = publishedProjects.filter(
    (project) => !project.featured,
  );

  return (
    <PageTransition>
      <div className="container max-w-4xl py-12 md:py-20 mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Projects
          </h1>
          <p className="text-lg text-muted-foreground">
            Things I&apos;ve built, shipped, and sometimes abandoned.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Featured projects - larger cards */}
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              size={index === 0 ? "large" : "medium"}
            />
          ))}

          {/* Other projects - smaller cards */}
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} size="small" />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
