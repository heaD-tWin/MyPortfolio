import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '../../types';
import ImageGallery from './ImageGallery';
import styles from './Projects.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Use images array if available, otherwise fall back to single imageUrl
  const projectImages = project.images || (project.imageUrl ? [project.imageUrl] : []);

  return (
    <div className={styles.projectCard}>
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
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                <FaGithub /> Code
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </div>
        
        <div className={styles.projectImageSection}>
          <ImageGallery images={projectImages} title={project.title} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;