import React from 'react';

const Slide = ({arrayCiudad}) => {

    console.log(arrayCiudad)

    return( 
<div>
        {
            arrayCiudad.map((ciudad) => {
                return (<div className="contenedorDeFoto">

                <div className="foto" style={{backgroundImage: `url(${ciudad.imagen})`}}></div>
    
                </div>)
            })
        }
     </div>



    )
}

export default Slide