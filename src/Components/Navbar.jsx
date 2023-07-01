import React from "react";
import { Link } from "react-router-dom";
import { useDentistStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {dentistState, dentistDispatch} = useDentistStates()
  return (
    <nav>
      <h2>DH Odonto</h2>
      <div>
        <Link to='/home'>
          <h4>Home</h4>
        </Link>
        <Link to='/contact'>
          <h4>Contact</h4>
        </Link>
        <Link to='/dentist/:id'>
          <h4>Detail</h4>
        </Link>
        <Link to='/favs'>
          <h4>Favs</h4>
        </Link>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        {dentistState.theme ? <button style={{backgroundColor:'#12121296', color:'white'}} onClick={() => dentistDispatch({type: 'CHANGE_THEME', payload: dentistState.theme?false:true})}>🌙</button>:
        <button style={{backgroundColor:'white', color:'#12121296'}} onClick={() => dentistDispatch({type: 'CHANGE_THEME', payload: dentistState.theme?false:true})}>☀️</button>}
      </div>
    </nav>
  );
};

export default Navbar;
