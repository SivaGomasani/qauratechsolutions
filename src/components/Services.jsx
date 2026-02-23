import React from "react";
import "../static/Services.css";

import {
  FaBrain,
  FaGlobe,
  FaUserTie,
  FaLaptopCode,
  FaGraduationCap,
  FaBullhorn,
  FaChartLine,
  FaProjectDiagram
} from "react-icons/fa";

const servicesData = [
  {
    icon: <FaUserTie />,
    title: "Professional Career Engineering",
    description:
      "Strategic resume architecture, LinkedIn optimization, and executive positioning frameworks designed to maximize hiring success.",
    link: "#"
  },
  {
    icon: <FaLaptopCode />,
    title: "Enterprise Web Development",
    description:
      "High-performance full-stack systems built with scalable architectures, secure deployments, and modern UI frameworks.",
    link: "#"
  },
  {
    icon: <FaBrain />,
    title: "AI & Intelligent Automation",
    description:
      "Advanced AI solutions including chatbots, predictive analytics systems, and intelligent workflow automation platforms.",
    link: "#"
  },
  {
    icon: <FaProjectDiagram />,
    title: "Research & Innovation Projects",
    description:
      "Final-year and enterprise-grade academic project development with complete documentation and deployment support.",
    link: "#"
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Branding & Identity Systems",
    description:
      "Strategic brand positioning with portfolio websites, personal branding systems, and corporate digital presence solutions.",
    link: "#"
  },
  {
    icon: <FaGraduationCap />,
    title: "Industry-Focused Training Programs",
    description:
      "Practical, career-oriented training in Full Stack Development, AI Systems, and modern software engineering practices.",
    link: "#"
  },
  {
    icon: <FaChartLine />,
    title: "Startup Technology Consulting",
    description:
      "Architecture planning, scalability consulting, and end-to-end technology advisory services for growing startups.",
    link: "#"
  },
  {
    icon: <FaGlobe />,
    title: "Content & Publishing Platforms",
    description:
      "SEO-optimized blog systems, scalable publishing platforms, and high-performance digital content infrastructures.",
    link: "#"
  }
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">

        <div className="services-header">
          <h2>Our Expertise & Strategic Solutions</h2>
          <p>
            We design, develop, and deploy scalable digital ecosystems that empower
            professionals, startups, and enterprises to achieve sustainable growth.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              {/* Dummy Link */}
              <a href={service.link} className="service-btn">
                Explore Service
                <span className="arrow"> →</span>
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
