import { yourImage, SwCv } from '../../../assets';
import { FaArrowDown, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { ExternalLink } from '../../../shared/components/ExternalLink';
import { profile } from '../data/profile';
import { certifications } from '../data/certifications';
import { projects } from '../data/projects';
import type { SectionId } from '../types';
export function Hero({ scrollTo }: { scrollTo: (id: SectionId) => void }) {
  return (
    <header id="home" className="hero">
      <div className="hero-container">
        {/* TEXT */}
        <div className="hero-content">
          <div className="hero-tag">
            <span className="hero-tag-dot"></span>
            Available for opportunities
          </div>

          <h1>
            <span className="hero-greeting">Hi, I'm</span>{' '}
            <span className="gradient-text">Ghaleb Shhab</span>
          </h1>

          <div className="hero-role">
            <span>// </span>Software Engineer &amp; Full-Stack Developer
          </div>

          <p className="hero-bio">
            I build reliable software, from the interface to the API. Full-stack
            development experience and a QA engineering background help me
            connect thoughtful user experiences with well-tested systems.
          </p>
          <div className="hero-current">
            <span aria-hidden="true" />
            Currently building at <strong>Kafana Tech</strong>
          </div>
          <ul className="hero-stack-list" aria-label="Primary technologies">
            {profile.mainStack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="hero-btns">
            <button
              className="btn-primary"
              onClick={() => scrollTo('projects')}
            >
              Explore My Work <FaArrowDown aria-hidden="true" />
            </button>
            <button
              className="btn-secondary"
              onClick={() => scrollTo('contact')}
            >
              Contact Me
            </button>
          </div>
          <div className="hero-quick-links">
            <a href={SwCv} download>
              <FaDownload aria-hidden="true" /> Software CV
            </a>
            <ExternalLink href={profile.github}>
              <FaGithub aria-hidden="true" /> GitHub
            </ExternalLink>
            <ExternalLink href={profile.linkedin}>
              <FaLinkedin aria-hidden="true" /> LinkedIn
            </ExternalLink>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">{certifications.length}</span>
              <span className="stat-label">Certifications</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">{projects.length}</span>
              <span className="stat-label">Featured Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">25+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>

        {/* PHOTO */}
        <div className="hero-image-wrapper">
          <div className="photo-container">
            <div className="photo-neon-frame"></div>
            <div className="photo-neon-inner">
              <img
                src={yourImage}
                alt="Ghaleb Shhab"
                className="hero-image"
                width={300}
                height={340}
                fetchPriority="high"
              />
              <div className="photo-scan"></div>
            </div>
            <span className="code-tag tl">&lt;dev /&gt;</span>
            <span className="code-tag br">G7lb</span>
            <span className="orbit-chip orbit-chip--react">React</span>
            <span className="orbit-chip orbit-chip--spring">.NET</span>
            <span className="orbit-chip orbit-chip--qa">QA</span>
          </div>

          <div className="photo-glow"></div>
        </div>
      </div>
      <button
        className="scroll-cue"
        onClick={() => scrollTo('about')}
        aria-label="Scroll to About section"
      >
        <span>Scroll to explore</span>
        <span className="scroll-cue-mouse">
          <span></span>
        </span>
      </button>
    </header>
  );
}
