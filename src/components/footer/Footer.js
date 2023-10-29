import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-1">
      <div className="container text-center">
        <div className="mb-4">
          <p className="text-sm footer-text">Síguenos en redes sociales para obtener las últimas actualizaciones</p>
          <div className="d-flex justify-content-center gap-4 social-icons">
            <a href="#" className="text-white"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="footer-contact">(123) 456-7890</p>
          <p className="footer-address">123 Calle, Ciudad Viaje</p>
        </div>

        <p className="text-xs footer-copyright">&copy; 2023 Todos los derechos reservados Travel Latam</p>
      </div>
    </footer>
  );
}

export default Footer;

