import {useState, useEffect} from 'react'
import ItemList from './ItemList'
import {getFirestore, collection, getDocs } from 'firebase/firestore';


function ItemListContainer() {

  const[data,setData]= useState([]);
  
  useEffect(()=>{
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, 'Products');
    getDocs(queryCollection)
    .then(res=>setData(res.docs.map(p=>({id: p.id, ...p.data()}))));

    },[])
  
  return (
    <div>
      
      <ItemList data ={data} />  
      
    
      
    </div>
  )
}

export default ItemListContainer