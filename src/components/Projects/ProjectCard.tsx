import React from 'react';
import { Project } from '../../types';
import ImageGallery from './ImageGallery';
import styles from './Projects.module.css';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  return (
    <div className={`${styles.projectCard} ${className || ''}`}>
      <div className={styles.projectLayout}>
        <div className={styles.projectContent}>
          <div>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
          </div>
          <div>
            <div className={styles.techStack}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.techTag}>{tech.name}</span>
              ))}
            </div>
            <div className={styles.projectLinks}>
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
        <div className={styles.projectImageSection}>
          {project.images && project.images.length > 0 ? (
            <ImageGallery images={project.images} title={project.title} />
          ) : (
            <div className={styles.imagePlaceholder}>
              <span>Project Image</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;