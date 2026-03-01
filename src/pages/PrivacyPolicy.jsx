import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../static/Policy.css";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="privacy-section">

      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="privacy-container">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-date">
          Effective Date: February 2026
        </p>

        <div className="privacy-card">
          <h2>1. Introduction</h2>
          <p>
            QAura Tech Solutions (“Company”, “we”, “our”, “us”) is committed 
            to protecting your privacy. This Privacy Policy explains how we 
            collect, use, store, and safeguard your personal information 
            when you access our website, LMS platform, and services.
          </p>
        </div>

        <div className="privacy-card">
          <h2>2. Information We Collect</h2>
          <ul>
            <li>Personal details (Name, Email, Phone Number)</li>
            <li>Account credentials (securely encrypted)</li>
            <li>Course enrollment & progress data</li>
            <li>Payment information (processed via secure third parties)</li>
            <li>Device, browser & usage analytics</li>
          </ul>
        </div>

        <div className="privacy-card">
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To provide access to courses and LMS features</li>
            <li>To personalize learning experiences</li>
            <li>To improve website functionality</li>
            <li>To send important updates and notifications</li>
            <li>To maintain platform security and prevent fraud</li>
          </ul>
        </div>

        <div className="privacy-card">
          <h2>4. Data Protection & Security</h2>
          <p>
            We implement industry-standard security measures including 
            encrypted storage, secure authentication systems, and access 
            controls to protect your personal information from unauthorized access.
          </p>
        </div>

        <div className="privacy-card">
          <h2>5. Cookies & Tracking Technologies</h2>
          <p>
            Our website may use cookies and similar technologies to enhance 
            user experience, remember login sessions, and analyze traffic. 
            You may disable cookies in your browser settings.
          </p>
        </div>

        <div className="privacy-card">
          <h2>6. Third-Party Services</h2>
          <p>
            We may use trusted third-party services such as payment gateways, 
            analytics providers, and hosting services. These partners are 
            contractually obligated to protect your information.
          </p>
        </div>

        <div className="privacy-card">
          <h2>7. User Rights</h2>
          <p>
            You have the right to access, update, or request deletion of your 
            personal data. Requests can be made by contacting our support team.
          </p>
        </div>

        <div className="privacy-card">
          <h2>8. Policy Updates</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes 
            will be reflected with a revised effective date on this page.
          </p>
        </div>

        <div className="privacy-card">
          <h2>9. Contact Information</h2>
          <p>
            For any privacy-related concerns, contact us at:
            <br />
            📧 support@qauratechsolutions.com
          </p>
        </div>

        <p className="legal-note">
          © 2026 QAura Tech Solutions. All Rights Reserved.
        </p>

      </div>
    </div>
  );
};

export default PrivacyPolicy;