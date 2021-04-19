import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Ciudad = ({ciudad}) =>{

    useEffect(() =>{
        gsap.to(".estrella", {
            duration: 2, 
            rotationY: 360,
            repeat: -1,
            
        });

    },[])

    return(
        <Link style={{textDecoration: "none"}} to={`/Itineraries/${ciudad._id}`}>
            <div className="card">

                <div className="cardImg" style={{backgroundImage: `url(${ciudad.imagen})`}}>
                        <img className="estrella" src="/img/estrella.svg" alt=""/>
                    <div>
                        <h4 className="title">{ciudad.titulo}</h4>
                    </div>
                </div>

            </div>
        </Link>
    )
}

export default Ciudad