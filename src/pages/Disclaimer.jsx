import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../static/Disclaimer.css";

const Disclaimer = () => {
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
    <div className="disclaimer-section">

      {/* Scroll Progress */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="disclaimer-container">
        <h1 className="disclaimer-title">Disclaimer</h1>
        <p className="disclaimer-date">Effective Date: February 2026</p>

        <div className="disclaimer-card">
          <h2>1. General Information</h2>
          <p>
            The information provided by QAura Tech Solutions on this website
            is for general informational and educational purposes only.
            All information is provided in good faith; however, we make
            no representation or warranty of any kind regarding accuracy,
            adequacy, validity, reliability, availability, or completeness.
          </p>
        </div>

        <div className="disclaimer-card">
          <h2>2. No Professional Advice</h2>
          <p>
            Any content related to technology, development, business,
            or career guidance is provided for informational purposes only.
            It should not be considered professional, legal, or financial advice.
          </p>
        </div>

        <div className="disclaimer-card">
          <h2>3. External Links Disclaimer</h2>
          <p>
            Our website may contain links to third-party websites.
            We do not guarantee the accuracy or reliability of any
            information offered by third-party sites.
          </p>
        </div>

        <div className="disclaimer-card">
          <h2>4. Limitation of Liability</h2>
          <p>
            Under no circumstance shall QAura Tech Solutions be held liable
            for any direct, indirect, incidental, or consequential damages
            resulting from the use of our website or services.
          </p>
        </div>

        <div className="disclaimer-card">
          <h2>5. Consent</h2>
          <p>
            By using our website, you hereby consent to this Disclaimer
            and agree to its terms.
          </p>
        </div>

        <p className="legal-note">
          © 2026 QAura Tech Solutions. All Rights Reserved.
        </p>

      </div>
    </div>
  );
};

export default Disclaimer;