import React from 'react';
import '../App.css'
import Login from '../pages/Login'
import Inicio from '../pages/Inicio'
import CrearCuenta from '../pages/CrearCuenta'
import Restablecer from '../pages/Restablecer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Modificar from '../pages/Modificar';
import Configuracion from '../pages/Configuracion';
import { useState } from 'react';
  
function App() {

  const [showLogin, setLogin] = useState(true);
  const [showInicio,setInicio] = useState(false);
  const [showCrear, setCrear] = useState(false);
  const [showRestablecer, setRestablecer] = useState(false);
  const [showMofificar, setModificar] = useState(false);
  const [showConfiguracion, setConfiguracion] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/'  element={<Login/>}/>
          <Route path='/inicio' element={<Inicio/>}/>
          <Route path='/crear' element={<CrearCuenta/>}/>
          <Route path='/restablecer' element={<Restablecer/>}/>
          <Route path='/modificar' element={<Modificar/>}/>
          <Route path='/configuracion' element={<Configuracion/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App
