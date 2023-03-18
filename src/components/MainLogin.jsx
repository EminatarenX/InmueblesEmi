import React from "react"
import Img from './imgInicio'
import Log from "./Log"
import '../stylesheets/Main.css'
function MainLogin ({usuarios,usuarioActual, setUsuarioActual,setEnLogin}){
  return (
    <div className="Main">
    <Img />
    <Log 
      usuarios={usuarios}
      usuarioActual={usuarioActual}
      setUsuarioActual={setUsuarioActual}
      setEnLogin={setEnLogin}
    />
      
  </div>
  )
}

export default MainLogin