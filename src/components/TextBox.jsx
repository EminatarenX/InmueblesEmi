import React from "react"
import '../stylesheets/TextBox.css'

function TextBox( {label, tipo} ){
  return(
    <div className="login-textbox">
      <label className="login-label">{label}</label>
      <input type={tipo ? "text" : "password"} className="box-label" />
    </div>
  );
}

export default TextBox