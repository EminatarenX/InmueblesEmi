import React, { useState } from "react";
import "../stylesheets/Inmueble.css";
import Swal from "sweetalert2";
import edificioPic from "../img/buildIcon.png";
import localPic from "../img/localIcon.png";
import pisoPic from "../img/NuevoPiso.png";
import { motion as m } from "framer-motion";

const Inmueble = ({
  inmueble,
  setInmueble,
  eliminarInmueble,
  setModificar,
}) => {
  const { nombre, propietario, descripcion, categoria, id } = inmueble;

  // const alertModificar = () => {
  //   // Swal.fire({
  //   //   position: "top-end",
  //   //   icon: "warning",
  //   //   title: "Modifique los datos del inmueble",
  //   //   showConfirmButton: false,
  //   //   timer: 1500,
  //   // });
  // };

  const handleEliminar = () => {
    Swal.fire({
      title: "Estas seguro de borrar el Inmueble?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Borrar Inmueble",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Eliminado",
        });
        eliminarInmueble(id);
      }
    });
  };

  return (
    <m.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="cont-inmueble"
      id="encabezado"
    >
      <div className="contenedor-todo">
        <img
          className="imagen-inmueble"
          src={
            categoria === "edificio"
              ? edificioPic
              : categoria === "local"
              ? localPic
              : pisoPic
          }
        />
        <div class="contenedor-inmueble">
          <h1 className="nombre-inmueble">{nombre}</h1>
          <p className="caracteristicas">Propietario: {propietario}</p>
          <p className="caracteristicas">Ubicacion: {descripcion}</p>
          <p className="caracteristicas">Categoria: {categoria}</p>
        </div>
      </div>
      <div className="cont-botones">
        <button
          className="editar-btn"
          onClick={() => {
            setModificar(true);
            // alertModificar();
            setInmueble(inmueble);
          }}
        >
          Editar
        </button>
        <button className="eliminar-btn" onClick={handleEliminar}>
          Eliminar
        </button>
      </div>
    </m.div>
  );
};

export default Inmueble;
