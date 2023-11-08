import React, { createContext, useContext, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from '../firebase/Firebase';
import { doc, getDoc, getFirestore } from 'firebase/firestore';


const AuthContext = createContext();
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
       // El usuario está autenticado. Ahora, obtén su UID.
       const uid = currentUser.uid;

      // Accede a la información de Firestore o la base de datos en tiempo real de Firebase para obtener el rol del usuario.
      const userRef = doc(firestore, 'users', uid);

      getDoc(userRef)
        .then((doc) => {
          if (doc.exists()) {
            const userData = doc.data();
            const userRole = userData.rol;
            setUser({ ...currentUser, role: userRole });
            console.log(userData);
          } else {
            // El documento de usuario no existe en la base de datos
            setUser(currentUser);
          }
        })
        .catch((error) => {
          console.error('Error al obtener el rol del usuario:', error);
        });
    } else {
      setUser(null);
    }
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
