import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

const DentistStates = createContext();

const initialDentistState = {
  theme: true, 
  data: [],
  dentist: {},
  favs: JSON.parse(localStorage.getItem('favs')) || []
}

const dentistReducer = (state, action) => {
  switch(action.type){
    case 'CHANGE_THEME':
      return{...state, theme: action.payload}
    case 'GET_DATA':
      return{...state, data: action.payload}
    case 'GET_DENTIST':
      return{...state, dentist: action.payload}
    case 'ADD_FAV':
      return{...state, favs: [...state.favs, action.payload]}
    case 'DELETE_FAV':
      return{...state, favs: action.payload}
    default:
        throw new Error()
  }
}

const ContextProvider = ({ children }) => {
  const [dentistState, dentistDispatch] = useReducer(dentistReducer, initialDentistState)

  const urlData = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(urlData)
    .then(res => dentistDispatch({type: 'GET_DATA', payload: res.data}))
  }, [urlData])

  useEffect(() =>{
    localStorage.setItem('favs', JSON.stringify(dentistState.favs))
  }, [dentistState.favs])


  return (
    <DentistStates.Provider value={{
      dentistState, dentistDispatch
    }}>
      {children}
    </DentistStates.Provider>
  );
};

export default ContextProvider

export const useDentistStates = () => useContext(DentistStates)