import React from "react";
import NavBar from "./NavBar";
import Herramientas from "./Herramientas";
import TextBox from "./TextBox"
import '../stylesheets/Edificio.css'
import Swal from "sweetalert2";

function Edificio() {

  const alerta=() =>{
    Swal.fire({
      title: 'Listo!',
      html: 'El inmueble a sido agregado<br>correctamente',
      icon: 'success'
  })
  }
  return(
    <div className="contenedor-edificio">
      <NavBar/>
      <div className="contenedor-main">
        <div className="contenedor-text">
          <TextBox
          label="Nombre de la Propiedad"
          tipo="text"/>
          <TextBox
          label="Propietario"
          tipo="text"/>
          <TextBox
          label="Descripcion"
          tipo="text"/>
          <label className="categoria">Categoria:</label><br/>
          <select name="tipo" id="inmueble-select">
            <option value="">--Seleccione una Categoria--</option>
            <option value="edificio">Edificio</option>
            <option value="piso">Piso</option>
            <option value="local">Local</option>
          </select>
        <br/>
          <button className="agregar-btn" onClick={alerta}>
            Agregar Inmueble
          </button>
        </div>
        <Herramientas
        name='edificios'/>
      </div>
      <div className="contenedor-lista">
      <Herramientas
        name='edificios'/>
        <Herramientas
        name='edificios'/>
        <Herramientas
        name='edificios'/>
        <Herramientas
        name='edificios'/>
        <Herramientas
        name='edificios'/>
        <Herramientas
        name='edificios'/>
        <Herramientas
        name='edificios'/>
        <Herramientas
        name='edificios'/>
        
      </div>

    </div>
  );
}

export default Edificio 