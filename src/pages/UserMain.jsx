import React from 'react'
import VistaUsuario from '../components/VistaUsuario'
export const UserMain = ({usuarioActual,inmuebles,setInmuebles,inmueble, setInmueble, setEsUsuario, usuarios, setUsuarioActual,enLogin, setEnLogin}) => {
  return (
    <VistaUsuario
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
    />
  )
}
