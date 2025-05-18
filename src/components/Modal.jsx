import '../Modal.css';
import { useState } from 'react';

export default function Modal({ onClose, content }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
  };

  return (
    <div className="modal-overlay">
      <div
        className={`modal-content--about${isClosing ? ' modal--closing' : ''}`}
        onAnimationEnd={() => { if (isClosing) onClose(); }}
      >
        <button className="close-button" onClick={handleClose}>X</button>
        {content}
      </div>
    </div>
  );
}