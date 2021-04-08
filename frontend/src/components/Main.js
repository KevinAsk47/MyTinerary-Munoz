import React, { useState } from 'react'

const Invitados = ({invitado: {nombre,apellido,edad,img}}) => {

    const [info,setVisible] = useState({
        visible : true,
    })

    const ocultar = () => {
        setVisible({
            visible : !info.visible 
        })
    }

    if (!info.visible) {
        return null
    }

    return (

        <div className="container">
            <div className="img" style = {{backgroundImage: `url(${img})`}}></div>
            <h1>{nombre}</h1>
            <h2>{apellido}</h2>
            <h3>{edad}</h3>
            <button onClick={ocultar} className="boton">X</button>
        </div>
    )
}

export default Invitados