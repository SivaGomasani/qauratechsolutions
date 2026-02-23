import "../static/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Glow Background */}
      <div className="footer-glow glow1"></div>
      <div className="footer-glow glow2"></div>

      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <h2 className="footer-logo">QAura Tech Solutions</h2>
          <p>
            QAura Tech Solutions empowers students, startups, and enterprises
            with cutting-edge web development, AI solutions, branding, and
            career-focused digital services.
          </p>

          <div className="social-icons">
            <a href="/"><FaFacebookF /></a>
            <a href="/"><FaInstagram /></a>
            <a href="/"><FaLinkedinIn /></a>
            <a href="/"><FaYoutube /></a>
            <a href="/"><FaWhatsapp /></a>
            <a href="mailto:info@qauratechsolutions.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li><a href="/">Web & App Development</a></li>
            <li><a href="/">AI Solutions</a></li>
            <li><a href="/">E-Commerce Platforms</a></li>
            <li><a href="/">Branding & UI/UX Design</a></li>
            <li><a href="/">Interview Preparation</a></li>
          </ul>
        </div>

        {/* Legal & Policies */}
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="/">Terms & Conditions</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Refund Policy</a></li>
            <li><a href="/">Cancellation Policy</a></li>
            <li><a href="/">Disclaimer</a></li>
            <li><a href="/">Cookie Policy</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} QAura Tech Solutions. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
