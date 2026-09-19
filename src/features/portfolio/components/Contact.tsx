import {
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaGlobe,
} from 'react-icons/fa6';
import { ExternalLink } from '../../../shared/components/ExternalLink';
import { profile } from '../data/profile';
import { ResumePanel } from './ResumePanel';
import { OpportunityFit } from './OpportunityFit';
export function Contact() {
  return (
    <footer id="contact" className="contact-section">
      <div className="contact-orb contact-orb-one" aria-hidden="true" />
      <div className="contact-orb contact-orb-two" aria-hidden="true" />
      <div className="container">
        <OpportunityFit />
        <div className="contact-layout">
          <div className="contact-heading">
            <p className="eyebrow">07 / Contact</p>
            <h2>
              Let's build something{' '}
              <span className="gradient-text">great together.</span>
            </h2>
            <p>
              Have a software engineering, full-stack development, or QA
              engineering opportunity? Let's talk about reliable systems,
              thoughtful interfaces, and the work ahead.
            </p>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              <FaEnvelope aria-hidden="true" />
              {profile.email}
              <FaArrowUpRightFromSquare aria-hidden="true" />
            </a>
            <div className="contact-professional-links">
              <ExternalLink href={profile.github}>
                <FaGithub aria-hidden="true" />
                GitHub
              </ExternalLink>
              <ExternalLink href={profile.linkedin}>
                <FaLinkedin aria-hidden="true" />
                LinkedIn
              </ExternalLink>
              <ExternalLink href={profile.website}>
                <FaGlobe aria-hidden="true" />
                Portfolio
              </ExternalLink>
            </div>
          </div>
          <ResumePanel />
        </div>
        <div className="footer-bottom">
          <a href="#home" className="footer-brand">
            Ghaleb Shhab<span>.</span>
          </a>
          <p>Software Engineer | Full-Stack Developer</p>
          <span>© {new Date().getFullYear()} Ghaleb Shhab</span>
        </div>
      </div>
    </footer>
  );
}
