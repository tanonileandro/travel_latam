import React from 'react'
import AddTravel from './AddTravel'
import { db } from '../../firebase/Firebase';
import { collection, addDoc } from "firebase/firestore";

const Links = () => {

  const addOrEditTravel = async({image, title, description}) => { //los datos que quiero guardar
    //await db.collection('imagenes').doc().set(travelObj) //guarda los datos en la base
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "Products"), {
        image: image,
        title: title,
        description: description,
    });
    console.log("Document written with ID: ", docRef.id);
  };

  return (
    <div>
        <h1>Agrega un viaje</h1>
        <AddTravel addOrEditTravel={addOrEditTravel}/>
    </div>
  )
}

export default Links