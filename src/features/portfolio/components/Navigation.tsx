import { useEffect, useRef } from 'react';
import { navigationLinks } from '../hooks/useSectionNavigation';
import type { SectionId } from '../types';
import { ThemeToggle } from '../../../shared/components/ThemeToggle';
export function Navigation({
  activeSection,
  scrollTo,
}: {
  activeSection: SectionId;
  scrollTo: (id: SectionId) => void;
}) {
  const ref = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const list = ref.current;
    const link = list?.querySelector<HTMLAnchorElement>(
      `[data-section="${activeSection}"]`,
    );
    if (list && link)
      list.scrollTo({
        left: link.offsetLeft - list.clientWidth / 2 + link.offsetWidth / 2,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'instant'
          : 'smooth',
      });
  }, [activeSection]);
  return (
    <nav className="top-nav" aria-label="Main navigation">
      <a
        href="#home"
        className="nav-brand"
        aria-label="Ghaleb Shhab, home"
        onClick={(event) => {
          if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
            return;
          event.preventDefault();
          scrollTo('home');
        }}
      >
        GS<span>.</span>
      </a>
      <ul ref={ref}>
        {navigationLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              data-section={link.id}
              className={activeSection === link.id ? 'active-link' : ''}
              onClick={(event) => {
                if (
                  event.ctrlKey ||
                  event.metaKey ||
                  event.shiftKey ||
                  event.altKey
                )
                  return;
                event.preventDefault();
                scrollTo(link.id);
              }}
              aria-current={activeSection === link.id ? 'location' : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </nav>
  );
}
