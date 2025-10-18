import React from 'react';
import { useParallax } from '../../hooks/useParallax';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  className?: string;
  enableOnMobile?: boolean;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  children, 
  speed = 0.3, 
  direction = 'up',
  className = '',
  enableOnMobile = false 
}) => {
  const parallaxRef = useParallax({ speed, direction, enableOnMobile });

  return (
    <div 
      ref={parallaxRef}
      className={`parallaxContainer ${className}`}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;