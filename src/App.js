import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Career from './pages/Career';
import './App.css';

const theme = {
  primary: '#000000',
  secondary: '#FFFFFF',
  accent: '#000000',
  text: '#FFFFFF'
};

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/career" element={<Career />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
