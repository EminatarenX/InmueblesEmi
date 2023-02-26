import React from "react"
import TextBox from "./TextBox"
import Boton from "./Boton"
import '../stylesheets/Restablecer.css'
import VectorBack from "../img/VectorBack.svg"
import { Link } from "react-router-dom"

function Restablecer() {
  return(
  <div className="contenedor-rest">
    <div className="contenedor-1">
      <img src={VectorBack} alt="vector" />
    </div>
    <div className="contenedor-2">
    <div className="title-rest">
      Restablecer contraseña
    </div>
    <TextBox
    label="Contraseña nueva"/>
    <TextBox
    label='Conformar contraseña'/>
    <Link to={"/"} style={{textDecoration: 'none'}}>
      <Boton
      inside ='Restablecer'/>
    </Link>
    
    </div>
    
  </div>
  )
  };

export default Restablecer