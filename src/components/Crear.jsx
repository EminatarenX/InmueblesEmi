import React from "react";
import TextBox from "./TextBox";
import Boton from "./Boton";
import Img from "./imgInicio";
import BotonCon from "./BotonCon";
import "../stylesheets/CrearCuenta.css";
import { Link } from "react-router-dom";
import {motion as m } from 'framer-motion'

function Crear() {
  return (
    <m.div
      initial={{x:1000}}
      animate={{x:0}}
      transition={{
        duration: 1
      }}
    className="contenedor-CrearCuenta">
      <div className="img-css">
        <Img />
      </div>
      <div className="Title">
        <div className="title-title">Crea Tu Cuenta!</div>

        <p className="already">
          Ya tienes cuenta?{" "}
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <strong className="iniciar-btn">Inicia sesion</strong>
          </Link>
        </p>
        <form>
        <div className="login-textbox">
            <label className="login-label">Nombre</label>
            <input type='text'className="box-label" />
          </div>
          <div className="login-textbox">
            <label className="login-label">Apellidos</label>
            <input type='text'className="box-label" />
          </div>
          <div className="login-textbox">
            <label className="login-label">Correo Electronico</label>
            <input type='email'className="box-label" />
          </div>
          <div className="login-textbox">
            <label className="login-label">contrasena</label>
            <input type='password'className="box-label" />
          </div>
          <div className="login-textbox">
            <label className="login-label">confirmar contrasena</label>
            <input type='password'className="box-label" />
          </div>
        </form>

        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Boton inside="Registrar" />
        </Link>

        <div className="o-label">- O -</div>
        <BotonCon isGoogle={false} red="Facebook" />
        <BotonCon isGoogle={true} red="Google" />
      </div>
    </m.div>
  );
}

export default Crear;
