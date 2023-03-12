import React from "react";
import NavBar from "./NavBar";
import Herramientas from "./Herramientas";
import '../stylesheets/Administrador.css'
import { Link } from "react-router-dom";
import HomeBtn from "./HomeBtn";
import {motion as m} from 'framer-motion'

function Administrador() {
  return(
    <m.div
    initial={{x:-2000}}
    animate={{x:0}}
    transition={{
      default: {
        duration: 1,
      }
    }}
    className="contendor-inicio">
      <NavBar/>
      <div className="bg-img">
      <m.h1
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 1.2,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className="inicio-titulo">Administrador</m.h1>
      <m.h2
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 1.6,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className="inicio-titulo-sec">Haz click aqui para acceder  al</m.h2>
      <m.h2
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 1.6,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className="inicio-titulo-sec">Gestor de Inmuebles</m.h2>
      <m.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        delay: 2,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
        <Link to={"/modificar"} className="contenedor-herramientas">
          <HomeBtn />
        </Link>

      </m.div>
      </div>
    </m.div>
    
  )
}

export default Administrador