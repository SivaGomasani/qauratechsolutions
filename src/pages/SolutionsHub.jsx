import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../SerCss/SolutionsHub.css";

const solutionsData = [
  {
    title: "Portfolio Development",
    icon: "🌐",
    desc: "Modern, responsive and professional portfolios.",
    link: "/services/portfolios",
  },
  {
    title: "Website Development",
    icon: "💻",
    desc: "High-performance, scalable business websites.",
    link: "/solutions/web-development",
  },
  {
    title: "Web App Development",
    icon: "⚛️",
    desc: "Dynamic and scalable web applications.",
    link: "/solutions/web-app-development",
  },
  {
    title: "Mobile App Development",
    icon: "📱",
    desc: "Android & iOS apps with smooth UI/UX.",
    link: "/solutions/mobile-app-development",
  },
  {
    title: "UI/UX Design",
    icon: "🎨",
    desc: "Creative and user-focused design systems.",
    link: "/solutions/ui-ux-design",
  },
  {
    title: "E-Commerce Solutions",
    icon: "🛒",
    desc: "Complete online store setup & payment integration.",
    link: "/solutions/ecommerce",
  },
  {
    title: "Startup Launch Package",
    icon: "🚀",
    desc: "Complete digital package for new startups.",
    link: "/solutions/startup-package",
  },
  {
    title: "SEO Optimization",
    icon: "🔍",
    desc: "Boost visibility & search engine rankings.",
    link: "/solutions/seo",
  },
  {
    title: "Digital Marketing",
    icon: "📊",
    desc: "Social media & paid advertising strategies.",
    link: "/solutions/digital-marketing",
  },
  {
    title: "AI Solutions",
    icon: "🧠",
    desc: "Automation and AI-powered integrations.",
    link: "/solutions/ai-solutions",
  },
  {
    title: "Cyber Security",
    icon: "🔐",
    desc: "Secure architecture and threat protection.",
    link: "/solutions/cyber-security",
  },
  {
    title: "Cloud Deployment",
    icon: "☁️",
    desc: "AWS, Vercel & Firebase scalable hosting.",
    link: "/solutions/cloud",
  },
  {
    title: "Maintenance & Support",
    icon: "🛠️",
    desc: "Ongoing updates and dedicated tech support.",
    link: "/solutions/support",
  },
];

const SolutionsHub = () => {
  const hubRef = useRef(null);

  useEffect(() => {
    const section = hubRef.current;

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      section.style.setProperty("--cursor-x", `${x}px`);
      section.style.setProperty("--cursor-y", `${y}px`);
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={hubRef} className="solutions-hub-section">

      <div className="solutions-hub-header">
        <span className="solutions-hub-badge">Our Expertise</span>
        <h2>
          Advanced <span>Digital Solutions</span>
        </h2>
        <p>
          We engineer scalable, intelligent and future-ready systems
          empowering businesses and innovators worldwide.
        </p>
      </div>

      <div className="solutions-hub-grid">
        {solutionsData.map((item, index) => (
          <Link to={item.link} key={index} className="solutions-hub-card">
            <div className="solutions-hub-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span className="solutions-hub-cta">Explore →</span>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default SolutionsHub;