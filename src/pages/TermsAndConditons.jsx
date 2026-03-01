import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../static/Terms.css";

const TermsConditions = () => {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress =
        (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="terms-section">

      {/* Scroll Progress */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="terms-container">
        <h1 className="terms-title">Terms & Conditions</h1>
        <p className="terms-date">
          Effective Date: February 2026
        </p>

        <div className="terms-card">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using QAura Tech Solutions platform,
            you agree to comply with and be bound by these
            Terms and Conditions.
          </p>
        </div>

        <div className="terms-card">
          <h2>2. Use of Services</h2>
          <p>
            Users agree to use the platform only for lawful purposes.
            Unauthorized access, misuse, or disruption of services
            is strictly prohibited.
          </p>
        </div>

        <div className="terms-card">
          <h2>3. Account Responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality
            of your account credentials and for all activities
            that occur under your account.
          </p>
        </div>

        <div className="terms-card">
          <h2>4. Course & Content Ownership</h2>
          <p>
            All course materials, designs, branding, and platform
            content are the intellectual property of QAura Tech Solutions.
            Redistribution or reproduction is prohibited.
          </p>
        </div>

        <div className="terms-card">
          <h2>5. Payments & Refunds</h2>
          <p>
            All payments made for courses or services are subject
            to our refund policy. Unauthorized chargebacks
            may result in account suspension.
          </p>
        </div>

        <div className="terms-card">
          <h2>6. Limitation of Liability</h2>
          <p>
            QAura Tech Solutions shall not be liable for any indirect,
            incidental, or consequential damages arising from the use
            of our services.
          </p>
        </div>

        <div className="terms-card">
          <h2>7. Termination</h2>
          <p>
            We reserve the right to suspend or terminate accounts
            that violate our policies without prior notice.
          </p>
        </div>

        <div className="terms-card">
          <h2>8. Changes to Terms</h2>
          <p>
            We may update these Terms at any time. Continued use
            of the platform constitutes acceptance of the revised terms.
          </p>
        </div>

        <div className="terms-card">
          <h2>9. Contact Information</h2>
          <p>
            For questions regarding these Terms:
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

export default TermsConditions;