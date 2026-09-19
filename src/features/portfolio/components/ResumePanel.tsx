import { FaDownload, FaFileLines } from 'react-icons/fa6';
import { SwCv, QaCv } from '../../../assets';
export function ResumePanel() {
  return (
    <aside className="resume-panel">
      <FaFileLines className="resume-icon" aria-hidden="true" />
      <p className="eyebrow">The details, in one place</p>
      <h3>
        Experience. Skills.
        <br />
        Engineering.
      </h3>
      <p>
        Choose the CV that matches your role: software development or quality
        assurance and test automation.
      </p>
      <a className="btn-primary" href={SwCv} download>
        Download Software CV <FaDownload aria-hidden="true" />
      </a>
      <a className="btn-secondary resume-qa-download" href={QaCv} download>
        Download QA CV <FaDownload aria-hidden="true" />
      </a>
      <span className="resume-format">PDF document</span>
    </aside>
  );
}
