import React from 'react'
import '../stylesheets/Boton.css'

function Boton ({inside}) {
  return(
    <div className='contenedor-botones'>
      <button className='boton'>
        {inside}
      </button>
    </div>
    
  );
}

export default Boton