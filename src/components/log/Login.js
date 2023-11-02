import React, { useState, useEffect } from 'react';
import firebaseApp from '../../firebase/Firebase';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import './StylesLog.css';

const auth = getAuth(firebaseApp);

const Login = () => {
  const [error, setError] = useState('');
  const firebase = getFirestore(firebaseApp);
  const navigate = useNavigate();
  /*
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // El usuario ya está autenticado, redirigir o mostrar opciones
        navigate('/login');
      } else {
        // No autenticado
      }
    });

    return () => {
      unsubscribe();
    };
  }, []); // Se ejecuta una vez al montar el componente*/

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (!validateEmail(email)) {
      setError('Ingresa un email válido');
      return;
    }

    if (!validatePassword(password)) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Sign In Success');
      navigate("/");
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setError('Usuario no registrado. Regístrese a continuación.');
      } else {
        setError('Error al iniciar sesión. Inténtelo de nuevo más tarde.');
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  return (
    <div className='container mt-1 log'>
      <h2 className="mb-4 text-xl font-weight-bold mb-8 title2 text-center">Iniciar Sesión</h2>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-body'>
              <form onSubmit={handlerSubmit}>
                <div className='mb-3'>
                  <label htmlFor='email' className='form-label'>Ingrese su Correo Electrónico</label>
                  <input type='email' className='form-control' id='email' required />
                </div>
                <div className='mb-3'>
                  <label htmlFor='password' className='form-label'>Contraseña</label>
                  <input type='password' className='form-control' id='password' required />
                </div>
                {error && <p className='error-message'>{error}</p>}
                <button type='submit' className='btn btn-secondary w-100'>Iniciar Sesión</button>
              </form>
              {/* Mostrar la opción de cerrar sesión si el usuario está autenticado 
              {auth.currentUser && (
                <div>
                  <p className='text-center mt-3'>
                    ¿Ya estás logeado? <button onClick={handleLogout}>Cerrar Sesión</button>
                  </p>
                </div>
              )}*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;




