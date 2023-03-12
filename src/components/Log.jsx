import React from "react"
import '../stylesheets/Login.css'
import BotonCon from './BotonCon'
import { Link } from "react-router-dom"
import { useState } from "react"
import Swal from "sweetalert2"
import {motion as m} from 'framer-motion'

function Log(){
const admin = 'emi@admin.com'
const passAdmin = 'admin1234'
const [esAdmin,setEsAdmin] = useState(false);
const [correo, setCorreo] = useState('')
const [password, setPassword] = useState('')


const handleSubmit = (e) => {
  e.preventDefault();
 
  

};

const alertaError = (mensaje) => {
  Swal.fire({
    icon: 'error',
    title: 'Vaya...',
    text: mensaje,
    footer: '<a href="">Intentalo de nuevo!!!</a>'
  })
}

  return(
    
    <div className="contenedor-login">
      
      <m.div 
      initial={{ x:1000}}
      animate={{ x:0}}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className="login-titulo">
        <p className="iniciar-sesion">Iniciar sesion</p>
        <p className="login-registrar">No tienes cuenta? <Link to={"/crear"} style={{textDecoration: 'none'}}><strong className="registrar-alterno">Registrate</strong></Link></p>
      </m.div>
      <form onSubmit={handleSubmit}>
      <m.div
      initial={{ x:1000}}
      animate={{ x:0}}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className="login-textbox">
            <label className="login-label">Correo electronico</label>
            <input type='email'className="box-label" value={correo}
            onChange={(e) => setCorreo(e.target.value)}/>
          </m.div>
          <m.div
          initial={{ x:1000}}
          animate={{ x:0}}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          className="login-textbox">
            <label className="login-label">Contrasena</label>
            <input type='password'className="box-label" value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          </m.div>
          <Link to={'/inicio'} style={{textDecoration: 'none'}}>
        <m.input
        initial={{ x:1000}}
        animate={{ x:0}}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        type="submit" value={'Iniciar Sesion'} className="sesion-btn"/>
      </Link>
      </form>
      
      <Link to={"/restablecer"} style={{textDecoration: 'none'}}>
        <m.p 
        
        initial={{ x:1000}}
      animate={{ x:0}}
      transition={{
        duration: 0.8,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01]
      }}className="forgot">Olvide mi contraseña</m.p>
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