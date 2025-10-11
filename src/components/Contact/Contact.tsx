import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { contactInfo } from '../../data/portfolio';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission (e.g., EmailJS, Netlify Forms, etc.)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'SiGithub':
        return <FaGithub />;
      case 'SiLinkedin':
        return <FaLinkedin />;
      default:
        return <FaEnvelope />;
    }
  };

  return (
    <section id="contact" className={`${styles.contact} section`}>
      <div className="container">
        <h2 className="text-center mb-2xl">Get In Touch</h2>
        
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new opportunities and interesting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className={styles.contactDetails}>
              <a href={`mailto:${contactInfo.email}`} className={styles.contactItem}>
                <FaEnvelope />
                <span>{contactInfo.email}</span>
              </a>
              
              <div className={styles.socialLinksContainer}>
                <h4>Follow Me</h4>
                <div className={styles.socialLinks}>
                  {contactInfo.socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      title={link.name}
                    >
                      {getSocialIcon(link.icon)}
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <button type="submit" className="button">
                <FaPaperPlane />
                Send Message
              </button>
            </form>
            
            <p className={styles.formNote}>
              {/* TODO: Implement actual form submission service */}
              <em>TODO: Implement form submission (EmailJS, Netlify Forms, etc.)</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;