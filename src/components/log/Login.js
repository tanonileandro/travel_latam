import './Login.css';
import firebaseApp from '../../firebase/Firebase';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { getFirestore } from 'firebase/firestore';

const auth = getAuth(firebaseApp);

const Login = () => {
  const [error, setError] = useState('');
  const firebase = getFirestore(firebaseApp);
  const navigate = useNavigate();

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
      navigate("/");
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setError('Usuario no registrado. Regístrese a continuación.');
      } else {
        // Si ocurre otro tipo de error, puedes mostrar un mensaje genérico
        setError('Error al iniciar sesión. Inténtelo de nuevo más tarde.');
      }
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
    <div className='login-container'>
      <h1>"Iniciá sesión</h1>
      <form className='login-form' onSubmit={handlerSubmit}>
        <input 
        type="text"
        name='email'
        id='email'
        placeholder='Ingrese su email'
        />
        <input 
        type="password"
        name='password'
        id='password'
        placeholder='Ingrese su contraseña'
        />
        {error && <p className="error-message">{error}</p>}
        <button type='submit'>
          iniciar sesion
        </button>
      </form>
      <Link to="/singin">No tengo cuenta</Link>
    </div>
  );
};

export default Login;