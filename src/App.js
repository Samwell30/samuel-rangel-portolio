import { useState } from "react";
import Home from "./components/Home";
import Nav from "./Ui.jsx/Nav";
import ContactModal from "./components/ContactModal";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

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
            This portfolio is to display my skills and enjoyment of building React apps and solving real-world problems.
            <br /> The projects below were created using React, Javascript, CSS, and HTML.
          </p>
          <div className="icons">
            <i class="fa-brands fa-react"></i>
            <i class="fa-brands fa-js"></i>
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css"></i>
          </div>
        </>
      );
    } else if (fromWhere === "home") {
      setAboutContent(
        <>
          <h2 className="modal__title">Hi There!</h2>
          <p className="modal__para">
            My name is Samuel Rangel. I am excited to go on this journey to become a developer.
            <br /> "adding short bio here...."
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
