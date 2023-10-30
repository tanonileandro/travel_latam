import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Asegúrate de tener el archivo Navbar.css

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="title-container">
        <h1 className="title">TravelLatam</h1>
      </div>
      <div className="nav-container d-flex justify-content-between">
        <div>
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/" className="nav-link">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">Sobre Nosotros</Link>
          </li>
          <li className="nav-item">
            <Link to="/singin" className="nav-link">Registrarte Gratis</Link>
          </li>   
        </ul>
        </div>
        <div className="button-container">
          <Link to="/login" className="btn btn-primary">Ingresar</Link>
        </div>
      </div>

    </div>
  );
}

export default Navbar;
