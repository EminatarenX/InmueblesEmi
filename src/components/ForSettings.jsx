import React from "react";
import NavBar from "./NavBar";
import user from '../img/user.png'
import TextBox from "./TextBox";
import '../stylesheets/ForSettings.css'
import Swal from "sweetalert2";

function ForSettings() {


  const alerta=() =>{
    Swal.fire({
      title: 'Listo!',
      html: 'La informnacion a sido actualizada',
      icon: 'success'
  })
  }
  return(
    <>
    <NavBar/>
    <div className="contenedor-settings">
      <img src={user} className='img'/>
      <TextBox label='Nombre de Usuario' tipo='text'/>
      <TextBox label='Contraseña'/>
      <TextBox label='Confirmar Contraseña'/>
      <button className="agregar-btn" onClick={alerta}>
            Actualizar Informacion
          </button>
    </div>
    
    </>
  )
}

export default ForSettings