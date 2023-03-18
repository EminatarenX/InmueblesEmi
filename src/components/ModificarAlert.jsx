import '../stylesheets/ModificarAlert.css'
import { CiCircleAlert } from 'react-icons/ci'
import {motion as m } from 'framer-motion'

const ModificarAlert = () => {
  return (
    <div className='background'>
    <m.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
     class='contenedor-alert '>
      < CiCircleAlert className='warning-icon'/>
      <h1 className='mensaje'>Modifique los datos del inmueble</h1>
    </m.div>
    </div>
  )
}

export default ModificarAlert