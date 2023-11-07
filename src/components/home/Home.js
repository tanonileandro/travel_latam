import React from 'react';
import ItemListContainer from './ItemListContainer';
import './home.css'


const Home = () => {

  return (
    <div className="text-center mt-1">
      <h2 className="text-xl font-weight-bold mb-8 title2">Promociones especiales</h2>
      <div className="promotion-card-container">
        <ItemListContainer/>
      </div>
      
    </div>
  ); 
}

export default Home;
