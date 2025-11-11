import React from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';
import MagneticButton from '../Interactive/MagneticButton';
import styles from './Resume.module.css';

const Resume: React.FC = () => {
  const resumeUrl = '/MyPortfolio/resume/DanielWhiteResume.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Daniel_White_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open(resumeUrl, '_blank');
  };

  return (
    <section className={`${styles.resume} section`}>
      <div className="container">
        <div className={styles.resumeContent}>
          <h2 className="text-center mb-2xl">Resume</h2>
          <div className={styles.resumeActions}>
            <MagneticButton onClick={handleDownload} className="button">
              <FaDownload />
              Download Resume
            </MagneticButton>
            <MagneticButton onClick={handleView} className="button">
              <FaEye />
              View Online
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;