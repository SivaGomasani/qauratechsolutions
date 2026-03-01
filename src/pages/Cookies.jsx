import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../static/Cookies.css";

const Cookies = () => {
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
    <div className="cookies-section">

      {/* Scroll Progress */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="cookies-container">
        <h1 className="cookies-title">Cookies Policy</h1>
        <p className="cookies-date">Effective Date: February 2026</p>

        <div className="cookies-card">
          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device
            when you visit a website. They help improve user experience
            by remembering preferences and enabling certain functionalities.
          </p>
        </div>

        <div className="cookies-card">
          <h2>2. How We Use Cookies</h2>
          <p>
            QAura Tech Solutions uses cookies to:
            <br />• Maintain user sessions
            <br />• Improve website performance
            <br />• Analyze user behavior
            <br />• Personalize content
          </p>
        </div>

        <div className="cookies-card">
          <h2>3. Third-Party Cookies</h2>
          <p>
            We may use third-party services such as analytics or payment
            gateways that place cookies on your device to help us improve
            our services and provide secure transactions.
          </p>
        </div>

        <div className="cookies-card">
          <h2>4. Managing Cookies</h2>
          <p>
            You can control or disable cookies through your browser settings.
            However, disabling certain cookies may affect website functionality.
          </p>
        </div>

        <div className="cookies-card">
          <h2>5. Consent</h2>
          <p>
            By continuing to use our website, you consent to our use
            of cookies in accordance with this Cookies Policy.
          </p>
        </div>

        <p className="legal-note">
          © 2026 QAura Tech Solutions. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Cookies;