import React, { useState } from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const [user, setUser] = useState({
    name: '',
    email: ''
  });
  
  const [error, setError] = useState(false);
  const [confirm, setConfirm] = useState(false);
  
  const validarNombre = (nombre) => {
    const nombreSinEspacio = nombre.trim();
    if (nombreSinEspacio.length >= 5){
      return true;
    }
    else {
      return false;
    }
  }
  
  const validarEmail = (email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(email)){
      return true
    }
    else{
      return false
    }
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const userValido = validarNombre(user.name);
    const emailValido = validarEmail(user.email);
  
    if(userValido && emailValido){
      console.log(user.name + ' ' + user.email)
      setError(false)
      setConfirm(true)
    }
    else{
      setError(true)
      setConfirm(false)
    }
  }
  
  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form setUser={setUser} handleSubmit={handleSubmit}/>
      {error && 'Por favor, verifique su información nuevamente.'}
      {confirm && <div>¡Gracias, {user.name}, te contactaremos cuanto antes vía mail!</div>}
    </div>
  )
}

export default Contact