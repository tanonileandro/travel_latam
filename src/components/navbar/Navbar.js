import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-container bg-dark text-white p-4">
      <h1 className="title mx-auto">TravelLatam</h1>
      <div className="nav-links">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/about" className="nav-link">Sobre Nosotros</Link>
        <Link to="/login" className="nav-link">Ingresar</Link>
        <Link to="/singin" className="nav-link">Registrarse gratis</Link>
      </div>
    </div>
  );
}

export default Navbar;

  
