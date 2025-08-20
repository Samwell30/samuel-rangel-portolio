import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com"; 

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null); 
  const form = useRef(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    emailjs
      .sendForm(
        "service_itvjedi",
        "template_5cttofn",
        form.current,
        "Veg1CcRKxOFyiOH7O"
      )
      .then((result) => {
        setSubmitted(true);
        form.current.reset();
      })
      .catch((err) => {
        setError("Failed to send. Please try again.");
        console.log("EmailJS error:", err);
      });
  };

  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="contact-title">Contact Me</h2>
        {submitted ? (
          <p className="contact-success">Thank you! I'll get back to you soon.</p>
        ) : (
          <form className="contact-form" ref={form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="contact-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="contact-input"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="contact-textarea"
              rows={5}
            />
            <button type="submit" className="btn">Send Message</button>
            {error && <p className="contact-error">{error}</p>}
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;