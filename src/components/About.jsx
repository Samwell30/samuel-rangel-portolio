import '../Modal.css';
import { useState } from 'react';

export default function AboutModal({ onClose }) {
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
        <h2 className='modal__title'>About Me</h2>
        <p className='modal__para'>
          Hello! I'm <strong>Samuel Rangel</strong>, a frontend developer passionate about creating responsive,
          user-friendly websites using React. I love working on creative projects and continuously
          learning new technologies.
          <br />
          In my free time, I enjoy reading, exploring design trends, and collaborating on open-source projects.
        </p>
        <div className='icons'>           
        <i class="fa-brands fa-react"></i>
        <i class="fa-brands fa-js"></i>
        <i class="fa-brands fa-html5"></i>
        <i class="fa-brands fa-css"></i>
        </div>
      </div>
    </div>
  );
}
