import React from 'react';

const Slide = ({arrayItem}) => {

    return( 

    <div className="contenedorDeFoto">
        {
            arrayItem.map((ciudad) => {
                return (
                <div className="contenedorDeFoto">

                    <div className="foto" style={{backgroundImage: `url(${ciudad.imagen})`}}></div>

                </div>)
            })
        }
    </div>



    )
}

export default Slide