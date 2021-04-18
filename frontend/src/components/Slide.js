import React from 'react';

const Slide = ({arrayItem}) => {

    return( 

        <div className="contenedorDeFoto">
            {
                arrayItem.map((ciudad) => {

                    if (!ciudad.titulo) {
                        return null
                    }

                    return (
                    <div key={ciudad.id} className="contenedorDeFoto">
                        <div className="foto" style={{backgroundImage: `url(${ciudad.imagen})`}}>
                            <h4 className="titulo" >{ciudad.titulo}</h4>
                        </div>
                    </div>)
                })
            }
        </div>

    )
}

export default Slide