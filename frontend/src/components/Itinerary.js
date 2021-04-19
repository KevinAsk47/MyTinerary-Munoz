import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';

const Itinerary = ({ciudad}) => {

    useEffect(()=>{

    gsap.to("#ciudadIndividual", {
        duration: 1, 
        scaleX: 2
        
    });
    
    gsap.to("#pink", {
        duration: 1, 
        rotationY: 360,
        repeat: -1,  
    });

    },[])

    return(
        <div className="itinerary">
            <div className="banner" style={{backgroundImage: `url(${ciudad.imagen})`}}>
                <div>
                    <img id="pink" style={{width: '50px', paddingBottom: '1em'}} src={ciudad.bandera} alt=""/>
                </div>
                <div className="tituloBanner">
                    <h2 id="ciudadIndividual">{ciudad.titulo}</h2>
                    <h2>{ciudad.pais}</h2>
                    <p className="descripcion" style={{padding: '0 1em 0 1em'}}>{ciudad.descripcion}</p>
                </div>
            </div>
            <div className="initeraryMain">
                <img className="enConstrucion" src="/img/const.png" alt=""/>
            </div>
            <div className="itineraryButton">
                <NavLink to="/Cities"><button className="button">Go back to cities</button></NavLink><NavLink to="/"><button className="button">Home</button></NavLink>
            </div>
        </div>
    )
}

export default Itinerary