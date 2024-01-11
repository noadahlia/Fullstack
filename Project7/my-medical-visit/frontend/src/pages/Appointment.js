import React, { useState } from 'react';
import '../css/Appointment.css';
import { FaTrash } from 'react-icons/fa';


const Appointment = (props) => {
  const [id, setId] = useState(props.id);

  const handleClickDelete = async () => {
    try {
      //console.log(id);
      const response =  await fetch(`http://localhost:3001/appointment/${id}`, {
          method: "DELETE",
          mode: "cors"
      })
      if (response.ok) {
        const jsonResponse = await response.json();
        props.delete(id);
      }
      else throw new Error('Request failed of delete todo');
    } catch (error) {
        console.log("Error:", error);
    }  
    
  } 

  // Personnalisez le contenu ici
  return (
    <div className='appointment'>
      <div className='title'>
        <h4>Dr {props.doctor_name}</h4>
        <label>Speciality : {props.speciality_name}</label>
      </div>
      <div className='date'>
        <h4>{props.date}</h4>
        <label>{props.hour}</label>
      </div>
      <div className='address'>
        <h4>Address :</h4>
        <label>{props.doctor_address}</label>
      </div>
      <div className="icon" onClick={handleClickDelete}>
          <FaTrash />
      </div>
    </div>
  );
};

export default Appointment;
