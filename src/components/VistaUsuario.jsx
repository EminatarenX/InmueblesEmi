import React, { useState } from "react";
import "../stylesheets/VistaUsuario.css";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { useRef } from "react";
import BotonScroll from "./BotonScroll";
import InmueblesUsuario from "./InmueblesUsuario";
import Login from "../pages/Login";

const VistaUsuario = ({
  usuarioActual,
  inmuebles,
  setInmuebles,
  inmueble,
  setInmueble,
  setEsUsuario,
  esUsuario,
  usuarios,
  setUsuarioActual,
  enLogin,
  setEnLogin,
}) => {
  const nosotrosRef = useRef(null);
  const inmueblesRef = useRef(null);
  const [logeado, setLogeado] = useState(false)

  const scrollToRef = () => {
    window.scrollTo({
      top: nosotrosRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setEnLogin(true);
  };

  const scrollToInmuebles = () => {
    window.scrollTo({
      top: inmueblesRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      {enLogin ? (
        <Login
          usuarios={usuarios}
          usuarioActual={usuarioActual}
          setUsuarioActual={setUsuarioActual}
          setEnLogin={setEnLogin}
        />
      ) : (
        <div className="vista-container">
          <nav className="nav-container">
            <a className="nav-links titulo">Inmuebles UP</a>
            <div style={{ display: "flex", gap: "100px", fontSize: "14px" }}>
              <a
                onClick={scrollToInmuebles}
                style={{ color: "white", cursor: "pointer" }}
              >
                Inmuebles
              </a>
              <a
                onClick={scrollToRef}
                style={{ color: "white", cursor: "pointer" }}
              >
                Nosotros
              </a>
            </div>
            <div className="nav-opciones">
              <Link to={"/crear"}>
                <a className="nav-links">
                  {usuarioActual === null ? "Crear Cuenta" : "Bienvenido"}
                </a>
              </Link>
              {/* <Link to={esUsuario ? "/inicio" : "/login"}> */}
                <a onClick={handleLogin} className="nav-links" style={{ cursor: "pointer" }}>
                  {usuarioActual === null ? "Iniciar sesion" : `${usuarioActual}`}
                </a>
              {/* </Link> */}
            </div>
          </nav>

          <div className="bienvenida-container">
            <m.div
              className="contenedor-titulo"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.7,
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <p style={{ color: "#6090B2" }}>Bienvenido</p>
              <h1
                style={{ color: "white", fontWeight: "869", fontSize: "58px" }}
              >
                UP
              </h1>
              <h1
                style={{ color: "white", fontWeight: "869", fontSize: "58px" }}
              >
                INVESTMENTS
              </h1>
            </m.div>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1,
                duration: 1,
              }}
            >
              {/* <img className="edificio-img4" src={edificioEsquina} alt="imagen2" />
          <img className="edificio-img3" src={edificioEsquina} alt="imagen2" />
          <img className="edificio-img2" src={edificioEsquina} alt="imagen2" />
          <img className="edificio-img" src={edificioEsquina} alt="imagen" /> */}
            </m.div>
          </div>

          <div className="nosotros-container" id="nosotrosS" ref={nosotrosRef}>
            <m.h2
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 1.5,
                duration: 1,
              }}
              className="nosotros-titulo"
            >
              Quienes somos
            </m.h2>
            <m.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 1.7,
                duration: 1,
              }}
              className="contenedor-section"
            >
              <div className="secciones">
                <h3 className="subtitulos">desarrollo comercial</h3>
                <p style={{ textTransform: "lowercase" }}>
                  NOS ENFOCAMOS EN TENER LA MEJOR PRESTACION, BUSCAMOS FACILITAR
                  CONTRATOS DE EDIFICIOS PISOS Y LOCALES COMERCIALES PARA
                  CUALQUIER TIPO DE USO PARTICULAR.
                </p>
              </div>
              <div className="secciones">
                <h3 className="subtitulos">Vendedores frecuentes</h3>
                <p>
                  Mejoramos la experiencia en cada usuario de nuestra
                  plataforrma. Nos preocupamos hacer un buen trabajo y cumplir
                  con cualquier tipo de espectativa.
                </p>
              </div>
            </m.div>
          </div>

          <div ref={inmueblesRef} className="lanzamientos-container">
            <h1
              style={{
                textAlign: "right",
                color: "white",
                fontWeight: "869",
                fontSize: "58px",
                marginRight: "70px",
              }}
            >
              ULTIMOS
            </h1>
            <h1
              style={{
                textAlign: "right",
                color: "white",
                fontWeight: "869",
                fontSize: "58px",
                marginRight: "70px",
              }}
            >
              LANZAMIENTOS
            </h1>
            <div className="ultimos-lanzamientos-container flex flex-wrap">
              {inmuebles.map((inmueble) => (
                <InmueblesUsuario 
                inmueble={inmueble} 
                usuarioActual={usuarioActual}
                />
              ))}
            </div>
          </div>
          <BotonScroll />
        </div>
      )}
    </>
  );
};

export default VistaUsuario;
