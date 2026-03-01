import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../static/Cancel.css";

const Cancel = () => {
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
    <div className="cancel-section">

      {/* Scroll Progress */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="cancel-container">
        <h1 className="cancel-title">Cancellation Policy</h1>
        <p className="cancel-date">Effective Date: February 2026</p>

        <div className="cancel-card">
          <h2>1. Course Cancellation</h2>
          <p>
            Users may request cancellation of a course enrollment
            within 7 days of purchase, provided significant course
            content has not been accessed.
          </p>
        </div>

        <div className="cancel-card">
          <h2>2. Subscription Cancellation</h2>
          <p>
            Subscription-based services can be cancelled at any time
            from the user dashboard. Access will remain active until
            the end of the current billing cycle.
          </p>
        </div>

        <div className="cancel-card">
          <h2>3. Auto-Renewal</h2>
          <p>
            Subscriptions may automatically renew unless cancelled
            before the next billing date. Users are responsible for
            managing their subscription settings.
          </p>
        </div>

        <div className="cancel-card">
          <h2>4. No Retroactive Cancellation</h2>
          <p>
            Cancellation requests submitted after billing has been
            processed will not be applied retroactively to previous
            charges.
          </p>
        </div>

        <div className="cancel-card">
          <h2>5. Contact for Cancellation Requests</h2>
          <p>
            For assistance, contact:
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

export default Cancel;