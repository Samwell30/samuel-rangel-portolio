import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./Ui.jsx/Nav";
import ContactModal from "./components/ContactModal"; 
import About from "./components/About"; 
import Footer from "./components/Footer";

function App() {
  const [showContact, setShowContact] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav onContactClick={() => setShowContact(true)}
              onAboutClick={() => setShowAbout(true)} />
        <Routes>
          <Route path="/" element={<Home onAboutClick={() => setShowAbout(true)} />} />
        </Routes>
        {showAbout && <About onClose={() => setShowAbout(false)} />}
        {showContact && <ContactModal onClose={() => setShowContact(false)} />}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
