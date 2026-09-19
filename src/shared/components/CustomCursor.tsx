import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const preference = window.matchMedia(
      '(pointer: fine) and (prefers-reduced-motion: no-preference)',
    );
    let cleanup = () => {};
    const sync = () => {
      cleanup();
      if (!preference.matches) return;
      let x = 0,
        y = 0,
        rx = 0,
        ry = 0,
        frame = 0;
      const animate = () => {
        rx += (x - rx) * 0.16;
        ry += (y - ry) * 0.16;
        if (ring.current)
          ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
        frame = requestAnimationFrame(animate);
      };
      const move = (event: PointerEvent) => {
        x = event.clientX;
        y = event.clientY;
        if (!frame) {
          rx = x;
          ry = y;
          animate();
        }
        if (dot.current)
          dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        document.body.classList.add('cursor-visible');
        document.body.classList.toggle(
          'cursor-hovering',
          event.target instanceof Element &&
            Boolean(event.target.closest('a, button, summary, .project-card')),
        );
      };
      const hide = () => {
        document.body.classList.remove('cursor-visible', 'cursor-hovering');
        cancelAnimationFrame(frame);
        frame = 0;
      };
      window.addEventListener('pointermove', move);
      document.addEventListener('pointerleave', hide);
      window.addEventListener('blur', hide);
      cleanup = () => {
        hide();
        window.removeEventListener('pointermove', move);
        document.removeEventListener('pointerleave', hide);
        window.removeEventListener('blur', hide);
      };
    };
    sync();
    preference.addEventListener('change', sync);
    return () => {
      cleanup();
      preference.removeEventListener('change', sync);
    };
  }, []);
  return (
    <>
      <div ref={dot} className="custom-cursor-dot" aria-hidden="true" />
      <div ref={ring} className="custom-cursor-ring" aria-hidden="true" />
    </>
  );
}
