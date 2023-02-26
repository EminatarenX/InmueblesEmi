import React from "react";
import '../stylesheets/NavBar.css'
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navBar">
        <div className="nav-main">
          <Link to={"/inicio"} style={{textDecoration: 'none'}}> 
            <a className="inmuebles-btn">Inmuebles up</a>
          </Link>
        </div>
        <div className="nav-botones">
          <Link to ={"/configuracion"} style={{textDecoration : 'none'}}> <button className="admin-btn">Administrador</button> </Link>
          <Link to={"/"}>
            <button className="cerrar-btn">Cerrar Sesion</button>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default NavBar