import { SectionHeading } from '../../../shared/components/SectionHeading';
import { TagList } from '../../../shared/components/TagList';
import { skillCategories } from '../data/skills';
import { profile } from '../data/profile';
export function Skills() {
  return (
    <section id="expertise" className="section reveal">
      <SectionHeading
        number="03"
        title="Skills"
        description="A full-stack toolkit, grounded in clean engineering and software quality."
      />
      <div className="primary-stack">
        <p className="eyebrow">My current stack</p>
        <ul>
          {profile.mainStack.map((technology, index) => (
            <li key={technology}>
              <span aria-hidden="true">0{index + 1}</span>
              <strong>{technology}</strong>
            </li>
          ))}
        </ul>
      </div>
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <article key={category.title} className="skill-category">
            <h3>{category.title}</h3>
            <TagList
              items={category.items}
              label={`${category.title} skills`}
              emphasized={[
                '.NET',
                'React.js',
                'Next.js',
                'TypeScript',
                'Java Spring Boot',
                'GraphQL',
                'PostgreSQL',
              ]}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
