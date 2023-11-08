import { Link } from 'react-router-dom'
import { db } from '../../firebase/Firebase';
import { doc, deleteDoc } from "firebase/firestore";

function Item({info}) {
  const onDeleteTravel = async(id) => {
    if (window.confirm('Seguro de que quiere eliminarlo?')){
      await deleteDoc(doc(db, "Products", id));
      console.log('eliminado');
    }
  };

  return (
    <div className='text-center'>
      <Link to={`Products/${info}`} className='producto'>
      <a href={info.image}><img src={info.image} width='300px' height='300px' alt='imgitem'/></a>
      </Link>
      <h1>{info.title} </h1>
      <p>{info.description}</p> 
      <button className='btn btn-dark' onClick={() => onDeleteTravel(info.id)}> Eliminar </button>
    </div>

  )
}

export default Item