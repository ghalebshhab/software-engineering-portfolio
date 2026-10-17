import { FaArrowUpRightFromSquare, FaBug, FaCode } from 'react-icons/fa6';
import { SectionHeading } from '../../../shared/components/SectionHeading';
import { ExternalLink } from '../../../shared/components/ExternalLink';
import { certifications } from '../data/certifications';
export function Certifications() {
  const groups = [
    {
      id: 'development',
      title: 'Development & AI Engineering',
      description:
        'Modern software development, backend engineering, and AI-assisted workflows.',
      icon: <FaCode aria-hidden="true" />,
    },
    {
      id: 'quality',
      title: 'Quality Engineering',
      description:
        'Manual testing, UI automation, API validation, and maintainable test systems.',
      icon: <FaBug aria-hidden="true" />,
    },
  ] as const;

  return (
    <section
      id="certifications"
      className="section certificates-section reveal"
    >
      <SectionHeading
        number="06"
        title="Certificates"
        description="Verified learning across software development, AI-assisted engineering, and software quality."
      />
      <div className="certificate-groups">
        {groups.map((group) => (
          <div className="certificate-group" key={group.id}>
            <div className="certificate-group-heading">
              <span className="certificate-group-icon">{group.icon}</span>
              <div>
                <p className="eyebrow">
                  {group.id === 'development'
                    ? 'Development track'
                    : 'QA track'}
                </p>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
            </div>
            <div className="certifications-grid">
              {certifications
                .filter((cert) => cert.category === group.id)
                .map((cert) => (
                  <article key={cert.id} className="certification-card">
                    <ExternalLink
                      href={cert.credential ?? cert.image}
                      className="certificate-thumbnail"
                      aria-label={`View ${cert.title} certificate`}
                    >
                      <img
                        src={cert.image}
                        alt={`${cert.title} certificate`}
                        width={600}
                        height={440}
                        loading="lazy"
                        decoding="async"
                      />
                    </ExternalLink>
                    <div className="cert-body">
                      <p className="cert-meta">
                        {cert.issuer} · {cert.date}
                      </p>
                      <h4>{cert.title}</h4>
                      <p className="cert-description">{cert.desc}</p>
                      <div className="cert-actions">
                        <ExternalLink
                          href={cert.credential ?? cert.image}
                          className="cert-link"
                          aria-label={`View ${cert.title} certificate`}
                        >
                          View certificate{' '}
                          <FaArrowUpRightFromSquare aria-hidden="true" />
                        </ExternalLink>
                        {cert.verification && (
                          <ExternalLink
                            href={cert.verification}
                            className="cert-verify-link"
                            aria-label={`Verify ${cert.title} credential`}
                          >
                            Verify credential
                          </ExternalLink>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
