import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Header.module.css';
import { bio } from '../../data/portfolio';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.logo}>
            {/* TODO: Add your logo or name */}
            <h3>{bio.name}</h3>
          </div>

          <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
            <li>
              <button onClick={() => scrollToSection('about')} className={styles.navLink}>
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')} className={styles.navLink}>
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('skills')} className={styles.navLink}>
                Skills
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('education')} className={styles.navLink}>
                Education
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className={styles.navLink}>
                Contact
              </button>
            </li>
          </ul>

          <button className={styles.hamburger} onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;