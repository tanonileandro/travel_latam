import React from 'react';
import Home from './components/home/Home';
import About from './components/about/About';
import Login from './components/log/Login';
import Signing from './components/log/Signing';
import Navbar from "./components/navbar/Navbar";
import Cart from './components/cart/Cart'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/footer/Footer';
import { AuthProvider } from './contexts/AuthContext'; 
import ItemListContainer from './components/home/ItemListContainer';


const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider> {/* Agregar AuthProvider para envolver todos los componentes */}
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signing" element={<Signing />} />
            <Route path="/cart" element={<Cart />} /> {/* Agregar la ruta para el Carrito */}
            <Route path="/list" element={<ItemListContainer />} /> 
          </Routes>
        </div>
        <div>
          <Footer/>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
