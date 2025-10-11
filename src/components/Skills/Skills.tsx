import React from 'react';
import * as Icons from 'react-icons/si';
import { technologies } from '../../data/portfolio';
import { Technology } from '../../types';
import styles from './Skills.module.css';

const Skills: React.FC = () => {
  const categories = {
    language: 'Programming Languages',
    framework: 'Frameworks & Libraries',
    tool: 'Tools & Technologies',
    database: 'Databases',
    other: 'Other'
  };

  const getTechsByCategory = (category: string) => {
    return technologies.filter(tech => tech.category === category);
  };

  const renderTechIcon = (tech: Technology) => {
    const IconComponent = (Icons as any)[tech.icon];
    return IconComponent ? <IconComponent /> : <span>{tech.name[0]}</span>;
  };

  return (
    <section id="skills" className={`${styles.skills} section`}>
      <div className="container">
        <h2 className="text-center mb-2xl">Skills & Technologies</h2>
        
        {technologies.length > 0 ? (
          Object.entries(categories).map(([categoryKey, categoryName]) => {
            const categoryTechs = getTechsByCategory(categoryKey);
            
            if (categoryTechs.length === 0) return null;
            
            return (
              <div key={categoryKey} className={styles.skillCategory}>
                <h3 className={styles.categoryTitle}>{categoryName}</h3>
                <div className={styles.techGrid}>
                  {categoryTechs.map((tech, index) => (
                    <div key={index} className={styles.techItem}>
                      <div className={styles.techIcon}>
                        {renderTechIcon(tech)}
                      </div>
                      <span className={styles.techName}>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className={styles.placeholder}>
            <p>Skills and technologies will be displayed here once added.</p>
            <p>TODO: Add your actual technologies to src/data/portfolio.ts</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;