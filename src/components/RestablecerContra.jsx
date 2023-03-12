import React from "react"
import TextBox from "./TextBox"
import Boton from "./Boton"
import '../stylesheets/Restablecer.css'
import VectorBack from "../img/VectorBack.svg"
import { Link } from "react-router-dom"
import {motion as m } from 'framer-motion'
function Restablecer() {
  return(
  <m.div 
  initial={{ y:1000}}
          animate={{ y:0}}
          transition={{
            duration: 0.1,
          }}
  className="contenedor-rest">
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
    label='Confirmar contraseña'/>
    <Link to={"/"} style={{textDecoration: 'none'}}>
      <Boton
      inside ='Restablecer'/>
    </Link>
    
    </div>
    
  </m.div>
  )
  };

export default Restablecer