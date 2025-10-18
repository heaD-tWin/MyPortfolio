import React from 'react';
import { useMagneticHover } from '../../hooks/useMagneticHover';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  strength = 0.15, 
  className = '', 
  ...props 
}) => {
  const magneticProps = useMagneticHover({ strength });

  return (
    <button 
      {...props}
      {...magneticProps}
      className={`${className} magnetic-element`}
      style={{
        transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        ...props.style
      }}
    >
      {children}
    </button>
  );
};

export default MagneticButton;