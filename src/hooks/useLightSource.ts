import { useCallback } from 'react';

export const useLightSource = () => {
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const effect = card.querySelector('[data-light-effect="true"]') as HTMLElement | null;
    
    if (!effect) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    effect.style.opacity = '1';
    // Increased the gradient radius again for a larger, softer effect
    effect.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.5), transparent 500px)`;
  }, []);

  const onMouseLeave = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const effect = e.currentTarget.querySelector('[data-light-effect="true"]') as HTMLElement | null;
    if (effect) {
      effect.style.opacity = '0';
    }
  }, []);

  return { onMouseMove, onMouseLeave };
};