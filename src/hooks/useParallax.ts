import { useEffect, useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
  enableOnMobile?: boolean;
}

export const useParallax = <T extends HTMLElement = HTMLDivElement>({
  speed = 0.5,
  direction = 'up',
  enableOnMobile = false,
}: ParallaxOptions = {}) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check if mobile and mobile is disabled
    const isMobile = window.innerWidth <= 768;
    if (isMobile && !enableOnMobile) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const windowHeight = window.innerHeight;

      // Only apply parallax when element is in viewport
      if (
        scrolled + windowHeight > elementTop &&
        scrolled < elementTop + rect.height
      ) {
        const yPos = (scrolled - elementTop) * speed;
        const transform = direction === 'up' ? -yPos : yPos;

        element.style.transform = `translate3d(0, ${transform}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction, enableOnMobile]);

  return elementRef;
};