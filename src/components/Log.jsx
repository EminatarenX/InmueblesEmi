import React from "react"
import '../stylesheets/Login.css'
import TextBox from "./TextBox"
import Boton from './Boton'
import BotonCon from './BotonCon'
import { Link } from "react-router-dom"
import { useState } from "react"

function Log(){

const [showInicio, setInicio] = useState(true)
const [showMensaje, setMensaje] = useState(false)

  return(
    
    <div className="contenedor-login">
      <div className="login-titulo">
        <p className="iniciar-sesion">Iniciar sesion</p>
        <p className="login-registrar">No tienes cuenta? <Link to={"/crear"} style={{textDecoration: 'none'}}><strong className="registrar-alterno">Registrate</strong></Link></p>
      </div>
      <TextBox
      label='correo electronico'
      tipo={true}/>
      <TextBox 
      label='Constraseña'/>
      <Link to={"/inicio"} style={{textDecoration: 'none'}}>
        <Boton 
        inside='Iniciar Sesion'/>
      </Link>
      <Link to={"/restablecer"} style={{textDecoration: 'none'}}>
        <p className="forgot">Olvide mi contraseña</p>
      </Link>
      
      <BotonCon
        red='Facebook'
        isGoogle={false}/>
      <BotonCon
        red='Google'
        isGoogle={true}/>
    </div>
  );
}

export default Log