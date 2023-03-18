import React from "react"
import MainLogin from '../components/MainLogin'
import '../stylesheets/Transiciones.css'

function Login({usuarios,usuarioActual, setUsuarioActual,setEnLogin}) {
  return(
    <MainLogin
      usuarios={usuarios}
      usuarioActual={usuarioActual}
      setUsuarioActual={setUsuarioActual}
      setEnLogin={setEnLogin}
    />
  )
}

export default Login 