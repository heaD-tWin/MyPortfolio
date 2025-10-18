import { useRef, useCallback } from 'react';

interface MagneticHoverOptions {
  strength?: number;
  reset?: boolean;
}

export const useMagneticHover = <T extends HTMLElement = HTMLButtonElement>({ 
  strength = 0.3, 
  reset = true 
}: MagneticHoverOptions = {}) => {
  const elementRef = useRef<T>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    
    element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  }, [strength]);

  const handleMouseLeave = useCallback(() => {
    if (!elementRef.current || !reset) return;
    
    elementRef.current.style.transform = 'translate(0px, 0px)';
  }, [reset]);

  const handleMouseEnter = useCallback(() => {
    if (!elementRef.current) return;
    
    const element = elementRef.current;
    element.addEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const magneticProps = {
    ref: elementRef,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: () => {
      if (elementRef.current) {
        elementRef.current.removeEventListener('mousemove', handleMouseMove);
        handleMouseLeave();
      }
    }
  };

  return magneticProps;
};