import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container text-center">
        <div className="d-flexrow justify-content-center gap-4 mb-4">
          <div>
            <p className="text-sm mb-4 footer-text">Síguenos en redes sociales para obtener las últimas actualizaciones</p>
          </div>
          <div className="d-flex justify-content-center gap-4 mb-4">
            <a href="#" className="text-white"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <p className="mb-4 footer-contact">(123) 456-7890</p>
        <p className="mb-4 footer-address">123 Calle, Ciudad Viaje</p>
        <p className="text-xs footer-copyright">&copy; 2023 Todos los derechos reservados Travel Latam</p>
      </div>
    </footer>
  );
}

export default Footer;
