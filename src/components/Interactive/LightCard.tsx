import React from 'react';
import { useLightSource } from '../../hooks/useLightSource';
import styles from './Interactive.module.css';

interface LightCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  radius?: number;
}

const LightCard: React.FC<LightCardProps> = ({ 
  children, 
  className = '', 
  intensity = 0.2,
  radius = 150 
}) => {
  const lightProps = useLightSource({ intensity, radius });

  return (
    <div 
      {...lightProps}
      className={`${styles.lightCard} ${className}`}
    >
      <div className={styles.lightOverlay}></div>
      {children}
    </div>
  );
};

export default LightCard;