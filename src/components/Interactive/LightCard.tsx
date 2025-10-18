import React from 'react';
import { useLightSource } from '../../hooks/useLightSource';
import styles from './Interactive.module.css';

interface LightCardProps {
  // Specify that the child should accept a className prop
  children: React.ReactElement<{ className?: string }>;
}

const LightCard: React.FC<LightCardProps> = ({ children }) => {
  // Call the hook without arguments to get the props it provides.
  const lightSourceProps = useLightSource();

  // Ensure we have a valid React element to clone
  if (!React.isValidElement(children)) {
    return null;
  }

  // Clone the child to inject a className
  const childWithProps = React.cloneElement(children, {
    className: `${children.props.className || ''} ${styles.lightCardContent}`
  });

  return (
    <div
      // Spread the props from the hook onto this div.
      // This applies the ref, onMouseMove, onMouseLeave, and style.
      {...lightSourceProps}
      className={styles.lightCard}
    >
      {childWithProps}
      <div className={styles.lightEffect} />
    </div>
  );
};

export default LightCard;