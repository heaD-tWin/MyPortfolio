import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { contactInfo } from '../../data/portfolio';
import LightCard from '../Interactive/LightCard';
import MagneticButton from '../Interactive/MagneticButton';
import MagneticDots from '../Interactive/MagneticDots';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -1, y: -1 });
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSubmitStatus('success');
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
        yOffset={15}
        magnetStrength={40}
        magnetRadius={200}
        mousePos={mousePos}
      />
      <div className="container">
        <h2 className="text-center mb-2xl">Contact Me</h2>
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
            </div>
            <div className={styles.socialLinksContainer}>
              <h4 className={styles.followText}>Follow Me</h4>
              <div className={styles.socialLinks}>
                {contactInfo.socialLinks.map(link => (
                  <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <LightCard>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="from_name">Name</label>
                <input 
                  type="text" 
                  id="from_name" 
                  name="from_name" 
                  value={formData.from_name}
                  onChange={handleChange}
                  required 
                  disabled={isSubmitting}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="from_email">Email</label>
                <input 
                  type="email" 
                  id="from_email" 
                  name="from_email" 
                  value={formData.from_email}
                  onChange={handleChange}
                  required 
                  disabled={isSubmitting}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              {submitStatus === 'success' && (
                <p className={styles.successMessage}>
                  ✓ Message sent successfully! I'll get back to you soon.
                </p>
              )}
              
              {submitStatus === 'error' && (
                <p className={styles.errorMessage}>
                  ✗ Failed to send message. Please email me directly at {contactInfo.email}
                </p>
              )}
              
              <MagneticButton 
                className="button" 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </MagneticButton>
            </form>
          </LightCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;