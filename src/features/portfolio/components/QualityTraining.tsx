import { FaBug } from 'react-icons/fa6';
import { TagList } from '../../../shared/components/TagList';

export function QualityTraining() {
  return (
    <div
      className="experience-group experience-group--qa"
      role="group"
      aria-labelledby="quality-training-heading"
    >
      <div className="experience-group-heading">
        <span className="experience-group-icon">
          <FaBug aria-hidden="true" />
        </span>
        <div>
          <p className="eyebrow">Quality engineering</p>
          <h3 id="quality-training-heading">Specialized QA Training</h3>
        </div>
      </div>
      <div className="experience-entry">
        <div className="experience-date">
          <span className="timeline-dot" aria-hidden="true" />
          <p>November 2025 – February 2026</p>
          <span className="status-badge">Completed</span>
        </div>
        <article className="experience-card">
          <p className="experience-company">
            Step IT Academy — Training Program
          </p>
          <h4>QA Engineering &amp; Test Automation</h4>
          <p className="training-location">Amman, Jordan</p>
          <p className="training-description">
            Hands-on training in manual testing, test case design, bug
            reporting, and automation with Java, Selenium WebDriver, TestNG, and
            Maven. API testing with Postman, plus CI/CD workflows using GitHub
            Actions and Allure reports.
          </p>
          <TagList
            items={[
              'Manual Testing',
              'Java',
              'Selenium',
              'TestNG',
              'Maven',
              'Postman',
              'GitHub Actions',
              'Allure',
            ]}
            label="QA training technologies"
          />
        </article>
      </div>
    </div>
  );
}
