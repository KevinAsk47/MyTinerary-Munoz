import React from 'react'

const Invitados = ({invitado: {nombre,apellido,edad,img}}) => {

    console.log(img)
    return (
        <div className="container">
            <div className="img" style = {{backgroundImage: `url(${img})`}}></div>
            <h1>{nombre}</h1>
            <h2>{apellido}</h2>
            <h3>{edad}</h3>
        </div>
    )
}

export default Invitados