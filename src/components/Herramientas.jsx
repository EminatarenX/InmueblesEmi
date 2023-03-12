import React from "react";
import '../stylesheets/Herramientas.css'


function Herramientas({ name }) {
  return (
    <div className="contenedor-herramienta">
      <img className="imagen" src={name == "edificios" ? edificios : name == "pisos" ? pisos :  locales}/>
    </div>
  )
}

export default Herramientas