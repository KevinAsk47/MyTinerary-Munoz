import React from 'react';

const Slide = ({ciudad:{imagen}}) => {

    return(
        
        <div className="foto" style={{backgroundImage: `url(${imagen})`}}></div>
    )
}

export default Slide