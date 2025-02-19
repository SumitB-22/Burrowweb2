import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import './App.css';
import logo from './assets/Logo.jpg'; // Ensure this path is correct

const App = () => {
  useEffect(() => {
    // Set the website title
    document.title = "BurrowSpace";

    // Set the favicon dynamically
    const link = document.querySelector("link[rel~='icon']");
    if (!link) {
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.type = "image/png";
      newLink.href = logo; // Ensure this path is correct
      document.head.appendChild(newLink);
    } else {
      link.href = logo;
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
