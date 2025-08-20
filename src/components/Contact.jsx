import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
          <form className="contact-form" onSubmit={handleSubmit}>
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
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;