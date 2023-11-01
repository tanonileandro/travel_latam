import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';
import firebaseApp from '../../firebase/Firebase';
import './StylesLog.css'

const Signing = () => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const firestore = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  const registerUser = async () => {
    const infoUser = await createUserWithEmailAndPassword(auth, email, password);

    const docRef = doc(firestore, `users/${infoUser.user.uid}`);
    await setDoc(docRef, {
      email: email,
      rol: 'cliente',
      password: password,
    });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setError('Ingresa un email válido');
      return;
    }

    if (!validatePassword(password)) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    registerUser()
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        setError('Error al registrar el usuario');
        console.error(error);
      });
  };

  const validateEmail = (email) => {
    const emailR = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailR.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  return (
    <div className="container mt-1">
      <h2 className="mb-4 text-xl font-weight-bold mb-8 title2 text-center">¡Regístrate Gratis!</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handlerSubmit}>
                <div className="mb-3">
                  <label htmlFor='email' className='form-label'>Ingrese su Correo Electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor='password' className='form-label'>Elija una Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <div className="alert alert-danger mb-3">{error}</div>}
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-secondary">
                    Regístrate
                  </button>
                </div>
              </form>
              <p className="text-center mt-3">
                ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signing;
