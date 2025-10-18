import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { contactInfo } from '../../data/portfolio';
import LightCard from '../Interactive/LightCard';
import MagneticButton from '../Interactive/MagneticButton';
import MagneticDots from '../Interactive/MagneticDots';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
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
      id="contact" 
      className={`${styles.contact} section`}
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
        <h2 className="sectionTitle text-center">Contact Me</h2>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3 className={styles.connectText}>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team. If you have a question or just want to say hi, don't hesitate to reach out.
            </p>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <FaEnvelope /> <span>{contactInfo.email}</span>
              </div>
              {/* Add other contact items like phone or location if available */}
            </div>
            <div className={styles.socialLinksContainer}>
              <h4 className={styles.followText}>Follow Me</h4>
              <div className={styles.socialLinks}>
                {contactInfo.socialLinks.map(link => (
                  <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    {/* Render icon dynamically if you have them */}
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <LightCard>
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              <MagneticButton className="button" type="submit">
                Send Message
              </MagneticButton>
              <p className={styles.formNote}>
                This form is for demonstration purposes. Please use the email above to contact me.
              </p>
            </form>
          </LightCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;