import { Hero } from '../features/portfolio/components/Hero';
import { Experience } from '../features/portfolio/components/Experience';
import { About } from '../features/portfolio/components/About';
import { Education } from '../features/portfolio/components/Education';
import { Skills } from '../features/portfolio/components/Skills';
import { Certifications } from '../features/portfolio/components/Certifications';
import { Projects } from '../features/portfolio/components/Projects';
import { Contact } from '../features/portfolio/components/Contact';
import { Navigation } from '../features/portfolio/components/Navigation';
import { useSectionNavigation } from '../features/portfolio/hooks/useSectionNavigation';
import { useReveal } from '../features/portfolio/hooks/useReveal';
import { useCallback, useState } from 'react';
import { PortfolioIntro } from '../features/portfolio/components/PortfolioIntro';
import { CustomCursor } from '../shared/components/CustomCursor';
import { ReadingProgress } from '../shared/components/ReadingProgress';

function PortfolioContent() {
  const navigation = useSectionNavigation();
  useReveal();
  return (
    <div id="content" className="app-shell">
      <ReadingProgress />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation {...navigation} />
      <main id="main" className="container" tabIndex={-1}>
        <Hero scrollTo={navigation.scrollTo} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
      </main>
      <Contact />
    </div>
  );
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const completeIntro = useCallback(() => setShowIntro(false), []);
  return (
    <>
      <CustomCursor />
      {showIntro ? (
        <PortfolioIntro onComplete={completeIntro} />
      ) : (
        <PortfolioContent />
      )}
    </>
  );
}
