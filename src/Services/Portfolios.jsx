import React from "react";
import "../SerCss/Portfolios.css";

const Portfolios = () => {
  return (
    <div className="portfolio-section">

      {/* Background Blobs */}
      <div className="bg-blob blob1"></div>
      <div className="bg-blob blob2"></div>

      {/* HERO */}
      <div className="portfolio-hero">
        <span className="badge">Premium Portfolio Development</span>
        <h1>
          Build Your <span>Digital Identity</span>
        </h1>
        <p>
          We design stunning, modern and high-performance portfolio
          websites that help you attract recruiters, clients and opportunities.
        </p>
        <button className="primary-btn">Start Your Portfolio</button>
      </div>

      <div className="portfolio-container">

        {/* WHY PORTFOLIO */}
        <div className="portfolio-block">
          <h2>Why You Need a Portfolio</h2>
          <div className="grid-3">
            <div className="glass-card">
              <h4>🎯 Stand Out</h4>
              <p>Differentiate yourself from thousands of competitors.</p>
            </div>
            <div className="glass-card">
              <h4>💼 Build Trust</h4>
              <p>Showcase your skills, projects and achievements professionally.</p>
            </div>
            <div className="glass-card">
              <h4>🚀 Get Opportunities</h4>
              <p>Increase chances of internships, jobs and freelance projects.</p>
            </div>
          </div>
        </div>

        {/* WHAT WE PROVIDE */}
        <div className="portfolio-block">
          <h2>What We Provide</h2>
          <div className="grid-4">
            <div className="glass-card">Custom Design</div>
            <div className="glass-card">Responsive Layout</div>
            <div className="glass-card">SEO Optimization</div>
            <div className="glass-card">Contact Integration</div>
          </div>
        </div>

        {/* WHO WE BUILD FOR */}
        <div className="portfolio-block">
          <h2>Who We Build For</h2>
          <div className="grid-4">
            <div className="glass-card">👨‍💻 Developers</div>
            <div className="glass-card">🎨 Designers</div>
            <div className="glass-card">🎓 Students</div>
            <div className="glass-card">📈 Freelancers</div>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="portfolio-block">
          <h2>Why QAura Tech Solutions?</h2>
          <div className="grid-4">
            <div className="glass-card">⚡ Fast Delivery</div>
            <div className="glass-card">✨ Modern UI/UX</div>
            <div className="glass-card">🔒 Secure Hosting Support</div>
            <div className="glass-card">📈 Growth-Ready Structure</div>
          </div>
        </div>

        {/* PRICING */}
        <div className="portfolio-block">
          <h2>Pricing Plans</h2>
          <div className="pricing-grid">

            <div className="pricing-card">
              <h3>Starter</h3>
              <h4>₹3,999</h4>
              <ul>
                <li>3 Pages</li>
                <li>Responsive Design</li>
                <li>Basic Animations</li>
              </ul>
              <button>Select Plan</button>
            </div>

            <div className="pricing-card popular">
              <span className="popular-tag">Most Popular</span>
              <h3>Professional</h3>
              <h4>₹7,999</h4>
              <ul>
                <li>5 Pages</li>
                <li>Advanced Animations</li>
                <li>Admin Panel</li>
                <li>SEO Optimized</li>
              </ul>
              <button>Select Plan</button>
            </div>

            <div className="pricing-card">
              <h3>Elite</h3>
              <h4>₹14,999</h4>
              <ul>
                <li>Unlimited Pages</li>
                <li>Custom UI/UX</li>
                <li>CMS + Blog</li>
                <li>Priority Support</li>
              </ul>
              <button>Select Plan</button>
            </div>

          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="portfolio-block">
          <h2>Client Feedback</h2>
          <div className="grid-2">
            <div className="glass-card">
              “I received internship calls within a week after launching my portfolio.”
              <br />- Frontend Developer
            </div>
            <div className="glass-card">
              “Very modern design and smooth animations. Highly recommended!”
              <br />- Freelance Designer
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="portfolio-block">
          <h2>FAQ</h2>
          <div className="grid-3">
            <div className="glass-card">
              <h4>How long does it take?</h4>
              <p>5–10 days depending on selected plan.</p>
            </div>
            <div className="glass-card">
              <h4>Will I own the code?</h4>
              <p>Yes, full ownership is given to you.</p>
            </div>
            <div className="glass-card">
              <h4>Do you help with hosting?</h4>
              <p>Yes, we assist with deployment and domain setup.</p>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="final-cta">
          <h2>Ready to Launch Your Professional Portfolio?</h2>
          <button className="primary-btn">Get Started Now</button>
        </div>

      </div>
    </div>
  );
};

export default Portfolios;