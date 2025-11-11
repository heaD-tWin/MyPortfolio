import React from 'react';
import { FaHeart } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <p>
            Made with <FaHeart className={styles.heart} /> using React & TypeScript.
          </p>
          <p className={styles.footerNote}>
            &copy; {currentYear} Dan White. Built with modern web technologies and deployed on GitHub Pages.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;