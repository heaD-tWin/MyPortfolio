import { useCallback } from 'react';

interface LightSourceOptions {
  intensity?: number;
  radius?: number;
}

export const useLightSource = (
  options: LightSourceOptions = {}
) => {
  const { intensity = 0.5, radius = 300 } = options;

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const effect = card.querySelector('[data-light-effect="true"]') as HTMLElement | null;
    
    if (!effect) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    effect.style.opacity = '1';
    // Changed color back to semi-transparent white
    effect.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, ${intensity}), transparent ${radius}px)`;

  }, [intensity, radius]);

  const onMouseLeave = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const effect = e.currentTarget.querySelector('[data-light-effect="true"]') as HTMLElement | null;
    if (effect) {
      effect.style.opacity = '0';
    }
  }, []);

  return { onMouseMove, onMouseLeave };
};