import React from 'react';
import ItemListContainer from './ItemListContainer';
import './home.css'
import { useNavigate } from 'react-router';


const Home = () => {
  const navigator = useNavigate();
  const toLinks = () => {
    navigator('/Links')
  };

  return (
    <div className="text-center mt-1">
      <h2 className="text-xl font-weight-bold mb-8 title2">Promociones especiales</h2>
      <button className="btn btn-dark" onClick={toLinks}> AÑADIR/MODIFICAR</button> 
      <div className="promotion-card-container">
        <ItemListContainer/>
      </div>
      
    </div>
  ); 
}

export default Home;
