import React, { useEffect } from 'react';
import '../App.css'
import Login from '../pages/Login'
import Inicio from '../pages/Inicio'
import CrearCuenta from '../pages/CrearCuenta'
import Restablecer from '../pages/Restablecer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Modificar from '../pages/Modificar';
import Configuracion from '../pages/Configuracion';
import { useState } from 'react';
import { UserMain } from '../pages/UserMain';
  
function App() {
  const [usuarios, setUsuarios] = useState([])
  const [users, setUsers] = useState({})
  const [usuarioActual, setUsuarioActual] = useState(null)
  const [inmuebles, setInmuebles] = useState([]);
  const [inmueble, setInmueble] = useState({});
  const [esUsuario, setEsUsuario] = useState(false)  
  const [enLogin,setEnLogin] = useState(false)

  useEffect(() => {
    const obtenerLS = () => {
      const inmueblesLS = JSON.parse(localStorage.getItem('inmuebles')) ?? [];
      setInmuebles(inmueblesLS)
 
    }
    const obtenerUsuariosLS = () => {
      const usuariosLS = JSON.parse(localStorage.getItem('usuarios')) ?? [];
      setUsuarios(usuariosLS)
    }
    const btenerUsuarioActualLS = () => {
      const usuarioActualLS = JSON.parse(localStorage.getItem('usuarioActual')) ?? [];
      setUsuarioActual(usuarioActualLS)
    }
    obtenerLS();
    obtenerUsuariosLS();
    obtenerUsuariosLS();
  },[]) 

 

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/login'  element={<Login 
          // users={users}
          // setUsers={setUsers}
          // usuarios={usuarios}
          // setUsuarios={setUsuarios}
          // usuarioActual={usuarioActual}
          // setUsuarioActual={setUsuarioActual}
          usuarios={usuarios}
      usuarioActual={usuarioActual}
      setUsuarioActual={setUsuarioActual}
      setEnLogin={setEnLogin}
          />}/>
          <Route path='/inicio' element={<Inicio/>}/>
          <Route path='/crear' element={<CrearCuenta
          users={users}
          setUsers={setUsers}
          usuarios={usuarios}
          setUsuarios={setUsuarios}
          setEnLogin={setEnLogin}
          setUsuarioActual={setUsuarioActual}
          />}
          
          />
          <Route path='/restablecer' element={<Restablecer/>}/>
          <Route path='/modificar' element={<Modificar
          inmuebles={inmuebles}
          setInmuebles={setInmuebles}
          inmueble={inmueble}
          setInmueble={setInmueble}
          />}/>
          <Route path='/configuracion' element={<Configuracion/>}/>
          <Route path='/' element={<UserMain
            usuarioActual={usuarioActual}
            inmuebles={inmuebles}
            setInmuebles={setInmuebles}
            inmueble={inmueble}
            setInmueble={setInmueble}
            setEsUsuario={setEsUsuario}

            usuarios={usuarios}
            setUsuarioActual={setUsuarioActual}
            enLogin={enLogin}
            setEnLogin={setEnLogin}
          />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App
