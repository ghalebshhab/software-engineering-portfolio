import { SectionHeading } from '../../../shared/components/SectionHeading';
const strengths = [
  {
    title: 'Full-Stack Development',
    description:
      'Connecting thoughtful interfaces with dependable application systems.',
  },
  {
    title: 'Backend & API Development',
    description:
      'Working with services, GraphQL, REST APIs, and database-driven workflows.',
  },
  {
    title: 'Software Quality',
    description:
      'Bringing testing experience into maintainable, reliable software.',
  },
  {
    title: 'Problem Solving',
    description:
      'Debugging across the stack and collaborating to find practical solutions.',
  },
];
export function About() {
  return (
    <section id="about" className="section reveal">
      <SectionHeading number="01" title="About" />
      <div className="about-layout">
        <div className="glass-card about-card terminal-window">
          <div className="terminal-header">
            <div className="terminal-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span className="terminal-title">ghaleb@portfolio ~ about-me</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="prompt">$</span> whoami
            </div>
            <div className="terminal-output">
              Ghaleb Shhab — Software Engineer | Full-Stack Developer | QA
              Engineer
            </div>
            <div className="terminal-line">
              <span className="prompt">$</span> cat about.md
            </div>
            <div className="about-copy">
              <p className="about-lead">
                I'm a Software Engineer and Full-Stack Developer with hands-on
                industry experience building modern web applications across
                frontend and backend systems.
              </p>
              <p>
                Currently, I work as a Full-Stack Software Developer at{' '}
                <strong>Kafana Tech</strong>, contributing to production
                applications using .NET, TypeScript, React.js, Next.js, Hasura
                GraphQL, PostgreSQL, and jQuery.
              </p>
              <p>
                My work includes frontend development, backend integration, API
                and GraphQL integration, debugging, code quality, and
                collaboration within Agile development environments.
              </p>
              <p>
                My technical background also includes Java Spring Boot, REST
                APIs, database-driven applications, and software testing and
                automation. Having experience across both development and
                quality engineering helps me approach software with a strong
                focus on reliability, maintainability, and user experience.
              </p>
            </div>
            <div className="terminal-line">
              <span className="prompt">$</span> strengths
            </div>
            <div className="terminal-output">
              {strengths.map((strength) => strength.title).join(' · ')}
            </div>
            <div className="terminal-line" aria-hidden="true">
              <span className="prompt">$</span>
              <span className="cursor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
