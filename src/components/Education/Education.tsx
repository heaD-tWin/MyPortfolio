import React from 'react';
import { FaCertificate, FaCalendarAlt } from 'react-icons/fa';
import { courses } from '../../data/portfolio';
import LightCard from '../Interactive/LightCard';
import styles from './Education.module.css';

const Education: React.FC = () => {
  return (
    <section id="education" className={`${styles.education} section`}>
      <div className="container">
        <h2 className="text-center mb-2xl">Education & Certifications</h2>
        
        {courses.length > 0 ? (
          <div className={styles.coursesGrid}>
            {courses.map(course => (
              <LightCard key={course.id}>
                <div className={styles.courseCard}>
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
              </LightCard>
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