import React from "react";
import '../stylesheets/Herramientas.css'
import edificios from '../img/edificios.png'
import pisos from '../img/pisos.png'
import locales from '../img/locales.png'
function Herramientas({ name }) {
  return (
    <div className="contenedor-herramienta">
      <img className="imagen" src={name == "edificios" ? edificios : name == "pisos" ? pisos :  locales}/>
    </div>
  )
}

export default Herramientas