import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { bio, contactInfo } from '../../data/portfolio';
// LightCard import is removed as it's no longer used in this file.
import MagneticButton from '../Interactive/MagneticButton';
import MagneticDots from '../Interactive/MagneticDots';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -1, y: -1 });

  // Split bio description into paragraphs
  const bioParagraphs = bio.description.split('\n\n').filter(p => p.trim());

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      id="about" 
      className={`${styles.hero} section`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <MagneticDots 
        dotSize={9}
        spacing={100}
        yOffset={15}
        magnetStrength={40}
        magnetRadius={400}
        mousePos={mousePos}
      />
      <div className="container">
        <div className={styles.heroContent}>
          {/* The LightCard wrapper has been removed from here */}
          <div className={styles.heroTextContainer}>
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
              <MagneticButton 
                className="button"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </MagneticButton>
              <MagneticButton 
                className="button"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </MagneticButton>
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
              <div className={styles.avatarContainer}>
                <img 
                  src={bio.avatarUrl} 
                  alt={bio.name}
                  className={styles.avatar}
                />
              </div>
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