import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/fontawesome-free";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container text-center">
        <div className="d-flex justify-content-center gap-4 mb-4">
          <a href="#" className="text-white text-xl">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="text-white text-xl">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-white text-xl">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-white text-xl">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <p className="text-sm mb-4">Síguenos en redes sociales para obtener las últimas actualizaciones</p>
        <p className="mb-4">(123) 456-7890</p>
        <p className="mb-4">123 Calle, Ciudad Viaje</p>
        <p className="text-xs">&copy; 2023 Todos los derechos reservados Travel Latam</p>
      </div>
    </footer>
  );
}

export default Footer;
