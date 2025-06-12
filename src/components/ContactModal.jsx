import "../Modal.css";
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

export default function ContactModal({ onClose }) {
    const [isClosing, setIsClosing] = useState(false);
    const form = useRef();
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(null);

    const handleClose = () => {
        setIsClosing(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        console.log('Submitting form...');
        emailjs.sendForm(
            'service_itvjedi',
            'template_5cttofn',
            form.current,
            'Veg1CcRKxOFyiOH7O'
        )
            .then((result) => {
                console.log('Email sent:', result);
                setSent(true);
                form.current.reset();
            })
            .catch((err) => {
                setError('Failed to send. Please try again.');
                console.log('EmailJS error:', err);
            });
    };

    return (
        <div className="modal-overlay">
            <div
                className={`modal-content--contact${isClosing ? ' modal--closing' : ''}`}
                onAnimationEnd={() => { if (isClosing) onClose(); }}
            >
                <button className="close-button" onClick={handleClose}>X</button>
                <h2 className="contact__me">Contact Me</h2>
                {sent ? (
                    <p>Thank you! Your message has been sent.</p>
                ) : (
                    <form ref={form} onSubmit={handleSubmit}>
                        <input type="text" name="user_name" placeholder="Your Name" required />
                        <input type="email" name="user_email" placeholder="Your Email" required />
                        <textarea name="message" placeholder="Your Message" rows="4" required />
                        <button type="submit">Send</button>
                        {error && <div className="error">{error}</div>}
                    </form>
                )}
            </div>
        </div>
    );
}