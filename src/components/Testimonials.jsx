import React from "react";
import "../static/Testimonials.css";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Software Developer",
      message:
        "QAura Tech Solutions helped me build a strong portfolio and crack my first IT job. Their guidance is next level!",
    },
    {
      name: "Priya Reddy",
      role: "UI/UX Designer",
      message:
        "Amazing experience! The branding and resume support completely transformed my professional profile.",
    },
    {
      name: "Karthik Verma",
      role: "Full Stack Developer",
      message:
        "Their interview preparation and real-time project support gave me confidence to attend top company interviews.",
    },
    {
      name: "Sneha Patel",
      role: "Entrepreneur",
      message:
        "They developed my business website beautifully. Clean design, smooth performance, and great support.",
    },
  ];

  return (
    <section className="testimonials-section" id="testimonials">

      {/* Glow Effects */}
      

      <div className="testimonials-container">
        <h1>What Our Clients Say</h1>
        <h5>Real feedback from professionals who worked with QAura Tech Solutions.</h5>

        <div className="testimonial-slider">
          <div className="testimonial-track">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div key={index} className="testimonial-card">

                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="testimonial-message">"{item.message}"</p>

                <div className="testimonial-user">
                  <h3>{item.name}</h3>
                  <span>{item.role}</span>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
