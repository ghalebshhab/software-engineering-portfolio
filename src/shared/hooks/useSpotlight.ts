import type { PointerEvent } from 'react';

/** Update CSS coordinates directly; pointer motion never causes React renders. */
export function useSpotlight() {
  return {
    onPointerMove(event: PointerEvent<HTMLElement>) {
      if (
        event.pointerType !== 'mouse' ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      )
        return;
      const bounds = event.currentTarget.getBoundingClientRect();
      event.currentTarget.style.setProperty(
        '--spot-x',
        `${event.clientX - bounds.left}px`,
      );
      event.currentTarget.style.setProperty(
        '--spot-y',
        `${event.clientY - bounds.top}px`,
      );
    },
  };
}
