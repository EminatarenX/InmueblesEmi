import React from "react";
import NavBar from "./NavBar";
import Herramientas from "./Herramientas";
import '../stylesheets/Administrador.css'
import { Link } from "react-router-dom";

function Administrador() {
  return(
    <div className="contendor-inicio">
      <NavBar/>
      <h1 className="inicio-titulo">Herramientas de Administrador</h1>
      <div >
        <Link to={"/modificar"} className="contenedor-herramientas">
          <Herramientas name ="edificios"/>
          <Herramientas name='pisos'/>
          <Herramientas name='locales'/>
        </Link>
      </div>
      
    </div>
    
  )
}

export default Administrador