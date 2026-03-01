import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../static/Refund.css";

const RefundPolicy = () => {
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
    <div className="refund-section">

      {/* Scroll Progress */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="refund-container">
        <h1 className="refund-title">Refund & Cancellation Policy</h1>
        <p className="refund-date">Effective Date: February 2026</p>

        <div className="refund-card">
          <h2>1. General Policy</h2>
          <p>
            At QAura Tech Solutions, we strive to deliver high-quality
            educational services. Please read this policy carefully
            before making any purchase.
          </p>
        </div>

        <div className="refund-card">
          <h2>2. Course Refund Eligibility</h2>
          <p>
            Refund requests may be considered within 7 days of
            purchase, provided the user has not completed more
            than 20% of the course content.
          </p>
        </div>

        <div className="refund-card">
          <h2>3. Non-Refundable Cases</h2>
          <ul>
            <li>Courses accessed beyond 7 days</li>
            <li>More than 20% course completion</li>
            <li>Downloadable digital materials</li>
            <li>Discounted or promotional purchases</li>
          </ul>
        </div>

        <div className="refund-card">
          <h2>4. Subscription Cancellation</h2>
          <p>
            Users may cancel subscriptions at any time. However,
            no partial refunds will be provided for unused
            subscription periods.
          </p>
        </div>

        <div className="refund-card">
          <h2>5. Processing Time</h2>
          <p>
            Approved refunds will be processed within 7–10 business days
            to the original payment method.
          </p>
        </div>

        <div className="refund-card">
          <h2>6. Contact for Refund Requests</h2>
          <p>
            To request a refund, contact:
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

export default RefundPolicy;