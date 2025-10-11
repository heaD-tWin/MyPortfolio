import React from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';
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
          <h2 className={styles.resumeTitle}>Resume</h2>
          <p className={styles.resumeDescription}>
            Download or view my complete resume to learn more about my experience and qualifications.
          </p>
          <div className={styles.resumeActions}>
            <button onClick={handleDownload} className="button">
              <FaDownload />
              Download Resume
            </button>
            <button onClick={handleView} className="button button-secondary">
              <FaEye />
              View Online
            </button>
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