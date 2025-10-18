import React, { useState } from 'react';
import { FaCertificate, FaCalendarAlt } from 'react-icons/fa';
import { courses } from '../../data/portfolio';
import MagneticDots from '../Interactive/MagneticDots';
import styles from './Education.module.css';

const Education: React.FC = () => {
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
      id="education" 
      className={`${styles.education} section`}
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
        <h2 className="text-center mb-2xl">Education & Certifications</h2>
        
        {courses.length > 0 ? (
          <div className={styles.coursesGrid}>
            {courses.map(course => (
              <div key={course.id} className={styles.courseCard}>
                <div className={styles.courseHeader}>
                  <h3 className={styles.courseTitle}>{course.title}</h3>
                  <span className={styles.institution}>{course.institution}</span>
                </div>
                
                <div className={styles.courseDetails}>
                  <div className={styles.completionDate}>
                    <FaCalendarAlt />
                    <span>{course.completionDate}</span>
                  </div>
                  
                  {course.certificateUrl && (
                    <a 
                      href={course.certificateUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.certificateLink}
                    >
                      <FaCertificate />
                      View Certificate
                    </a>
                  )}
                </div>
                
                {course.description && (
                  <p className={styles.courseDescription}>{course.description}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.placeholder}>
            <p>Education and certifications will be displayed here once added.</p>
            <p>TODO: Add your actual courses to src/data/portfolio.ts</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;