import { Route, Routes } from 'react-router-dom'
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import Home from "./Routes/Home"
import { useDentistStates } from './Components/utils/global.context'


function App() {
  const {dentistState} = useDentistStates()
  const changeTheme = dentistState.theme
  
  return (
    /* Profe, sé que esta forma es un poco burda pero no se me ocurrió otraaa, perdón :( */
    <>
    { changeTheme ? (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/dentist/:id' element={<Detail/>}/>
            <Route path='/favs' element={<Favs/>}/>
          </Routes>
          <Footer/>
      </div> ) :
    <div className="App dark">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/dentist/:id' element={<Detail/>}/>
            <Route path='/favs' element={<Favs/>}/>
          </Routes>
          <Footer/>
      </div>}
      </>
  );
}

export default App;
