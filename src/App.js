import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Log/Login';
import Singin from './components/Log/Singin';
import About from './components/about/About';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/singin" element={<Singin/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
