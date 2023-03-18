import React from "react"
import Crear from "../components/Crear"

function CrearCuenta({users,setUsers,usuarios,setUsuarios, setEnLogin, setUsuarioActual}) {
  return(

      <Crear
      users={users}
          setUsers={setUsers}
          usuarios={usuarios}
          setUsuarios={setUsuarios}
          setEnLogin={setEnLogin}
          setUsuarioActual={setUsuarioActual}
      />

  )
}

export default CrearCuenta