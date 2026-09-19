import { useState } from 'react';
import { FaArrowRight, FaDownload } from 'react-icons/fa6';
import { opportunities } from '../data/opportunities';
import { profile } from '../data/profile';

export function OpportunityFit() {
  const [selected, setSelected] = useState(0);
  const role = opportunities[selected];
  return (
    <div className="opportunity-fit">
      <div className="opportunity-heading">
        <p className="eyebrow">Where I can contribute</p>
        <h3>
          One engineering mindset.
          <br />
          Three ways to contribute.
        </h3>
      </div>
      <div
        className="opportunity-options"
        role="group"
        aria-label="Explore role fit"
      >
        {opportunities.map((item, index) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={selected === index}
            onClick={() => setSelected(index)}
          >
            <span>0{index + 1}</span>
            {item.title}
            <FaArrowRight aria-hidden="true" />
          </button>
        ))}
      </div>
      <div className="opportunity-detail" key={role.id}>
        <div aria-live="polite" aria-atomic="true">
          <p className="eyebrow">{role.stack}</p>
          <h4>{role.description}</h4>
          <p>{role.evidence}</p>
        </div>
        <div className="opportunity-actions">
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent(`${role.title} opportunity`)}`}
          >
            Discuss this role <FaArrowRight aria-hidden="true" />
          </a>
          <a href={role.cv} download>
            {role.cvLabel} <FaDownload aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
