import React from "react";
import "../static/About.css";
import {
  FaBullseye,
  FaEye,
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaShieldAlt
} from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section" id="about">

      

      <div className="about-container">

        {/* Main Heading */}
        <h1 className="about-heading">About QAura Tech Solutions</h1>

        <p className="about-intro">
          QAura Tech Solutions is a next-generation digital transformation company
          focused on delivering innovative, scalable, and high-performance web
          solutions. We empower students, startups, and enterprises with modern
          technology, strategic branding, and intelligent development systems.
        </p>

        {/* Vision Mission Approach */}
        <div className="about-cards">

          <div className="about-card">
            <FaEye className="about-icon" />
            <h3>Our Vision</h3>
            <p>
              To become a trusted global technology partner driving digital
              excellence and empowering businesses with future-ready solutions.
            </p>
          </div>

          <div className="about-card">
            <FaBullseye className="about-icon" />
            <h3>Our Mission</h3>
            <p>
              To deliver impactful, user-centric, and scalable digital
              solutions that accelerate growth and innovation.
            </p>
          </div>

          <div className="about-card">
            <FaRocket className="about-icon" />
            <h3>Our Approach</h3>
            <p>
              We combine creativity, technology, and strategy to build
              powerful digital ecosystems tailored to client success.
            </p>
          </div>

        </div>

        {/* Stats */}
        <div className="about-stats">
          <div>
            <h2>100+</h2>
            <span>Projects Completed</span>
          </div>
          <div>
            <h2>50+</h2>
            <span>Happy Clients</span>
          </div>
          <div>
            <h2>1+</h2>
            <span>Years of Innovation</span>
          </div>
        </div>

        {/* Core Values */}
        <div className="core-values">
          <h2>Our Core Values</h2>

          <div className="values-grid">
            <div>
              <FaShieldAlt />
              <p>Integrity & Transparency</p>
            </div>
            <div>
              <FaUsers />
              <p>Customer First</p>
            </div>
            <div>
              <FaLightbulb />
              <p>Innovation Driven</p>
            </div>
            <div>
              <FaRocket />
              <p>Growth Mindset</p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="tech-stack">
          <h2>Technologies We Use</h2>

          <div className="tech-grid">
            <div>
              <FaCode />
              <span>Frontend Development</span>
            </div>
            <div>
              <FaLaptopCode />
              <span>Full Stack Systems</span>
            </div>
            <div>
              <FaDatabase />
              <span>Database Architecture</span>
            </div>
            <div>
              <FaShieldAlt />
              <span>Secure Deployments</span>
            </div>
          </div>
        </div>

        {/* ================= TIMELINE (FIXED STRUCTURE) ================= */}
        <div className="timeline">
          <h2>Our Journey</h2>

          <div className="timeline-container">

            <div className="timeline-item">
              <div className="timeline-content">
                <span>2024</span>
                <p>
                  QAura Tech Solutions was founded with a mission to innovate
                  and redefine digital excellence.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <span>2025</span>
                <p>
                  Successfully delivered 100+ digital solutions, helping
                  startups and enterprises scale rapidly.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <span>Future</span>
                <p>
                  Expanding globally with AI-driven platforms and enterprise
                  grade digital ecosystems.
                </p>
              </div>
            </div>

          </div>
        </div>
        {/* ================= END TIMELINE ================= */}

      </div>
    </section>
  );
};

export default About;
