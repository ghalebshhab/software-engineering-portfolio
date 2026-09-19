import { useState } from 'react';
import { SectionHeading } from '../../../shared/components/SectionHeading';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import type { ProjectCategory } from '../types';
const projectFilters: readonly {
  id: ProjectCategory | 'all';
  label: string;
}[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'qa', label: 'Software Quality' },
];
export function Projects() {
  const [activeProjectFilter, setActiveProjectFilter] = useState<
    ProjectCategory | 'all'
  >('all');
  const visibleProjects = projects.filter(
    (project) =>
      activeProjectFilter === 'all' || project.category === activeProjectFilter,
  );
  return (
    <section id="projects" className="section reveal">
      <SectionHeading
        number="04"
        title="Selected Projects"
        description="From full-stack platforms to the engineering practices that keep them reliable."
      />
      <div
        className="project-filters"
        role="group"
        aria-label="Filter projects"
      >
        {projectFilters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            className={
              activeProjectFilter === filter.id
                ? 'project-filter active'
                : 'project-filter'
            }
            aria-pressed={activeProjectFilter === filter.id}
            onClick={() => setActiveProjectFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        Showing {visibleProjects.length} projects
      </p>
      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={projects.indexOf(project)}
          />
        ))}
      </div>
    </section>
  );
}
