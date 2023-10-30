import React from 'react';
import './about.css';

const About = () => {
  return (
    <div>
      <div className='text-center'>
        <h2 className="mb-4 text-xl font-weight-bold mb-8 title2 ">Acerca de Nosotros</h2> 
      </div>
      <div className="about-container container py-5">
        <p className="mb-4">
          En TravelLatam, creemos en la belleza de Latinoamérica y en su diversidad cultural. Nuestra pasión es brindar a los viajeros la oportunidad de explorar y sumergirse en la riqueza de esta región.
        </p>
        <p className="mb-4">
          Con más de 5 años de experiencia en la industria del turismo, hemos diseñado cuidadosamente nuestros viajes para ofrecer experiencias auténticas y enriquecedoras. Nuestro enfoque se centra en:
        </p>
        <ul className="mb-4">
          <li>Descubrir la autenticidad de cada destino.</li>
          <li>Promover el turismo sostenible y responsable.</li>
          <li>Conectar a nuestros viajeros con las comunidades locales.</li>
        </ul>
        <p className="mb-4">
          Nuestros viajes son una oportunidad para explorar la cultura, la gastronomía, la historia y la belleza natural de Latinoamérica. Creemos que la mejor manera de conocer un lugar es a través de las personas que lo habitan y sus tradiciones.
        </p>
        <p>
          Únete a nosotros en una aventura inolvidable y descubre la auténtica riqueza de Latinoamérica. ¡Esperamos que te unas a nuestra comunidad de viajeros apasionados por explorar y vivir nuevas experiencias!
        </p>
      </div>
    </div>
  )
}

export default About;

