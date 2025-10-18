import React, { useEffect, useRef, useState } from 'react';
import styles from './MagneticDots.module.css';

interface Dot {
  id: number;
  originalX: number;
  originalY: number;
}

interface DotPosition {
  x: number;
  y: number;
}

interface MousePos {
  x: number;
  y: number;
}

interface MagneticDotsProps {
  dotSize?: number;
  spacing?: number;
  magnetStrength?: number;
  magnetRadius?: number;
  mousePos: MousePos;
}

const MagneticDots: React.FC<MagneticDotsProps> = ({
  dotSize = 6,
  spacing = 100,
  magnetStrength = 30,
  magnetRadius = 80,
  mousePos
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [dots, setDots] = useState<Dot[]>([]);
  const positions = useRef<DotPosition[]>([]);
  const animationFrameRef = useRef<number>();

  const isHovering = mousePos.x !== -1 && mousePos.y !== -1;
  const smoothing = 0.15; // Easing factor for smooth movement

  // Initialize dots grid
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateDots = () => {
      const rect = container.getBoundingClientRect();
      const cols = Math.ceil(rect.width / spacing) + 2;
      const rows = Math.ceil(rect.height / spacing) + 2;
      
      const newDots: Dot[] = [];
      const newPositions: DotPosition[] = [];
      let id = 0;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const offsetX = row % 2 === 0 ? 0 : spacing / 2;
          const x = col * spacing + offsetX - spacing;
          const y = row * spacing - spacing;

          newDots.push({ id: id, originalX: x, originalY: y });
          newPositions.push({ x, y });
          id++;
        }
      }
      setDots(newDots);
      positions.current = newPositions;
      dotRefs.current = dotRefs.current.slice(0, newDots.length);
    };

    updateDots();
    const observer = new ResizeObserver(updateDots);
    observer.observe(container);
    return () => observer.disconnect();
  }, [spacing]);

  // High-performance animation loop
  useEffect(() => {
    const animate = () => {
      if (positions.current.length === 0) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      dots.forEach((dot, i) => {
        const pos = positions.current[i];
        let targetX = dot.originalX;
        let targetY = dot.originalY;

        if (isHovering) {
          const dx = mousePos.x - dot.originalX;
          const dy = mousePos.y - dot.originalY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < magnetRadius) {
            const force = Math.pow(1 - (distance / magnetRadius), 2);
            targetX = dot.originalX + dx * force * (magnetStrength / magnetRadius);
            targetY = dot.originalY + dy * force * (magnetStrength / magnetRadius);
          }
        }
        
        // Apply smoothing (lerp)
        pos.x += (targetX - pos.x) * smoothing;
        pos.y += (targetY - pos.y) * smoothing;

        const dotEl = dotRefs.current[i];
        if (dotEl) {
          dotEl.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [dots, mousePos, isHovering, magnetRadius, magnetStrength, smoothing]);

  return (
    <div ref={containerRef} className={styles.container}>
      {dots.map((dot, i) => (
        <div
          key={dot.id}
          ref={el => (dotRefs.current[i] = el)}
          className={styles.dot}
          style={{
            width: `${dotSize}px`,
            height: `${dotSize}px`,
          }}
        />
      ))}
    </div>
  );
};

export default MagneticDots;