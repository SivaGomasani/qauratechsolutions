import React, { useState, useEffect } from 'react';
import '../static/Header.css';
import logo from "../uploads/quara_tech_solutions-removebg-preview.png";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + 100; // offset for navbar
      sections.forEach(section => {
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(`#${section.id}`);
          section.classList.add('visible'); // fade-in
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMobile(false);
    const element = document.querySelector(id);
    const offset = 80; // navbar height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect - offset;

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`}>
      <div className="nav-container">

        <a href="/" className="logo-container">
          <img src={logo} alt="Qaura Tech Solutions" className="logo-img" />
        </a>

        <ul className={isMobile ? "nav-menu active" : "nav-menu"}>
          {['home','about','services','projects','testimonials','contact','lms'].map(section => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`nav-link ${activeSection === `#${section}` ? 'active' : ''} ${section==='lms' ? 'lms-btn' : ''}`}
                onClick={(e) => handleNavClick(e, `#${section}`)}
              >
                {section === 'lms' ? 'LMS Portal' : section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? '✖' : '☰'}
        </div>

      </div>
    </nav>
  );
};

export default Header;
