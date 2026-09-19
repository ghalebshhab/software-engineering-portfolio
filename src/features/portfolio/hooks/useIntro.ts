import { useEffect, useState } from 'react';

const stages = [
  [0, 'Initializing workspace'],
  [15, 'Loading interface components'],
  [34, 'Connecting projects and credentials'],
  [55, 'Optimizing responsive experience'],
  [74, 'Preparing developer workspace'],
  [91, 'Running final quality checks'],
  [100, 'Portfolio ready'],
] as const;

export function useIntro(onComplete: () => void) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete();
      return;
    }
    document.body.classList.add('is-loading');
    const started = performance.now();
    let frame = 0;
    const animate = (now: number) => {
      const elapsed = now - started;
      setProgress(
        Math.round((1 - Math.pow(1 - Math.min(elapsed / 4200, 1), 2.25)) * 100),
      );
      if (elapsed >= 4200) setExiting(true);
      if (elapsed >= 4850) onComplete();
      else frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onComplete();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('is-loading');
    };
  }, [onComplete]);
  return {
    progress,
    exiting,
    stage:
      [...stages].reverse().find(([at]) => progress >= at)?.[1] ?? stages[0][1],
  };
}
