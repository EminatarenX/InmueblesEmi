import React from "react"
import '../stylesheets/BotonCon.css'
import imgGoogle from '../img/icon-google.png'
import imgFacebook from '../img/icon-facebook.png'
import { Link } from "react-router-dom"

function BotonCon({red,isGoogle}) {
  return(
    <div>
      <Link to={isGoogle? "https://myaccount.google.com/?utm_source=account-marketing-page&utm_medium=go-to-account-button&pli=1" : 'https://www.facebook.com'} style={{textDecoration: 'none'}}>
      <div className='contenedor-con'>
      
      <button className={isGoogle ? 'boton-con-google' : 'boton-con-facebook'}>
        <img className="img-con" src={isGoogle ? imgGoogle : imgFacebook} alt='img'/>
        Continua con {red}
      </button>
      
    </div>
    </Link>
    </div>
  );
}

export default BotonCon