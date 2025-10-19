import React from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';
import MagneticButton from '../Interactive/MagneticButton';
import styles from './Resume.module.css';

const Resume: React.FC = () => {
  const handleDownload = () => {
    // TODO: Add path to your actual resume PDF
    const resumeUrl = '/path/to/your/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Your_Name_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    // TODO: Add path to your actual resume PDF
    const resumeUrl = '/path/to/your/resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <section className={`${styles.resume} section`}>
      <div className="container">
        <div className={styles.resumeContent}>
          <h2 className="text-center mb-2xl">Resume</h2>
          <p className={styles.resumeDescription}>
            Download or view my complete resume to learn more about my experience and qualifications.
          </p>
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
          <p className={styles.resumeNote}>
            {/* TODO: Add your actual resume file to the public folder and update the paths above */}
            <em>TODO: Add your resume PDF to the public folder and update file paths</em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;