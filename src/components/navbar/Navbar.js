import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './navbar.css'; // Asegúrate de tener el archivo Navbar.css
import { getAuth, signOut } from 'firebase/auth';
import firebaseApp from '../../firebase/Firebase';
import { useNavigate } from 'react-router';
import { doc, getDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { getUser } from '../../firebase/Firebase';

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { user } = useAuth();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  const themeClass = darkMode ? 'dark-mode' : '';

  //cierre sesión
  const [error, setError] = useState('');
  const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            // El usuario ya está autenticado, redirigir o mostrar opciones
            navigate('/login')
          } else {
            // No autenticado
          }
        });
    
        return () => {
          unsubscribe();
        };
    }, []); // Se ejecuta una vez al montar el componente


    const handleLogout = async () => {
        try {
          await signOut(auth);
          navigate('/');
        } catch (error) {
          console.error('Error al cerrar sesión:', error);
          setError('Error al cerrar sesión');
        }
    };

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
             {!user && (
               <li className="nav-item">
               <Link to="/login" className="nav-link">Iniciar Sesión</Link>
             </li>
            )}
          </ul>
        </div>
        <div className="d-flex justify-content-center align-items-center social-icons">
          <a href="#" className="text-white" onClick={toggleDarkMode}>
            <i className="fa-solid fa-circle-half-stroke"></i>
          </a>
          {/* Condición para mostrar el enlace de usuario solo si el usuario está autenticado */}
          {auth.currentUser && (
            <button className='btn btn-gray' onClick={handleLogout}>Cerrar Sesión</button>  
          )}
          {error && <p className='error-message'>{error}</p>}  
        </div>
      </div>
    </div>
  );
};

export default Navbar;