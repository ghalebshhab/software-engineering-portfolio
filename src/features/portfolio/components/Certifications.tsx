import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { SectionHeading } from '../../../shared/components/SectionHeading';
import { ExternalLink } from '../../../shared/components/ExternalLink';
import { certifications } from '../data/certifications';
export function Certifications() {
  return (
    <section
      id="certifications"
      className="section certificates-section reveal"
    >
      <SectionHeading
        number="06"
        title="Certificates"
        description="Continued learning in Java development, testing, and software quality."
      />
      <div className="certifications-grid">
        {certifications.slice(0, 6).map((cert) => (
          <article key={cert.id} className="certification-card">
            <a
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-thumbnail"
              aria-label={`View ${cert.title} certificate`}
            >
              <img
                src={cert.image}
                alt={`${cert.title} certificate`}
                width={300}
                height={210}
                loading="lazy"
                decoding="async"
              />
            </a>
            <div className="cert-body">
              <p className="cert-meta">
                {cert.issuer} · {cert.date}
              </p>
              <h3>{cert.title}</h3>
              <ExternalLink
                href={cert.credential ?? cert.image}
                className="cert-link"
                aria-label={`View ${cert.title} certificate`}
              >
                View certificate <FaArrowUpRightFromSquare aria-hidden="true" />
              </ExternalLink>
            </div>
          </article>
        ))}
      </div>
      <details className="additional-certificates">
        <summary>Additional certificate</summary>
        {certifications.slice(6).map((cert) => (
          <article key={cert.id}>
            <div>
              <h3>{cert.title}</h3>
              <p>
                {cert.issuer} · {cert.date}
              </p>
            </div>
            <ExternalLink href={cert.image}>
              View certificate <span aria-hidden="true">↗</span>
            </ExternalLink>
          </article>
        ))}
      </details>
    </section>
  );
}
