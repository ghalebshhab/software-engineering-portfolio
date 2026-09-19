import { useCallback, useEffect, useState } from 'react';
import type { SectionId } from '../types';
export const navigationLinks: readonly { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'expertise', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];
export function useSectionNavigation() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let current: SectionId = 'home';
      for (const { id } of navigationLinks) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 140) current = id;
      }
      if (
        window.scrollY > 0 &&
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 16
      )
        current = 'contact';
      setActiveSection(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);
  const scrollTo = useCallback((id: SectionId) => {
    const section = document.getElementById(id);
    if (!section) return;
    setActiveSection(id);
    section.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
      block: 'start',
    });
  }, []);
  return { activeSection, scrollTo };
}
