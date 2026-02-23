import React, { useState } from "react";
import "../static/Contact.css";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendToWhatsApp = () => {
    const { name, phone, message } = formData;

    if (!name || !phone || !message) {
      alert("Please fill all fields");
      return;
    }

    const whatsappNumber = "917093782135"; // Use primary number
    const text = `Hello QAura Tech Solutions,%0A
Name: ${name}%0A
Phone: ${phone}%0A
Message: ${message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <section className="contact-section" id="contact">
      
    

      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-info">
          <h1>Contact QAura Tech Solutions</h1>
          <p>
            Have a project, career enquiry, or business requirement?
            Let’s build your digital future together.
          </p>

          <div className="contact-details">
            <p><FaPhoneAlt /> +91 7093782135</p>
            <p><FaPhoneAlt /> +91 6281485302</p>
            <p><FaEnvelope /> qauratechsolutions@gmail.com</p>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="contact-form">
          <h2>Send an Enquiry</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Your WhatsApp Number"
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            onChange={handleChange}
          ></textarea>

          <button onClick={sendToWhatsApp}>
            <FaWhatsapp /> Send via WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
};

export default Contact;
