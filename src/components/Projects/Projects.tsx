import React, { useState } from 'react';
import { projects } from '../../data/portfolio';
import LightCard from '../Interactive/LightCard';
import MagneticDots from '../Interactive/MagneticDots';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -1, y: -1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1, y: -1 });
  };

  return (
    <section 
      id="projects" 
      className={`${styles.projects} section`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <MagneticDots 
        dotSize={9}
        spacing={100}
        magnetStrength={40}
        magnetRadius={200}
        mousePos={mousePos}
      />
      <div className="container">
        <h2 className="text-center mb-2xl">Featured Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <LightCard key={index}>
              <ProjectCard project={project} />
            </LightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;