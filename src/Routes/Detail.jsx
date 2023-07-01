import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDentistStates } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
   // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {dentistState, dentistDispatch} = useDentistStates()
  const {id} = useParams()
  const urlDentist = 'https://jsonplaceholder.typicode.com/users/' + id

  useEffect(() => {
    axios(urlDentist)
    .then(res => {
      dentistDispatch({type: 'GET_DENTIST', payload: res.data})
    })
  },[])

  return (
    <>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h1>Detail Dentist id: {dentistState.dentist.id}</h1>
      <table>
        <tr>
          <th>Nombre</th>
          <td>{dentistState.dentist.name}</td>
        </tr>
        <tr>
          <th>Correo electrónico</th>
          <td>{dentistState.dentist.email}</td>
        </tr>
        <tr>
          <th>Teléfono</th>
          <td>{dentistState.dentist.phone}</td>
        </tr>
        <tr>
          <th>Sitio web</th>
          <td>{dentistState.dentist.website}</td>
        </tr>
      </table>
    </>
  )
}

export default Detail