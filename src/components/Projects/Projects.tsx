import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/portfolio';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className={`${styles.projects} section`}>
      <div className="container">
              <h2 className="text-center mb-2xl">Featured Projects</h2>
        <div className={styles.projectsGrid}>
          {featuredProjects.length > 0 ? (
            featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className={styles.placeholder}>
              <p>Projects will be displayed here once added to the data file.</p>
              <p>TODO: Add your actual projects to src/data/portfolio.ts</p>
            </div>
          )}
        </div>
        {projects.length > featuredProjects.length && (
          <div className={styles.viewAllProjects}>
            <button className="button button-secondary">
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;