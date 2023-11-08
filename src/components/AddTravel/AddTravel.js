import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import '../log/StylesLog.css'


const AddTravel = (props) => {
    const navigate = useNavigate();
    const initialState = {
        image: "",
        title: "",
        description: "",
    };
    const [travel, setTravel] = useState(initialState);
    
    
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setTravel({...travel, [name]: value});
        
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addOrEditTravel(travel);
        setTravel({...initialState});
        alert('Redirigiendo a inicio para ver cambios');
        navigate('/');
        
    };

  return (
    <div className="col-md-4 offset-md-4">
      <form onSubmit={handleSubmit} className="card card-body bg-secondary">
        <label htmlFor="image">Pega URL de la imagen</label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="https://someurl.xyz"
            value={travel.image}
            name="image"
            onChange={handleInputChange}
          />
        </div>

        <label htmlFor="title">Titulo del viaje:</label>
        <div className="input-group">
          <input
            type="text"
            value={travel.title}
            name="title"
            placeholder="Titulo del viaje"
            className="form-control mb-3"
            onChange={handleInputChange}
          />
        </div>

        <label htmlFor="description">Description:</label>
        <textarea
          rows="3"
          className="form-control mb-3"
          placeholder="Write a Description"
          name="description"
          value={travel.description}
          onChange={handleInputChange}
        ></textarea>

        <button
          className="btn btn-primary btn-block"
          disabled={!travel.image || !travel.title }
        >
            Listo!
        </button>
      </form>
    </div>
  )
}

export default AddTravel