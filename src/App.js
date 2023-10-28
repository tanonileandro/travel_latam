import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/log/Login';
// import Singin from './components/log/Singin';
// import About from './components/about/About';
import Home from './components/home/Home';
// import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <div>
        <Home/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
    // <Router>
    //   {/* <Routes>
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/singin" element={<Singin />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/" element={<Home />} />
    //     <Route path="/cart" element={<Cart />} />
    //   </Routes> */}
    //   <Footer />
    // </Router>

  );
}

export default App;
