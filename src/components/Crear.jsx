
import Boton from "./Boton";
import Img from "./imgInicio";
import BotonCon from "./BotonCon";
import "../stylesheets/CrearCuenta.css";
import { Link } from "react-router-dom";
import {motion as m } from 'framer-motion'
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function Crear({users,setUsers,usuarios,setUsuarios, setEnLogin, setUsuarioActual}) {
  //componentes del objeto
  const [nombreCompleto, setNombreCompleto] = useState('')
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [contra, setContra] = useState('')
  const [confirmarContra, setConfirmarContra] = useState('')
 
  const setters = () => {
    setEnLogin(false)
    setUsuarioActual('')
  }

  const handleCrear = (e) => {
    e.preventDefault()
    
    if([nombreCompleto, user, email, contra, confirmarContra].includes('')){
      Swal.fire({
        icon:'error',
        title: 'Hay campos vacios'
        
      })
      return
    }

    if(contra !== confirmarContra){
      Swal.fire({
        title:'Verifique que las contrasenas sean iguales'
        ,icon:'error'
      })
      return
    } 

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  if (!emailRegex.test(email)) {
    Swal.fire({
      title: 'Verifique la dirección de correo electrónico',
      icon: 'error'
    })
    return
  }

  

    const ObjetoUsers = {
      nombreCompleto,
      user,
      email,
      contra,
      confirmarContra
    }
    

    //prueba dos
    const existingUser = usuarios.find((usuario) => {
      return usuario.user === ObjetoUsers.user;
    });
    
    const existingEmail = usuarios.find((usuario) => {
      return usuario.email === ObjetoUsers.email;
    });

    
    if (existingUser) {
      // El usuario ya existe
      Swal.fire({
        title: `El usuario ${ObjetoUsers.user} ya esta registrado`,
        icon: 'error'
      })
      return
    }
    if(existingEmail){
      Swal.fire({
        title: 'El correo ya esta en uso',
        icon: 'error'
      })
      return
    }
    if(!existingUser) {
      Swal.fire({
        icon: 'success',
        title : 'Usuario creado'
      })
      // El usuario no existe
      // Agregar el usuario al estado de usuarios
      setUsuarios([...usuarios, ObjetoUsers])
    }

  }

  useEffect(()=>{
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
  },[usuarios])
    

  return (
    <m.div
      initial={{x:1000}}
      animate={{x:0}}
      transition={{
        duration: 1
      }}
    className="contenedor-CrearCuenta">
      <div className="img-css">
        <Img />
      </div>
      <div className="Title">
        <div className="title-title">Crea Tu Cuenta!</div>

        <p className="already">
          Ya tienes cuenta?{" "}
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <strong onClick={setters} className="iniciar-btn">Inicia sesion</strong>
          </Link>
        </p>
        <form onSubmit={handleCrear}>
        <div className="login-textbox">
            <label className="login-label">Nombre Completo</label>
            <input type='text'className="box-label" 
            value={nombreCompleto}
            onChange={(e) => setNombreCompleto(e.target.value)}
            />
          </div>
          <div className="login-textbox">
            <label className="login-label">Usuario</label>
            <input type='text'className="box-label" 
            value={user}
            onChange={e => setUser(e.target.value)}
            />
          </div>
          <div className="login-textbox">
            <label className="login-label">Correo Electronico</label>
            <input type='email'className="box-label" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login-textbox">
            <label className="login-label">contrasena</label>
            <input type='password'className="box-label" 
            value={contra}
            onChange={(e) => setContra(e.target.value)}
            />
          </div>
          <div className="login-textbox">
            <label className="login-label">confirmar contrasena</label>
            <input type='password'className="box-label"
            value={confirmarContra} 
            onChange={(e) => setConfirmarContra(e.target.value)}
            />
          </div>
            <input type="submit" value={'Crear Cuenta'}
            className='boton'
            />
        </form>

        

        <div className="o-label">- O -</div>
        <BotonCon isGoogle={false} red="Facebook" />
        <BotonCon isGoogle={true} red="Google" />
      </div>
    </m.div>
  );
}

export default Crear;
