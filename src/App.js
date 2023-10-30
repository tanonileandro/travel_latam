import React from 'react';
import Home from './components/home/Home';
import About from './components/about/About';
import Login from './components/log/Login';
import Singin from './components/log/Singin';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singin" element={<Singin />} />
        </Routes>
      </div>
      <div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

