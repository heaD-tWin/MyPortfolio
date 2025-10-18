import React from 'react';
import { useLightSource } from '../../hooks/useLightSource';
import styles from './Interactive.module.css';

interface LightCardProps {
  children: React.ReactElement<{ className?: string }>;
  className?: string; // Allow passing a className to the LightCard itself
}

const LightCard: React.FC<LightCardProps> = ({ children, className }) => {
  // Call the hook with ZERO arguments to get the event handlers.
  const { onMouseMove, onMouseLeave } = useLightSource();

  // Ensure we have a valid React element to clone.
  if (!React.isValidElement(children)) {
    return null;
  }

  // Clone the child to apply the content masking class.
  const childWithClass = React.cloneElement(children, {
    className: `${children.props.className || ''} ${styles.lightCardContent}`
  });

  return (
    <div
      // Apply the event handlers and any passed className here.
      className={`${styles.lightCard} ${className || ''}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.lightEffect} data-light-effect="true" />
      {childWithClass}
    </div>
  );
};

export default LightCard;