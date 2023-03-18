import React, {useRef} from "react";
import NavBar from "./NavBar";
import "../stylesheets/Edificio.css";
import Swal from "sweetalert2";
import Inmueble from "./Inmueble";
import { useState,useEffect,createContext } from "react";
import administraPic from '../img/Administra.png'
import ModificaPic from '../img/Modifica.png'
import {motion as m} from 'framer-motion'
import ModificarAlert from "./ModificarAlert";


export const DataContext = createContext(null)

function Edificio({inmuebles, setInmuebles, inmueble,setInmueble}) {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [error, setError] = useState(false);
  const [modificar, setModificar] = useState(false)
  const [alertaModify, setAlertaModify] = useState(false)


  const eliminarInmueble = id => {
    const inmueblesActualidados = inmuebles.filter(inmueble => inmueble.id !== id)
    setInmuebles(inmueblesActualidados)
  }

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString();

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, descripcion, categoria].includes("")) {
      setError(true);
      alertaError();
      return;
    }

    setError(false);
    const objetoInmueble = {
      nombre,
      propietario,
      descripcion,
      categoria,
    };

    if (inmueble.id) {
      objetoInmueble.id = inmueble.id;
      const inmueblesActualizados = inmuebles.map((edificioState) =>
        edificioState.id === inmueble.id ? objetoInmueble : edificioState
      );

      setInmuebles(inmueblesActualizados);
      setInmueble({});
    } else {
      objetoInmueble.id = generarId();
      setInmuebles([...inmuebles, objetoInmueble]);
    }
    setNombre('');
    setPropietario('');
    setDescripcion('');
    setCategoria('');
    if(!modificar){
      alerta();
    }else{
      alertaModificar()
      
    }
    setModificar(false)
    
  };
  useEffect(() => {
    if(modificar){
      setAlertaModify(true)
      setTimeout(() => {
        setAlertaModify(false)
      },1500)
    } 
  },[modificar])

  const scroll = useRef(null)


  useEffect(()=>{
    if(Object.keys(inmueble).length > 0){
      setNombre(inmueble.nombre)
      setPropietario(inmueble.propietario)
      setDescripcion(inmueble.descripcion)
      setCategoria(inmueble.categoria)
      const timer = setTimeout(() => {
        scroll.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(timer);
    }
  },[inmueble])

  const alerta = () => {
    Swal.fire({
      title: "Se agregó correctamente!",
      icon: "success",
    });
  };

  const alertaModificar = () => {
    Swal.fire({
      title: "Datos Actualizados!",
      icon: "success",
    });
  };

  const alertaError = () => {
    Swal.fire({
      title: "Faltan campos por llenar!",
      icon: "error",
    });
  };

  useEffect(() => {
    const obtenerLS = () => {
      const inmueblesLS = JSON.parse(localStorage.getItem('inmuebles')) ?? [];
      setInmuebles(inmueblesLS)
    }
    obtenerLS();
  },[]) 
  
  useEffect(() => {
    localStorage.setItem('inmuebles', JSON.stringify( inmuebles ));
  },[inmuebles])

  return (
    <>
    {alertaModify && (<ModificarAlert/>)}
    <div className="contenedor-edificio" ref={scroll}>
      
      <NavBar />
      
      <div className="contenedor-main" >
        <div className="contenedor-text">
          <m.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.8,
              default: {
                duration: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
                
              },
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
          className="picChange" src={!modificar ? administraPic : ModificaPic}/>
          <m.form
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          onSubmit={handleSubmit}>
            <div className="login-textbox">
              <label className="login-label">Nombre del Inmueble</label>
              <input
                className="input-nuevo"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className="login-textbox">
              <label className="login-label">Propietario</label>
              <input
                className="input-nuevo"
                type="text"
                value={propietario}
                onChange={(e) => setPropietario(e.target.value)}
              />
            </div>

            <div className="login-textbox">
              <label className="login-label">Ubicacion</label>
              <input
                className="input-nuevo"
                type="text"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>
            <div className="categoria-sec">
            <label className="categoria">Categoria:</label>
            <br />
            <select
              name="tipo"
              id="inmueble-select"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="">--Seleccione una Categoria--</option>
              <option value="edificio">Edificio</option>
              <option value="piso">Piso</option>
              <option value="local">Local</option>
            </select>
            <br />
            </div>
            <input
              value={!modificar ? "Agregar Inmueble" : "Modificar"}
              type="submit"
              className="agregar-btn"
            />
          </m.form>
        </div>
        
      </div>
      <div className="contenedor-lista " >
        {inmuebles.map(inmueble => (
          <Inmueble 
          inmueble={inmueble} 
          setInmueble={setInmueble} 
          eliminarInmueble={eliminarInmueble}
          setModificar={setModificar}
          />
        ))}
      </div>

    </div>
    </>
  );
}

export default Edificio;
