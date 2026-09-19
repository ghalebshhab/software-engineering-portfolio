import { FaGraduationCap } from 'react-icons/fa6';
import { SectionHeading } from '../../../shared/components/SectionHeading';
export function Education() {
  return (
    <section id="education" className="section reveal">
      <SectionHeading number="05" title="Education" />
      <article className="education-summary">
        <div className="education-icon">
          <FaGraduationCap aria-hidden="true" />
        </div>
        <div>
          <p className="eyebrow">The Hashemite University</p>
          <h3>B.Sc. in Software Engineering</h3>
          <p>
            Zarqa, Jordan <span aria-hidden="true">·</span> 2022 – 2026
          </p>
        </div>
        <div className="education-gpa">
          <strong>
            3.6 <span>/ 4.0</span>
          </strong>
          <span>GPA · Excellent</span>
        </div>
      </article>
    </section>
  );
}
