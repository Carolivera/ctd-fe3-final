import React from "react";
import { Link } from 'react-router-dom';
import { useDentistStates } from '../Components/utils/global.context'

const Card = ({ dentist }) => {
  const {dentistState, dentistDispatch} = useDentistStates()

  const findDentist = dentistState.favs.find(dentista => dentista.id === dentist.id)
  const addFav = () =>{
    if(!findDentist){
      dentistDispatch({type: 'ADD_FAV', payload: dentist})
    }else{
      const filteredFavs = dentistState.favs.filter(dentista => dentista.id !== dentist.id)
      dentistDispatch({type: 'DELETE_FAV', payload: filteredFavs})
    }

    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          <Link to={'/dentist/' + dentist.id}>
            <img src="/images/doctor.jpg" alt="" />
            <ul>
              <li>Nombre: {dentist.name}</li>
              <li>Usuario: {dentist.username}</li>
            </ul>           
          </Link>
          <button onClick={addFav} className="favButton">{findDentist ? '💛' : '❤️'}</button> 
    </div>
  );
};

export default Card;
