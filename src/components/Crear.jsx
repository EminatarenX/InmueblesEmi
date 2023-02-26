import React from "react"
import TextBox from "./TextBox"
import Boton from "./Boton"
import Img from "./imgInicio"
import BotonCon from "./BotonCon"
import '../stylesheets/CrearCuenta.css'
import { Link } from "react-router-dom"


function Crear() {
    return (
        <div className="contenedor-CrearCuenta">
            <div className="img-css">
                <Img />
            </div>
            <div className="Title">
                <div className="title-title">
                    Crea Tu Cuenta!
                </div>

                <p className="already">Ya tienes cuenta? <Link to={"/"} style={{textDecoration: 'none'}}><strong className="iniciar-btn">Inicia sesion</strong></Link></p>
                <TextBox label='Nombre'
                    tipo={true} />
                <TextBox label='Apellido'
                    tipo={true} />
                <TextBox label='Correo electronico'
                    tipo={true} />
                <TextBox label='contraseña' />
                <TextBox label='confirmar contraseña' />
                <Link to={"/"} style={{textDecoration: 'none'}}>
                    <Boton inside='Registrar' />
                </Link>
                
                <div className="o-label">
                    - O -
                </div>
                <BotonCon
                    isGoogle={false}
                    red='Facebook' />
                <BotonCon
                    isGoogle={true}
                    red='Google' />
            </div>


        </div>
    )

}

export default Crear