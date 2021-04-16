import React from 'react';
import { NavLink } from 'react-router-dom';

const Ciudad = ({ciudad}) =>{
    return(
        <NavLink to={`/Itinerarys/${ciudad._id}`}>
        <div className="card">

            <div className="cardImg" style={{backgroundImage: `url(${ciudad.imagen})`}}>
                <div>
                    <h4 className="title">{ciudad.titulo}</h4>
                </div>
            </div>

        </div>
        </NavLink>
    )
}

export default Ciudad