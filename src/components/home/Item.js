import { Link } from 'react-router-dom'

function Item({info}) {

 

  return (
    <>
     <Link to={`Products/${info}`} className='producto'>
     <a href={info.image}><img src={info.image} width='300px' height='300px' alt='imgitem'/></a>
     </Link>
    <h1>{info.title} </h1>
    <p>{info.description}</p> 
    </>

  )
}

export default Item