import React from "react"
import Crear from "../components/Crear"
import { CSSTransition } from "react-transition-group"

function CrearCuenta() {
  return(
    <CSSTransition  >
      <Crear/>
    </CSSTransition>
   
  )
}

export default CrearCuenta