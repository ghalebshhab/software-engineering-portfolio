import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import { ExternalLink } from '../../../shared/components/ExternalLink';
import { TagList } from '../../../shared/components/TagList';
import { ProjectVisual } from './ProjectVisual';
import type { Project } from '../types';
import { useSpotlight } from '../../../shared/hooks/useSpotlight';
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const spotlight = useSpotlight();
  return (
    <article
      {...spotlight}
      className={`project-card${project.id === 'salon-hub' ? ' project-card--featured' : ''}`}
    >
      <div className="project-media">
        {project.image ? (
          <img
            src={project.image}
            alt={project.alt ?? project.title}
            loading="lazy"
            decoding="async"
            width={720}
            height={400}
          />
        ) : (
          <ProjectVisual variant={project.visual ?? 'portfolio'} />
        )}
      </div>
      <div className="project-card-content">
        <div className="project-meta">
          <span>
            0{index + 1} / {project.label}
          </span>
          <span
            className={`status-badge${project.status === 'In Progress' ? ' status-badge--progress' : ''}`}
          >
            {project.status}
          </span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>
        {project.detail && <p className="project-detail">{project.detail}</p>}
        <TagList
          items={project.technologies}
          label={`${project.title} technologies`}
        />
        <div className="project-links">
          {project.links.map((link) => (
            <ExternalLink
              key={link.href}
              href={link.href}
              aria-label={`${project.title}: ${link.label}`}
            >
              {link.href.includes('github.com') ? (
                <FaGithub aria-hidden="true" />
              ) : (
                <FaArrowUpRightFromSquare aria-hidden="true" />
              )}
              {link.label}
              <span aria-hidden="true">↗</span>
            </ExternalLink>
          ))}
        </div>
      </div>
    </article>
  );
}
