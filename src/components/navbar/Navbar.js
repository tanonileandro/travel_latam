import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './navbar.css'; // Asegúrate de tener el archivo Navbar.css

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { user } = useAuth();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const themeClass = darkMode ? 'dark-mode' : '';

  return (
    <div className={`navbar-container ${themeClass}`}>
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
            {/* Condición para mostrar el enlace de registro solo si el usuario no está autenticado */}
            {!user && (
              <li className="nav-item">
                <Link to="/Signing" className="nav-link">Registrarte Gratis</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="d-flex justify-content-center align-items-center social-icons">
          <a href="#" className="text-white" onClick={toggleDarkMode}>
            <i className="fa-solid fa-circle-half-stroke"></i>
          </a>
          {/* Condición para mostrar el enlace de usuario solo si el usuario está autenticado */}
          {user && (
            <Link to="/profile" className="text-white">
              <i className="fa-solid fa-user"></i>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
