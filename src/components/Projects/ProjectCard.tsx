import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '../../types';
import ImageGallery from './ImageGallery';
import LightCard from '../Interactive/LightCard';
import MagneticButton from '../Interactive/MagneticButton';
import styles from './Projects.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const projectImages = project.images || (project.imageUrl ? [project.imageUrl] : []);

  return (
    <LightCard className={styles.projectCard}>
      <div className={styles.projectLayout}>
        <div className={styles.projectContent}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectDescription}>{project.description}</p>
          <div className={styles.techStack}>
            {project.technologies.map((tech, index) => (
              <span key={index} className={styles.techTag}>
                {tech.name}
              </span>
            ))}
          </div>
          <div className={styles.projectLinks}>
            {project.githubUrl && (
              <MagneticButton 
                className="button button-secondary"
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                <FaGithub /> Code
              </MagneticButton>
            )}
            {project.liveUrl && (
              <MagneticButton 
                className="button"
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                <FaExternalLinkAlt /> Live Demo
              </MagneticButton>
            )}
          </div>
        </div>
        
        <div className={styles.projectImageSection}>
          <ImageGallery images={projectImages} title={project.title} />
        </div>
      </div>
    </LightCard>
  );
};

export default ProjectCard;