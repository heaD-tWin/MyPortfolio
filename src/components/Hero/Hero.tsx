import React from 'react';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { bio, contactInfo } from '../../data/portfolio';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  // Split bio description into paragraphs
  const bioParagraphs = bio.description.split('\n\n').filter(p => p.trim());

  return (
    <section id="about" className={`${styles.hero} section`}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Hi, I'm <span className={styles.highlight}>{bio.name}</span>
            </h1>
            <h2 className={styles.heroSubtitle}>{bio.title}</h2>
            <div className={styles.heroDescription}>
              {bioParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className={styles.heroActions}>
              <a href="#contact" className="button">
                Get In Touch
              </a>
              <a href="#projects" className="button button-secondary">
                View My Work
              </a>
            </div>
            <div className={styles.socialLinks}>
              {contactInfo.socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title={link.name}
                >
                  {link.name === 'GitHub' && <FaGithub />}
                  {link.name === 'LinkedIn' && <FaLinkedin />}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.heroImage}>
            {bio.avatarUrl ? (
              <img 
                src={bio.avatarUrl} 
                alt={bio.name}
                className={styles.avatar}
              />
            ) : (
              <div className={styles.avatarPlaceholder}>
                <span>Your Photo</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;