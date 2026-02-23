import React from "react";
import "../static/Projects.css";
import { FaBrain, FaGlobe, FaRocket, FaCode } from "react-icons/fa";

import aiImage from "../uploads/quara_tech_solutions-removebg-preview.png";
import portfolioImage from "../uploads/quara_tech_solutions-removebg-preview.png";
import dashboardImage from "../uploads/quara_tech_solutions-removebg-preview.png";
import researchImage from "../uploads/quara_tech_solutions-removebg-preview.png";

const projectsData = [
  {
    image: aiImage,
    icon: <FaBrain />,
    title: "AI Smart Chat Platform",
    category: "Artificial Intelligence",
    description:
      "An intelligent AI-driven assistant platform with NLP integration, automation workflows, and scalable architecture.",
    tech: ["React", "Node.js", "OpenAI API", "MongoDB"],
    link: "#ai-project"   // Dummy Link
  },
  {
    image: portfolioImage,
    icon: <FaGlobe />,
    title: "Enterprise Portfolio System",
    category: "Web Development",
    description:
      "High-performance personal branding and portfolio ecosystem with SEO optimization and dynamic CMS integration.",
    tech: ["React", "Spring Boot", "MySQL"],
    link: "#portfolio-project"  // Dummy Link
  },
  {
    image: dashboardImage,
    icon: <FaRocket />,
    title: "Startup SaaS Dashboard",
    category: "SaaS Platform",
    description:
      "A scalable SaaS admin dashboard with analytics engine, user management, and secure cloud deployment.",
    tech: ["React", "Firebase", "Cloud"],
    link: "#saas-project"   // Dummy Link
  },
  {
    image: researchImage,
    icon: <FaCode />,
    title: "Final Year Research Project Suite",
    category: "Academic Innovation",
    description:
      "Complete documentation-based project architecture including system design, deployment guide, and presentation modules.",
    tech: ["Python", "ML", "Flask"],
    link: "#research-project"   // Dummy Link
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <div className="projects-header">
          <h2>Our Strategic Projects</h2>
          <p>
            Innovative digital systems engineered with precision, scalability,
            and future-ready technology frameworks.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a
                    href={project.link}
                    className="project-btn"
                  >
                    View Details →
                  </a>
                </div>
              </div>

              <div className="project-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
