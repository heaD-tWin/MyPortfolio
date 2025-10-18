import React from 'react';
import { useLightSource } from '../../hooks/useLightSource';
import styles from './Interactive.module.css';

interface LightCardProps {
  // The child must be a single React element that can accept a className
  children: React.ReactElement<{ className?: string }>;
}

const LightCard: React.FC<LightCardProps> = ({ children }) => {
  const { onMouseMove, onMouseLeave } = useLightSource({
    intensity: 0.25,
    radius: 250
  });

  // Clone the child (e.g., ProjectCard) and add the content class to it directly
  const childWithClass = React.cloneElement(children, {
    className: `${children.props.className || ''} ${styles.lightCardContent}`
  });

  return (
    <div
      className={styles.lightCard}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.lightEffect} data-light-effect="true" />
      {/* Render the modified child directly, without a wrapper div */}
      {childWithClass}
    </div>
  );
};

export default LightCard;