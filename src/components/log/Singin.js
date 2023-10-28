import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import firebaseApp from '../../firebase/Firebase';

const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const Singin = () => {
  //estados de los inputs 
  const [error, setError] = useState('');
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const navigate = useNavigate();

  const registerUser = async () => {
    const infoUser = await createUserWithEmailAndPassword(
      auth, email, password
    );
    console.log(infoUser.user.uid);
    const docRef = doc(firestore,  `users/${infoUser.user.uid}`);
    setDoc(docRef, {
      email: email,
      rol: 'cliente', //establecemos este rol como predeterminado
      password: password
    });
  }

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
        navigate("/");
      })
      .catch((error) => {
        setError('Error al registrar el usuario');
        console.log(error);
      });
  }

  const validateEmail = (email) => {
    const emailR = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailR.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  return (
    <div>
      <div className='singin-container'>
        <h1> Registrate </h1>
        <form className='singin-form'onSubmit={handlerSubmit}>
          <input 
          type="text"
          name='email'
          id='email'
          placeholder='Ingrese su email'
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          />
          <input 
          type="password"
          name='password'
          id='password'
          placeholder='Ingrese su contraseña'
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          />
          <button type='submit'>
            Registrate
          </button>
        </form>
        <Link to="/login">Tengo cuenta</Link>
      </div>
    </div>
  )
}

export default Singin;