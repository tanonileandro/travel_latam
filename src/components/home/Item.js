import { Link } from 'react-router-dom';
import { db } from '../../firebase/Firebase';
import { doc, deleteDoc } from "firebase/firestore";
import './item.css';

function Item({info}) {
  const onDeleteTravel = async(id) => {
    if (window.confirm('¿Está seguro de que quiere eliminarlo?')){
      await deleteDoc(doc(db, "Products", id));
      console.log('Eliminado');
      alert('Actualice la página para ver cambios');
    }
  };

  return (
    <div className='card item-card'>
      <Link to={`Products/${info}`} className='producto'>
        <img src={info.image} className='card-img-top' alt='imgitem' />
      </Link>
      <div className='card-body'>
        <h5 className='card-title'>{info.title}</h5>
        <p className='card-text'>{info.description}</p>
        <button className='btn btn-danger' onClick={() => onDeleteTravel(info.id)}>Eliminar</button>
      </div>
    </div>
  )
}

export default Item;
