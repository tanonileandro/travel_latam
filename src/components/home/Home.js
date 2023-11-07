import React from 'react';
import constantsImages from "../../constants/images";
import { useNavigate } from 'react-router';
import './home.css'

const PromotionCard = ({ image, title, description }) => {
  // Dividir la descripción en puntos individuales
  const points = description.split(' + ');

  return (
    <div className="m-2 border rounded shadow promotion-card">
      <img
        src={image}
        alt={title}
        className="w-100 h-auto"
      />
      <div className="p-4">
        <h2 className="text-lg font-weight-bold title-card">{title}</h2>
        <ul className="list-unstyled">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const promotions = [
    {
      image: constantsImages.cor2,
      title: 'Córdoba | VERANO 2024',
      description: 'Aéreo desde Rosario + traslados en destino + 4 noches en el Azur Real Hotel Boutique con desayuno + Seguro médico. Salida 14 de enero $ 219.930. Precio por persona. Consultar por otra hotelería.',
    },
    {
      image: constantsImages.mdq,
      title: 'MAR DEL PLATA | VERANO 2024',
      description: 'Bus semicama + Hotel Antranik + Desayuno. Salidas 5, 12, 19 y 26 de enero y 2 de febrero (7 nts) $ 151.000/ 1, 12, 17 y 22 de febrero (5 nts) $119.150/ 18 y 22 de febrero (5 nts) $ 120.500. Salidas especiales carnaval: 6 de febrero (6 nts) $ 134.500/ 9 de febrero (3 nts) $ 90.000. Precios por persona.',
    },
    {
      image: constantsImages.mendoza,
      title: 'MENDOZA | VERANO 2024',
      description: 'Bus semicama + 5 noches de alojamiento en el Hotel Condor Suites con desayuno. Excursiones: City tour - bodega + olivícola - Termas de Cacheuta (no incluye ingreso). Salidas 9, 14 y 22 de enero $ 160.500. Precio por persona.',
    },
    {
      image: constantsImages.patago,
      title: 'PATAGONIA | VERANO 2024',
      description: 'Aéreos desde Rosario + 4 Noches de alojamiento + Traslados IN/OUT + Desayuno + Excursiones: Visita al Glaciar Perito Moreno con vianda (no incluye entrada) y Navegación de SAFARI NAUTICO El Chaltén Full Day con vianda + Asistencia Medica. Salidas enero y febrero desde $ 285.639. Precio por persona.',
    },
    {
      image: constantsImages.cataratas,
      title: 'CATARATAS AÉREO | VERANO 2024',
      description: 'Aéreo desde Rosario + traslados en destino + 4 noches en el Hotel Orquideas con desayuno + Cataratas Argentinas y Cataratas Brasileras (No incluye ingresos) + Seguro médico. Salida 14 de enero $ 219.930. Precio por persona. Consultar por otra hotelería.',
    },
    {
      image: constantsImages.bariloche,
      title: 'BARILOCHE | VERANO 2024',
      description: 'Aéreo desde Rosario + Traslados en destino + 5 noches de alojamiento con desayuno + circuito chico + seguro médico. Salidas 4, 14 y 28 de enero $ 314.189. Precio por persona.',
    },
  ];

  const pairedPromotions = [];
  for (let i = 0; i < promotions.length; i += 2) {
    pairedPromotions.push(promotions.slice(i, i + 2));
  }

  return (
    <div className="text-center mt-1">
      <h2 className="text-xl font-weight-bold mb-8 title2">Promociones especiales</h2>
      <div className="promotion-card-container">
        {pairedPromotions.map((pair, index) => (
          <div key={index} className="d-flex justify-content-center ">
            {pair.map((promo, innerIndex) => (
              <PromotionCard key={innerIndex} {...promo} />
            ))}
          </div>
        ))}
      </div>
      
    </div>
  ); 
}

export default Home;
