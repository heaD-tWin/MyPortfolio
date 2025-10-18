import { useRef, useCallback } from 'react';

interface LightSourceOptions {
  intensity?: number;
  radius?: number;
  color?: string;
}

export const useLightSource = <T extends HTMLElement = HTMLDivElement>({ 
  intensity = 0.3, 
  radius = 200,
  color = 'rgba(242, 89, 18, 0.1)' // Your orange color
}: LightSourceOptions = {}) => {
  const elementRef = useRef<T>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<T>) => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Create radial gradient that follows mouse
    const gradient = `radial-gradient(${radius}px circle at ${x}px ${y}px, ${color} 0%, transparent 70%)`;
    
    element.style.setProperty('--light-source', gradient);
    element.style.setProperty('--light-opacity', intensity.toString());
  }, [intensity, radius, color]);

  const handleMouseLeave = useCallback(() => {
    if (!elementRef.current) return;
    
    elementRef.current.style.setProperty('--light-opacity', '0');
  }, []);

  const lightSourceProps = {
    ref: elementRef,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: {
      position: 'relative' as const,
      overflow: 'hidden' as const,
    }
  };

  return lightSourceProps;
};