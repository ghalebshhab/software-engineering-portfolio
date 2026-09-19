import { useIntro } from '../hooks/useIntro';
export function PortfolioIntro({ onComplete }: { onComplete: () => void }) {
  const {
    progress: loaderProgress,
    stage: loaderStage,
    exiting: loaderExiting,
  } = useIntro(onComplete);
  return (
    <div
      id="loader"
      className={loaderExiting ? 'loader--exiting' : ''}
      role="dialog"
      aria-modal="true"

      aria-label="Welcome to Ghaleb Shhab’s portfolio"
    >
      <div className="loader-grid" aria-hidden="true"></div>
      <div className="loader-orb loader-orb--one" aria-hidden="true"></div>
      <div className="loader-orb loader-orb--two" aria-hidden="true"></div>
      <div className="loader-noise" aria-hidden="true"></div>

      <div className="loader-terminal">
        <button
          type="button"
          className="intro-skip"
          onClick={onComplete}
          autoFocus
        >
          Skip intro →
        </button>
        <div className="loader-terminal-bar">
          <div className="loader-terminal-dots" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="loader-terminal-title">
            ghaleb.portfolio / production
          </span>
          <span className="loader-terminal-version">v3.0</span>
        </div>

        <div className="loader-terminal-body">
          <div className="loader-brand">
            <span className="loader-brand-mark">GS</span>
            <div>
              <span className="loader-eyebrow">DIGITAL WORKSPACE</span>
              <h2>Ghaleb Shhab</h2>
              <p>Software Engineer · Full-Stack Developer · QA Engineer</p>
            </div>
          </div>

          <div className="loader-command">
            <span className="loader-prompt">$</span>
            <span className="loader-command-text">
              npm run portfolio:launch
            </span>
            <span className="loader-command-cursor" aria-hidden="true"></span>
          </div>

          <div className="loader-log" aria-hidden="true">
            <div
              className={
                loaderProgress >= 15
                  ? 'loader-log-line is-visible'
                  : 'loader-log-line'
              }
            >
              <span className="loader-check">✓</span>
              <span>Interface components loaded</span>
            </div>
            <div
              className={
                loaderProgress >= 34
                  ? 'loader-log-line is-visible'
                  : 'loader-log-line'
              }
            >
              <span className="loader-check">✓</span>
              <span>Projects and credentials connected</span>
            </div>
            <div
              className={
                loaderProgress >= 55
                  ? 'loader-log-line is-visible'
                  : 'loader-log-line'
              }
            >
              <span className="loader-check">✓</span>
              <span>Responsive experience optimized</span>
            </div>
            <div
              className={
                loaderProgress >= 74
                  ? 'loader-log-line is-visible'
                  : 'loader-log-line'
              }
            >
              <span className="loader-check">✓</span>
              <span>Developer workspace prepared</span>
            </div>
          </div>

          <div className="loader-progress-wrap">
            <div className="loader-progress-meta">
              <span className="loader-stage">{loaderStage}</span>
              <span className="loader-percentage">{loaderProgress}%</span>
            </div>
            <div
              className="loader-progress-track"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={loaderProgress}
            >
              <span
                className="loader-progress-bar"
                style={{ width: `${loaderProgress}%` }}
              ></span>
            </div>
          </div>

          <div
            className={
              loaderProgress >= 91 ? 'loader-ready is-visible' : 'loader-ready'
            }
          >
            <span className="loader-ready-dot"></span>
            <span>
              {loaderProgress === 100
                ? 'Launch complete'
                : 'Final checks in progress'}
            </span>
            <span className="loader-ready-code">200 OK</span>
          </div>
        </div>
      </div>
    </div>
  );
}
