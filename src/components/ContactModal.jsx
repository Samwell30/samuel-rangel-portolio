import "../Modal.css";
import { useState } from 'react';

export default function ContactModal({ onClose }) {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
    };

    return (
        <div className="modal-overlay">
            <div
                className={`modal-content--contact${isClosing ? ' modal--closing' : ''}`}
                onAnimationEnd={() => { if (isClosing) onClose(); }}
            >
                <button className="close-button" onClick={handleClose}>X</button>
                <h2 className="contact__me">Contact Me</h2>
                <form>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea placeholder="Your Message" rows="4" />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}
