import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./Ui.jsx/Nav";
import ContactModal from "./components/ContactModal";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import degree  from "./assets/MA Degree_2020.jpg";

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
            <br/> The projects below were created using React, Javascript, CSS, and HTML.
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
            <br/> My journey here has been ... I went to graduate school and recieved a Master's in <a src={degree}>Psychology</a>. Then I had 
            <br/> two daughters and life got went on its way. Throughout that time, being a developer has always been in the back of my mind.
            Early this year, I found Frontend Development and they opened my eyes to my ultimate goal.
          </p>
        </>
      );
    }
    setIsAboutOpen(true);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Nav
          onContactClick={() => setShowContact(true)}
          onAboutClick={() => openAboutModal("nav")}
        />
        <Routes>
          <Route
            path="/"
            element={<Home onAboutClick={() => openAboutModal("home")} />}
          />
        </Routes>
        {isAboutOpen && (
          <Modal onClose={() => setIsAboutOpen(false)} content={aboutContent} />
        )}
        {showContact && <ContactModal onClose={() => setShowContact(false)} />}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
