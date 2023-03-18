import React, { useEffect } from "react"
import '../stylesheets/Login.css'
import BotonCon from './BotonCon'
import { Link } from "react-router-dom"
import { useState } from "react"
import Swal from "sweetalert2"
import {motion as m} from 'framer-motion'

function Log({usuarios,usuarioActual, setUsuarioActual,setEnLogin}){
const admin = 'emi@admin.com'
const passAdmin = 'admin1234'
const [esAdmin,setEsAdmin] = useState(false);
const [correo, setCorreo] = useState('')
const [password, setPassword] = useState('')

const handleSubmit = (e) => {
  e.preventDefault()  
  if(correo == admin && password == passAdmin){
    setEsAdmin(true)
    window.location.href = '/inicio';
    return
  }

  const usuarioEncontrado = usuarios.find((usuario) => {
    return usuario.email === correo && usuario.contra === password
  })
//vamos a modificar solo esta funcion para ver si puedo

//o veremos
const usuarioFind = usuarios.find(usuario => usuario.email === correo && usuario.contra === password);


  
  console.log(usuarioFind.user)
  setUsuarioActual(usuarioFind.user)
  if(usuarioEncontrado) {
    Swal.fire({
      title: `Bienvenido ${usuarioFind.user}`,
      icon: 'success'
    })
    setTimeout(() => {
      console.log(usuarioFind.user)
      setEnLogin(false)
      // window.location.href = '/'
    },1500)
    
    
  }else{
    Swal. fire({
      icon: 'error',
      title: 'Usuario o password incorrecto',
    })
  }

  
  
};

const alertaError = (mensaje) => {
  Swal.fire({
    icon: 'error',
    title: 'Vaya...',
    text: mensaje,
    footer: '<a href="">Intentalo de nuevo!!!</a>'
  })
}

  useEffect(()=> {
    localStorage.setItem('usuarioActual' , JSON.stringify(usuarioActual))
  },[usuarioActual])

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
        <p className="login-registrar">No tienes cuenta? <Link
         to={"/crear"} 
         style={{textDecoration: 'none'}} 
         ><strong className="registrar-alterno">Registrate</strong></Link></p>
      </m.div>
      <form >
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
          <Link to={esAdmin ? '/inicio' : '/login'} style={{textDecoration: 'none'}}>
        <m.input
        initial={{ x:1000}}
        animate={{ x:0}}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        type="submit" value={'Iniciar Sesion'} className="sesion-btn" onClick={handleSubmit}/>
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