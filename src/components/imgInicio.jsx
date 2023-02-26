import React from "react"
import '../stylesheets/ImgLogin.css'
import img from '../img/Vector.svg'

function Img(){
    return(
        <div>
            <img className="login-img" src={img} alt='logo'/>
        </div>
    );
}

export default Img