import React from "react";
import Edificios from '../components/Edificios'

function Modificar({inmuebles, setInmuebles, inmueble,setInmueble}) {
  return(
    <Edificios
    inmuebles={inmuebles}
    setInmuebles={setInmuebles}
    inmueble={inmueble}
    setInmueble={setInmueble}
    />
  )
}

export default Modificar