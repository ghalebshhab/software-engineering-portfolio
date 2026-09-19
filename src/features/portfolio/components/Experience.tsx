import { SectionHeading } from '../../../shared/components/SectionHeading';
import { TagList } from '../../../shared/components/TagList';
import { experiences } from '../data/experience';
import { profile } from '../data/profile';
import { FaLaptopCode } from 'react-icons/fa6';
import { QualityTraining } from './QualityTraining';
export function Experience() {
  return (
    <section
      id="experience"
      className="section reveal"
      aria-label="Professional experience"
    >
      <SectionHeading
        number="02"
        title="Experience"
        description="Building software in real teams, across the full application stack."
      />
      <div
        className="experience-group"
        role="group"
        aria-labelledby="development-experience-heading"
      >
        <div className="experience-group-heading">
          <span className="experience-group-icon">
            <FaLaptopCode aria-hidden="true" />
          </span>
          <div>
            <p className="eyebrow">Software development</p>
            <h3 id="development-experience-heading">Development Experience</h3>
          </div>
        </div>
        <ol className="experience-timeline">
          {experiences.map((entry) => (
            <li
              key={entry.id}
              className={
                entry.current
                  ? 'experience-entry experience-entry--current'
                  : 'experience-entry'
              }
            >
              <div className="experience-date">
                <span className="timeline-dot" aria-hidden="true" />
                <p>{entry.date}</p>
                {entry.current && (
                  <span className="status-badge">Current role</span>
                )}
              </div>
              <article className="experience-card">
                <p className="experience-company">{entry.company}</p>
                <h4>{entry.role}</h4>
                <ul className="experience-responsibilities">
                  {entry.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <TagList
                  items={entry.technologies}
                  label={`${entry.company} technologies`}
                  emphasized={profile.mainStack}
                />
              </article>
            </li>
          ))}
        </ol>
      </div>
      <QualityTraining />
    </section>
  );
}
