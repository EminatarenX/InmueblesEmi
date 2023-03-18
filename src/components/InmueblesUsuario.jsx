import React from 'react'
import Swal from 'sweetalert2';
import '../stylesheets/InmueblesUsuario.css'

const InmueblesUsuario = ({inmueble, usuarioActual}) => {

  const { nombre, propietario, descripcion, categoria, id} = inmueble;
  const handleAlerta = () => {
    if(usuarioActual === ''){
      Swal.fire( {
        icon: 'error',
        title: 'Inicia sesion para rentar un Inmueble'
      })
      return
    }
    Swal.fire({
      title:'Solicitud de renta enviada',
      text: 'El administrador te contactara por un correo',
      icon:'success',
    })
  }

  return (
    <div className={`contenedor-inmueble 
    flex sm:flex-row justify-around w-full h-80
    ${categoria === 'local' ?
     'local' : categoria === 'piso' ? 'piso' : 'edificio'} bg-cover
      bg-opacity-25`}>
      <div className='datos'>
      <h1 className='nombre-inmueble '>{nombre}</h1>
      <p>{propietario}</p>
      <p>{descripcion}</p>
      </div>
      <h1 
      className=' w-44 h-16 bg-gray-800 rounded-md flex justify-center uppercase cursor-pointer items-center'
      onClick={handleAlerta}>rentar</h1>
    </div>
  )
}

export default InmueblesUsuario