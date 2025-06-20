import { useState } from "react";
import Home from "./components/Home";
import Nav from "./Ui.jsx/Nav";
import ContactModal from "./components/ContactModal";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import fire from "./assets/icons8-firebase-24.png"

function App() {
  const [showContact, setShowContact] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [aboutContent, setAboutContent] = useState(null);

  const openAboutModal = (fromWhere) => {
    if (fromWhere === "nav") {
      setAboutContent(
        <>
          <h2 className="modal__title">About this portfolio</h2>
          <p className="modal__para">
            This portfolio is to display my skills and enjoyment of building React apps.
            <br /> The projects below were created using React, Firebase Javascript, CSS, and HTML.
          </p>
          <div className="icons">
            <i class="fa-brands fa-react"></i>
            <i class="fa-brands fa-js"></i>
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css"></i>            
            <img src={fire} alt="Firebase icon" className="firebase-icon" />
          </div>
        </>
      );
    } else if (fromWhere === "home") {
      setAboutContent(
        <>
          <h2 className="modal__title">Hi There!</h2>
          <p className="modal__para">
            I am an aspiring developer with a passion for building and learning, driven by a deep 
            understanding of human behavior. I have an MA in Psychology and experience as a 
            counselor has equipped me with strong analytical, problem-solving, 
            and communication skills, which I'm now channeling into creating impactful software 
            solutions. I'm excited to explore opportunities where I can combine my empathy for 
            user needs with my growing technical expertise in React, JavaScript, CSS, HTML and 
            whatever else peaks my interest.
          </p>
        </>
      );
    }
    setIsAboutOpen(true);
  };

  return (
    <div className="App">
      <Nav
        onContactClick={() => setShowContact(true)}
        onAboutClick={() => openAboutModal("nav")}
      />
      <Home onAboutClick={() => openAboutModal("home")} />
      {isAboutOpen && (
        <Modal onClose={() => setIsAboutOpen(false)} content={aboutContent} />
      )}
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
      <Footer onContactClick={() => setShowContact(true)} />
    </div>
  );
}

export default App;
