import { FaArrowRight, FaCode, FaScissors } from 'react-icons/fa6';
export function ProjectVisual({ variant }: { variant: 'salon' | 'portfolio' }) {
  return (
    <div className={`project-art project-art--${variant}`} aria-hidden="true">
      {variant === 'salon' ? (
        <>
          <div className="project-art-brand">
            <FaScissors />
            <span>
              salon<span className="art-accent">hub.</span>
            </span>
          </div>
          <p>Discovery. Booking. Community.</p>
          <div className="architecture-flow">
            <span>Interface</span>
            <FaArrowRight />
            <span>API</span>
            <FaArrowRight />
            <span>Domain</span>
          </div>
        </>
      ) : (
        <>
          <span className="art-code-label">&lt;portfolio /&gt;</span>
          <div className="project-art-brand">
            <FaCode />
            <span>
              ghaleb<span className="art-accent">.dev</span>
            </span>
          </div>
          <p>Software Engineer | Full-Stack Developer</p>
          <div className="art-mini-stack">
            <span>React</span>
            <span>TypeScript</span>
            <span>Vite</span>
          </div>
        </>
      )}
    </div>
  );
}
